package html_parser

import (
	"bytes"
	"github.com/wangwalton/webber/go_backend/util"
	"golang.org/x/net/html"
	"os"
	"strings"
)

func RemoveAllTagsAndText(node *html.Node) {
	if node == nil {
		return
	}
	if node.Type == html.TextNode {
		node.Data = ""
	}
	for i := range node.Attr {
		node.Attr[i].Val = ""
	}

	for c := node.FirstChild; c != nil; c = c.NextSibling {
		RemoveAllTagsAndText(c)
	}
}

func ReadHTML(filename string) *html.Node {
	file, err := os.Open(filename)
	util.PanicIfError(err)

	root, err := html.Parse(file)
	util.PanicIfError(err)
	return root
}

func WriteHTML(node *html.Node, filename string) {
	file, err := os.Create(filename)
	util.PanicIfError(err)
	defer file.Close()

	err = html.Render(file, node)
	util.PanicIfError(err)
}

func HtmlToString(node *html.Node) string {
	buf := new(strings.Builder)
	html.Render(buf, node)
	return buf.String()
}

func Clone(node *html.Node) *html.Node {
	b := new(bytes.Buffer)

	err := html.Render(b, node)
	util.PanicIfError(err)

	clonedNode, err := html.Parse(b)
	util.PanicIfError(err)

	return clonedNode
}

func RemoveDataAndSave(inputHTML_Filename, outputHTML_Filename string) {
	inputHTML := ReadHTML(inputHTML_Filename)
	RemoveAllTagsAndText(inputHTML)
	WriteHTML(inputHTML, outputHTML_Filename)
}

func RemoveBlankTextNodes(node *html.Node) {
	next := node.FirstChild
	for c := next; c != nil; c = next {
		next = next.NextSibling

		if c.Type == html.TextNode && strings.TrimSpace(c.Data) == "" {
			node.RemoveChild(c)
		} else {
			RemoveBlankTextNodes(c)
		}
	}
}
