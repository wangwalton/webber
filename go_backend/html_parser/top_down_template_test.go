package html_parser

import (
	"github.com/stretchr/testify/assert"
	"github.com/wangwalton/webber/go_backend/util"
	"golang.org/x/net/html"
	"golang.org/x/net/html/atom"
	"strings"
	"testing"
)

func TestTemplateNode_CompareSingleNodeEqual(t *testing.T) {
	assert := assert.New(t)

	template := &TemplateNode{
		Tag: atom.Div,
	}
	node := &html.Node{
		DataAtom: atom.Div,
	}

	sameNodes, totalNodes := template.Compare(node)
	assert.Equal(1, sameNodes)
	assert.Equal(1, totalNodes)
}

func TestTemplateNode_CompareSingleNodeNotEqual(t *testing.T) {
	assert := assert.New(t)

	template := &TemplateNode{
		Tag: atom.P,
	}
	node := &html.Node{
		DataAtom: atom.Div,
	}

	sameNodes, totalNodes := template.Compare(node)
	assert.Equal(0, sameNodes)
	assert.Equal(2, totalNodes)
}

func TestTemplateNode_CompareTwoNodes(t *testing.T) {
	assert := assert.New(t)

	template := &TemplateNode{
		Tag: atom.Div,
		TemplateChildren: []*TemplateNode{
			{Tag: atom.Div},
		},
	}
	node := &html.Node{
		DataAtom: atom.Div,
	}
	node.AppendChild(&html.Node{
		DataAtom: atom.Div,
	})

	sameNodes, totalNodes := template.Compare(node)
	assert.Equal(2, sameNodes)
	assert.Equal(2, totalNodes)
}

func TestTemplateNode_CompareTwoNodes2(t *testing.T) {
	assert := assert.New(t)

	template := &TemplateNode{
		Tag: atom.Div,
	}
	node := &html.Node{
		DataAtom: atom.Div,
	}
	node.AppendChild(&html.Node{
		DataAtom: atom.Div,
	})

	sameNodes, totalNodes := template.Compare(node)
	assert.Equal(1, sameNodes)
	assert.Equal(2, totalNodes)
}

func TestTemplateNode_CompareTwoNodes3(t *testing.T) {
	assert := assert.New(t)

	template := &TemplateNode{
		Tag: atom.Div,
		TemplateChildren: []*TemplateNode{
			{Tag: atom.Div},
		},
	}
	node := &html.Node{
		DataAtom: atom.Div,
	}

	sameNodes, totalNodes := template.Compare(node)
	assert.Equal(1, sameNodes)
	assert.Equal(2, totalNodes)
}

func TestTemplateNode_CompareBait(t *testing.T) {
	assert := assert.New(t)

	template := &TemplateNode{
		Tag: atom.Div,
		TemplateChildren: []*TemplateNode{
			{
				Tag: atom.Div,
			},
			{
				Tag:              atom.Div,
				TemplateChildren: []*TemplateNode{{Tag: atom.Div}},
			},
		},
	}

	node := &html.Node{
		DataAtom: atom.Div,
	}
	node.AppendChild(&html.Node{
		DataAtom: atom.Div,
	})
	node.FirstChild.AppendChild(&html.Node{
		DataAtom: atom.Div,
	})

	sameNodes, totalNodes := template.Compare(node)
	assert.Equal(3, sameNodes)
	assert.Equal(3, totalNodes)
}

func TestTemplateNode_CompareBait2(t *testing.T) {
	assert := assert.New(t)

	template := &TemplateNode{
		Tag: atom.Div,
		TemplateChildren: []*TemplateNode{
			{
				Tag: atom.Div,
			},
		},
	}

	node := &html.Node{
		DataAtom: atom.Div,
	}
	node.AppendChild(&html.Node{
		DataAtom: atom.Div,
	})
	node.FirstChild.AppendChild(&html.Node{
		DataAtom: atom.Div,
	})

	sameNodes, totalNodes := template.Compare(node)
	assert.Equal(2, sameNodes)
	assert.Equal(3, totalNodes)
}

