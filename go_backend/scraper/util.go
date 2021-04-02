package main

import "encoding/json"

func prettify(input interface{}) string {
	b, err := json.MarshalIndent(input, "", "  ")
	panicIfError(err)
	return string(b)
}

