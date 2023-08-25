import TitleBlock from '../../../Blocks/TitleBlock/TitleBlock';
import SectionStructure from '../SectionStructure/SectionStructure';
import './newPetsSection.css';
import { Link } from 'react-router-dom';
import { getNewPets } from '../../../../Apis/getMascotas.mjs';
import { useEffect, useState, useRef } from 'react';
import PetCards from '../../../Card/PetCards/PetCards';
import NotFoundImg from '../../../../assets/not-found.svg'
import { scrollToTop } from '../../../../functions.mjs';

const NewPetsSection = () => {

    const [petList, setPetList] = useState([]);
    const slider = useRef(null);

    useEffect(() => {
        const getPets = async () => {
            const data = await getNewPets();
            setPetList(data);
        }
        getPets()
    }, []);

    const nextImg = () => {
        if (slider.current.children && petList.length > 0) {
            const firsElement = slider.current.children[0];
            // Se define el movimiento de translacion la longitud de cada card sumado la distancia del margin
            const offset = firsElement.offsetWidth + 10;
            // Se establece tiempo de la transicion
            slider.current.style.transition = `400ms ease-out all`;
            // Se aplica la translacion
            slider.current.style.transform = `translateX(-${offset}px)`;
            // Se declara un metodo para que al finalizar la translacion se "renicie" el valor del eje x y el primer elemento sea desplazado al final del array
            const resetOffset = () => {
                slider.current.style.transition = 'none';
                slider.current.style.transform = `translateX(0)`;
                slider.current.appendChild(firsElement);
                slider.current.removeEventListener('transitionend', resetOffset);
            };

            slider.current.addEventListener('transitionend', resetOffset);
        }
    }
    const previousImg = () => {
        if (slider.current.children.length > 0) {
            // Se toma el ultimo elemento de la coleccion de elementos
            const lastElement = slider.current.children[petList.length - 1];
            // Se toma el ultimo elemento y se inserta al inicio
            slider.current.insertBefore(lastElement, slider.current.firstChild);
            const offset = lastElement.offsetWidth + 10;

            slider.current.style.transition = 'none';
            slider.current.style.transform = `translateX(-${offset}px)`;

            setTimeout(() => {
                slider.current.style.transition = `400ms ease-out all`;
                slider.current.style.transform = `translateX(0)`;

            }, 30);
        }
    }
    useEffect(() => {
        let intervalId;

        if (petList) {
            intervalId = setInterval(() => {
                nextImg();
            }, 4000);
        }

        return () => {
            clearInterval(intervalId);
        };
    });
    return (
        <SectionStructure
            className='new-pets'>
            <TitleBlock
                title='Ellos son los nuevos miembros de nuestra familia' />
            <div className='home-cards-container'>
                {petList && petList.length > 0 ? (
                    <>
                        <button className='previous-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" onClick={previousImg}>
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                            </svg></button>
                        <div className='home-pet-cards' >
                            <div className='slider' ref={slider}>
                                {petList.map((pet, index) => (
                                    <PetCards key={index} petList={[pet]} />
                                ))}
                            </div>
                        </div>
                        <button className='next-btn'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" onClick={nextImg}>
                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg></button>

                        <div className='btn-see-more-container'>
                            <button className='btn-see-more' id='btn-see-more' onClick={scrollToTop}>
                                <Link to='/adopciones/mascotas' >Ver mas</Link>
                            </button>
                        </div>
                    </>
                ) : (
                    <>  <img className='not-found-img' src={NotFoundImg} alt='not-found'></img>
                        <h3 className='not-found-title'> Un momento por favor, estamos buscando a las mascotas.</h3>
                    </>
                )}
            </div>
        </SectionStructure>
    )
}
export default NewPetsSection; 
