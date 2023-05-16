import React from "react"
import star from "../img/star.png"

export default function Card(props) {
    const item = props.item;
    let badgeText;
    if (item.openSpots === 0) {
        badgeText = "Sold Out";
    }
    else if (item.location === "Online") {
        badgeText = "Online";
    }

    return (
        <div className="card">
            {badgeText !== undefined && <div className="card--badge"><bold>{badgeText}</bold></div>}
            <img src={item.coverImg} alt={item.title} className="card--image"></img>
            <div className="card--stats">
                <div className="rating">
                    <img src={star} alt="star" className="rating-image"></img>
                    <span>{item.stats.rating}</span>
                    <span className="review-count">({item.stats.reviewCount})</span>
                    <span>{item.location}</span>
                </div>
                <span>{item.title}</span>
                <span><bold>{item.price}</bold> / person</span>
            </div>
        </div>
    )
}