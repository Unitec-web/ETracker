import React from "react";
import "./sign-up.css";
import userprofile from "../../Icons/userprofile1.png";
import google from "../../Icons/google.png";
import facebook from "../../Icons/facebook.png";

function SignUp() {
  return (
    <div className="sign-upContainer">
      <div className="sign-upFlexContainer">
        <div className="sign-leftContainer">
          <img src={userprofile} alt="" />
          <p className="shotNote">Already have an Account?</p>
          <button className="login-btn">Login</button>
        </div>
        <div className="sign-rightContainer">
          <p>The starred fields are obligatory</p>
          <div className="form">
            <form action="">
              <label htmlFor="text">Full Name</label>
              <input type="text" placeholder="Name" />
              <label htmlFor="text">User Name</label>
              <input type="text" placeholder="First Name" />
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" />
              <label htmlFor="text">Phone </label>
              <input type="text" placeholder="Phone Number" />
              <label htmlFor="text">Password</label>
              <input type="text" placeholder="Password" />
              <button className="signup-btn">Sign Up</button>
            </form>
          </div>
          <div className="sign-with-thirdPart">
            <button class="btn-google">
              <img src={google} alt="" />
              Sign Up with Google
            </button>
            <button class="btn-facebook">
              <img src={facebook} alt="" />
              Sign Up with Facebook
            </button>
          </div>

          <div className="sign-with-thirdPart">
            
            <button className="login-btn">Login to Existing Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
