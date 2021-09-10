import React from 'react'
import './SignUp.css';
import './Signin.css';
import {Link} from "react-router-dom";
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import VisibilityOffSharpIcon from '@material-ui/icons/VisibilityOffSharp';
import {useState} from 'react'
import Navbar from '../NavBar'

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);


    return (
        <div className="container signin-container">

            <div className="form">

                <h1 className="signin-login-text"> Sign in</h1>
                <p> Welcome Back!</p>
                <form action="" className="signin-form forms d-flex flex-column">
                    <input className="signin-form-field" type="email" id=" email" placeholder="Enter Email address "/>
                    <br/>
                    <input className="signin-form-field" type={(showPassword) ? "text" : "password"} placeholder="Enter Password"/>
                    {
                        (showPassword) ?
                            <VisibilityOffSharpIcon className="eyeHide signin-visibility-icon" onClick={() => setShowPassword(false)}/> :
                            <VisibilitySharpIcon onClick={() => setShowPassword(!showPassword)}/>
                    }

                    <p><a href="http://localhost:3000/signup">Forgot password? Click here</a></p>
                    <Link to="/admindb">
                        <button  href="#download"  id="download-btn" className="holo-btn px-lg-5 shadow-sm"> Log in</button>

                    </Link>
                </form>

            </div>

        </div>
    )
}
