import { useState } from 'react';
import './Formularios.css'

const ComponenteTerminos = (props) =>{

    const [datos, setDatos] = useState ({});
    
    const handleInputChange = (event) => {
        console.log(event.target.value);
        setDatos({
        ...datos,
        [event.target.name] : event.target.value
        })
    }
    return(
        <div className="contenedorTerminos">
            <label htmlFor={props.id}>
            <input type="checkbox" name={props.id} id={props.id} onChange={handleInputChange}/>
            {props.label}
            </label>
</div>
    );
}

export default ComponenteTerminos;


