import React from 'react';
import './AddAdmin.css';
import  {useState} from 'react';
import axios from 'axios';

export default function AddAdmin() {
    const [slug, setSlug] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [institution, setInstitution] = useState('')



  const addContact = ()=>{
      axios({
          method: 'post',
          url: 'http://emergency-report-app.herokuapp.com/api/profile/create',
          headers: {
        'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MTMzNTdkY2UxMGJjZjA3MjhlNWJkMzciLCJpYXQiOjE2MzA3NTUxNzgsImV4cCI6MTYzMzM0NzE3OH0.rQt9linzcIk9_WyqxvSahKl9B6Fhss9ioGY_dv9cc8E`
          },
          data: {

              institution,
              slug,
             address,
             phoneNo
          }
      })
      
     
  
    
  }
            

    return (

                <div className="container">
                            <div className="header">
                                 <p>Welcom</p>
                                <h3> Enter New Emergency Service Details Below</h3>
                            </div>
                              <div>
                                    <input type="file" name="file"  />
                                    <div>
                                        <input type="text" name=""
                                         className="forms container-fluid"
                                         placeholder="Address"
                                         onChange={(e)=>setAddress(e.target.value)}
                                     />

                                        <select name="Agency-Ministry"  onChange={(e)=>setInstitution(e.target.value)} className="forms container-fluid">

                                            <option value=" ">Agency/Ministry</option>
                                            <option value="Road-Safety-Service">Road Safety Service</option>
                                            <option value="Fire-Emergency-Service">Fire Emergency Service</option>
                                            <option value="ENigerian-Police-Service">Nigerian Police Service</option>
                                            <option value="Medical-Service">Medical Service</option>
                                        </select> 
                                    </div>
                            </div>

                            <div className="second">

                            <select name="Local Government Area" onChange={(e)=>setSlug(e.target.value)} className="forms container-fluid">
                                                            <option value=" ">Local Government Area</option>
                                                            <option value="Aniocha-North">Aniocha North</option>
                                                            <option value="Aniocha-South">Aniocha South</option>
                                                            <option value="Bomadi">Bomadi</option>
                                                            <option value="Burutu">Burutu</option>
                                                            <option value="Ethiope-East">Ethiope East</option>
                                                            <option value="Ethiope-West">Ethiope West</option>
                                                            <option value="Ika-North-East">Ika North East</option>
                                                            <option value="Ika-South">Ika South</option>
                                                            <option value=" Isoko-North">Isoko North</option>
                                                            <option value=" Isoko-South">Isoko South</option>
                                                            <option value=" Ndokwa-East">Ndokwa East</option>
                                                            <option value=" Ndokwa-West">Ndokwa West</option>
                                                            <option value=" Oshimili-North">Oshimili North</option>
                                                            <option value=" Oshimili-South">Oshimili South</option>
                                                            <option value=" Patani">Patani</option>
                                                            <option value=" Sapele">Sapele</option>
                                                            <option value=" Udu">Udu</option>
                                                            <option value=" Ughelli-North">Ughelli North</option>
                                                            <option value=" Ughelli-South">Ughelli South</option>
                                                            <option value=" Ukwuani">Ukwuani</option>
                                                            <option value=" Uvwie">Uvwie</option>
                                                            <option value=" Warri">Warri</option>
                                                            <option value=" Warri-North">Warri North</option>
                                                            <option value=" Warri-South">Warri South</option>
                                                            <option value=" Warri-South-West">Warri South West</option>

                                                        </select>
                             <input type="number" className="forms container-fluid"
                              placeholder="Enter Phone Contact" 
                              onChange={(e)=>setPhoneNo(e.target.value)}
                              />
                            </div>

                            <div className="third container-fluid">

                            <button className="forms contactbtn container-fluid"> Upload Service Logo  
                                                <span className="small"> (PNG/SVG Formats Only)</span>
                                                </button>

                            <button className="forms contactbtn container-fluid"> Add New Contact </button>
                            
                            </div>
                            <button className="container-fluid" onClick={addContact}>save</button>

                  </div>
                           
                      

              




             
       
    )
}
