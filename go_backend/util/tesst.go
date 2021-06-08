package util

import (
	"github.com/stretchr/testify/assert"
	"reflect"
)

func FieldExistsInArray(fieldName string, expectedValue interface{}, arrayType interface{}) assert.Comparison {
	arr := reflect.ValueOf(arrayType)

	if arr.Kind() != reflect.Slice {
		panic("Invalid data-type")
	}

	for i := 0; i < arr.Len(); i++ {
		valI := arr.Index(i).Interface()
		value := reflect.Indirect(reflect.ValueOf(valI)).FieldByName(fieldName)
		if value == expectedValue {
			return func() bool { return true }
		}
	}

	return func() bool { return false }
}
