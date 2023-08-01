import ComponenteInput from './Input'
//import ComponenteTerminos from './Terminos';
import './Formularios.css';
import axios from 'axios';
import  Modal from '../Modales/Modal';
import React, { useState } from 'react';
import { baseUrl } from '../../Apis/getMascotas.mjs';
import InputCheckbox from '../FiltroBusqueda/InputCheckbox/FilterCheckbox';
import FilterBox from '../FiltroBusqueda/FilterBox/FilterBox';

const Formulario = ({ petId, updateCard, closeModal1 }) => {

  const [isOpenModal2, setOpenModal2 ] = useState(false);
  const [adoptionMesage, setAdoptionMesage] = useState('');
  const [formData, setFormData] = useState({
    name:'',
    surname:'',
    age:'',
    email:'',
    phoneNumber:'',
    address:'',
    cityId:'',
    hasPet:'',
    livingPlace:'',
  });
  
  const adoptFunction = async(petId, data) => {
      const interestedIn = petId
    try{
      const userData = {
        ...data,
        interestedIn
      }        
      const responsePet = await axios.put(baseUrl+`pets/addInterested/${petId}`,{ 
        headers: { 'Content-Type': 'application/json' },
    });
    const responseUser = await axios.post(baseUrl + `user/addUser`, userData );
    console.log(responseUser.data);
    setAdoptionMesage(responsePet.data.mesage);
    setOpenModal2(true);
    updateCard(responsePet.data.mesage);
    }
      catch(error) {
        console.error(error);
    }
  }
  /*const addUser = async(data) => {
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
  }*/
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    console.log(formData)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    adoptFunction(petId, formData);
    console.log(formData)
  }
    return(
      <>
        <form className='adoption-form' onSubmit={handleSubmit}> 
        <ComponenteInput 
          label="Nombre"
          placeholder="Nombre Completo"
          id="nombre"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          />
        <ComponenteInput 
          label="Apellido"
          placeholder="Apellido"
          id="apellido"
          name="surname"
          value={formData.surname}
          onChange={handleInputChange}
        />
        <ComponenteInput 
          label="Edad"
          placeholder="Ingrese su edad"
          id="edad"
          name="age"
          value={formData.age}
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
        <div className='checkbox-form'>
        <FilterBox
          title="Localidad">
        <InputCheckbox
          htmlFor="Ushuaia"
          text="Ushuaia"
          value={1}
          name="cityId"
          onChange={handleInputChange}
        />
        <InputCheckbox
          htmlFor="Tolhuin"
          text="Tolhuin"
          value={2}
          name="cityId"
          onChange={handleInputChange}
        />
        <InputCheckbox
          htmlFor="Rio Grande"
          text="Rio Grande"
          value={3}
          name="cityId"
          onChange={handleInputChange}
        />
        </FilterBox>
        <FilterBox
          title="Donde vive?">
        <InputCheckbox
          htmlFor="casa"
          text="Casa"
          value="casa"
          name="livingPlace"
          onChange={handleInputChange}
        />
        <InputCheckbox
          htmlFor="Departamento"
          text="Departamento"
          value="departamento"
          name="livingPlace"
          onChange={handleInputChange}
        />
        </FilterBox>
        <FilterBox
          title="Tiene mascota?">
        <InputCheckbox
          htmlFor=""
          text="Si"
          value={1}
          name="hasPet"
          onChange={handleInputChange}
        />
        <InputCheckbox
          htmlFor=""
          text="No"
          value={0}
          name="hasPet"
          onChange={handleInputChange}
        />
        </FilterBox>
        </div>
        {/*<ComponenteTerminos
          label="Soy mayor de 18 años" 
          id="edad"/>
          <ComponenteTerminos
          label="Acepto los terminos y condiciones"
    id="terminos" />*/}
        <div className="contenedorBotonCentrado">
          <button className='btn-adopt-form' type='submit'>Enviar</button>
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
