import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav>
                <div>
                    <h3>Start Bootstrap</h3>
                </div>
                <div>
                    <ul className="nav--list">
                        <li>
                            <a href="index.html">HOME</a>
                        </li>
                        <li>
                            <a href="about.html">ABOUT</a>
                        </li>
                        <li>
                            <a href="sample.html">SAMPLE POST</a>
                        </li>
                        <li>
                            <a href="contact.html">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}