package main

import (
	"context"
	"github.com/go-co-op/gocron"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"github.com/rs/zerolog/pkgerrors"
	"github.com/spf13/viper"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"io/ioutil"
	"net/http"
	"os"
	time "time"
)



type JobResponse struct {
	JobID       primitive.ObjectID     `bson:"jobID,omitempty"`
	Url         string                 `bson:"url,omitempty"`
	TimeScraped int64                  `bson:"timescraped,omitempty"`
	Data        map[string]interface{} `bson:"data,omitempty"`
}


var responseCollection *mongo.Collection

var hostIP = getIP()

func main() {
	println("123")
	println("123")
	zerolog.ErrorStackMarshaler = pkgerrors.MarshalStack
	log.Logger = log.Output(zerolog.ConsoleWriter{Out: os.Stderr})

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

func schedule(s *gocron.Scheduler, j *Job) {
	task := s.Every(time.Duration(j.Schedule.Interval) * time.Second)
	if j.Schedule.StartAt != 0 {
		task = task.StartAt(time.Unix(j.Schedule.StartAt, 0))
	}
	job, err := task.Do(func() { handleJob(j) })
	panicIfError(err)
	j.cronJob = job
}

func handleJob(job *Job) {
	request := job.Request
	now := time.Now().Unix()
	resp, err := http.Get(string(request.Url))
	panicIfError(err)

	defer resp.Body.Close()
	bodyBytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Error().Stack().Err(err).Msg("Can't read response")
	}

	response := JobResponse{
		JobID:       job.ID,
		Url:         request.Url,
		TimeScraped: now,
		Data: map[string]interface{}{
			"rawData": string(bodyBytes)[0:100],
			"statusCode": resp.StatusCode,
			"hostIP": hostIP,
		},
	}

	insertResult, err := responseCollection.InsertOne(nil, response)
	insertedID := insertResult.InsertedID.(primitive.ObjectID)
	log.Info().Str("insertedID", insertedID.Hex()).Msg("inserted job response")
	if err != nil {
		log.Error().Stack().Err(err).Msg("Can't read response")
	}
}

func panicIfError(err error) {
	if err != nil {
		log.Fatal().AnErr("err", err)
	}
}
