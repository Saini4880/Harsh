import React, { useState } from 'react'
import axios from 'axios'

function login({onclose}) {

    const[name, setName]=useState('')
    const[password, setpassword]=useState('')
    const[yn, setyn]=useState('')
    const[yp, setyp]=useState('')

    const handleSubmit=async(e)=>{
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
    <div>
       <form onSubmit={handleSubmit}>
       <h1>Login Page</h1>
      <lable>Enter User Name</lable>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      <label>Enter passwordword</label>
      <input type='passwordword' value={password} onChange={(e)=>setpassword(e.target.value)}/>
      <label>{yn}</label>
      <label>{yp}</label>
      <button onClick={onclose}>Close Page</button>
      <button type='submit'>Close Page</button>
       </form>
    </div>
  )
}

export default login
