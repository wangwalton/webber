import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import JobForm from "../components/jobForm";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { AgGridColumn, AgGridReact } from "ag-grid-react";

import {
  ApolloClient,
  InMemoryCache,
  gql,
  useQuery,
  useMutation,
} from "@apollo/client";
import { useForm } from "react-hook-form";

const GET_MY_JOBS = gql`
  {
    getMyJobs {
      _id
      request {
        url
        method
        headers {
          key
          value
        }
      }
      schedule {
        interval
        startAt
      }
    }
  }
`;

const DELETE_JOB = gql`
  mutation DeleteJob($jobID: ID!) {
    deleteJob(jobID: $jobID)
  }
`;

export default function Home() {
  const { loading, error, data, refetch } = useQuery(GET_MY_JOBS);
  const [deleteJob] = useMutation(DELETE_JOB, {
    onCompleted: () => {
      refetch();
    },
  });
  const deleteJobFactory = (jobID) => {
    return () => {
      deleteJob({
        variables: { jobID },
      });
    };
  };

  const getJobHTML = (job) => {
    return (
      <tr key={job._id}>
        <th>{job.request.url}</th>
        <th>{job.schedule.interval} </th>
        <th>
          <Link href={`/job/${job._id}`}>
            <a>Details</a>
          </Link>
        </th>
        <th>
          <button onClick={deleteJobFactory(job._id)}>Delete Job</button>
        </th>
      </tr>
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Webber App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <JobForm refetchJobs={refetch} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>My Jobs: </h1>
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Every X Seconds:</th>
              <th>Details:</th>
              <th>Delete Job:</th>
            </tr>
          </thead>
          <tbody>{data && data.getMyJobs.map((job) => getJobHTML(job))}</tbody>
        </table>
      </main>
    </div>
  );
}
