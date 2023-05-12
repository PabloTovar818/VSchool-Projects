import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "../data"

export default function App() {
    const cardComponent = data.map(experience => {
        return <Card 
            img={experience.coverImg}
            imgAlt={experience.title}
            rating={experience.stats.rating}
            reviewCount={experience.stats.reviewCount}
            location={experience.location}
            title={experience.title}
            price={experience.price}
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