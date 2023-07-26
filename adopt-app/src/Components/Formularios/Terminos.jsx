import './Formularios.css'

const ComponenteTerminos = (props) =>{

    return(
        <div className="contenedorTerminos">
            <label className='form-label-terminos' htmlFor={props.id}>
            <input className='form-input' type="checkbox" name={props.id} value={props.value} id={props.id} onChange={props.onChange} required/>
            {props.label}
            </label>
        </div>
    );
}

export default ComponenteTerminos;


