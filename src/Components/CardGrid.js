import React, { useState, useEffect } from "react";
import axios from "axios";
import CardData from "./CardData";

let currentDate;
window.addEventListener('load', function () {
    currentDate = document.getElementsByClassName("currentDate")[0].textContent;
})

export default function CardGrid(props){
    const [cards, setCards] = useState({});
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=87hNAagthnGAhl8upa8HuDVjX2oNSbfl18FsyPLu&date=${currentDate}`)
        .then(response => {
            console.log(response.data);
            setCards(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    let update = () => {
        setCards({});
        currentDate = document.getElementsByClassName("currentDate")[0].textContent;
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=87hNAagthnGAhl8upa8HuDVjX2oNSbfl18FsyPLu&date=${currentDate}`)
        .then(response => {
            console.log(response.data);
            setCards(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="cards-container">
            <button className="refreshBtn" onClick={update} >Refresh</button>
            <CardData title={cards.title} date={cards.date} description={cards.explanation} src={cards.hdurl} />
        </div>
    )
}