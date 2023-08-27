import React, { useEffect, useRef, useState } from "react";
import './card.css';
import MaleImg from 'assets/masculino.svg';
import FemaleImg from 'assets/femenino.svg';

const Card = (props) => {
    const { petImg, description, name, sex, age, attribute, location, id, onClick, interested } = props;
    const [showDescription, setShowDescription] = useState(false);
    const isShowDescription = useRef(null);

    const handleClick = () => {
        setShowDescription(!showDescription);
    }
    //Se aplica el evento mouseleave para ocultar automaticamente la descripcion si se saca el click de la card
    
    useEffect(() => {
        if(showDescription) {
            isShowDescription.current.addEventListener('mouseleave', () => {
                setShowDescription(!showDescription);
            })
        }
    })

    return (
        <div className='pet-card' ref={isShowDescription}>
            <div className='img-description-container'>
                <img className='card-img' src={petImg} alt='Mascota'></img>
                <div className={`div-description ${showDescription ? 'height' : null}`}>
                    <p className={`pet-description ${!showDescription ? 'ocult' : 'show'}`}> {description} </p>
                    <button className='description-btn' onClick={handleClick}> {!showDescription ? 'Más información' : 'Ocultar' } </button>
                </div>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <div className='pet-name'> {name}</div>
                    <img className='img-sex' src={sex === 'Macho' ? MaleImg : FemaleImg} alt="Imagen sexo" />
                </div>
                <p className='pet-age'>{age} años</p>
                <ul className="attributes-list">
                    {attribute}
                </ul>
                <p className='pet-location'>{location}</p>
                <button className='adopt-btn' type='button' value={id} onClick={onClick}>
                    Quiero adoptar
                </button>
                <p className="pet-interested"> {interested}</p>
            </div>
        </div>
    )
}
export default Card;