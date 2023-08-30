import React from "react";
import './informationCard.css';

const InformationCard = ({title,imageUrl,body}) =>  {
    return(
        <article className="cardInfo-container">
            <div className="image-container">
                <img className='img-card-information'src={imageUrl} alt="" />
            </div>
            <div className="cardInfo-content">
                <div className="cardInfo-title">
                <h3 className="cardInfo-h3">{title}</h3>
                </div>
                    <div className="cardInfo-body">
                    <p className="cardInfo-p">{body}</p>
                    </div>
            </div>
            <div className="btn">
                <button>
                    <a href="#!">
                        Leer Mas
                    </a>
                </button>
            </div>
        </article>
    )
}

export default InformationCard;