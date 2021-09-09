import React from 'react';
import  {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function AddAdmin() {
  let history = useHistory();
    const [slug, setSlug] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [institution, setInstitution] = useState('')
    const [_id, set_id] = useState('null')



  const Update = ()=>{
      axios({
          method: 'put',
          url: `http://emergency-report-app.herokuapp.com/api/profile/update/${_id}`,
          headers: {
        'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MTMzNTdkY2UxMGJjZjA3MjhlNWJkMzciLCJpYXQiOjE2MzA3NTUxNzgsImV4cCI6MTYzMzM0NzE3OH0.rQt9linzcIk9_WyqxvSahKl9B6Fhss9ioGY_dv9cc8E`
          },
          data: {
                _id,
              institution,
              slug,
             address,
             phoneNo
          }
      }).then(()=>{
        history.push('/admindb')
      })
      
   
  }
    
  useEffect(()=>{
   
      setInstitution(localStorage.getItem('Institution'));
     setAddress(localStorage.getItem('Address'));
     setSlug(localStorage.getItem('slogan'));
     setPhoneNo(localStorage.getItem('PhoneNo'));
     set_id(localStorage.getItem('ID'));
    
  },[])

    return (

                <div className="container">
                            <div className="header">
                                 <p>Welcom</p>
                                <h3> Enter New Emergency Service Details Below</h3>
                            </div>
                              <div>
                                    <input className="form-control" type="file" name="file"  />
                                    <div>
                                        <input type="text" name="address"
                                         className="form-control"
                                         placeholder="Address"
                                         value={address}
                                         onChange={(e)=>setAddress(e.target.value)}
                                     />

                                        <select name="Agency-Ministry"  onChange={(e)=>setInstitution(e.target.value)} className="form-control">
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
                                    </div>
                            </div>
                            <br/>
                            <div className="second">

                            <select name="Local Government Area" onChange={(e)=>setSlug(e.target.value)} className=" form-control">
                                                       <option value=" ">ACCRONY</option>
                                                            <option value="NPS">NPS</option>
                                                            <option value="FES">FES</option>
                                                            <option value="MES">MES</option>
                                                            <option value="RSS">RSS</option>

                                                        </select>
                             <input type="number" value={localStorage.getItem("PhoneNo")} className="forms container-fluid"
                              placeholder="Enter Phone Contact"
                              onChange={(e)=>setPhoneNo(e.target.value)}
                              />
                            </div>

                           
                            <button className="container-fluid" onClick={Update}>save</button>

                  </div>
                           
                      

              




             
       
    )
}
