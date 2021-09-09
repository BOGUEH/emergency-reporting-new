import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const TableRowCustom = (props) => {

    const getData = () => {
        axios({
            method: 'GET',
            url: `https://emergency-report-app.herokuapp.com/api/profile/allprofiles`
        }).then((res) => {

            props.setNewData(res.data.data)
            // setAdminData(res.data.data)
            // console.log(adminData);
            alert("User deleted successfully!")
        })
    }

    const onDelete = async (_id) => {
        await axios({
            method: 'delete',
            url: `https://emergency-report-app.herokuapp.com/api/profile/delete/${_id}`,
            headers: {
                'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MTMzNTdkY2UxMGJjZjA3MjhlNWJkMzciLCJpYXQiOjE2MzA3NTUxNzgsImV4cCI6MTYzMzM0NzE3OH0.rQt9linzcIk9_WyqxvSahKl9B6Fhss9ioGY_dv9cc8E`
            }
        }).then(() => {
            getData();
        })
    }

    return (
        <tr>
            <td>{props.serialnumber}</td>
            <td>{props.address}</td>
            <td>{props.institution}</td>
            <td>{props.localGovtArea}</td>
            <td>{props.phoneNo}</td>
            <td>{props.slug}</td>
            <td>
                <Link to={props.linkTo}>
                    <button className="btn btn-success"
                            onClick={() => props.updateClickHandler(props.userObject._id, props.userObject.address, props.userObject.institution, props.userObject.phoneNo, props.userObject.slug)}>Update</button>
                </Link>
                <button className="btn btn-danger"
                        onClick={() => onDelete(props.userId)}>Delete</button>
            </td>
        </tr>
    )
}

export default TableRowCustom;