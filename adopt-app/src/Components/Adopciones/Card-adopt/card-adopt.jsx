import './card-adopt.css';
import React, { useContext, useState } from 'react';
import { petsContext } from '../../../App';
import { useModal } from '../../Modales/useModal';
import Modal from '../../Modales/Modal'
import Formulario from '../../Formularios/Formulario'

const CardAdopt = () => {
    const { pets } = useContext(petsContext);
    const [selectPetId, setSelectPetId] = useState(null);
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);

    return(

        <div className='card-content'>
            {pets.map(pet =>(
                <div className='card-animal'>
                    <img className='img-animal' key={pet.id} src={pet.urlImg} alt='imagen'></img>
                    <div className='datos'>
                        <div className='div-item'> 
                        <div className='pet-name'> {pet.name}</div>{pet.gender === 'Macho' ? <img className='img-sex' src="../../../Img/simbolMale.png" alt="male"/>  : <img className='img-sex' src="../../../Img/simbolFemale.webp" alt="female"/> }</div>
                        <div className='div-item'>{pet.breed}</div>
                        <div className='div-item'>{pet.description}</div>
                        <div className='div-item'>{pet.age} años</div>
                        <div className='div-item'>{pet.available === true ? `Disponible` : `Reservado`} </div>
                        {pet.available ? (
                        <button className='btn-available' value={pet.id} onClick={() => { setSelectPetId(pet.id); openModal1(); }}> Adoptar </button> ) : (
                        <button className='btn-notAvailable' value={pet.id}disabled> Reservado </button> )}
                        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                            <h3>Formulario de Adopcion</h3>
                            <p>Rellene sus datos y nos comunicaremos a la brevedad</p>
                            <Formulario petId={selectPetId}></Formulario>
                        </Modal>
                    </div>
                </div>
            ))}
        </div>
        /*
        <div>
            {animals.map(animal =>(
                <div className='card-animal'>
                    
                    <img className='img-animal' key={animal.id} src={animal.imagen} alt='imagen'></img>
                    <div className='datos'>
                        <div className='div-item'> <div> {animal.name}</div>{animal.genero == false ? <img className='img-sex' src="../../../Img/simbolMale.png" alt="male"/>  : <img className='img-sex' src="../../../Img/simbolFemale.webp" alt="female"/> }</div>
                        <div className='div-item'>Raza: {animal.raza}</div>
                        
                        <div className='div-item'>Edad: {animal.edad} años</div>
                        <div className='div-item'>Desparacitado: {animal.desparacitadoVacunado == true ?`Si`: `No`}</div>
                        <div className='div-item'>Disponible: {animal.disponible == true ? `Si` : `No`} </div>
                        <div className='div-item'>Información: {animal.info}</div>

                        <button className='btn-adoptar' onClick={openModal1}>Adoptar</button>
                        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                            <h3>Formulario de Adopcion</h3>
                            <p>Rellene sus datos y nos comunicaremos a la brevedad</p>
                            <Formulario></Formulario>
                        </Modal>

                    </div>

                </div>
            ))}

        </div>
        */
    ) 
};

export default CardAdopt;