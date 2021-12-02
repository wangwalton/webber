import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { exampleTables } from "./resources/table";
import AntDTable from "./components/table/AntdTable";
import { TableType } from "./types/StructuredData";
import AdminAgGridTable from "./components/table/AdminAgGridTable";
import { Button, Pagination } from "antd";
import "antd/dist/antd.css";
import UserAgGridTable from "./components/table/UserAgGridTable";

const IS_CHROME = import.meta.env.PROD;
console.log({ IS_CHROME });

function removeElements(elements: any) {
  let i = elements.length;
  while (i--) {
    elements[i].parentNode.removeChild(elements[i]);
  }
}

function stripHtml(s: any) {
  const div = document.createElement("div");
  div.innerHTML = s;
  removeElements(div.getElementsByTagName("style"));
  removeElements(div.getElementsByTagName("script"));

  // return '<div><p>123</p></div>'
  return div.innerHTML;
}

function getElementDimensions(htmlString: any) {
  const div = document.createElement("div");

  div.style.position = "absolute";
  div.style.visibility = "hidden";
  div.style.height = "auto";
  div.style.width = "auto";
  div.style.whiteSpace = "nowrap";

  div.innerHTML = htmlString;
  removeElements(div.getElementsByTagName("style"));
  removeElements(div.getElementsByTagName("script"));

  // return [div.clientWidth, div.clientHeight]
  return [200, 200];
}

const RawCell = ({ value }: { value: string }) => {
  // value = '<div><p>123</p><script>const a = 1;</script></div>'
  const html = stripHtml(value);

  return (
    <div className="RawCell" dangerouslySetInnerHTML={{ __html: html }}></div>
  );
};

const Table = ({ data, columns }: { data: any; columns: any }) => {
  const [gridApi, setGridApi] = useState(null);

  const onGridReady = (params: any) => {
    setGridApi(params.api);
  };
  const onBtnExport = () => {
    // @ts-ignore
    gridApi.exportDataAsCsv();
  };

  const columnDefs: any[] = [
    // {
    //   headerName: "nodeHtml",
    //   field: "nodeHtml",
    //   cellRenderer: "rawCell",
    //   autoHeight: true,
    // },
  ];
  const columnNames: string[] = columns.map((column: any) => column.name);
  columns.forEach((column: any) => {
    const { name, score } = column;
    if (name !== "nodeHtml") {
      columnDefs.push({
        headerName: `score: ${score.toFixed(2)} ${name}`,
        field: name,
      });
    }
  });

  const getRowHeight = (params: any) => {
    const [width, height] = getElementDimensions(params.data.nodeHtml);
    console.log(width, height);
    return height;
  };

  return (
    <>
      <div
        className="ag-theme-alpine"
        style={{ height: 800, width: 1000, paddingBottom: 28 }}
      >
        <button style={{ float: "right" }} onClick={() => onBtnExport()}>
          Download CSV
        </button>
        <AgGridReact
          frameworkComponents={{
            rawCell: RawCell,
          }}
          rowData={data}
          columnDefs={columnDefs}
          onGridReady={onGridReady}
          getRowHeight={getRowHeight}
        />
      </div>
    </>
  );
};

const BodyPlayground = ({ setTables }: { setTables: any }) => {
  const [body, setBody] = useState<string>("");
  console.log({ setTables });

  const submitBody = async () => {
    const response = await axios.post("http://localhost:8080/toTable", body);
    console.log({ response });
    setTables(response.data);
  };
  return (
    <>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={{ height: 300, width: 400 }}
      ></textarea>

      <button onClick={submitBody}>Submit</button>
    </>
  );
};

const App = () => {
  const [tables, setTables] = useState<TableType[]>([]);

  const setupChromeListener = () => {
    const getTableWrapper = async (html: string) => {
      const getTable = async (html: string) => {
        const resp = await axios.post("http://localhost:8080/toTable", html);
        return resp.data;
      };

      const tables = await getTable(html);
      setTables(tables);
    };

    chrome.runtime.onMessage.addListener(function (request, sender) {
      if (request.action === "getSource") {
        getTableWrapper(request.source);
      }
    });
  };

  if (IS_CHROME) {
    useEffect(setupChromeListener, []);
  }

  const getStructuredData = async () => {
    if (IS_CHROME) {
      chrome.tabs.executeScript(
        {
          file: "./js/getPageSource.js",
        },
        () => {}
      );
    } else {
      setTables(exampleTables);
    }
  };
  console.log({ tables });

  const [page, setPage] = useState<number>(1);
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={getStructuredData} type="primary">
          Execute on Current Page
        </Button>
        {tables.length > 1 && (
          <>
            <Pagination
              current={page}
              onChange={setPage}
              total={tables.length}
              style={{ paddingTop: 32 }}
            />
            <UserAgGridTable table={tables[page - 1]} />
          </>
        )}

        {/*<BodyPlayground setTables={setTables} />*/}
        {/*{tables.length > 1 && <AdminAgGridTable table={tables[page - 1]} />}*/}
      </header>
    </div>
  );
};

export default App;
