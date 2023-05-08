import React from "react"
import hero from "../img/Group-77.png"

export default function Main() {
    return (
        <div className="hero">
            <img src={hero} alt="hero-photos" className="hero--photos"></img>
            <div className="hero--text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}