import './card-adopt.css';
import React, { useEffect, useState } from 'react';
import { useModal } from '../../Modales/useModal';
import Modal from '../../Modales/Modal'
import Formulario from '../../Formularios/Formulario'
import { getMascotas } from '../../../Apis/getMascotas.mjs';

const CardAdopt = ({pageNumber,params}) => {

    const [updateCard, setUpdateCard] = useState(false);
    const [petList, setPetList] = useState([]);
    const [selectPetId, setSelectPetId] = useState(null);
    const [selectPetName, setSelectPetName] = useState(null);
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);

    useEffect(() => {
        const getPets = async() => { 
            const data = await getMascotas(pageNumber+`?${params}`);
            setPetList(data);
        }
        getPets();
    }, 
    [pageNumber,updateCard,params]
    );
    return(

        <div className='card-adopt-content'>
            {petList.map(pet =>(
                <div className='card-animal' key={pet.id} >
                    <img className='img-animal' src={pet.urlImg} alt='imagen'></img>
                    <div className='datos'>
                        <div className='div-item'> 
                        <div className='pet-name'> {pet.name}</div>{pet.sex === 'Macho' ? <img className='img-sex' src="../../../Img/simbolMale.png" alt="male"/>  : <img className='img-sex' src="../../../Img/simbolFemale.webp" alt="female"/> }</div>
                        <div className='div-item'>{pet.age} años</div>
                        <div className='div-item-details'>
                            <ul>
                                {pet.description.castrado ? <li>Castrado</li>: ""}
                                {pet.description.desparacitado ? <li>Desparacitado</li>: ""}
                                {pet.description.cariñoso ? <li>Cariñoso</li>: ""}
                            </ul>
                        </div>
                        <div className='div-item'>{pet.cityId === 1 ? "Ushuaia" : pet.cityId === 2 ? "Tolhuin" : "Rio Grande"} </div>
                        <button className='btn-available' value={pet.id} onClick={() => { setSelectPetId(pet.id); setSelectPetName(pet.name); openModal1(); }}> Quiero adoptar </button>
                        <div className='div-item interested'>{pet.interested > 0 ? (<p>{pet.interested} interesados</p>
                        ) : (<p>No hay interesados </p>)}</div>
                        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                            <div className='modal-title'>
                            <p>Le interesa adoptar a {selectPetName}.</p>
                            <p>Complete el formulario con sus datos y nos comunicaremos a la brevedad.</p>
                            </div>
                            <Formulario petId={selectPetId} updateCard={setUpdateCard} closeModal1={closeModal1}></Formulario>
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