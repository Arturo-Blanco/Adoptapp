import './adoptCard.css';
import React, { useEffect, useState } from 'react';
import { useModal } from '../../Modales/useModal';
import Modal from '../../Modales/Modal'
import Formulario from '../../Formularios/Formulario'
import { getMascotas } from '../../../Apis/getMascotas.mjs';
import Card from '../../Card/Card';
import MaleImg from '../../../assets/masculino.svg';
import FemaleImg from '../../../assets/femenino.svg';

const AdoptCards = ({pageNumber,params}) => {

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
        
        <div className='adopt-card-content'>
            {petList.map(pet =>(
                <Card 
                id= {pet.id}
                key={pet.id}
                petImg = {pet.urlImg}
                description = {pet.description}
                name = {pet.name}
                sexImg = {pet.sex === 'Macho' ? MaleImg : FemaleImg }
                age = {pet.age}
                attribute = {pet.attributes.map((attribut) => (
                    <li key={attribut.attribut.id}>{attribut.attribut.attribut}</li>
                ))}
                location = {pet.city}
                onClick={() => { setSelectPetId(pet.id); setSelectPetName(pet.name); openModal1() }}
                interested = {pet.interested > 0 ? `${pet.interested} interesados`
                    : 'No hay interesados' }
                >
                </Card>
                
            ))}
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                            <div className='modal-title'>
                            <p>Le interesa adoptar a {selectPetName}.</p>
                            <p>Complete el formulario con sus datos y nos comunicaremos a la brevedad.</p>
                            </div>
                            <Formulario petId={selectPetId} updateCard={setUpdateCard} closeModal1={closeModal1}></Formulario>
                    </Modal>
            </div>
        
           /*
                <div className='adopt-card-content'>
                {petList.map(pet =>(
                <div className='pet-card' key={pet.id} >
                    <img className='pet-img' src={pet.urlImg} alt='imagen'></img>
                    <div className='datos'>
                        <div className='div-item'> 
                        <div className='pet-name'> {pet.name}</div>{pet.sex === 'Macho' ? <img className='img-sex' src="../../../Img/simbolMale.png" alt="male"/>  : <img className='img-sex' src="../../../Img/simbolFemale.webp" alt="female"/> }</div>
                        <div className='div-item'>{pet.age} años</div>
                        <div className='div-item-details'>
                            <ul>
                                {pet.attributes.map((attribut) => (
                                    <li key={attribut.attribut.id}>{attribut.attribut.attribut}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='div-item'>{pet.city} </div>
                        <button className='btn-adopt' value={pet.id} onClick={() => { setSelectPetId(pet.id); setSelectPetName(pet.name); openModal1() }}> Quiero adoptar </button>
                        <div className='div-item interested'>{pet.interested > 0 ? (<p>{pet.interested} interesados</p>
                        ) : (<p>No hay interesados </p>)}</div>
                        </div>
                        </div>
                        ))}
                        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                            <div className='modal-title'>
                            <p>Le interesa adoptar a {selectPetName}.</p>
                            <p>Complete el formulario con sus datos y nos comunicaremos a la brevedad.</p>
                            </div>
                            <Formulario petId={selectPetId} updateCard={setUpdateCard} closeModal1={closeModal1}></Formulario>
                        </Modal>
            </div> */
        )
};

export default AdoptCards;