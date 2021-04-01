import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { readFileSync } from "fs";

// TODO
import MONGODB from "mongodb";
const { MongoClient, ObjectID } = MONGODB;

import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

const mongoClient = await MongoClient.connect(MONGO_URL, {
  useUnifiedTopology: true,
});
const db = mongoClient.db("webber");
const jobs = db.collection("jobs");
const responses = db.collection("responses");

const typeDefs = readFileSync("./schema.graphql").toString("utf-8");

const resolvers = {
  Query: {
    getMyJobs: async () => {
      console.log("getMyjobs:");
      const res = await jobs.find().toArray();
      console.log(res);
      return res;
    },

    getJobResponses: async (_, { jobID }) => {
      jobID = new ObjectID(jobID);
      console.log("getJobResponse: ", { jobID });
      const res = await responses.find({ jobID }).toArray();
      console.log(res);
      res.map((el) => {
        el.data = JSON.stringify(el.data);
      });
      console.log(res);
      return res;
    },
  },
  Mutation: {
    createJob: async (_, { job }) => {
      console.log(job);
      delete job._id;
      job.userID = new ObjectID();
      try {
        const res = await jobs.insertOne(job);
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
    updateJob: async (_, { job }) => {
      job.userID = new ObjectID();

      const _id = new ObjectID(job._id);
      delete job._id;
      try {
        const res = await jobs.updateOne({ _id }, { $set: job });
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(cors());
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
