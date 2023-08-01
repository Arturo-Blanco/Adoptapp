import './Formularios.css';

const ComponenteInput = (props) =>{
    return(
        <div className='grupoInput'>
            <label className="label" htmlFor={props.id}>{props.label}</label>
                <input className="input" type={props.type} placeholder={props.placeholder} id={props.id} name={props.name} value={props.value} onChange={props.onChange} required
                />
        </div>
    );
}

export default ComponenteInput;