import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./components/Search"
import Display from './components/Display';
function App() {
  const [data,setData] = useState([])
  // setData(["sas","sas"])
  
  return (
    <div>
      {
        data?<Search setData={setData} daa={data} />:<Display setData={setData}  data={data} />
      
      }
    </div>
  );
}

export default App;
