import React from 'react'
import './Admin.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import DashNavBar from '../DashBoard/DashNavBar'
import {Link} from "react-router-dom";
import {Table} from 'react-bootstrap'
import CustomTableRow from '../../hoc/tableRowCustom'


export default function AdminDashboard() {
    const [adminData, setAdminData] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        axios({
            method: 'GET',
            url: `https://emergency-report-app.herokuapp.com/api/profile/allprofiles`
        }).then((res) => {


            setAdminData(res.data.data)
            console.log(adminData);
            console.log(res.data.data);
        })

    }, [])


    const setData = (_id, address, institution, phoneNo, slug) => {
        console.log(_id, address, institution, phoneNo, slug);
        localStorage.setItem('ID', _id)
        localStorage.setItem('Address', address)
        localStorage.setItem('Institution', institution)
        localStorage.setItem('PhoneNo', phoneNo)
        localStorage.setItem('slogan', slug)
    }

    const getData = () => {
        axios({
            method: 'GET',
            url: `https://emergency-report-app.herokuapp.com/api/profile/allprofiles`
        }).then((res) => {


            setAdminData(res.data.data)
            console.log(adminData);
        })

    }
    const onDelete = (_id) => {
        axios({

            method: 'delete',
            url: `https://emergency-report-app.herokuapp.com/api/profile/delete/${_id}`,
            headers: {
                'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MTMzNTdkY2UxMGJjZjA3MjhlNWJkMzciLCJpYXQiOjE2MzA3NTUxNzgsImV4cCI6MTYzMzM0NzE3OH0.rQt9linzcIk9_WyqxvSahKl9B6Fhss9ioGY_dv9cc8E`
            }
        }).then(() => {
            getData();
        })

    }

    let counter = 1;


    return (

        <div>
            <DashNavBar/>


            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>S/N</th>
                    <th>Address</th>
                    <th>Institution</th>
                    <th>L.G.A</th>
                    <th>Phone No</th>
                    <th>Slug</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>


                {
                    adminData.map(user => {
                        return(
                            <CustomTableRow
                                serialnumber={counter++}
                                address={user.address}
                                institution={user.institution}
                                localGovtArea={user.localGovtArea}
                                phoneNo={user.phoneNo}
                                slug={user.slug}
                                linkTo={'/update'}
                                updateClickHandler={()=> setData(user._id, user.address, user.institution, user.phoneNo, user.slug)}
                                delete={()=> onDelete(user._id)}

                            />
                        )
                    })
                }

                </tbody>
            </Table>
        </div>

    )
}

