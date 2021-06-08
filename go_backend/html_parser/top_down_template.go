package html_parser

import (
	"fmt"
	"github.com/wangwalton/webber/go_backend/util"
	"golang.org/x/net/html"
	"golang.org/x/net/html/atom"
	"io"
	"math"
	"sort"
)

type TemplateNode struct {
	Nodes            map[*html.Node]*html.Node // map[child node]localRoot node
	TemplateChildren []*TemplateNode

	Tag atom.Atom
}

type TablularData []map[string]string

func TopDownExtract(r io.Reader) []TablularData {
	root, err := html.Parse(r)
	HtmlToString(root)

	RemoveBlankTextNodes(root)
	util.PanicIfError(err)

	globalTemplates := make([]Template, 0)
	f := func(node *html.Node) {
		if node.DataAtom == atom.Html {
			println("break")
		}
		localTemplates := ExtractTemplatesFromNode(node)

		for _, template := range localTemplates {
			globalTemplates = append(globalTemplates, Template{
				node:  template,
				score: template.GetScore(),
			})
		}
	}
	PreOrderNodeTraversal(root, f)

	filteredTemplates := make([]Template, 0)
	for _, template := range globalTemplates {
		if template.score > 2 {
			filteredTemplates = append(filteredTemplates, template)
		}
	}

	sort.Slice(filteredTemplates, func(i, j int) bool {
		return filteredTemplates[i].score > filteredTemplates[j].score
	})

	templateDiffs := make([]TablularData, 0)
	for i, template := range filteredTemplates {
		diffs := template.node.ExtractDiffs()
		templateDiffs = append(templateDiffs, DiffsToCSV(diffs))

		for node, _ := range template.node.Nodes {
			WriteHTML(node.Parent, fmt.Sprintf("tmp/%d.html", i))
			break
		}
		if i > 5 {
			break
		}
	}

	return templateDiffs
}

// Not a template unless it has two nodes
func ExtractTemplatesFromNode(node *html.Node) []*TemplateNode {
	if node.FirstChild == nil || node.FirstChild == node.LastChild {
		return nil
	}

	localTemplates := []*TemplateNode{InitTemplateNode(node.FirstChild, node.FirstChild)}
	for c := node.FirstChild.NextSibling; c != nil; c = c.NextSibling {
		bestTemplateMatch, bestSameNodes, bestTotalNodes := FindBestMatchSlice(localTemplates, c)

		if shouldMerge(bestSameNodes, bestTotalNodes) {
			bestTemplateMatch.Merge(c, c)
		} else {
			localTemplates = append(localTemplates, InitTemplateNode(c, c))

		}
	}
	return localTemplates
}

func InitTemplateNode(node, localRoot *html.Node) *TemplateNode {
	t := TemplateNode{
		Nodes: map[*html.Node]*html.Node{
			node: localRoot,
		},
		TemplateChildren: nil,
		Tag:              node.DataAtom,
	}
	if node.FirstChild != nil {
		t.TemplateChildren = make([]*TemplateNode, 0)
	}

	for c := node.FirstChild; c != nil; c = c.NextSibling {
		t.TemplateChildren = append(t.TemplateChildren, InitTemplateNode(c, localRoot))
	}
	return &t
}

func FindBestMatch(templates map[*TemplateNode]struct{}, c *html.Node) (*TemplateNode, int, int) {
	var maxSimilarity float32
	bestSameNodes := 0
	bestTotalNodes := 0
	var bestTemplateMatch *TemplateNode

	for template := range templates {
		tempSameNodes, tempTotalNodes := template.Compare(c)
		similarity := float32(tempSameNodes) / float32(tempTotalNodes)
		if similarity > maxSimilarity {
			maxSimilarity = similarity

			bestSameNodes = tempSameNodes
			bestTotalNodes = tempTotalNodes
			bestTemplateMatch = template
		}
	}
	return bestTemplateMatch, bestSameNodes, bestTotalNodes
}

func FindBestMatchSlice(templates []*TemplateNode, c *html.Node) (*TemplateNode, int, int) {
	var maxSimilarity float32
	bestSameNodes := 0
	bestTotalNodes := 0
	var bestTemplateMatch *TemplateNode

	for _, template := range templates {
		tempSameNodes, tempTotalNodes := template.Compare(c)
		similarity := float32(tempSameNodes) / float32(tempTotalNodes)
		if similarity > maxSimilarity {
			maxSimilarity = similarity

			bestSameNodes = tempSameNodes
			bestTotalNodes = tempTotalNodes
			bestTemplateMatch = template
		}
	}
	return bestTemplateMatch, bestSameNodes, bestTotalNodes
}

func (t *TemplateNode) Merge(node, localRoot *html.Node) {
	t.Nodes[node] = localRoot

	templateChildren := make(map[*TemplateNode]struct{})
	for _, templateChild := range t.TemplateChildren {
		templateChildren[templateChild] = struct{}{}
	}

	for c := node.FirstChild; c != nil; c = c.NextSibling {
		bestTemplateMatch, bestSameNodes, bestTotalNodes := FindBestMatch(templateChildren, c)

		if shouldMerge(bestSameNodes, bestTotalNodes) {
			bestTemplateMatch.Merge(c, localRoot)
		} else {
			newTemplateNode := InitTemplateNode(c, localRoot)
			t.TemplateChildren = append(t.TemplateChildren, newTemplateNode)
		}

		delete(templateChildren, bestTemplateMatch)
	}
}

