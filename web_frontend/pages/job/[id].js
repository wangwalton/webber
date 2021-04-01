import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import React, { useState } from "react";

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

const Job = () => {
  const router = useRouter();
  const { id } = router.query;

  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState([]);

  const { loading, error, data } = useQuery(GET_JOB_RESPONSES, {
    variables: { jobID: id },
  });
  if (!loading) {
    console.log(data);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Webber App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1>Job ID: {id}</h1>
        </div>
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
          <AgGridReact rowData={rowData}>
            <AgGridColumn field="timescraped"></AgGridColumn>
          </AgGridReact>
        </div>
      </main>
    </div>
  );
};

export default Job;
