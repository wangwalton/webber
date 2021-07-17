package util

import "testing"

func TestMean(t *testing.T) {
	type args struct {
		nums []int64
	}
	tests := []struct {
		name string
		args args
		want float64
	}{
		{"simple", args{nums: []int64{1, 1, 1, 1}}, 1},
		{"simple", args{nums: []int64{1, 0}}, 0.5},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := Mean(tt.args.nums); got != tt.want {
				t.Errorf("Mean() = %v, want %v", got, tt.want)
			}
		})
	}
}

func TestStd(t *testing.T) {
	type args struct {
		nums []int64
	}
	tests := []struct {
		name string
		args args
		want float64
	}{
		{"simple", args{nums: []int64{1, 1, 1, 1}}, 0},
		{"simple", args{nums: []int64{1, 0}}, 0.5},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := Std(tt.args.nums); got != tt.want {
				t.Errorf("Std() = %v, want %v", got, tt.want)
			}
		})
	}
}
