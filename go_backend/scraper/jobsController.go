package main

import (
	"github.com/go-co-op/gocron"
	"github.com/rs/zerolog/log"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"sync"
	"time"
)

type JobsController struct {
	jobs       map[primitive.ObjectID]Job
	lock       sync.Mutex
	scheduler  *gocron.Scheduler
	collection *mongo.Collection
}
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

type JobChange struct {
	FullDocument  *Job    `bson:"fullDocument,omitempty"`
	OperationType string `bson:"operationType,omitempty"`
	DocumentKey // Embedded field is flattened during BSON unmarshalling
}

type DocumentKey struct {
	ID primitive.ObjectID `bson:"_id,omitempty"`
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

func (jobsController JobsController) monitorJobsCollectionChanges() {
	streamOptions := options.ChangeStream().SetFullDocument(options.UpdateLookup)
	stream, err := jobsController.collection.Watch(nil, mongo.Pipeline{}, streamOptions)
	panicIfError(err)

	log.Info().Msg("Monitoring for mongodb changes...")
	go func() {
		for stream.Next(nil) {
			var changeDoc JobChange // TODO: Move this outside as an optimization?
			if e := stream.Decode(&changeDoc); e != nil {
				log.Error().Err(e).Msg("error decoding mongodb document")
				continue
			}
			job := changeDoc.FullDocument
			log.Info().
				Str("operationType", changeDoc.OperationType).
				Str("_id", changeDoc.ID.Hex()).
				Msg("MongoDB jobs update")

			jobsController.lock.Lock()

			// We delete the job on any new updates
			if job, exists := jobsController.jobs[changeDoc.ID]; exists {
				jobsController.scheduler.RemoveByReference(job.cronJob)
			}
			delete(jobsController.jobs, changeDoc.ID)

			if changeDoc.OperationType == "insert" ||
				changeDoc.OperationType == "update" ||
				changeDoc.OperationType == "replace" {

				jobsController.jobs[changeDoc.ID] = *job
				job.schedule(jobsController.scheduler)
			}
			jobsController.lock.Unlock()

		}
	}()
}

func (jobsController JobsController) loadFromDatabase() {
	var jobs []Job
	cursor, err := jobsController.collection.Find(nil, bson.D{})
	panicIfError(err)

	err = cursor.All(nil, &jobs)
	panicIfError(err)

	log.Info().Int("numJobsLoaded", len(jobs)).Msg("Loaded jobs")

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
