import './card-adopt.css';
import React, { useContext } from 'react';
import { AnimalsContext } from '../../../App';
import { useModal } from './useModal';
import Modal from './Modal'
import Formulario from './Formulario'


const CardAdopt = () => {

    const[isOpenModal1, openModal1, closeModal1] = useModal(false);
    const { animals } = useContext(AnimalsContext);
    return(
        
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
    )
};

export default CardAdopt;