package html_parser

import (
	"golang.org/x/net/html"
	"strconv"
)

func PreOrderNodeTraversal(baseNode *html.Node, path string, f func(*html.Node, string)) {
	f(baseNode, path)

	i := 0
	for child := baseNode.FirstChild; child != nil; child = child.NextSibling {
		PreOrderNodeTraversal(child, getNewPath(path, i), f)
		i += 1
	}
}

func getNewPath(path string, i int) string {
	if path == "" {
		return strconv.Itoa(i)
	}
	return path + "-" + strconv.Itoa(i)
}

func PreOrderTemplateNodeTraversal(baseNode *TemplateNode, ctx CollectableDiffContext, f func(*TemplateNode,
	*CollectableDiffContext)) {
	updateCollectableDiffContext(baseNode, &ctx)
	f(baseNode, &ctx)

	i := 0
	for _, childTemplate := range baseNode.TemplateChildren {
		ctx.path = getNewPath(ctx.path, i)
		ctx.depth += 1
		PreOrderTemplateNodeTraversal(childTemplate, ctx, f)
		i += 1
	}
}
