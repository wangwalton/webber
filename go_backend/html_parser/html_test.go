package html_parser

import (
	"github.com/stretchr/testify/assert"
	"github.com/wangwalton/webber/go_backend/util"
	"golang.org/x/net/html"
	"golang.org/x/net/html/atom"
	"strings"
	"testing"
)

func TestRemoveBlankTextNodes(t *testing.T) {
	assert := assert.New(t)

	htmlStr := `
<div>
    <p></p>
    <p></p>
    <p></p>
</div>`

	node, err := html.Parse(strings.NewReader(htmlStr))
	util.PanicIfError(err)

	RemoveBlankTextNodes(node)

	body := node.FirstChild.LastChild.FirstChild
	assert.Equal(body.FirstChild.NextSibling.NextSibling, body.LastChild) // Len 3
	assert.Equal(body.DataAtom, atom.Div)
	assert.Equal(body.FirstChild.DataAtom, atom.P)
	assert.Equal(body.FirstChild.NextSibling.DataAtom, atom.P)
	assert.Equal(body.FirstChild.NextSibling.NextSibling.DataAtom, atom.P)
}
