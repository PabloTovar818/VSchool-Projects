import React from "react"
import logo from "../img/logo192.png"
import '../index.css';

export default function Header() {
    return (
        <div>
            <nav className="navbar">
                <div className="logo-wrapper">
                    <img src={logo} alt="react-logo" className="logo"/>
                    <h1 className="nav--logo_text">ReactFacts</h1>
                </div>
                <h3>React Course - Project 1</h3>
            </nav>
        </div>
    )
}