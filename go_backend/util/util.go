package util

import (
	"encoding/json"
	"fmt"
	//"github.com/theothertomelliott/acyclic"
)

func PanicIfError(err error) {
	if err != nil {
		panic(err)
	}
}

func PrintJSON(obj interface{}) {
	//acyclic.Print(obj)
	bytes, err := json.MarshalIndent(obj, "\t", "\t")
	PanicIfError(err)
	fmt.Println(string(bytes))
}

func In(base interface{}, objs ...interface{}) bool {
	for _, obj := range objs {
		if base == obj {
			return true
		}
	}
	return false
}

func NotIn(base interface{}, objs ...interface{}) bool {
	for _, obj := range objs {
		if base == obj {
			return false
		}
	}
	return true
}
