import React, { useState } from 'react'
import { doSignOut } from '../../Firebase/auth';
import { useAuth } from '../../context/context';
import { Navigate } from 'react-router-dom';

function HomePage() {
  const [isLoggingOut,setIsLoggingOut]=useState(false)
  const {isloggedIn} = useAuth()
  const handleClick = (e)=>{
    e.preventDefault();
if(!isLoggingOut){
  setIsLoggingOut(true);
  doSignOut()
}
  }
  return (
    <div>
      {/* this is just to test code. feel free to comment the code below and work */}
    {!isloggedIn && (<Navigate to={"/"} replace={true} />)}
     <p style={{color:"black", fontSize:"5rem"}}>this is the final home page when user logs in</p> 
      <button 
      style={{
        background:"blue",
        color:"white", 
        borderRadius:'25px',
        width:"7rem",
        height:"3rem",
        margin:"5px auto 0",
        marginLeft:"50%"
      }}
      onClick={(e)=>{handleClick(e)}}
      >Logout</button>
    </div>
  )
}

export default HomePage
