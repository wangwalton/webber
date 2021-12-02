package html_parser

import (
	"fmt"
	"github.com/wangwalton/webber/go_backend/util"
	"golang.org/x/net/html"
	"golang.org/x/net/html/atom"
	"sort"
	"strconv"
)

type DiffElementType uint32

const (
	Text DiffElementType = iota
	Attr
	Html
)

type Tables struct {
	Tables []Table `json:"tables"`
}

type Table struct {
	Name    string `json:"name"`
	Data    []Row  `json:"data"`
	Path    string `json:"path"`
	Score   int    `json:"score"`
	RawHtml string `json:"raw_html""`

	Columns []*Column `json:"columns"`
}

type Row map[string]string

type Column struct {
	// TODO: Some of these fields can be aggregated into one
	Values  map[*html.Node]string `json:"-"` // map[localRoot]value
	Type    DiffElementType       `json:"-"`
	AttrKey string                `json:"-"`

	RelativePath string `json:"relative_path"`

	Name  string  `json:"name""`
	Score float64 `json:"score"`

	collectableDiffContext *CollectableDiffContext `json:"-"`
	lastNodeDiffContext    LastNodeDiffContext     `json:"-"`
}

func templatesToTables(filteredTemplates []Template, options *ExtractOptions) []Table {
	templateDiffs := make([]Table, 0)
	for i, template := range filteredTemplates {
		diffs := template.node.ExtractDiffs(options.includeHtml)
		table := diffsToTable(diffs, strconv.Itoa(i))

		table.Score = len(table.Data) * len(table.Columns)
		table.Path = template.path
		table.RawHtml = template.rawHtml

		templateDiffs = append(templateDiffs, *table)

		if i > options.maxNumTables {
			break
		}
	}
	return templateDiffs
}

type CollectableDiffContext struct {
	depth int32
	path  string

	inHeadingTag bool
	headingLevel int8
	inATag       bool
	inList       bool
}

type LastNodeDiffContext struct {
	inHref     bool
	isTextNode bool
}

func (t *TemplateNode) ExtractDiffs(includeHtml bool) []*Column {
	diffs := make([]*Column, 0)

	if includeHtml {
		html := &Column{
			Values: make(map[*html.Node]string),
			Type:   Html,
		}
		for localRoot, localRoot2 := range t.Nodes {
			if localRoot != localRoot2 {
				panic("shit")
			}
			html.Values[localRoot] = HtmlToString(localRoot)
		}
		diffs = append(diffs, html)
	}

	var f func(*TemplateNode, *CollectableDiffContext)
	f = func(template *TemplateNode, ctx *CollectableDiffContext) {
		if len(template.Nodes) < 2 {
			return
		}

		// Only compare text nodes that are different
		if template.Tag == 0 && template.dataIsDifferent() {
			diffs = append(diffs, &Column{
				Values:                 template.extractText(),
				Type:                   Text,
				RelativePath:           ctx.path,
				collectableDiffContext: ctx,
				lastNodeDiffContext:    LastNodeDiffContext{
					isTextNode: true,
				},
			})
		}
		diffs = append(diffs, template.extractAttributeDiffs(ctx)...)
	}

	PreOrderTemplateNodeTraversal(t, CollectableDiffContext{}, f)
	return diffs
}

func updateCollectableDiffContext(template *TemplateNode, ctx *CollectableDiffContext) {
	if template.Tag == atom.H1 {
		ctx.inHeadingTag = true
		ctx.headingLevel = 1

	} else if template.Tag == atom.H2 {
		ctx.inHeadingTag = true
		ctx.headingLevel = 2

	} else if template.Tag == atom.H3 {
		ctx.inHeadingTag = true
		ctx.headingLevel = 3

	} else if template.Tag == atom.H4 {
		ctx.inHeadingTag = true
		ctx.headingLevel = 4

	} else if template.Tag == atom.H5 {
		ctx.inHeadingTag = true
		ctx.headingLevel = 5
	}

	if template.Tag == atom.A {
		ctx.inATag = true
	}

	if template.Tag == atom.Ul || template.Tag == atom.Ol {
		ctx.inList = true
	}
}

func (t *TemplateNode) dataIsDifferent() bool {
	var textValue string
	isFirst := true
	for node, _ := range t.Nodes {
		if isFirst {
			textValue = node.Data
			isFirst = false
		}
		if node.Data != textValue {
			return true
		}
	}
	return false
}

func (t *TemplateNode) extractText() map[*html.Node]string {
	res := make(map[*html.Node]string)
	for node, localRoot := range t.Nodes {
		res[localRoot] = node.Data
	}
	return res
}

