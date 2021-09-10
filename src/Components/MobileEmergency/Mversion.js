import React from 'react'
import './Mversion.css'
import { Link } from "react-router-dom";
import NavBar from '../NavBar';

export default function Mversion() {
    return (
        <div>
        <div class="mobile-view mversion-container" >
                        <div className=" d-flex flex-wrap col"> 
                                <Link to="/roadSafety"> 
                                <div className=" port roadSafety">
                                <img class="rounded mx-auto d-block" src="../images/Dashboard/FRSC.svg" alt="logo" />
                                <h3 className="text-center">Road Safety Service</h3>
                                <p className="text-center"> 14 Locations Added</p>
                                </div>
                                </Link>

                                 <Link to="/fireservice">
                                <div className=" port FES">
                                <img class="rounded mx-auto d-block" src="../images/Dashboard/fireService.svg"  alt="logo" />
                                <h3 className="text-center">Fire Emergency Service</h3>
                                <p className="text-center"> 14 Locations Added</p>

                                </div>
                                </Link>
                                
                                <Link to="/policeservice">
                                <div className=" port NPService">
                                <img class="rounded mx-auto d-block" src="../images/Dashboard/NPF.svg" alt="logo" />
                                <h3 className="text-center">Nigerian Police Service</h3>
                                <p className="text-center"> 14 Locations Added</p>
                                </div>
                                </Link>

                                <Link to="/medicalservice">
                                <div className=" port Medical service">
                                <img class="rounded mx-auto d-block" src="../images/Dashboard/MedicalService.svg" alt="logo" />
                                <h3 className="text-center">Medical Service</h3>
                                <p className="text-center"> 14 Locations Added</p>
                                </div>
                                </Link>

                               
                        </div>

                    </div>
                
               

        </div>
    )
}
