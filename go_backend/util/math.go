package util

import "math"

func Std(nums []int64) float64 {
	mean := Mean(nums)

	var diffSquared float64 = 0
	for _, num := range nums {
		diff := float64(num) - mean
		diffSquared += diff * diff
	}

	return math.Sqrt(diffSquared / float64(len(nums)))
}

func NormalizedStd(nums []int64) float64 {
	mean := Mean(nums)

	var diffSquared float64 = 0
	for _, num := range nums {
		diff := float64(num) - mean
		diffSquared += diff * diff
	}

	return math.Sqrt(diffSquared/float64(len(nums))) / mean
}

func Mean(nums []int64) float64 {
	var sum int64 = 0
	for _, num := range nums {
		sum += num
	}
	return float64(sum) / float64(len(nums))
}