func shouldMerge(sameNodes int, totalNodes int) bool {
	if totalNodes == 0 {
		return false
	}
	if float32(sameNodes)/float32(totalNodes) < 0.1 {
		return false
	}
	return true
}

func (t *TemplateNode) Compare(node *html.Node) (int, int) {
	numSameNodes := 0
	totalNodes := 2

	if t.Tag == node.DataAtom {
		numSameNodes = 1
		totalNodes = 1
	}

	if t.TemplateChildren == nil && node.FirstChild == nil {
		return numSameNodes, totalNodes
	}

	if t.TemplateChildren == nil {
		return numSameNodes, totalNodes + CountNumNodes(node) - 1
	}

	if node.FirstChild == nil {
		return numSameNodes, totalNodes + CountNumTemplateNodes(t) - 1
	}

	templateChildren := toMap(t.TemplateChildren)
	for c := node.FirstChild; c != nil; c = c.NextSibling {
		bestTemplateMatch, bestSameNodes, bestTotalNodes := FindBestMatch(templateChildren, c)

		numSameNodes += bestSameNodes
		totalNodes += bestTotalNodes

		delete(templateChildren, bestTemplateMatch)
	}
	return numSameNodes, totalNodes
}

func toMap(t []*TemplateNode) map[*TemplateNode]struct{} {
	templateChildren := make(map[*TemplateNode]struct{})
	for _, templateChild := range t {
		templateChildren[templateChild] = struct{}{}
	}
	return templateChildren
}

func CountNumNodes(node *html.Node) int {
	numNodes := 1
	for c := node.FirstChild; c != nil; c = c.NextSibling {
		numNodes += CountNumNodes(c)
	}
	return numNodes
}

func CountNumTemplateNodes(node *TemplateNode) int {
	numNodes := 1
	for _, child := range node.TemplateChildren {
		numNodes += CountNumTemplateNodes(child)
	}
	return numNodes
}

func (t *TemplateNode) GetScore() int {
	minTemplateNodeChildScore := math.MaxInt32
	var minTemplateChildNode *TemplateNode
	for _, templateChild := range t.TemplateChildren {
		score := len(t.Nodes)
		if score < minTemplateNodeChildScore {
			minTemplateNodeChildScore = score
			minTemplateChildNode = templateChild
		}
	}

	score := len(t.Nodes)
	for _, templateChild := range t.TemplateChildren {
		if templateChild != minTemplateChildNode {
			score += templateChild.GetScore()
		}
	}
	return score
}

type DiffElementType uint32

const (
	Text DiffElementType = iota
	Attr
)

type DiffElement struct {
	Values  map[*html.Node]string
	Type    DiffElementType
	AttrKey string
}

func (t *TemplateNode) ExtractDiffs() []DiffElement {
	diffs := make([]DiffElement, 0)

	var f func(*TemplateNode)
	f = func(template *TemplateNode) {
		if len(template.Nodes) < 2 {
			return
		}

		if template.dataIsDifferent() {
			diffs = append(diffs, DiffElement{
				Values: template.extractText(),
				Type:   Text,
			})
		}
		diffs = append(diffs, template.extractAttributeDiffs()...)

	}

	PreOrderTemplateNodeTraversal(t, f)
	return diffs
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

func (t *TemplateNode) extractAttributeDiffs() []DiffElement {
	attributes := make(map[string]map[string][]*html.Node) // map[attr.Key][attr.Val][]*html.Node
	for node, localRoot := range t.Nodes {
		for _, attr := range node.Attr {
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

	diffs := make([]DiffElement, 0)
	for attrKey, attrValMap := range attributes {
		if len(attrValMap) > 1 {
			diffs = append(diffs, DiffElement{
				Values:  invert(attrValMap),
				Type:    Attr,
				AttrKey: attrKey,
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

type Template struct {
	node  *TemplateNode
	score int
}

func DiffsToCSV(diffs []DiffElement) TablularData {
	nodeDiffs := make(map[string]map[string]string)
	for _, diff := range diffs {
		var columnName string
		if diff.Type == Text {
			columnName = fmt.Sprintf("%p", &diff)
		} else {
			columnName = fmt.Sprintf("%s-%p", diff.AttrKey, &diff)
		}

		for node, value := range diff.Values {
			nodeStr := fmt.Sprintf("%p", node)
			if _, exists := nodeDiffs[nodeStr]; !exists {
				nodeDiffs[nodeStr] = make(map[string]string)
			}
			nodeDiffs[nodeStr][columnName] = value
		}
	}

	tabularDiffs := make(TablularData, 0, len(nodeDiffs))
	for _, row := range nodeDiffs {
		if row == nil {
			continue
		}
		tabularDiffs = append(tabularDiffs, row)
	}

	return tabularDiffs
}

func PreOrderNodeTraversal(baseNode *html.Node, f func(*html.Node)) {
	f(baseNode)

	for child := baseNode.FirstChild; child != nil; child = child.NextSibling {
		PreOrderNodeTraversal(child, f)
	}
}

func PreOrderTemplateNodeTraversal(baseNode *TemplateNode, f func(*TemplateNode)) {
	f(baseNode)

	for _, childTemplate := range baseNode.TemplateChildren {
		PreOrderTemplateNodeTraversal(childTemplate, f)
	}
}
