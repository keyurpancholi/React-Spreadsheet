import './App.css';
import Spreadsheet from 'react-spreadsheet'
import { useState } from 'react';
import {CSVLink} from 'react-csv'

function App() {

  const [data, editData] = useState([[{value: ""}, {value: ""}, {value: ""}, {value: ""}, {value: ""}], [{value: ""}, {value: ""}, {value: ""}, {value: ""}, {value: ""}], [{value: ""}, {value: ""}, {value: ""}, {value: ""}, {value: ""}], [{value: ""}, {value: ""}, {value: ""}, {value: ""}, {value: ""}], [{value: ""}, {value: ""}, {value: ""}, {value: ""}, {value: ""}], [{value: ""}, {value: ""}, {value: ""}, {value: ""}, {value: ""}], [{value: ""}, {value: ""}, {value: ""}, {value: ""}, {value: ""}], [{value: ""}, {value: ""}, {value: ""}, {value: ""}, {value: ""}], [{value: ""}, {value: ""}, {value: ""}, {value: ""}, {value: ""}], [{value: ""}, {value: ""}, {value: ""}, {value: ""}, {value: ""}]])

  const getData = () => {
    const metadata = [
      {"A": data[0][0].value, "B": data[0][1].value, "C": data[0][2], "D": data[0][3].value, "E": data[0][4].value},
      {"A": data[1][0].value, "B": data[1][1].value, "C": data[1][2], "D": data[1][3].value, "E": data[1][4].value},
      {"A": data[2][0].value, "B": data[2][1].value, "C": data[2][2], "D": data[2][3].value, "E": data[2][4].value},
      {"A": data[3][0].value, "B": data[3][1].value, "C": data[3][2], "D": data[3][3].value, "E": data[3][4].value},
      {"A": data[4][0].value, "B": data[4][1].value, "C": data[4][2], "D": data[4][3].value, "E": data[4][4].value}
    ]  
    return metadata
  }

  const getHeaders = () => {
    const headers = [
      {label: "", key: "A"},
      {label: "", key: "B"},
      {label: "", key: "C"},
      {label: "", key: "D"},
      {label: "", key: "E"}
    ]
    return headers
  }
  
  // const metadata = JSON.stringify(data)
  const csvReport = {
    headers: getHeaders(),
    data: getData(),
  }
  
  return (
    <>
    <h1>Export Spreadsheet on disc</h1>
    <div className='spreadsheet'>
      <Spreadsheet data={data} onChange={editData} />
    </div>
    <div className='export'><CSVLink filename='MyFile.csv' {...csvReport} bom="true"><button>Export</button></CSVLink></div>
    </>
  );
}

export default App;
