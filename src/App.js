import React from 'react';
import { useState, useEffect } from 'react';
import TabBar from './TabBar';

function App() {
  const api_Url = 'https://jsonplaceholder.typicode.com/';
  const [data, setData] = useState([]);
  const [reqType, setReqType] = useState('users');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${api_Url}${reqType}`);
        const items = await response.json();
        console.log(items);
        setData(items);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [reqType])

  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <TabBar reqType={reqType} setReqType={setReqType} />
        {/* <div className="dataList">
          <ul>
            {data.map(item => (
              <li>
                {JSON.stringify(item)}
              </li>
            ))}
          </ul>
        </div> */}
        <div className='TableList'>
          <table>
            <tbody>
              {data.map(item => (
                <tr>
                  {Object.entries(item).map(([key, val]) => {
                    return (
                      <td>{JSON.stringify(val)}</td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </body>
    </div>
  );
}

export default App;
