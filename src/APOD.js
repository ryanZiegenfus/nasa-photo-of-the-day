import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from "./Card"

export default function APOD() {
    const [photoState, setPhotoState] = useState('');

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(result => {
                return setPhotoState(result.data)
            })
    }, [])

    if (!photoState.url) return <h3>Loading...</h3>;
    return (
        <div>
            <Card img={photoState.url} title={photoState.title} date={photoState.date} text={photoState.explanation}/>
        </div>
    );
}


