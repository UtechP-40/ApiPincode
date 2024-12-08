import React,{useState} from 'react'

export default function Search({setPincode,data}) {
    const [formValue,setFormValue] = useState("")
    // const []
    // console.log(data,"Search")
    function lookup(e){
      // setFormValue(formValue)
      e.preventDefault();
      // console.log(e.target)
      setPincode(formValue)
    }
  return (
    <div>
      
      <div className='formDiv'>
      <h1 className='heading1'>Enter Pincode</h1>
      <form action="" onSubmit={lookup}>
      <input placeholder='Pincode' className='pinCodeInput' value={formValue} onChange={(e)=>{setFormValue(e.target.value);console.log(e.target)}} type="text" required />
      <button className="btn1" type="submit" >Lookup</button>
      </form>
      </div>
      {/* {daa[0]} */}
    </div>
  )
}
