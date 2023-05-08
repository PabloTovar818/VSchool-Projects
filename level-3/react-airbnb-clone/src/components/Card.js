import React from "react"
import star from "../img/star.png"
import katieZaferesPhoto from "../img/card-images/image-12.png"
import weddingPhoto from "../img/card-images/wedding-photography-1.png"
import bikePhoto from "../img/card-images/mountain-bike-1.png"

export default function Card() {
    return (
        <div className="card-container">
            <div className="card">
                <img src={katieZaferesPhoto} alt="life lessons with Katie Zaferes" className="card--image"></img>
                <div className="card--stats">
                    <div className="rating">
                        <img src={star} alt="star" className="rating-image"></img>
                        <span>5.0 (6) • USA</span>
                    </div>
                    <span>Life lessons with Katie Zaferes</span>
                    <span><bold>From $136</bold> / person</span>
                </div>
            </div>

            <div className="card">
                <img src={weddingPhoto} alt="learn wedding photography" className="card--image"></img>
                <div className="card--stats">
                    <div className="rating">
                        <img src={star} alt="star" className="rating-image"></img>
                        <span>5.0 (30) • USA</span>
                    </div>
                    <span>Learn wedding photography</span>
                    <span><bold>From $125</bold> / person</span>
                </div>
            </div>

            <div className="card">
                <img src={bikePhoto} alt="group mountain biking" className="card--image"></img>
                <div className="card--stats">
                    <div className="rating">
                        <img src={star} alt="star" className="rating-image"></img>
                        <span>4.8 (2) • USA</span>
                    </div>
                    <span>Group Mountain Biking</span>
                    <span><bold>From $50</bold> / person</span>
                </div>
            </div>
        </div>
    )
}