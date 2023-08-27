import ComponenteInput from './Input'
//import ComponenteTerminos from './Terminos';
import './Formularios.css';
import axios from 'axios';
import  Modal from '../Modales/Modal';
import React, { useState } from 'react';
import { baseUrl } from '../../Apis/getMascotas.mjs';
import InputCheckbox from '../FiltroBusqueda/InputCheckbox/InputCheckbox';
import FilterBox from '../FiltroBusqueda/FilterBox/FilterBox';

const Formulario = ({ petId, closeModal1 }) => {

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
      const interestedIn = petId;
      try {
        const userData = {
            ...data,
            interestedIn
        };
        const responseUser = await axios.post(baseUrl + `user/addUser`, userData);

        if (responseUser.data.success) {
            const responsePet = await axios.put(baseUrl + `pets/addInterested/${petId}`, {
                headers: { 'Content-Type': 'application/json' },
            });
              setAdoptionMesage(responsePet.data.message);
              setOpenModal2(true);
        } else {
            console.error('Error al agregar el usuario:', responseUser.data.message);
        }
      } catch (error) {
          if(error.response.status === 409) {
              alert(`Este mail ya se encuentra registrado para adoptar una mascota, aguarde a que sus datos sean confirmados o solicite reemplazar la mascota por la cual esta interesado/a.`)
          } else {
              alert(`Error inesperado del sistema.`)
          }
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
    adoptFunction(petId, formData);
  }
    return(
      <>
        <form className='adoption-form' onSubmit={handleSubmit}> 
        <ComponenteInput
          className='form' 
          label="Nombre"
          placeholder="Nombre Completo"
          id="nombre"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          />
        <ComponenteInput 
          className='form'
          label="Apellido"
          placeholder="Apellido"
          id="apellido"
          name="surname"
          value={formData.surname}
          onChange={handleInputChange}
        />
        <ComponenteInput 
          className='form'
          label="Edad"
          placeholder="Ingrese su edad"
          id="edad"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
        <ComponenteInput
          className='form'
          label="Domicilio"
          placeholder="Ingrese su domicilio"
          id="domicilio"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <ComponenteInput
          className='form' 
          label="Email"
          placeholder="email@correo.com"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          />
        <ComponenteInput
          className='form' 
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
          type="radio"
          text="Ushuaia"
          value='1'
          name="cityId"
          onChange={handleInputChange}
        />
        <InputCheckbox
          type="radio"
          text="Tolhuin"
          value='2'
          name="cityId"
          onChange={handleInputChange}
        />
        <InputCheckbox
          type="radio"
          text="Rio Grande"
          value='3'
          name="cityId"
          onChange={handleInputChange}
        />
        </FilterBox>
        <FilterBox
          title="¿Dónde vive?">
        <InputCheckbox
          type="radio"
          text="Casa"
          value="casa"
          name="livingPlace"
          onChange={handleInputChange}
        />
        <InputCheckbox
          type="radio"
          text="Departamento"
          value="departamento"
          name="livingPlace"
          onChange={handleInputChange}
        />
        </FilterBox>
        <FilterBox
          title="¿Tiene mascota?">
        <InputCheckbox
          type="radio"
          text="Si"
          value='1'
          name="hasPet"
          onChange={handleInputChange}
        />
        <InputCheckbox
          type="radio"
          text="No"
          value='0'
          name="hasPet"
          onChange={handleInputChange}
        />
        </FilterBox>
        </div>
        <div className="contenedorBotonCentrado">
          <button className='btn-adopt-form' type='submit'>Enviar</button>
        </div>
      </form>
      <Modal isOpen={isOpenModal2} closeModal= {() => { closeModal1() }} >
      <p>{adoptionMesage}</p>
      </Modal>
    </>
    );
}

export default Formulario;
