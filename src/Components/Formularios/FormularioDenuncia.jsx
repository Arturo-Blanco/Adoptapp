import ComponenteInput from './Input'
import ComponenteTerminos from './Terminos';
import './Formularios.css';

const FormularioDenuncias = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado")
  }
    return(
        <form className='formulario' onSubmit={handleSubmit}> 
        <ComponenteInput 
          label="Nombre"
          placeholder="Juan"
          id="nombre"
          name="nombre"/>
        <ComponenteInput 
          label="Ciudad"
          placeholder="Ingrese ciudad"
          id="ciudad"/>
        <ComponenteInput 
          label="Deje su comentario o denuncia"
          placeholder="Escriba aqui"
          type="text"
          id="text"/>

        <ComponenteTerminos
        label="Acepto los terminos y condiciones"
        id="terminos" />

        <div className="contenedorBotonCentrado">
            <button className="boton" type='submit'>Enviar</button>
        </div>
    </form>
    );
}

export default FormularioDenuncias;
