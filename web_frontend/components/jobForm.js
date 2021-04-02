import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

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

const CREATE_JOB = gql`
  mutation CreateJob($input: JobInput!) {
    createJob(job: $input)
  }
`;

const JobForm = ({ refetchJobs }) => {
  const [createJob] = useMutation(CREATE_JOB, {
    onCompleted: () => {
      console.log("hi");
      refetchJobs();
    },
  });

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(123);
    try {
      createJob({
        variables: {
          input: data,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
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
      <label htmlFor="schedule.startAt">Start At (Unix Timestamp): </label>
      <input
        name="schedule.startAt"
        placeholder={1}
        ref={register({ valueAsNumber: true })}
      />
      <br></br>
      <input type="submit" />
    </form>
  );
};

export default JobForm;
