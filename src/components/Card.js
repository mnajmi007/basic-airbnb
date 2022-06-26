import React from "react";
import Swimmer from "../images/swimmer.png";
import Mountain from "../images/mountain-bike.png";
import Wedding from "../images/wedding-photography.png";
import Star from "../images/Star.png";

function Card(props) {
    return(
        <section>
            <div className="card">
                <img src={props.img} className="card--image"/>
                <div className="card--stats">
                    <img src={Star} className="card--star"/>
                    <span>{props.rating}</span>
                    <span className="gray">{props.review}</span>
                    <span className="gray">{props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </section>
    )
}

export default Card;