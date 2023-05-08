import React from "react"
import airbnbLogo from "../img/airbnb-1.png"

export default function Navbar() {
    return (
        <navbar>
            <img src={airbnbLogo} alt="airbnb logo" className="nav--logo"></img>
        </navbar>
    )
}