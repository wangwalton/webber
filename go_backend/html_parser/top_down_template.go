package html_parser

import (
	"bytes"
	"github.com/wangwalton/webber/go_backend/util"
	"golang.org/x/net/html"
	"golang.org/x/net/html/atom"
	"io"
	"math"
	"sort"
)

type TemplateNode struct {
	// TODO: why does this need a mapping?
	Nodes            map[*html.Node]*html.Node // map[child node]localRoot node
	 TemplateChildren []*TemplateNode

	Tag atom.Atom
}

type Template struct {
	node  *TemplateNode

	path  string
	rawHtml string
	score int
}

type ExtractOptions struct {
	includeHtml  bool `json:include_html`
	maxNumTables int  `json:max_num_tables`
}

var defaultExtractOptions = &ExtractOptions{
	includeHtml:  true,
	maxNumTables: 10,
}

// TopDownExtract
// 1. Ranks Templates
// 2. Extracts out diffs from templates
func TopDownExtract(r io.Reader, options *ExtractOptions) []Table {
	if options == nil {
		options = defaultExtractOptions
	}

	root, err := html.Parse(r)
	HtmlToString(root)

	RemoveBlankTextNodes(root)
	util.PanicIfError(err)

	globalTemplates := make([]Template, 0)
	f := func(node *html.Node, path string) {
		if node.DataAtom == atom.Html {
			println("break")
		}
		localTemplates := ExtractTemplatesFromNode(node)

		for _, template := range localTemplates {
			globalTemplates = append(globalTemplates, Template{
				node:  template,
				score: template.GetScore(),
				path:  path,
				rawHtml: renderNode(node),
			})
		}
	}
	PreOrderNodeTraversal(root, "", f)

	filteredTemplates := make([]Template, 0)
	for _, template := range globalTemplates {
		if template.score > 2 {
			filteredTemplates = append(filteredTemplates, template)
		}
	}

	sort.Slice(filteredTemplates, func(i, j int) bool {
		return filteredTemplates[i].score > filteredTemplates[j].score
	})
	templateDiffs := templatesToTables(filteredTemplates, defaultExtractOptions)

	sort.Slice(templateDiffs, func(i, j int) bool {
		return templateDiffs[i].Score > templateDiffs[j].Score
	})

	return templateDiffs
}

func ExtractTemplatesFromNode(node *html.Node) []*TemplateNode {
	// Not a template unless it has two nodes
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

func renderNode(n *html.Node) string {
	var buf bytes.Buffer
	w := io.Writer(&buf)
	html.Render(w, n)
	return buf.String()
}