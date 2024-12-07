import React from 'react'
import { IoSearch } from "react-icons/io5";
export default function Display({data1,setData}) {
    
    async function lookup(e){
        e.preventDefault()
        const responce = await fetch("https://api.postalpincode.in/pincode/110063")
        const out = await responce.json()
        // console.log(data[0].PostOffice)
        // setApiData(data)
        console.log("hello")
        setData(out)
    }
  return (
    <div>
      <IoSearch /><input type="text" />
    </div>
  )
}
