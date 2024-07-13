import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login/Login'
import Signup from './Login/Signup/Signup';

function App() {
  let [loginForm, setLoginForm]=useState(true)
  const toggleForm=()=>{
    setLoginForm(!loginForm);
  };

  const handleFormSubmit=(e)=>{
    e.preventDefault();
  };

  return (
    <>
    {loginForm ? (
      <Login onSubmit={handleFormSubmit} onToggleForm={toggleForm}/>
    ):(
      <Signup onSubmit={handleFormSubmit} onToggleForm={toggleForm}/>
    )}

    </>
      
  )
}

export default App
