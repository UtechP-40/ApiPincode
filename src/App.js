import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./components/Search"
import Display from './components/Display';
function App() {
  const [data,setData] = useState(null)
  // setData(["sas","sas"])
  const [pincode,setPincode]=useState("")

  async function lookup(){
   
    // console.log("hello1")
    const responce = await fetch(`https://api.postalpincode.in/pincode/${pincode}`)
    const output = await responce.json()
    setData(output)
}
useEffect(()=>{
 pincode&&lookup()
},[pincode])
  return (
    <div>
      {
        !data?<Search setPincode={setPincode} data={data} />:<Display pincode={pincode} setPincode={setPincode} l data={data} />
      
      }
    </div>
  );
}

export default App;
