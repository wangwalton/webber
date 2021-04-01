import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

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

const CREATE_JOB = gql`
  mutation CreateJob($input: JobInput!) {
    createJob(job: $input)
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_MY_JOBS);
  //console.log({ loading, data });
  const getJobHTML = (job) => {
    //console.log("job: ", job);
    return (
      <tr key={job._id}>
        <th>{job.request.url}</th>
        <th>{job.schedule.interval} </th>
        <th>
          <Link href={`/job/${job._id}`}>
            <a>Details</a>
          </Link>
        </th>
      </tr>
    );
  };

  const [createJob, response] = useMutation(CREATE_JOB);
  //console.log("Create response: ", response.data);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    //console.log("hi", data);
    try {
      createJob({
        variables: {
          input: data,
        },
      });
    } catch (e) {
      //console.log(e);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Webber App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input name="request.url" placeholder="URL" ref={register} />
            {/* Can use introspection here https://stackoverflow.com/questions/54007916/how-to-use-graphql-enums-in-frontend-code-e-g-in-a-select */}
            <select name="request.method" ref={register}>
              <option value="GET">GET</option>
              <option value="POST">POST</option>
            </select>
            <br></br>
            <label htmlFor="schedule.interval">Run Every X Seconds: </label>
            <input
              name="schedule.interval"
              type="number"
              placeholder={1}
              ref={register({ valueAsNumber: true })}
            />
            <br></br>
            <label htmlFor="schedule.startAt">
              Start At (Unix Timestamp):{" "}
            </label>
            <input
              name="schedule.startAt"
              placeholder={1}
              ref={register({ valueAsNumber: true })}
            />
            <br></br>
            <input type="submit" />
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
                </tr>
              </thead>
              <tbody>
                {!loading && data.getMyJobs.map((job) => getJobHTML(job))}
              </tbody>
            </table>
          </form>
        </div>
      </main>
    </div>
  );
}
