import React from 'react'
import {Link} from "react-router-dom";

import SignIn from '../SignInSignUp/SignIn'
import "./NavBarLite.css"


export default function NavBarLite() {
    return (
        <div className="mx-lg-0">
            <div id="navbar" className="mx-0 navbar-shadow">
                <div className="container-fluid px-0">
                    <nav id="navbar-example" className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Link to="/">
                                <a className="navbar-brand" href="/">
                                    <img src="../../images/emergency-reporting-logo.svg" alt="logo"/>
                                </a>
                            </Link>
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
                                            <Link to="/">
                                                <a className="nav-link navbar-link-item" href="/">HOME</a>
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
