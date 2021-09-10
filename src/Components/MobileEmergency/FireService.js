

import React from 'react'

import { useEffect, useState } from 'react'
import axios from 'axios'
import DashNavBar from '../DashBoard/DashNavBar'
import { Table } from 'react-bootstrap'
import './RoadSafety.css'


export default function FireService() {
    const [adminData, setAdminData] = useState([])
    const   [loading, setLoading] = useState(true)

    useEffect(()=> {

        axios({
            method: 'GET',
            url:  `http://emergency-report-app.herokuapp.com/api/profile/allprofiles`
        }).then((res)=> {
           
            
            setAdminData(res.data.data)
            console.log(adminData);
        } )
        
    },[])
      const setData = (_id, address, institution, phoneNo, slug)=>{ 
          console.log(_id, address,institution, phoneNo, slug);
      localStorage.setItem('ID', _id)
      localStorage.setItem('Address', address)
      localStorage.setItem('Institution', institution)
      localStorage.setItem('PhoneNo', phoneNo)
      localStorage.setItem('slogan', slug)
      }

      const getData = ()=>{
        axios({
            method: 'GET',
            url:  `http://emergency-report-app.herokuapp.com/api/profile/allprofiles`
        }).then((res)=> {
           
            
            setAdminData(res.data.data)
            console.log(adminData);
        } )

    }
       const  onDelete = (_id)=>{
           axios({

            method: 'delete',
          url: `http://emergency-report-app.herokuapp.com/api/profile/delete/${_id}`,
          headers: {
        'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MTMzNTdkY2UxMGJjZjA3MjhlNWJkMzciLCJpYXQiOjE2MzA3NTUxNzgsImV4cCI6MTYzMzM0NzE3OH0.rQt9linzcIk9_WyqxvSahKl9B6Fhss9ioGY_dv9cc8E`
          }
           }).then(()=>{
               getData();
            })
             
        }

       let counter = 1;
    return (
        <div className="roadsafety-container">

            <Table striped bordered hover>
                            <thead>
                                <tr>
                               
                                <th scope="col"> S/N</th>
                                <th scope="col"> Address</th>
                                <th scope="col">Institution</th>
                                <th scope="col">Local Government Area</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Slug</th>
                               
                                </tr>
                            </thead>
                
                            <tbody>
             {
                  adminData.map((user, i)=> 
                    user.institution === 'Fire Emergency Service'?
                                
                                <tr key ={i} className="Deal Note">
                                
                                <td>{counter ++}</td>
                                <td>
                                    {user.address}
                                </td>
                                <td>
                                    {user.institution}
                                </td>
                                <td>
                                    {user.localGovtArea}
                    
                                </td>
                                <td>
                                    {user.phoneNo}

                                </td>
                                <td> 
                                    {user.slug}

                                </td>
                           
                                
                                </tr>: null
                               )     
                                }
                                
                            </tbody>

                     
                     </Table>
        </div>
    )
}
