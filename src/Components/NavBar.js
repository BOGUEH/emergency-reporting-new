import React from 'react'
import {  Link} from "react-router-dom";
import SignIn from './SignInSignUp/SignIn'


export default function NavBar() {
    return (
        <div>
                <div id="navbar">  
                    <div className="container-fluid">
                    <nav id="navbar-example"class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                        <a class="navbar-brand" href="home">
                            <img src="../images/emergency-reporting-logo.svg" alt="logo" />
                         </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                            <div className="float-left">   
                        <div class="collapse navbar-collapse" id="navbarToggleExternalContent" >
                                <ul class="navbar-nav">
                                
                                <li class="nav-item">
                                <a class="nav-link" href="#home">HOME</a> 
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#features">FEATURES</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#FAQs">FAQS</a> 
                                </li>
                                <li class="nav-item">
                                    <Link to="/Mversion">
                                <a class="nav-link" id="download1"href="#download">Quick help</a> 
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/signin">
                                <a class="nav-link" id="download1"href="#download"> LogIn</a> 
                                    </Link>
                                </li>
                                </ul>
                            </div>

                            
                            </div> 
                            {/* this the the end of the nav-menu link */}
                        
                        </div>
                    </nav>
                </div>
                </div>
      </div>
    )
}
