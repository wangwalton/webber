package html_parser

import (
	"github.com/stretchr/testify/assert"
	"golang.org/x/net/html"
	"golang.org/x/net/html/atom"
	"testing"
)

func TestNodeStreakSet_LiftTopNode(t *testing.T) {
	assert := assert.New(t)

	parent1 := DivNode()
	AppendPNode(parent1)

	parent2 := DivNode()
	AppendPNode(parent2)

	streaks := NodeStreakSet{
		parent1.FirstChild: parent1.FirstChild,
		parent2.FirstChild: parent2.FirstChild,
	}

	complete, incomplete := streaks.LiftTopNode(map[*html.Node]struct{}{})

	assert.Equal(len(complete), 0)
	assert.Equal(len(incomplete), 1)
}

func TestNodeStreakSet_LiftTopNode2(t *testing.T) {
	assert := assert.New(t)

	parent1 := DivNode()
	AppendPNode(parent1)
	AppendPNode(parent1)

	streaks := NodeStreakSet{
		parent1.LastChild:  parent1.LastChild,
		parent1.FirstChild: parent1.FirstChild,
	}

	complete, incomplete := streaks.LiftTopNode(map[*html.Node]struct{}{})

	assert.Equal(len(complete), 1)
	assert.Equal(len(incomplete), 0)
}

func AppendPNode(parent1 *html.Node) {
	parent1.AppendChild(&html.Node{
		Type:     html.ElementNode,
		DataAtom: atom.P,
	})
}

func DivNode() *html.Node {
	return &html.Node{
		Type:     html.ElementNode,
		DataAtom: atom.Div,
		Parent:   nil,
	}
}
