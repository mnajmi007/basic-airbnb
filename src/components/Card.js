import React from "react";
import Swimmer from "../images/swimmer.png";
import Mountain from "../images/mountain-bike.png";
import Wedding from "../images/wedding-photography.png";
import Star from "../images/Star.png";
function Card() {
    return(
        <section>
            <div className="card">
                <img src={Swimmer} className="card--image"/>
                <div className="card--stats">
                    <img src={Star} className="card--star"/>
                    <span>5.0</span>
                    <span className="gray">(6).</span>
                    <span className="gray">USA</span>
                </div>
                <p>Life Lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>
            </div>
        </section>
    )
}

export default Card;