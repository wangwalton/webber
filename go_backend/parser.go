package main

import (
	"encoding/json"
	"fmt"
	"github.com/wangwalton/webber/go_backend/html_parser"
	"github.com/wangwalton/webber/go_backend/util"
	"golang.org/x/net/html"
	"os"
)

type Template struct {
	Template         *html.Node
	Points           int
	ReferredBy       []*html.Node
	DiffElements     []DiffElement
	TemplateIsCloned bool
}

type Templates []*Template

func (t Templates) Len() int           { return len(t) }
func (t Templates) Swap(i, j int)      { t[i], t[j] = t[j], t[i] }
func (t Templates) Less(i, j int) bool { return t[i].Points > t[j].Points }

var globalTemplates = Templates{}

func main() {
	//RemoveDataAndSave("tmp/3.html", "tmp/3_stripped.html")

	//file, err := os.Open("pages/simple.html")
	file, err := os.Open("pages/panel.html")
	util.PanicIfError(err)

	res := html_parser.TopDownExtract(file, nil)
	util.PrintJSON(res)
	//root, err := html.Parse(file)
	//html_parser.Clone(root)
	//util.PanicIfError(err)
	//
	//PreOrderTraversal(root, ParseNode)
	//sort.Sort(globalTemplates)
	//for i, template := range globalTemplates {
	//	if i > 5 {
	//		break
	//	}
	//	fmt.Println(template)
	//	template.calcDiffs()
	//template.WriteParent(fmt.Sprintf("tmp/%d.html", i))
	//template.WriteDiff(fmt.Sprintf("tmp/diff_%d.html", i))

	//}
}

func (t *Template) WriteParent(filename string) {
	file, err := os.Create(filename)
	util.PanicIfError(err)
	defer file.Close()

	err = html.Render(file, t.Template.Parent)
	util.PanicIfError(err)
}

func (t *Template) String() string {
	return fmt.Sprintf("ListTag: %s,\tPoints: %d,\tLenSiblings: %d", t.Template.DataAtom.String(), t.Points, len(t.ReferredBy))
}

func (t *Template) WriteDiff(filename string) {
	file, err := os.Create(filename)
	util.PanicIfError(err)
	defer file.Close()

	serialized, err := json.MarshalIndent(t.DiffElements, "", "  ")
	util.PanicIfError(err)

	_, err = file.Write(serialized)
	util.PanicIfError(err)
}

func PreOrderTraversal(baseNode *html.Node, function func(*html.Node)) {
	function(baseNode)
	//if baseNode.Type != html.TextNode && baseNode.Type != html.DocumentNode {
	//println(baseNode.DataAtom.String())
	//}

	for child := baseNode.FirstChild; child != nil; child = child.NextSibling {
		PreOrderTraversal(child, function)
	}
}

func ParseNode(node *html.Node) {
	templates := make(Templates, 0)
	for child := node.FirstChild; child != nil; child = child.NextSibling {
		if child.Type == html.TextNode {
			continue
		}
		templates.AttachToExistingOrCreateNewTemplate(child)

	}
	for _, template := range templates {
		if shouldIncludeTemplate(template) {
			globalTemplates = append(globalTemplates, template)
		}
	}
}

func shouldIncludeTemplate(template *Template) bool {
	return template.Points > 1
}

func (t *Templates) AttachToExistingOrCreateNewTemplate(child *html.Node) {
	for _, template := range *t {
		if template.Template.DataAtom == child.DataAtom {
			template.ReferredBy = append(template.ReferredBy, child)
			return
		}
	}
	*t = append(*t, &Template{
		Template:         child,
		Points:           0,
		ReferredBy:       []*html.Node{child},
		TemplateIsCloned: false,
	})
}

func (t *Templates) CalculateScore() int {
	return 0
}

type DiffElementType uint32

const (
	Text DiffElementType = iota
	Attr
)

type DiffElement struct {
	Path    []int
	Values  []string
	Type    DiffElementType
	AttrKey string
}

