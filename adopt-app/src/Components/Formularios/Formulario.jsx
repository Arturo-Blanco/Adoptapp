import ComponenteInput from './Input'
import ComponenteTerminos from './Terminos';
import './Formularios.css';
import axios from 'axios';
import  Modal from '../Modales/Modal';
import React, { useState } from 'react';
import { baseUrl } from '../../Apis/getMascotas.mjs';

const Formulario = ({ petId, updateCard, closeModal1 }) => {

  const [isOpenModal2, setOpenModal2 ] = useState(false);
  const [adoptionMesage, setAdoptionMesage] = useState('');
  const [formData, setFormData] = useState({
    fullname:'',
    address:'',
    location:'',
    email:'',
    phoneNumber:'',
  });
  
  const adoptFunction = async(petId) => {
    try{
      const responsePet = await axios.put(baseUrl+`pets/adoptPet/${petId}`,{ 
        headers: { 'Content-Type': 'application/json' },
    });
    setAdoptionMesage(responsePet.data.mensaje);
    setOpenModal2(true);
    updateCard(responsePet.data.mensaje);
    }
      catch(error) {
        console.error(error);
    }
  }
  const addUser = async(data) => {
      const interestedIn = petId
    try{
        const userData = {
          ...data,
          interestedIn
        }        
        const responseUser = await axios.post(baseUrl + `user/addUser`, userData );
        console.log(responseUser.data);
    } 
      catch(error) {
        console.error(error);
    }
  }
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    adoptFunction(petId);
    addUser(formData);
  }
    return(
      <>
        <form className='formulario' onSubmit={handleSubmit}> 
        <ComponenteInput 
          label="Nombre Completo"
          placeholder="Juan Perez"
          id="nombre"
          name="fullname"
          value={formData.fullname}
          onChange={handleInputChange}
          />
        <ComponenteInput 
          label="Domicilio"
          placeholder="Ingrese su domicilio"
          id="domicilio"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          />
          <ComponenteInput 
          label="Localidad"
          placeholder="Ciudad"
          id="localidad"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          />
        <ComponenteInput 
          label="Email"
          placeholder="email@correo.com"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          />
        <ComponenteInput 
          label="Numero de telefono"
          placeholder="2901xxxxxx"
          type="number"
          id="telefono"
          name="phoneNumber"
          min = "8"
          value={formData.phone}
          onChange={handleInputChange}
          />
        <ComponenteTerminos
          label="Soy mayor de 18 años" 
          id="edad"/>
          <ComponenteTerminos
          label="Acepto los terminos y condiciones"
          id="terminos" />
        <div className="contenedorBotonCentrado">
          <button className='form-button' type='submit'>Enviar</button>
        </div>
      </form>
      <Modal isOpen={isOpenModal2} closeModal={() => {
        closeModal1();
        }}>
      <p>{adoptionMesage}</p>
      </Modal>
    </>
    );
}

export default Formulario;
