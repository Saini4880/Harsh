import { useState } from 'react';
import './App.css';
import Route from 'react-router-dom'
import Login from './components/login'
import Sign from './components/sign'

function App() {

  const[modal, setModal]=useState(false)
  const[md, setMd]=useState(false)
  
  const openLoginPage=()=>{
    setModal(true)
    setMd(false)
  }
  const closelogin=()=>{
    setModal(false)
  }
  const opensignup=()=>{
    setMd(true);
    setModal(false);
  }
  const closesign=()=>{
    setMd(false)
  }


  return (
    <div>
      <button onClick={openLoginPage}>Login</button>
      <button onClick={opensignup}>Sign Up</button>

      {modal && <Login onclose={closelogin}/>}
      {md && <Sign onClose={closesign}/>}
    </div>
  );
}

export default App;
