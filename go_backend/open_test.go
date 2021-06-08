package main

import (
	"testing"
)

//func BenchmarkOpen(b *testing.B) {
//	for n := 0; n < b.N; n++ {
//		util.NotIn(html.ErrorNode, html.DocumentNode, html.CommentNode)
//	}
//}
//
//func BenchmarkDirectRead(b *testing.B) {
//	for n := 0; n < b.N; n++ {
//		temp(html.ErrorNode)
//	}
//}
//
//func temp(nodeType html.NodeType) bool {
//	return nodeType != html.DocumentNode && nodeType != html.CommentNode
//}
//
//func BenchmarkClone(b *testing.B) {
//	html := html_parser.ReadHTML("pages/index.html")
//	for n := 0; n < b.N; n++ {
//		html_parser.Clone(html)
//	}
//}

func TestMap(t *testing.T) {
	m := make(map[string]struct{})
	write(m)
}

func write(m map[string]struct{}) {
	m["a"] = struct{}{}
}

func BenchmarkSlice(b *testing.B) {
	for n := 0; n < b.N; n++ {
		sliceHelper()
	}
}

func sliceHelper() {
	s := make([]int, 0)
	for i := 0; i < 1000; i++ {
		s = append(s, i)
	}
}

func BenchmarkMap(b *testing.B) {
	for n := 0; n < b.N; n++ {
		mapHelper()
	}
}

func mapHelper() {
	s := make(map[int]int)
	for i := 0; i < 1000; i++ {
		s[i] = i
	}
}
