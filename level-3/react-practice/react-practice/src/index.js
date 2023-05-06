import React from "react"
import ReactDOM from "react-dom"
import logo from "./logo192.png"

function Header() {
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

function MainContent() {
    return (
        <div className="main">
            <h1>Reasons to learn React</h1>
            <ol>
                <li>want to get a job</li>
                <li>want to streamline web development</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <div>
            <footer>
                © 2023 Tovar development. All rights reserved.
            </footer>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))