import React from 'react'
import './Admin.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import DashNavBar from '../DashBoard/DashNavBar'
import {Link} from "react-router-dom";
import {Table} from 'react-bootstrap'
import CustomTableRow from '../../hoc/TableRowCustom'


export default function AdminDashboard() {
    const [adminData, setAdminData] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchFinalData, setSearchFinalData] = useState([]);


    useEffect(() => {

        axios({
            method: 'GET',
            url: `https://emergency-report-app.herokuapp.com/api/profile/allprofiles`
        }).then((res) => {


            setAdminData(res.data.data)
            // console.log(adminData);
            // console.log(res.data.data);
        })

    }, [])


    const queryData = async (e) => {
        const queryString = e.target.value;

        // return queryString==user.address || queryString==user.institution || queryString==user.localGovtArea || queryString==user.phoneNo || queryString==user.slug;

        const newDataArray = await adminData.filter(user => {
            return queryString == "";
        })
        console.log(newDataArray)
    }


    const setData = (_id, address, institution, phoneNo, slug) => {
        //console.log(_id, address, institution, phoneNo, slug);
        localStorage.setItem('ID', _id)
        localStorage.setItem('Address', address)
        localStorage.setItem('Institution', institution)
        localStorage.setItem('PhoneNo', phoneNo)
        localStorage.setItem('slogan', slug)
    }


    let counter = 1;

    return (

        <div className="admin-dashboard-data-container">
            <Link to="/create">
                <button>Create</button>
            </Link>
            <input className="admin-dashboard-search" onChange={queryData} type="text" placeholder="Search..."/>
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
                        return (
                            <CustomTableRow
                                key={user._id}
                                serialnumber={counter++}
                                userId={user._id}
                                address={user.address}
                                institution={user.institution}
                                localGovtArea={user.localGovtArea}
                                phoneNo={user.phoneNo}
                                slug={user.slug}
                                linkTo={'/update'}
                                userObject={user}
                                setNewData={setAdminData}
                                updateClickHandler={setData}

                            />
                        )
                    })
                }
                </tbody>
            </Table>
        </div>

    )
}

