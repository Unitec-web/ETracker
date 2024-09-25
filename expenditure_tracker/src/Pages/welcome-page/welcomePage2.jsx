import React from 'react'
import './Welcome.css'
import ellipDack from "../../Icons/ellipse1.png";
import ellipLight from "../../Icons/ellipse2.png";
import sportTeam from "../../Icons/sport-team 1.png";
import rightArrow from "../../Icons/Arrow_right.png";
import leftArrow from "../../Icons/LeftArrow.png";


function WelcomePage1() {
  return (
    <div className="container">

    <div className="flex-container">
      <div className="left-column">
        <div className="welcome-message">
          <div className="welcome-heading">
            {" "}
            <h1>Unity</h1>
            <h1>Money Manager</h1>
          </div>
          <p className="welcome-paragraph">
            Unity money Manager is a web and mobile application that can help
            you manage your finance in a simple way
          </p>
        </div>
      </div>
      <div className="right-column">
        <img src={sportTeam} alt="" />
      </div>
    </div>

    <div className="flex-container2">
      <div className="ellipse">
      <div className="ellipses-img">
        <div className="left-arrow">
          <img className="left-arrow" src={leftArrow} alt=""width={20} height={20} />
        </div>
     
    
      <div> <img src={ellipDack} alt="" width={10} height={10} /></div>
     
   <div><img src={ellipLight} alt=""width={10} height={10} /></div>
    </div>
      </div>
      <div className="right-btn">
     
        <div className="btn-create-Acount">
          <button>Create Acount</button></div>
        <div className="btn-login">  <button>Login</button></div>

        
 
      </div>
      <img className="leftarrow" src={leftArrow} alt=""width={10} height={30} />
    </div>
  </div>
  )
}

export default WelcomePage1
