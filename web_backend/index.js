import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import { readFileSync } from 'fs'

// TODO
import MONGODB from 'mongodb'

import dotenv from 'dotenv'
import cors from 'cors'
import {jobSchema} from "./jobSchema.js";
const { MongoClient, ObjectID } = MONGODB

dotenv.config()
const MONGO_URL = process.env.MONGO_URL

const mongoClient = await MongoClient.connect(MONGO_URL, {
    useUnifiedTopology: true,
  })

const db = mongoClient.db('webber')
const jobs = db.collection('jobs')
const responses = db.collection('responses')

const typeDefs = readFileSync('./schema.graphql').toString('utf-8')

function parseJoiError(error) {
  return error.details.map(error => {
    return {
      field: error.path.join('.'),
      message: error.message,
    }
  });
}

const resolvers = {
  Query: {
    getMyJobs: async () => {
      console.log('getMyjobs:')
      const res = await jobs.find().toArray()
      console.log(res)
      return res
    },

    getJobResponses: async (_, { jobID }) => {
      jobID = new ObjectID(jobID)
      console.log('getJobResponse: ', { jobID })
      const res = await responses.find({ jobID }).toArray()
      console.log(res)
      res.map((el) => {
        el.data = JSON.stringify(el.data)
      })
      console.log(res)
      return res
    },
  },
  Mutation: {
    createJob: async (_, { job }) => {
      console.log(job);
      const {error} = jobSchema.validate(job)
      if (error) {
        return {
          errors: parseJoiError(error)
        }
      }

      delete job._id;
      job.userID = new ObjectID();
      try {
        const res = await jobs.insertOne(job);
        return {_id: job._id};
      } catch (err) {
        console.log(err);
        return "";
      }
    },
    updateJob: async (_, { job }) => {
      job.userID = new ObjectID()
      const {error} = jobSchema.validate(job)
      if (error) {
        return false
      }
      const _id = new ObjectID(job._id)
      delete job._id
      try {
        const res = await jobs.updateOne({ _id }, { $set: job })
      } catch (err) {
        console.log(err)
        return false
      }
      return true
    },
    deleteJob: async (_, { jobID }) => {
      jobID = new ObjectID(jobID)
      try {
        await jobs.deleteOne({ _id: jobID })
        await responses.deleteMany({ jobID: jobID })
      } catch (err) {
        console.log(err)
        return false
      }
      return true
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
app.use(cors())
server.applyMiddleware({ app })

app.listen({ port: process.env.PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`),
)
