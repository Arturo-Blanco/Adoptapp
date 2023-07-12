import ComponenteInput from './Input'
import ComponenteTerminos from './Terminos';
import './Formularios.css';

const Formulario = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado")
  }
    return(
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
    );
}

export default Formulario;
