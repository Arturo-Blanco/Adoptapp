import Filter from '../FiltroBusqueda/Filter';
import CardAdopt from './Card-adopt/card-adopt';
import PaginationButton from './PaginationComponents/PaginationButton';
import './adopciones.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../Apis/getMascotas.mjs';

const Adopciones = () => {

    const [filter, setFilters] = useState({})
    const [pageNumber, setPageNumber] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [values, setValues] = useState();

    useEffect(() => {
        const selectValues = Object.values(filter).filter((value) => 
            value !== undefined
        )
        console.log(selectValues)
        if(selectValues.length > 0){
        setValues(selectValues.toString());
        } else {
            setValues('$')
        }
    }, [filter])

    useEffect(() => {
        const getLenght = async() => {
            try {
                const response = await axios.get(baseUrl+`pets/count`);
                const  count = response.data
                setTotalCount(Math.ceil(count / 10));
            } catch(error) {
                console.error(error)
            }
        }
        getLenght();
    }, [])

    const previousPage = () => {
        if(pageNumber > 1) {
            setPageNumber((prevPag) => prevPag - 1);
            scrollToTopSmoothly()
        }
    }

    const nextPage = () => {
        if(pageNumber < totalCount ) {
            setPageNumber((prevPag) => prevPag + 1);
            scrollToTopSmoothly()
        }
    }

    const goPage = (event) => {
        setPageNumber(parseInt(event.target.value));
        scrollToTopSmoothly()
    };

    const activePage = (page) => {
        return page === pageNumber ? 'active-page' : 'disable-page';
    }
    const scrollToTopSmoothly = () => {
        if ('scrollBehavior' in document.documentElement.style) {
          // Si la propiedad scrollBehavior es soportada por el navegador
            window.scrollTo({
            top: 0,
            behavior: 'smooth', // Desplazamiento suave
            });
        } else {
          // Si la propiedad scrollBehavior no es soportada por el navegador, simplemente desplázate sin animación
            window.scrollTo(0, 0);
        }
    };

    return (
        
        <div className='adopciones'>
            <h2>Un amigo te esta esperando</h2>
            <Filter filter={filter} setFilters={setFilters}></Filter>
            <CardAdopt pageNumber={pageNumber} filters={values}/>
            <div className='pagination-container'>
            <PaginationButton
                className="pagination-btn"
                id="previous-btn"
                value ="previous-btn"
                onClick={previousPage}
                text="< Anterior"
            />
            {/*Se crea un array declarando una longitud de totalCount, luego se itera en el mismo. Se utiliza '_' ya que no se requiere extraer valor, pero si el index para crear los botones */}
            {Array.from({length:totalCount}).map((_,index) => (
                <PaginationButton
                    key = {index}
                    className= {"pagination-btn "+activePage(index + 1 )}
                    id = {"pagination-btn"+index}
                    value = {index + 1}
                    onClick = {goPage}
                    text = {index + 1}
                />
            ))}
            <PaginationButton
                id="next-btn"
                className="pagination-btn"
                value ="next-btn"
                onClick={nextPage}
                text="Siguiente >"
            />
            </div>
            <div className='row'>
                <div className='col-1'>
                </div>
                <div className='col-2'>
                    <h3 className='titulo-requisito'>Requisitos para adoptar</h3>
                    <div className='requisitos'>
                        <span className='count-punto'>1
                        </span>
                        <p className='texto-req'>Ser mayor de 18 años</p>
                    </div>
                    <div className='requisitos'>
                        <span className='count-punto'>2
                        </span>
                        <p className='texto-req'>Amar a las mascotas y poder dedicarle el tiempo que necesite.</p>
                    </div><div className='requisitos'>
                        <span className='count-punto'>3
                        </span>
                        <p className='texto-req'>Querer sumar un integrante a tu vida por el resto de la suya, sin importar los cambios que se presenten.</p>
                    </div><div className='requisitos'>
                        <span className='count-punto'>4
                        </span>
                        <p className='texto-req'>Comprometerse con el cuidado, la salud y la castración de la mascota.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Adopciones;