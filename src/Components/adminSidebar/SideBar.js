import React from 'react'
import './SideBar.css'

export default function SideBar() {
    return (
        <div>

            {/* begining of sidebar */}
                    <div class="col-3 sideBar">
                        <ul>
                            <li> 
                                <img className="side-item" src= "../images/Dashboard/overview.svg" alt="" />
                                 <p className="side-item"> Overview</p> 
                            </li>
                            <li> 
                              <img className="side-item" src= "../images/Dashboard/Combo Chart.svg" alt="" />
                                 <p className="side-item"> Reports</p> 
                            </li>

                            <li> 

                            <img className="side-item" src= "../images/Dashboard/Profiles.svg" alt="" />   
                                 <p className="side-item" > Accounts</p> 
                            </li>

                            <li className="logOut"> 

                            <img className="side-item" src= "../images/Dashboard/Shutdown copy.svg" alt="" />   
                            <p className="side-item" > Log Out</p> 
                            </li>
                        </ul>
                        
                
                    </div>
                    {/* end of sidebard */}
            
        </div>
    )
}
