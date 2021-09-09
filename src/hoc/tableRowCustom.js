import React from 'react';
import {Link} from "react-router-dom";

const tableRowCustom = (props) => {
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
                            onClick={() => props.updateClickHandler}>Update</button> {}
                </Link>
                <button className="btn btn-danger"
                        onClick={() => props.delete}>Delete</button>

            </td>
        </tr>
    )
} 

export default tableRowCustom;