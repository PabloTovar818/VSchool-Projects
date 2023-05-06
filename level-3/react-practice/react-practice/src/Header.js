import React from "react"
import logo from "./logo192.png"

export default function Header() {
    return (
        <div>
            <header>
                <nav className="navbar">
                    <img src={logo} alt="react-logo" className="logo"/>
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}