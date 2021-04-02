package main

import (
	"context"
	"fmt"
	"github.com/go-co-op/gocron"
	"github.com/spf13/viper"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"io/ioutil"
	"net/http"
	time "time"
)

type Job struct {
	ID       primitive.ObjectID `bson:"_id,omitempty"`
	Request  Request            `bson:"request,omitempty"`
	Schedule Schedule           `bson:"schedule,omitempty"`
	UserID   primitive.ObjectID `bson:"userID,omitempty"`
	cronJob  *gocron.Job
}

type Request struct {
	Url     string            `bson:"url,omitempty"`
	Method  string            `bson:"method,omitempty"`
	Headers map[string]string `bson:"headers,omitempty"`
}

type Schedule struct {
	Interval int64 `bson:"interval,omitempty"` // Unix UTC timestamp
	StartAt  int64 `bson:"startAt,omitempty"`  // Unix UTC timestamp
}

type JobResponse struct {
	JobID       primitive.ObjectID     `bson:"jobID,omitempty"`
	Url         string                 `bson:"url,omitempty"`
	TimeScraped int64                  `bson:"timescraped,omitempty"`
	Data        map[string]interface{} `bson:"data,omitempty"`
}

type JobChange struct {
	FullDocument  Job    `bson:"fullDocument,omitempty"`
	OperationType string `bson:"operationType,omitempty"`
}

var responseCollection *mongo.Collection

func main() {
	configSetup()
	mongoUrl := viper.Get("mongo_url").(string)
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(mongoUrl))
	panicIfError(err)

	database := client.Database("webber")
	jobsCollection := database.Collection("jobs")
	responseCollection = database.Collection("responses")

	_ = initJobsController(jobsCollection)

	sleepForever()
}

func sleepForever() {
	select {}
}

func (j Job) schedule(s *gocron.Scheduler) {
	task := s.Every(time.Duration(j.Schedule.Interval) * time.Second)
	if j.Schedule.StartAt != 0 {
		task = task.StartAt(time.Unix(j.Schedule.StartAt, 0))
	}
	job, err := task.Do(func() { handleJob(j) })
	panicIfError(err)
	j.cronJob = job
}

func handleJob(job Job) {
	request := job.Request
	now := time.Now().Unix()
	resp, err := http.Get(string(request.Url))
	panicIfError(err)

	defer resp.Body.Close()
	bodyBytes, err := ioutil.ReadAll(resp.Body)
	if resp.StatusCode != 200 {
		println(resp.StatusCode)
		println(string(bodyBytes))
	}
	response := JobResponse{
		JobID:       job.ID,
		Url:         request.Url,
		TimeScraped: now,
		Data: map[string]interface{}{
			"rawData": string(bodyBytes)[0:100],
		},
	}

	insertResult, err := responseCollection.InsertOne(nil, response)
	fmt.Println(insertResult.InsertedID)

	panicIfError(err)
	println("success")
}

func panicIfError(err error) {
	if err != nil {
		println(err)
		panic(err)
	}
}
