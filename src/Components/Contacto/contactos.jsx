/* eslint-disable jsx-a11y/alt-text */
import './contactos.css';
import { useState, ChangeEvent } from 'react';

const Contactos = () => {
    const [formulario,setFormulario] = useState({
        title: "",
        email: "",
        description: "",
        done: "",
    });

    const handleChange = (e /*: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> */) => {
        setFormulario({ ...formulario,[e.target.name]: e.target.value })
    }

    const handleSubmit = (e /*: FormEvent<HTMLFormElement>*/) => {
        e.preventDefault()
        console.log(formulario)
    }
    return (
        <>
            <h2>Contacto</h2>
            <div className='conContainer'>
                    <div className='donDiv1'>
                       <h3 className='conH3'> ¿Queres contactarte con nosotros? Aca podes </h3>
                       <p className='conP'>Dejanos tus datos y nos comunicaremos al instante con vos</p>
                       <a className='conA' href="#!">Ingresa Aqui</a>
                    </div>                
                       <div className='conDiv2'>
                       </div>   
            </div>
                            <div className="con-flex-container">
	                                    <form className="con-form" onSubmit={handleSubmit}>
	                                    	    <div className="con-form__section">
	                                    	    	<input  type="text" name="title" className="con-form__input" placeholder="Asunto" 
                                                    onChange={handleChange}
                                                    />
	                                    	    </div>
	                                    	    <div className="con-form__section"  >
	                                    	    	<input type="email" name="email" className="con-form__input" placeholder="Email"
                                                    onChange={handleChange}/>
	                                    	    </div>
	                                    	    <div className="con-form__section">
	                                    	    	<textarea name="description" className="con-form__input" placeholder="Escriba su mensaje"
                                                    onChange={handleChange}></textarea>
	                                    	    </div>
	                                    	    <div className="con-form__section">
	                                    	    	<input type="submit" className="con-form__input" ></input>
	                                    	    </div>
	                                    </form>  
                            <div className="con-form-img">
 		                               <div className="con-img-container">
                                              <img src="https://images.vexels.com/media/users/3/130187/isolated/preview/5e8d2205ecc8cde3235581fc5ecfa430-icono-de-contorno-de-correo-electronico.png">
                                              </img>
                                       </div>
                                   </div>
                            </div>
        </> 
        
    )
};

export default Contactos;