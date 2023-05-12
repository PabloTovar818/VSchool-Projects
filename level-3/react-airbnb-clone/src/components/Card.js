import React from "react"
import star from "../img/star.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt={props.imgAlt} className="card--image"></img>
            <div className="card--stats">
                <div className="rating">
                    <img src={star} alt="star" className="rating-image"></img>
                    <span>{props.rating}</span>
                    <span className="review-count">({props.reviewCount})</span>
                    <span>{props.location}</span>
                </div>
                <span>{props.title}</span>
                <span><bold>{props.price}</bold> / person</span>
            </div>
        </div>
    )
}