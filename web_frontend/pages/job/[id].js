import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import React, { useState } from "react";
import Link from "next/link";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import {
  ApolloClient,
  InMemoryCache,
  gql,
  useQuery,
  useMutation,
} from "@apollo/client";

const GET_JOB_RESPONSES = gql`
  query GetJobResponses($jobID: ID!) {
    getJobResponses(jobID: $jobID) {
      timescraped
      data
    }
  }
`;

const unionFields = (objects) => {
  return [...new Set(objects.reduce((r, e) => [...r, ...Object.keys(e)], []))];
};

const Job = () => {
  const router = useRouter();
  const { id } = router.query;

  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const { loading, error, data } = useQuery(GET_JOB_RESPONSES, {
    variables: { jobID: id },
  });

  let rowData = [];
  let columns = [];
  if (data) {
    rowData = data.getJobResponses.map((row) => {
      const jobResponse = JSON.parse(row.data);
      return { timescraped: row.timescraped, ...jobResponse };
    });
    columns = unionFields(rowData);
  }

  console.log(rowData, columns);

  return (
    <div className={styles.container}>
      <Head>
        <title>Webber App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1>Job ID: {id}</h1>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
          <AgGridReact rowData={rowData}>
            {columns.map((column) => (
              <AgGridColumn field={column} key={column} />
            ))}
          </AgGridReact>
        </div>
      </main>
    </div>
  );
};

export default Job;
