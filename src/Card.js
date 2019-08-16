import React from "react";
import { Card } from 'semantic-ui-react';

export default function CardMod(props) {
    console.log(props);
    return (
        <Card
            image={props.img}
            header={props.title}
            meta={props.date}
            description={props.text}
            style={{margin: "0 auto"}}
        />
    )  
}

