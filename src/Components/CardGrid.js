import React, { useState, useEffect } from "react";
import axios from "axios";
import CardData from "./CardData";
import MyApp from './DatePicker';


let currentDate = document.getElementsByClassName("currentDate")[0];
console.log(currentDate)
export default function CardGrid(props){
    const [cards, setCards] = useState({});
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=87hNAagthnGAhl8upa8HuDVjX2oNSbfl18FsyPLu&`)
        .then(response => {
            console.log(response.data);
            setCards(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div className="cards-container">
            <CardData title={cards.title} date={cards.date} description={cards.explanation} src={cards.hdurl} />
        </div>
    )
}