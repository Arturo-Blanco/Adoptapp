import React from "react";
import { useState } from "react";
import { useModal } from "../../Modales/useModal";
import Modal from "../../Modales/Modal";
import Formulario from "../../Formularios/Formulario";


const Card = (props) => {


    const [selectPetId, setSelectPetId] = useState(null);
    const [selectPetName, setSelectPetName] = useState(null);
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);

    return (
    <div className='card-animal' key={props.id} >
        <img className='img-animal' src={props.urlImg} alt='imagen'></img>
        <div className='datos'>
        <div className='div-item'> 
        <div className='pet-name'> {props.name}</div>{props.gender === 'Macho' ? <img className='img-sex' src="../../../Img/simbolMale.png" alt="male"/>  : <img className='img-sex' src="../../../Img/simbolFemale.webp" alt="female"/> }</div>
        <div className='div-item'>{props.breed}</div>
        <div className='div-item'>{props.age} años</div>
        <div className='div-item'>{props.description}</div>
        <div className='div-item'>{props.location}</div>
        {props.available ? (
        <button className='btn-available' value={props.id} onClick={() => { setSelectPetId(props.id); setSelectPetName(props.name); openModal1(); }}> Adoptar </button> ) : (
        <button className='btn-notAvailable' value={props.id}disabled> Reservado </button> )}
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <p>Decidio adoptar a {selectPetName}.</p>
            <p>Complete el formulario con sus datos y nos comunicaremos a la brevedad.</p>
            <Formulario petId={selectPetId}></Formulario>
        </Modal>
        </div>
    </div>
    )
}
export default Card;