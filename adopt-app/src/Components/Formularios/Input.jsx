import './Formularios.css';

const ComponenteInput = (props) =>{
    return(
        <div>
            <label className="label" htmlFor={props.id}>{props.label}</label>
            <div className="grupoInput">
                <input className="input" type={props.type} placeholder={props.placeholder} id={props.id} name={props.name} value={props.value} onChange={props.onChange} required
                />
            </div>
        </div>
    );
}

export default ComponenteInput;