import React from 'react';
import {FaPlay} from "react-icons/fa";
import './reviewsItem.css';

const ReviewsItem = (props) => {

    return (
        <div className="reviewsCard">
            <div
                className="reviewsPhoto"
                style={{background: `url(${props.reviewsProduct.IMG})`, backgroundPosition: 'center', backgroundSize: 'cover'}}
            >
                <a className="linkPLayVideo" href={props.reviewsProduct.link} target="_blank"><FaPlay className="iconPlay" size={70}/></a>
            </div>
            <div className="reviewsInfo">
                <h4>{props.reviewsProduct.title}</h4>
                <p>{props.reviewsProduct.body}</p>
            </div>
        </div>
    );
};

export default ReviewsItem;