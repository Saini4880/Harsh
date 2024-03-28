import React, {useState} from 'react'
import axios from 'axios'

function Sign({onClose}) {

    const[name, setName]=useState('')
    const[password, setpassword]=useState('')
    const[yn, setyn]=useState('')
    const[yp, setyp]=useState('')

    const submitsignpage=async(e)=>{
        e.preventDefault();
        try {

            setyn(name)
            setyp(password)
            console.log(name)
            console.log(password)

            
        } catch (error) {
            console.log("error",error)
        }
    }


  return (
    <form onSubmit={submitsignpage}>
      <h1>Sign Page</h1>
      <div>
      <lable>Enter User Name</lable>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      <label>Enter passwordword</label>
      <input type='passwordword' value={password} onChange={(e)=>setpassword(e.target.value)}/>
      </div>
      <div>
      <label>{yn}</label>
      <label>{yp}</label>
      </div>
      <button onClick={onClose}>Close Page</button>
      <button type='submit'>Submit Page</button>
    </form>
  )
}

export default Sign
