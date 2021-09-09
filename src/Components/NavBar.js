import React from 'react'
import {Link} from "react-router-dom";

import SignIn from './SignInSignUp/SignIn'
import "./NavBar.css"


export default function NavBar() {
    return (
        <div className="mx-lg-0">
            <div id="navbar" className="mx-0 navbar-shadow">
                <div className="container-fluid px-0">
                    <nav id="navbar-example" className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="home">
                                <img src="../images/emergency-reporting-logo.svg" alt="logo"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarToggleExternalContent"
                                    aria-controls="navbarToggleExternalContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="float-left">
                                <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
                                    <ul className="navbar-nav">

                                        <li className="nav-item">
                                            <a className="nav-link navbar-link-item" href="#home">HOME</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link navbar-link-item" href="#features">FEATURES</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link navbar-link-item" href="#FAQs">FAQS</a>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Mversion">
                                                <a className="nav-link" id="download1" href="#download">Quick help</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/signin">
                                                <a className="nav-link" id="download1" href="#download"> LogIn</a>
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
