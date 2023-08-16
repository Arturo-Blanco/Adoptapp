import './Formularios.css'

const ComponenteTerminos = (props) =>{

    return(
        <div className="contenedorTerminos">
            <label className='label' htmlFor={props.id}>
            <input className='input' type="checkbox" name={props.id} value={props.value} id={props.id} onChange={props.onChange} required/>
            {props.label}
            </label>
        </div>
    );
}

export default ComponenteTerminos;


