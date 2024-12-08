import React,{ useState, useEffect } from 'react'
import { IoSearch } from "react-icons/io5";
export default function Display({data,pincode}) {
    // console.log(data,"Display")
    const [filter,setFilter]= useState(data[0].PostOffice)  
    const [inpVal,setInpVal]= useState("") 
    useEffect(()=>{
      // console.log(filter)
      const arrByID = data[0].PostOffice.filter((val)=>{
        // console.log(val)
        if(val.Name.toLocaleLowerCase().includes(inpVal.toLocaleLowerCase())){
          // console.log(val)
          return true
        }
        return false
      })
      setFilter(arrByID)
    },[inpVal])
  return (
    <>
    <h1 className="pinHead" >Pincode:{pincode}</h1>
    <span className='boldmsg' >Message: </span><sapn className="bolddiscrip">{data[0].Message}</sapn>
    <form action="" className="filterForm">
    <button className="filterBtn" type="submit"><IoSearch className="svgSearch" /></button><input type="text" placeholder="Filter" className="filterInput" value={inpVal} onChange={(e)=>{ setInpVal(e.target.value)}} />
    </form>
    <div className='container'>
      {filter.map((value)=>{
        return(
          <div className='card'>
          <h3>Name:{value.Name}</h3>
          <h3>Branch Type:{value.BranchType}</h3>
          <h3>Delivery Status:{value.DeliveryStatus}</h3>
          <h3>District:{value.District}</h3>
          <h3>Division:{value.Division}</h3>
          </div>
        )
      })}
    </div>
    </>
  )
}
