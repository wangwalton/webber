package main

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/go-co-op/gocron"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"io/ioutil"
	"log"
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

type SearchResponse struct {
	Url         string      `bson:"url,omitempty"`
	TimeScraped int64       `bson:"timeScraped,omitempty"`
	Data        interface{} `bson:"data,omitempty"`
}

type JobChange struct {
	FullDocument Job `bson:"fullDocument,omitempty"`
	OperationType string `bson:"operationType,omitempty"`
}

var jobsCollection *mongo.Collection
var responseCollection *mongo.Collection

func main() {
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:27017,127.0.0.1:27018/?replicaSet=rs0"))
	panicIfError(err)

	database := client.Database("webber")
	jobsCollection = database.Collection("jobs")
	responseCollection = database.Collection("responses")

	jobs := initJobs()
	monitorJobsCollectionChanges(jobs)
}

func monitorJobsCollectionChanges(jobs JobsController) {
	streamOptions := options.ChangeStream().SetFullDocument(options.UpdateLookup)
	stream, err := jobsCollection.Watch(nil, mongo.Pipeline{}, streamOptions)
	panicIfError(err)

	println("Monitoring for mongodb changes...")
	var changeDoc JobChange
	for stream.Next(nil) {
		if e := stream.Decode(&changeDoc); e != nil {
			log.Printf("error decoding: %s", e)
		}
		println("MongoDB new update: ", changeDoc.OperationType, " id: ", changeDoc.FullDocument.ID.Hex())
		jobs.jobs[changeDoc.FullDocument.ID] = changeDoc.FullDocument
	}
}

type JobsController struct {
	jobs map[primitive.ObjectID]Job
	scheduler *gocron.Scheduler
}

func initJobs() JobsController {
	jobsController := JobsController{
		jobs: make(map[primitive.ObjectID]Job),
		scheduler: gocron.NewScheduler(time.UTC),
	}

	jobsController.loadFromDatabase()
	jobsController.scheduleJobs()

	return jobsController
}

func (jobsController JobsController) scheduleJobs() {
	for _, job := range jobsController.jobs {
		job.schedule(jobsController.scheduler)
	}
	jobsController.scheduler.StartAsync()
}

func (jobsController JobsController) loadFromDatabase() {
	var jobs []Job
	cursor, err := jobsCollection.Find(nil, bson.D{})
	panicIfError(err)

	err = cursor.All(nil, &jobs)
	panicIfError(err)

	fmt.Println("Loaded jobs: ", jobs)
	for _, job := range jobs {
		jobsController.jobs[job.ID] = job
	}
}

func prettify(input interface{}) string {
	b, err := json.MarshalIndent(input, "", "  ")
	panicIfError(err)
	return string(b)
}

func (j Job) schedule(s *gocron.Scheduler) {
	task := s.Every(j.Schedule.Interval).Seconds()
	if j.Schedule.StartAt != 0 {
		task = task.StartAt(time.Unix(j.Schedule.StartAt, 0))
	}
	job, err := task.Do(func() { handleJob(j) })
	panicIfError(err)
	j.cronJob = job
}
//
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
	response := SearchResponse{
		Url:         request.Url,
		TimeScraped: now,
		Data:        map[string]interface{}{"1234": "1234"},
	}

	insertResult, err := jobsCollection.InsertOne(nil, response)
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
