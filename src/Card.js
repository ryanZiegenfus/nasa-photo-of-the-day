import React from "react";

export default function Card(props) {
    console.log(props);
    return (
        <div className="cardFrame">
            <img src={props.img} alt={props.title}></img>
            <div className="textFrame">
                <p className="cardTitle">{props.title}</p>
                <p className="cardDate">{props.date}</p>
                <p className="cardText">{props.text}</p>            
            </div>
        </div>
    )
}

