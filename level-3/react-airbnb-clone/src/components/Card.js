import React from "react"
import star from "../img/star.png"
// import katieZaferesPhoto from "../img/card-images/image-12.png"
// import weddingPhoto from "../img/card-images/wedding-photography-1.png"
// import bikePhoto from "../img/card-images/mountain-bike-1.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt={props.imgAlt} className="card--image"></img>
            <div className="card--stats">
                <div className="rating">
                    <img src={star} alt="star" className="rating-image"></img>
                    <span>{props.rating}</span>
                </div>
                <span>{props.title}</span>
                <span><bold>{props.price}</bold> / person</span>
            </div>
        </div>
    )
}