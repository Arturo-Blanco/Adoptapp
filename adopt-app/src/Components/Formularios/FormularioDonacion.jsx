import React from 'react'
import ComponenteInput from './Input'
import ComponenteInputOpciones from './InputOpciones'

export const FormularioDonacion = () => {
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
            <ComponenteInput
            label="Quiero colaborar con"
            placeholder="Hogar transitorio/Alimento/Medicamento/Otro"
            id="tipoColaboracion"
            name="tipoColaboracion"/>
            <ComponenteInput
            label="Telefono de contacto"
            placeholder="02901-xxxxxx "
            type= "tel"
            id="telefono"
            name="telefono"/>
            <ComponenteInput
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

export default FormularioDonacion;