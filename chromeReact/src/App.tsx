import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { exampleTables } from "./resources/table";

const { TabPane } = Tabs;

const IS_CHROME = false;

function removeElements(elements) {
  let i = elements.length;
  while (i--) {
    elements[i].parentNode.removeChild(elements[i]);
  }
}

export function stripHtml(s) {
  const div = document.createElement("div");
  div.innerHTML = s;
  removeElements(div.getElementsByTagName("style"));
  removeElements(div.getElementsByTagName("script"));

  // return '<div><p>123</p></div>'
  return div.innerHTML;
}

export function getElementDimensions(htmlString) {
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

const Table = ({ data, columns }) => {
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
  const columnNames: string[] = columns.map((column) => column.name);
  columns.forEach((column) => {
    const { name, score } = column;
    if (name !== "nodeHtml") {
      columnDefs.push({ headerName: `${name} score: ${score}`, field: name });
    }
  });
  console.log(data);

  const getRowHeight = (params) => {
    const [width, height] = getElementDimensions(params.data.nodeHtml);
    console.log(width, height);
    return height;
  };

  return (
    <>
      <div className="ag-theme-alpine" style={{ height: 800, width: 1000 }}>
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
      <button style={{ float: "right" }} onClick={() => onBtnExport()}>
        Download CSV export file
      </button>
    </>
  );
};

export const App = () => {
  const [tables, setTables] = useState([]);

  const getTable = async (html: string) => {
    const resp = await axios.post("http://localhost:8080/toTable", html);
    return resp.data;
  };

  useEffect(() => {
    async function getTableWrapper(html: string) {
      const tables = await getTable(html);
      setTables(tables);
    }

    if (IS_CHROME) {
      chrome.runtime.onMessage.addListener(function (request, sender) {
        if (request.action === "getSource") {
          getTableWrapper(request.source);
        }
      });
    }
    invokeScript();
  }, []);

  const invokeScript = async () => {
    if (IS_CHROME) {
      chrome.tabs.executeScript(
        {
          file: "./js/getPageSource.js",
        },
        () => {}
      );
    } else {
      const tables = exampleTables;
      // @ts-ignore
      setTables(tables);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={invokeScript}>Invoke</button>

        <Tabs defaultActiveKey="1">
          {tables.map((table) => (
            <TabPane tab={`Tab-${table.name}`} key={table.name}>
              <Table {...table} />
            </TabPane>
          ))}
        </Tabs>
      </header>
    </div>
  );
};

export default App;
