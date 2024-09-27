import React from 'react';
import './Login.css';
import login_gif_icon from '../Assets/login.gif';
import google from '../Assets/google.png';
import facebook from '../Assets/Facebook.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login () {
    return(
        <div className="container text-center">
            <div className="logindiv row">
            <div className='Login-image col'>
                <img src={login_gif_icon} alt="Login GIF" class="img-fluid" />
            </div>
            <div className='Login col shadow p-3 mt-2 mb-2 bg-body-tertiary rounded'>
                <div className='header'>
                    Unity <br />Money Management
                </div>
                <div className='underline'>

                </div>
                <div className='inputs'>
                    <div className='input'>
                        <input type="text" placeholder='Username'/>
                    </div>
                    <div className='input'>
                        <input type="password" placeholder='Password' />
                    </div>
                </div>
                <div className='rememberme'>
                    <div className=''><input type="checkbox" /></div>
                    <div className=''>Remember Me!</div>
                </div>
                <div className='terms'>By clicking Login, you agree to our <a href="">Terms & Conditions</a> and <a href="">Privacy Policy</a></div>
                <div className='submit login_button'>
                    <button type='submit'>Login</button>
                </div>
                <div className='forgotten_password'><a href="#">Forgotten Password?</a></div>
                <div className='underline'></div>
                <div className='row'>
                    <div className='col'><button><img className='autologin' src={google} alt="" /></button></div>
                    <div className='col'><button><img className='autologin' src={facebook} alt="" /></button></div>
                </div>
                <div>
                    <div className='register'>Don't have an account?</div>
                    <div className='submit '><button type='submit'>Create One</button> </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login