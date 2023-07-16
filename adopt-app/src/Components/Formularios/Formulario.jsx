import ComponenteInput from './Input'
import ComponenteTerminos from './Terminos';
import './Formularios.css';
import axios from 'axios';
import  Modal from '../Modales/Modal';
import { useState } from 'react';

const Formulario = ({ petId }) => {
  const [isOpenModal2, setOpenModal2 ] = useState(false);
  const [adoptionMesage, setAdoptionMesage] = useState('');

  const adoptFunction = async(petId) => {
    console.log(petId)
    try {
      const response = await axios.put(`http://localhost:3000/pets/adoptPet/${petId}`,{ 
        headers: { 'Content-Type': 'application/json' },
    });
    
    setAdoptionMesage(response.data.mensaje)
    setOpenModal2(true);
    }
      catch(error) {
        console.error(error)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    adoptFunction(petId);
  }
    return(
      <>
        <form className='formulario' onSubmit={handleSubmit}> 
        <ComponenteInput 
          label="Nombre Completo"
          placeholder="Juan Perez"
          id="nombre"
          name="nombre"/>
        <ComponenteInput 
          label="Ciudad"
          placeholder="Ingrese ciudad"
          id="ciudad"/>
        <ComponenteInput 
          label="Email"
          placeholder="email@correo.com"
          type="email"
          id="email"/>
        <ComponenteInput 
          label="Numero de telefono"
          placeholder="2901xxxxxx"
          type="number"
          id="telefono"/>
        <ComponenteTerminos
          label="Soy mayor de 18 años" 
          id="edad"/>
          <ComponenteTerminos
          label="Acepto los terminos y condiciones"
          id="terminos" />
        <div className="contenedorBotonCentrado">
          <button className='boton' type='submit'>Enviar</button>
        </div>
      </form>
       <Modal isOpen={isOpenModal2} closeModal={() => {
        setOpenModal2(false);
        window.location.reload();
        }}>
       <h3>Mensaje de Adopcion</h3>
       <p>{adoptionMesage}</p>
     </Modal>
     </>
    );
}

export default Formulario;
