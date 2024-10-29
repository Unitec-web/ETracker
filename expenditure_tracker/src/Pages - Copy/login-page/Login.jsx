import React,{useState} from 'react';
import './Login.css';
import login_gif_icon from '../../Icons/login.gif';
import google from '../../Icons/googleButton.png';
import facebook from '../../Icons/FacebookButton.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
// this is how a login form should be presented.
function Login () {
    const [formData,setFormData]=useState({
        username:'',
        password:'',
        rememberMe:false,
    })

    const handleChange =(e)=>{
        const {name,value,checked, type} = e.target
        setFormData(prevData=>{
            return {...prevData,[name]:type ==="checkbox"?checked:value}
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        // here you would normally send the data to your server for authentication
        // in a real-world application, you would also want to handle errors and display messages to the user
        // this is just a mockup
    }
    return(
        <div className="container text-center ">
            <div className="logindiv row">
            <div className='Login-image col'>
                <img src={login_gif_icon} alt="Login GIF" className="img-fluid" />
            </div>
            <div className='Login col shadow p-3 mt-2 mb-2 bg-body-tertiary rounded'>
                <div className='header'>
                    Unity <br />Money Management
                </div>
                <div className='underline'> </div>
                <form onSubmit={(e)=>{handleSubmit(e)}} className='inputs'>
                    <input onChange={handleChange} value={formData.username} className='logininput  ' type="text" placeholder='Username' name='username'/>
                    <input onChange={handleChange} value={formData.password} className='logininput' type="password" placeholder='Password' name='password'/>
                    
                <section className='rememberme'>
                    <input onChange={handleChange} checked={formData.rememberMe} type="checkbox" name='rememberMe' />
                    <>Remember Me !</>
                </section>
                <p className='terms'>By clicking Login, you agree to our <a href="">Terms & Conditions</a> and <a href="">Privacy Policy</a></p>
                
                    <button className='submit login_button' type='submit'>Login</button>
              
                </form>
                {/* this button will direct you to the page to handle forgotten passwords */}
                <div className='forgotten_password'>Forgotten Password?</div>
                <div className='underline'></div>
                <div className='row'>
                  {/* the authentication logic will be applied on this 2 buttons */}
                    <div className='col'><button><img className='autologin' src={google} alt="" /></button></div>
                    <div className='col'><button><img className='autologin' src={facebook} alt="" /></button></div>
                </div>
                <div>
                    <p className='register'>Don't have an account?</p>
                    <Link to ='/register' style={{textDecoration:'none'}}><button className='submit '  type='submit'>Create One</button> </Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login

