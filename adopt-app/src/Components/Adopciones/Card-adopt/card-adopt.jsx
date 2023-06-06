import './card-adopt.css';
import React, { useContext } from 'react';
import { AnimalsContext } from '../../../App';

const CardAdopt = () => {

   

    const { animals } = useContext(AnimalsContext);
    return(
        
        <div>
            {animals.map(animal =>(
                <div className='card-animal'>
                    
                    <img className='img-animal' key={animal.id} src={animal.imagen} alt='imagen'></img>
                    <div className='datos'>
                        <div className='div-item'> <div> {animal.name}</div>{animal.genero == false ? <img className='img-sex' src="../../../Img/simbolMale.png" alt="male"/>  : <img className='img-sex' src="../../../Img/simbolFemale.webp" alt="female"/> }</div>
                        <div className='div-item'>Raza: {animal.raza}</div>
                        
                        <div className='div-item'>Edad: {animal.edad} años</div>
                        <div className='div-item'>Desparacitado: {animal.desparacitadoVacunado == true ?`Si`: `No`}</div>
                        <div className='div-item'>Disponible: {animal.disponible == true ? `Si` : `No`} </div>
                        <div className='div-item'>Información: {animal.info}</div>

                        <button className='btn-adoptar'>Adoptar</button>
                        

                    </div>

                </div>
            ))}

        </div>
    )
};

export default CardAdopt;