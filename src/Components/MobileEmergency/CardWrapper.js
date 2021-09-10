import React from 'react'
import Aux from '../../hoc/wrapper'

import '../../AppCard.css'


const CardWrapper = (props) => {
    return (
        <Aux>
            <div className="person-card">
                <div>
                    <img className="person-image" src={props.image} alt="user"/>
                </div>
                <p>First Name: {props.firstName || "N/A"}</p>
                <p>Last Name: {props.lastName || "N/A"}</p>
                <p>Phone: {props.phone || "N/A"}</p>
                <p>Age: {props.age || "N/A"}</p>
                <p>City: {props.city || "N/A"}</p>
                <span className={"person-" + props.role.toLowerCase()}>{props.role}</span>
                <hr className="person-hr"/>
                <Aux>
                    <button className="person-btn person-edit-btn"><img src="./images/phone.png" /> </button>
                    <button  className="person-btn person-delete-btn">Delete</button>
                </Aux>
            </div>
        </Aux>
    )

}

export default CardWrapper
