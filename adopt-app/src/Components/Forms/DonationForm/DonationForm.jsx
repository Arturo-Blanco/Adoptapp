import React from 'react'
import TextInput from 'Components/Inputs/TextInput/TextInput'
//import ComponenteInputOpciones from './InputOpciones'

export const DonationForm = () => {
  return (
    <>
        <form className='form'>
            {/* <ComponenteInputOpciones
            label="Quiero colaborar con"
            value=""
            value1="Hogar transitorio"
            value2="Alimento"
            value3="Medicamento"
            value4="Otros"
            id="tipoColaboracion"
            name="eleccion"/> */}
            <TextInput
            label="Quiero colaborar con"
            placeholder="Hogar transitorio/Alimento/Medicamento/Otro"
            id="tipoColaboracion"
            name="tipoColaboracion"/>
            <TextInput
            label="Telefono de contacto"
            placeholder="02901-xxxxxx "
            type= "tel"
            id="telefono"
            name="telefono"/>
            <TextInput
            label="Mail"
            placeholder="mail@ejemplo.com"
            type="email"
            id="mail"
            name="mail"/>
            {/* //componente Nuevo que aparece si se selecciona "otros" */}
            <div className="contenedorBotonCentrado">
                <button className="boton" type='submit'>Enviar</button>
            </div>
        </form>
    </>
  )
}

export default DonationForm;