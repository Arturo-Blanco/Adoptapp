import React from "react";
import './cardHome.css';

const CardHome = (props) => {
    return (
        <div className="card-adopt">
            <div className="card-image"></div>
                <div className="card-text">
                    <h3 className="card-name"> {props.name} </h3>
                    <p className="card-info">{props.info}</p>
                </div>
        </div>
    )
}
export default CardHome;