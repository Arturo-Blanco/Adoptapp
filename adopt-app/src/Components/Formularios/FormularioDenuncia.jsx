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
          <label className='form-label' htmlFor="Nombre">Denuncias y/o comentarios</label>
        <textarea className='form-input coment' placeholder="Dejanos tu comentario" name="denuncia" id="denuncia" cols="26" rows="5">
        </textarea>
        <ComponenteTerminos
        label="Acepto los terminos y condiciones"
        id="terminos"
        />
        <div className="contenedorBotonCentrado">
            <button className="form-button" type='submit'>Enviar</button>
        </div>
    </form>
    );
}

export default FormularioDenuncias;
