import React from "react"

export default function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.img} alt={props.name}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <p>{props.email}</p>
            </div>
            <div>
            <p>{props.upvotes}</p>
            </div>
        </div>
    )
}