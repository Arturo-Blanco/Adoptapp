import React from "react";
import './card.css';

const Card = (props) => {

    return (
        <div className='pet-card'>
            <img className='card-img' src={props.petImg} alt='Mascota'></img>
            <div className='pet-description'>
                <p> {props.description} </p>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <div className='pet-name'> {props.name}</div>
                    <img className='img-sex' src={props.sexImg} alt="Imagen sexo" />
                </div>
                <p className='pet-age'>{props.age} años</p>
                <ul className="attributes-list">
                    {props.attribute}
                </ul>
                <p className='pet-location'>{props.location}</p>
                <button className='adopt-btn' type='button' value={props.id} onClick={props.onClick}>
                    Quiero adoptar
                </button>
                <p className="pet-interested"> {props.interested}</p>
            </div>
        </div>
    )
}
export default Card;