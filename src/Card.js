import React from "react";

export default function Card(props) {
    console.log(props);
    return (
        <div>
            <img src={props.img} alt={props.title}></img>
            <div>
                <p>{props.title}</p>
                <p>{props.date}</p>
                <p>{props.text}</p>            
            </div>
        </div>
    )
}