func (t *Template) calcDiffs() {

	var f func([]*html.Node, []int)
	f = func(nodes []*html.Node, path []int) {
		if len(nodes) == 0 {
			return
		}

		node := nodes[0]
		if node.Type == html.TextNode {
			if dataIsDifferent(nodes) {
				t.DiffElements = append(t.DiffElements, DiffElement{
					Path:   path,
					Values: extractData(nodes),
					Type:   Text,
				})
			}
			return
		}

		for i := 0; i < len(node.Attr); i += 1 {
			if attrIsDifferent(nodes, i) {
				t.DiffElements = append(t.DiffElements, DiffElement{
					Path:    path,
					Values:  extractAttr(nodes, i),
					Type:    Attr,
					AttrKey: node.Attr[i].Key,
				})
			}
		}

		i := 0
		children := getFirstChild(nodes)
		for children != nil {
			f(children, append(path, 0))
			i += 1
			children = getNextSibling(children)
		}

	}

	f(t.ReferredBy, []int{})
}

func attrIsDifferent(nodes []*html.Node, i int) bool {
	textValue := nodes[0].Attr[i].Val
	for _, node := range nodes {
		if node.Attr[i].Val != textValue {
			return true
		}
	}
	return false
}

func extractAttr(nodes []*html.Node, i int) []string {
	dataSlice := make([]string, 0)
	for _, node := range nodes {
		dataSlice = append(dataSlice, node.Attr[i].Val)
	}
	return dataSlice

}

func dataIsDifferent(nodes []*html.Node) bool {
	textValue := nodes[0].Data
	for _, node := range nodes {
		if node.Data != textValue {
			return true
		}
	}
	return false
}

func extractData(nodes []*html.Node) []string {
	dataSlice := make([]string, 0)
	for _, node := range nodes {
		dataSlice = append(dataSlice, node.Data)
	}
	return dataSlice
}

// Expects all nodes to be of same structure
func getFirstChild(nodes []*html.Node) []*html.Node {
	if nodes[0].FirstChild == nil {
		return nil
	}

	children := make([]*html.Node, 0)
	for _, node := range nodes {
		children = append(children, node.FirstChild)
	}
	return children
}

// Expects all nodes to be of same structure
func getNextSibling(nodes []*html.Node) []*html.Node {
	if nodes[0].NextSibling == nil {
		return nil
	}

	children := make([]*html.Node, 0)
	for _, node := range nodes {
		children = append(children, node.NextSibling)
	}
	return children
}

func nodeIsSame(n1 *html.Node, n2 *html.Node) bool {
	if n1.DataAtom != n2.DataAtom {
		return false
	}

	// Check attr
	if len(n1.Attr) != len(n2.Attr) {
		return false
	}
	for i := range n1.Attr {
		if n1.Attr[i].Key != n2.Attr[i].Key {
			return false
		}
	}

	// Recursively check children
	child1 := n1.FirstChild
	child2 := n2.FirstChild
	for child1 != nil && child2 != nil {
		if !nodeIsSame(child1, child2) {
			return false
		}
		child1 = child1.NextSibling
		child2 = child2.NextSibling
	}
	if child1 != child2 {
		return false
	}

	return true
}

const sameAttrKeyPoints = 1
const sameAttrValuePoints = 2
const sameTagPoints = 5

func getSimilarity(n1 *html.Node, n2 *html.Node) int {
	score := sameTagPoints

	// Attr score
	score += len(n1.Attr) * sameAttrKeyPoints
	for i := range n1.Attr {
		if n1.Attr[i].Key != n2.Attr[i].Key {
			score += sameAttrValuePoints
		}
	}

	// Recursively check children
	child1 := n1.FirstChild
	child2 := n2.FirstChild
	for child1 != nil && child2 != nil {
		score += getSimilarity(child1, child2)

		child1 = child1.NextSibling
		child2 = child2.NextSibling
	}

	return score
}