func TestTemplateNode_CompareComplex(t *testing.T) {
	assert := assert.New(t)

	template := &TemplateNode{
		Tag: atom.Div,
		TemplateChildren: []*TemplateNode{
			{
				Tag: atom.Div,
			},
			{
				Tag:              atom.P,
				TemplateChildren: []*TemplateNode{{Tag: atom.Span}},
			},
		},
	}

	node := &html.Node{
		DataAtom: atom.Div,
	}
	node.AppendChild(&html.Node{
		DataAtom: atom.P,
	})
	node.FirstChild.AppendChild(&html.Node{
		DataAtom: atom.Span,
	})

	node.AppendChild(&html.Node{
		DataAtom: atom.Div,
	})

	sameNodes, totalNodes := template.Compare(node)
	assert.Equal(4, sameNodes)
	assert.Equal(4, totalNodes)
}

func TestExtractTemplatesFromNode(t *testing.T) {
	assert := assert.New(t)

	htmlStr := `
<div>
    <p></p>
    <p></p>
    <p></p>
</div>`
	node2, err := html.Parse(strings.NewReader(htmlStr))
	util.PanicIfError(err)
	RemoveBlankTextNodes(node2)

	body := node2.FirstChild.LastChild.FirstChild

	templates := ExtractTemplatesFromNode(body)
	assert.Equal(1, len(templates))
	assert.Equal(0, len(templates[0].TemplateChildren))
	assert.Equal(3, len(templates[0].Nodes))
}

func TestExtractTemplatesFromNode2(t *testing.T) {
	assert := assert.New(t)

	htmlStr := `
<div>
    <p class="haha" res="1"></p>
    <p class="haha" res="12"></p>
    <p class="haha" res="123"></p>
</div>`
	node2, err := html.Parse(strings.NewReader(htmlStr))
	util.PanicIfError(err)
	RemoveBlankTextNodes(node2)

	body := node2.FirstChild.LastChild.FirstChild

	templates := ExtractTemplatesFromNode(body)
	assert.Equal(1, len(templates))
	template := templates[0]
	assert.Equal(0, len(template.TemplateChildren))
	assert.Equal(3, len(template.Nodes))

	// Test GetScore
	assert.Equal(3, template.GetScore())

	// Test ExtractDiffs
	diffs := template.ExtractDiffs(true)
	assert.Equal(2, len(diffs))

	htmlDiff := diffs[0]
	assert.Equal(Html, htmlDiff.Type)

	assert.Equal(`<p class="haha" res="1"></p>`, htmlDiff.Values[body.FirstChild])
	assert.Equal(`<p class="haha" res="12"></p>`, htmlDiff.Values[body.FirstChild.NextSibling])
	assert.Equal(`<p class="haha" res="123"></p>`, htmlDiff.Values[body.LastChild])

	textDiff := diffs[1]
	assert.Equal(Attr, textDiff.Type)
	assert.Equal("res", textDiff.AttrKey)

	assert.Equal("1", textDiff.Values[body.FirstChild])
	assert.Equal("12", textDiff.Values[body.FirstChild.NextSibling])
	assert.Equal("123", textDiff.Values[body.LastChild])
}

func TestExtractTemplatesFromNode3(t *testing.T) {
	assert := assert.New(t)

	htmlStr := `
<div>
    <p class="haha" res="123">1</p>
    <p class="haha" res="123">12</p>
    <p class="haha" res="123">123</p>
</div>`
	node2, err := html.Parse(strings.NewReader(htmlStr))
	util.PanicIfError(err)
	RemoveBlankTextNodes(node2)

	body := node2.FirstChild.LastChild.FirstChild

	templates := ExtractTemplatesFromNode(body)
	assert.Equal(1, len(templates))
	template := templates[0]
	assert.Equal(3, len(template.Nodes))
	assert.Equal(1, len(template.TemplateChildren))
	assert.Equal(3, len(template.TemplateChildren[0].Nodes))

	// Test GetScore
	assert.Equal(3, template.GetScore())

	// Test ExtractDiffs
	diffs := template.ExtractDiffs(false)
	assert.Equal(1, len(diffs))
	diff := diffs[0]
	assert.Equal(Text, diff.Type)

	p1 := body.FirstChild
	p2 := body.FirstChild.NextSibling
	p3 := body.LastChild

	assert.Equal(p1.FirstChild.Data, diff.Values[p1])
	assert.Equal(p2.FirstChild.Data, diff.Values[p2])
	assert.Equal(p3.FirstChild.Data, diff.Values[p3])
}
