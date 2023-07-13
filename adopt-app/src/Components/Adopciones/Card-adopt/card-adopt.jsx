import './card-adopt.css';
import React, { useContext, useState, useEffect } from 'react';
import { AnimalsContext } from '../../../App';
import { useModal } from '../../Modales/useModal';
import Modal from '../../Modales/Modal'
import Formulario from '../../Formularios/Formulario'
import axios from 'axios';


const CardAdopt = () => {

    const[isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [pet, setPet] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/pets/petList')
        .then(response => {
            setPet(response.data);
        })
        .catch(error => {
            console.error(error);
        });
      }, []);
    //const { animals } = useContext(AnimalsContext);
    return(

        <div className='card-content'>
            {pet.map(pet =>(
                <div className='card-animal'>
                    
                    <img className='img-animal' key={pet.id} src={pet.img} alt='imagen'></img>
                    <div className='datos'>
                        <div className='div-item'> <div> {pet.name}</div>{pet.gender === 'macho' ? <img className='img-sex' src="../../../Img/simbolMale.png" alt="male"/>  : <img className='img-sex' src="../../../Img/simbolFemale.webp" alt="female"/> }</div>
                        <div className='div-item'>Raza: {pet.breed}</div>
                    
                        <div className='div-item'>Edad: {pet.age} años</div>
                        <div className='div-item'>Disponible: {pet.disponible === 'Disponible' ? `Si` : `No`} </div>
            
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