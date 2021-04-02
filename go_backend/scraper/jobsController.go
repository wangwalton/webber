package main

import (
	"fmt"
	"github.com/go-co-op/gocron"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"sync"
	"time"
)

type JobsController struct {
	jobs       map[primitive.ObjectID]Job
	lock       sync.Mutex
	scheduler  *gocron.Scheduler
	collection *mongo.Collection
}

func initJobsController(jobsCollection *mongo.Collection) JobsController {
	jobsController := JobsController{
		jobs:       make(map[primitive.ObjectID]Job),
		scheduler:  gocron.NewScheduler(time.UTC),
		collection: jobsCollection,
	}

	// We start monitoring before we load, this way we don't miss any changes
	jobsController.monitorJobsCollectionChanges()
	jobsController.loadFromDatabase()
	jobsController.scheduleJobs()

	return jobsController
}

func (jobs JobsController) monitorJobsCollectionChanges() {
	streamOptions := options.ChangeStream().SetFullDocument(options.UpdateLookup)
	stream, err := jobs.collection.Watch(nil, mongo.Pipeline{}, streamOptions)
	panicIfError(err)

	println("Monitoring for mongodb changes...")
	go func() {
		var changeDoc JobChange
		for stream.Next(nil) {
			if e := stream.Decode(&changeDoc); e != nil {
				log.Printf("error decoding: %s", e)
			}
			job := changeDoc.FullDocument
			println("MongoDB new update: ", changeDoc.OperationType, " id: ", job.ID.Hex())

			if changeDoc.OperationType != "insert" || changeDoc.OperationType != "insert" {
				continue
			}

			jobs.lock.Lock()
			if job, exists := jobs.jobs[job.ID]; exists {
				jobs.scheduler.RemoveByReference(job.cronJob)
			}
			job.schedule(jobs.scheduler)
			jobs.jobs[job.ID] = job
			jobs.lock.Unlock()
		}
	}()
}

func (jobsController JobsController) loadFromDatabase() {
	var jobs []Job
	cursor, err := jobsController.collection.Find(nil, bson.D{})
	panicIfError(err)

	err = cursor.All(nil, &jobs)
	panicIfError(err)

	fmt.Println("Loaded jobs: ", jobs)

	jobsController.lock.Lock()
	for _, job := range jobs {
		jobsController.jobs[job.ID] = job
	}
	jobsController.lock.Unlock()
}

func (jobsController JobsController) scheduleJobs() {
	for _, job := range jobsController.jobs {
		job.schedule(jobsController.scheduler)
	}
	go jobsController.scheduler.StartAsync()
}
