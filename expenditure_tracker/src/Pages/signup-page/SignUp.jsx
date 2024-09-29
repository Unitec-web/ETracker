import React, {useState} from "react";
import "./SignUp.css";
import userprofile from "../../Icons/userprofile1.png";
import LabledButton from "../../Components/LabledButton"
import ButtonSignUp from "../../Components/ButtonSignUp"
import google from "../../Icons/google.png"
import facebook from "../../Icons/facebook.png"
import { Link } from "react-router-dom";
function SignUp() {
  const [labledButton,setLabledButton]=useState({
    username:"storm", 
    firstname:"",  
    email:"", 
    phonenumber:"",
    password:"" 
  })
  const handleLabledButton = (e)=>{
    const {name,value}=e.target
    setLabledButton(prevVal=>{
      return {...prevVal,[name]:value}
    })
  }
 const handleSubmit =(e)=>{
  e.preventDefault()
  console.log(labledButton.username)
 
 }
  return (
    <div className="sign-upContainer">
      <div className="sign-upFlexContainer">
        <div className="sign-leftContainer">
          <img src={userprofile} alt="" />
          <p className="shotNote">Already have an Account?</p>
          
        
            <Link to="/login" className="login-btn" style={{ color: "white", textDecoration: "none" }}>
                <button style={{ background: "none", color: "white", border: 'none' }}>
                    Login
                </button>
            </Link>
      
          
        </div>
        <div className="sign-rightContainer">
          <p>The starred fields are obligatory</p>
          <div className="form">
            <form  action="" onSubmit={e=>{handleSubmit(e)}} >
              <LabledButton name="username" onChange={handleLabledButton} myvalue={labledButton.username}  type="text" id="l1" lable="Full Name" placeholder ="Name" />
              <LabledButton name="firstname" onChange={handleLabledButton} myvalue={labledButton.firstname}  type="text" id="l2" lable="User Name" placeholder ="First Name" />
              <LabledButton name="email"  onChange={handleLabledButton} myvalue={labledButton.email} type="email" id="l3" lable="Email" placeholder ="Email" />
              <LabledButton name="phonenumber"  onChange={handleLabledButton} myvalue={labledButton.phonenumber} type="text" id="l4" lable="Phone" placeholder ="Phone Number" />
              <LabledButton name="password"  onChange={handleLabledButton} myvalue={labledButton.password} type="text" id="l5" lable="Password" placeholder ="Password" /> 
              <button className="signup-btn">Sign Up</button>
            </form>
          </div>
          <div className="sign-with-thirdPart">
          <ButtonSignUp img={google} title="Sign Up with Google"/>
          <ButtonSignUp img={facebook} title="Sign Up with Facebook"/>
          <Link to="/login" className="login-btn" style={{ color: "white", textDecoration: "none" }}>
                <button style={{ background: "none", color: "white", border: 'none' }}>
                    Login With Existing Account
                </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
