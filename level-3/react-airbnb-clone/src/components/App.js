import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import katieZaferesPhoto from "../img/card-images/image-12.png"
import weddingPhoto from "../img/card-images/wedding-photography-1.png"
import bikePhoto from "../img/card-images/mountain-bike-1.png"

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="card-container">
                <Card 
                    img={katieZaferesPhoto}
                    imgAlt="life lessons with Katie Zaferes"
                    rating="5.0 (6) • USA"
                    title="Life lessons with Katie Zaferes"
                    price="From $136"
                />
                <Card 
                    img={weddingPhoto}
                    imgAlt="learn wedding photography"
                    rating="5.0 (30) • USA"
                    title="Learn wedding photography"
                    price="From $125"
                />
                <Card 
                    img={bikePhoto}
                    imgAlt="group mountain biking"
                    rating="4.8 (2) • USA"
                    title="Group Mountain Biking"
                    price="From $50"
                />
            </div>
        </div>
    )
}