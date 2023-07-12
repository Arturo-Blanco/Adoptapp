import React, {useState} from "react";

import './Formularios.css';


const ComponenteInput = (props) =>{

    const [datos, setDatos] = useState ({
        nombre: '',
        email: ''
    
    })
    
    const handleInputChange = (event) => {
        console.log(event.target.value);
        setDatos({
        ...datos,
        [event.target.name] : event.target.value
        })
    }
    return(
        <div>
            <label className="label" htmlFor={props.id}>{props.label}</label>
            <div className="grupoInput">
                <input className="input" type={props.type} placeholder={props.placeholder} id={props.id} onChange={handleInputChange}/>
            </div>
            <h3>{datos.nombre}</h3>
        </div>
    );
}

export default ComponenteInput;