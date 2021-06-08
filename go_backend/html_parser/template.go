package html_parser

import (
	"github.com/wangwalton/webber/go_backend/util"
	"golang.org/x/net/html"
	"io"
)

func StreakExtract(r io.Reader) []byte {
	root, err := html.Parse(r)
	util.PanicIfError(err)

	leafNodes := FindLeafNodes(root)
	streaks := GroupLeafNodes(leafNodes)

	processedStreaks := make([]NodeStreakSet, 0)
	visited := make(map[*html.Node]struct{})

	var f func(NodeStreakSet)
	f = func(nss NodeStreakSet) {
		complete, incomplete := nss.LiftTopNode(visited)
		processedStreaks = append(processedStreaks, complete...)

		for _, incompleteStreak := range incomplete {
			f(incompleteStreak)
		}
	}

	for _, streak := range streaks {
		f(streak)
	}

	return nil
}
func GroupLeafNodes(nodes []*html.Node) []NodeStreakSet {
	m := make(map[html.NodeType]NodeStreakSet)
	for _, node := range nodes {
		if _, ok := m[node.Type]; ok {
			m[node.Type][node] = node
		} else {
			m[node.Type] = NodeStreakSet{node: node}
		}
	}

	sets := make([]NodeStreakSet, len(m))
	for _, streaks := range m {
		if shouldIncludeStreak(streaks) {
			sets = append(sets, streaks)
		}
	}
	return sets
}

func FindLeafNodes(root *html.Node) []*html.Node {
	leafNodes := make([]*html.Node, 0)

	var helper func(*html.Node)
	helper = func(node *html.Node) {
		if node.FirstChild == nil {
			leafNodes = append(leafNodes, node)
			return
		}
		for c := node.FirstChild; c != nil; c = c.NextSibling {
			helper(c)
		}
	}
	helper(root)
	return leafNodes
}

type StreakTemplates struct {
	StreakSets   []*NodeStreakSet
	VisitedNodes map[*html.Node]struct{}
}

type NodeStreakSet map[*html.Node]*html.Node

func (ts *StreakTemplates) AddNewStreakSet(template *NodeStreakSet) {
	ts.StreakSets = append(ts.StreakSets, template)
}

type leafGrouping struct {
	first    *html.Node
	allLeafs []*html.Node
}

func (nss NodeStreakSet) LiftTopNode(visited map[*html.Node]struct{}) ([]NodeStreakSet, []NodeStreakSet) {
	groupedParents := make(map[*html.Node]leafGrouping)
	for tail, head := range nss {
		if _, ok := visited[head.Parent]; ok {
			// The parent node already belows to another Streak, this is just a branch of the template
			// No need to keep tracking
			delete(nss, tail)
		} else {
			nss[tail] = head.Parent

			if tailGroup, ok := groupedParents[head.Parent]; ok {
				// Does this work?
				tailGroup.allLeafs = append(tailGroup.allLeafs, tail)
			} else {
				groupedParents[head.Parent] = leafGrouping{
					first:    tail,
					allLeafs: []*html.Node{tail},
				}
			}
		}
	}

	for parent := range groupedParents {
		visited[parent] = struct{}{}
	}

	if len(groupedParents) == 1 {
		return []NodeStreakSet{nss}, []NodeStreakSet{}
	}

	return GroupCompletedStreaks(groupedParents), GroupIncompleteParents(groupedParents)
}

func GroupCompletedStreaks(groupedParents map[*html.Node]leafGrouping) []NodeStreakSet {
	complete := make([]NodeStreakSet, 0)

	for parent, leafGroup := range groupedParents {
		if len(leafGroup.allLeafs) != 1 {
			finishedStreak := make(NodeStreakSet)
			for _, leaf := range leafGroup.allLeafs {
				finishedStreak[leaf] = parent
			}
			complete = append(complete, finishedStreak)
		}
	}
	return complete
}

func GroupIncompleteParents(groups map[*html.Node]leafGrouping) []NodeStreakSet {
	m := make(map[html.NodeType]NodeStreakSet)

	for parent, leafGroup := range groups {
		if _, ok := m[parent.Type]; ok {
			m[parent.Type][leafGroup.first] = parent

		} else {
			m[parent.Type] = NodeStreakSet{
				leafGroup.first: parent,
			}
		}

	}

	sets := make([]NodeStreakSet, len(m))
	for _, streaks := range m {
		if shouldIncludeStreak(streaks) {
			sets = append(sets, streaks)
		}
	}
	return sets
}

func shouldIncludeStreak(streaks NodeStreakSet) bool {
	if len(streaks) > 2 {
		return true
	}
	return false
}

type NodeSlice []*html.Node

func (ns NodeSlice) Same() bool {
	if len(ns) == 0 {
		return true
	}

	prevNodeAddress := ns[0]
	for _, node := range ns {
		if node != prevNodeAddress {
			return false
		}
	}
	return true
}
