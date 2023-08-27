import React from "react";
import './cardReason.css';

const CardReason = ({title,imageUrl,body,subtitle,body2}) =>  {
    return(
        <div className="cardReason-container">
            <div className="cardReason-content">
            <h3 className="cardReason-h3">{title}</h3>
            <p className="cardReason-p">{body}</p>
            <h3 className="cardReason-h3">{subtitle}</h3>
            <p className="cardReason-p">{body2}</p>
            </div>
            <div className="imageUrl-container">
                <img src={imageUrl} alt=""/>
            </div>
        </div>
    )
}

export default CardReason;