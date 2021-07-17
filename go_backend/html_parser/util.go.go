package html_parser

import "golang.org/x/net/html"

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
