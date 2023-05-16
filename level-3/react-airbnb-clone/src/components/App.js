import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "../data"

export default function App() {
    const cardComponent = data.map(item => {
        return <Card 
            key={item.id}
            item={item}
        />
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="card-container">
                {cardComponent}
            </div>
        </div>
    )
}