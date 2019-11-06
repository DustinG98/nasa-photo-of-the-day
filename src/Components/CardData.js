import React from "react";

const CardData = props => {
    return (
        <div className="card">
            <h4 className="date">{props.date}</h4>
            <h1>{props.title}</h1>
            <img src={props.src}/>
            <p className="description">{props.description}</p> 
        </div>
    )
}

export default CardData;