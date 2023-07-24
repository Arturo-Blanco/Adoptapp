import React from "react";
import './cardHome.css';

const CardHome = (props) => {
    return (
        <div className="home-card">
            <div className="home-card-img"></div>
                <div className="home-card-text">
                    <h3 className="home-card-title"> {props.title} </h3>
                    <p className="home-card-info">{props.info}</p>
                </div>
        </div>
    )
}
export default CardHome;