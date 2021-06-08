import React, { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import { ColDef } from 'ag-grid-community'
import { Tabs } from 'antd'
import 'antd/dist/antd.css'
import { exampleTables } from './resp'

const { TabPane } = Tabs

const IS_CHROME = false

const Table = ({ rowData }: {rowData : any}) => {
  const getColumns = (rowData: any[]) : string[] => {
    const keys = new Set()
    for (const data of rowData) {
      for (const key in data) {
        keys.add(key)
      }
    }
    // @ts-ignore
    return Array.from(keys)
  }

  const columnNames : string[] = getColumns(rowData)
  const columnDefs = columnNames.map((name): ColDef => ({ headerName: name, field: name }))

  return (
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
        />
      </div>
  )
}

export const App = () => {
  const [rowDatas, setRowDatas] = useState([])

  const getTable = async (html: string) => {
    const resp = await axios.post('http://localhost:8080/toTable', html)
    return resp.data
  }

  useEffect(() => {
    async function getTableWrapper (html: string) {
      const tables = await getTable(html)
      setRowDatas(tables)
    }

    if (IS_CHROME) {
      chrome.runtime.onMessage.addListener(function (request, sender) {
        if (request.action === 'getSource') {
          getTableWrapper(request.source)
        }
      })
    }
  }, [])

  const invokeScript = async () => {
    if (IS_CHROME) {
      chrome.tabs.executeScript({
        file: './js/getPageSource.js',
      }, () => {})
    } else {
      const tables = exampleTables
      // @ts-ignore
      setRowDatas(tables)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={invokeScript}>Invoke</button>

        <Tabs defaultActiveKey="1">
          {rowDatas.map(rowData => (
              <TabPane tab={'Tab'} key={Math.random()}>
              <Table rowData={rowData}/>
              </TabPane>

          ))}
        </Tabs>
      </header>
    </div>
  )
}

export default App
