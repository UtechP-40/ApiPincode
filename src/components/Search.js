import React,{useState} from 'react'

export default function Search({setData,daa}) {
    // const [apiData,setApiData] = useState([])
    async function lookup(e){
        e.preventDefault()
        console.log("hello1",daa)
        const responce = await fetch("https://api.postalpincode.in/pincode/110063")
        const data = await responce.json()
        // console.log(data[0].PostOffice)
        // setApiData(data)
        setData(data)
    }
  return (
    <div>
      <h1 className='heading1'>Enter Pincode</h1>
      <form action="" onSubmit={lookup}>
      <input className='pinCodeInput' type="text" required />
      <button type="submit" >Lookup</button>
      </form>
      {daa[0]}
    </div>
  )
}