func diffsToTable(diffs []*Column, tableName string) *Table {
	tabularDiffs := Table{
		Name:    tableName,
		Data:    getRows(diffs),
		Columns: nil,
	}
	tabularDiffs.initSchema(diffs)

	return &tabularDiffs
}

func getRows(diffs []*Column) []Row {
	nodeDiffs := make(map[string]map[string]string)
	for _, diff := range diffs {
		columnName := getColumnName(diff)

		for node, value := range diff.Values {
			nodeStr := fmt.Sprintf("%p", node)
			if _, exists := nodeDiffs[nodeStr]; !exists {
				nodeDiffs[nodeStr] = make(map[string]string)
			}
			nodeDiffs[nodeStr][columnName] = value
		}
	}

	rows := make([]Row, 0, len(nodeDiffs))
	for _, row := range nodeDiffs {
		if row == nil {
			continue
		}
		rows = append(rows, row)
	}
	return rows
}

func (t *Table) initSchema(diffs []*Column) {
	numRows := len(t.Data)
	for _, diff := range diffs {
		diff.calculateScore(numRows)
		diff.Name = getColumnName(diff)
	}

	sort.Slice(diffs, func(i, j int) bool {
		return diffs[i].Score > diffs[j].Score
	})
	t.Columns = diffs
}

var uniquenessWeight float64 = 1.0
var stdWeight float64 = 1.0

//type LastNodeDiffContext struct {
//	inHref     bool
//	isTextNode bool
//}

func (c *Column) calculateScore(numRows int) {
	if c.Type == Html {
		c.Score = 0
		return
	}

	heuristicsScore := int32(0)

	ctx := c.collectableDiffContext
	heuristicsScore -= ctx.depth / 2
	if ctx.inHeadingTag {
		heuristicsScore = heuristicsScore + 7 - int32(ctx.headingLevel) // Invert i.e. H1 is worth 6 points
	}
	if ctx.inATag {
		heuristicsScore += 5
	}
	if ctx.inList {
		heuristicsScore += 3
	}

	lastCtx := c.lastNodeDiffContext
	if lastCtx.isTextNode {
		heuristicsScore += 10
	}
	if lastCtx.inHref {
		heuristicsScore += 1
	}


	uniqueness := c.calculateUniqueness(numRows)
	std := c.calculateNormalizedStandardDeviation()

	c.Score = float64(heuristicsScore) + uniquenessWeight*uniqueness + stdWeight*std
}

func (column *Column) calculateUniqueness(numRows int) float64 {
	valueSet := make(map[string]struct{})
	for _, valueStr := range column.Values {
		valueSet[valueStr] = struct{}{}
	}

	return float64(len(valueSet)) / float64(numRows)
}

func (column *Column) calculateNormalizedStandardDeviation() float64 {
	lengths := make([]int64, 0)
	for _, valueStr := range column.Values {
		lengths = append(lengths, int64(len(valueStr)))
	}

	return util.NormalizedStd(lengths)
}

func getColumnName(diff *Column) string {
	if diff.Type == Text {
		return fmt.Sprintf("%p", diff)
	} else if diff.Type == Html {
		return "nodeHtml"
	} else {
		return fmt.Sprintf("%s-%p", diff.AttrKey, diff)
	}
}

func (t *TemplateNode) extractAttributeDiffs(ctx *CollectableDiffContext) []*Column {
	attributes := make(map[string]map[string][]*html.Node) // map[attr.Key][attr.Val][]localRoot
	for node, localRoot := range t.Nodes {
		for _, attr := range node.Attr {
			if attr.Key == "class" {
				continue
			}
			if _, exists := attributes[attr.Key]; !exists {
				attributes[attr.Key] = map[string][]*html.Node{
					attr.Val: {localRoot},
				}
			} else {
				if _, exists := attributes[attr.Key][attr.Val]; !exists {
					attributes[attr.Key][attr.Val] = append(attributes[attr.Key][attr.Val], localRoot)
				}
			}
		}
	}

	diffs := make([]*Column, 0)
	for attrKey, attrValMap := range attributes {
		if len(attrValMap) > 1 {
			diffs = append(diffs, &Column{
				Values:                 invert(attrValMap),
				Type:                   Attr,
				AttrKey:                attrKey,
				collectableDiffContext: ctx,
				lastNodeDiffContext:    LastNodeDiffContext{
					inHref:     attrKey == "href",
				},
			})
		}
	}
	return diffs
}

func invert(attrValMap map[string][]*html.Node) map[*html.Node]string {
	diffElement := make(map[*html.Node]string)
	for attrVal, localRoots := range attrValMap {
		for _, localRoot := range localRoots {
			diffElement[localRoot] = attrVal
		}
	}
	return diffElement
}
