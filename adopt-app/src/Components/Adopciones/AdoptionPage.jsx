import Filter from '../FiltroBusqueda/Filter';
import AdoptCards from './AdoptCards/AdoptCards';
import PaginationButton from './PaginationComponents/PaginationButton';
import './adoptionPage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../Apis/getMascotas.mjs';
import TitleBlock from '../Blocks/TitleBlock/TitleBlock';

const Adopciones = () => {
    const [filter, setFilters] = useState({})
    const [pageNumber, setPageNumber] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [param, setParam] = useState();

    useEffect(() => {
        if (filter) {
            const query = new URLSearchParams({
                specie: filter.specie || "",
                sex: filter.sex || "",
                location: filter.location || ""
            }).toString();
            //console.log(filter)
            setParam(query)
        }
    }, [filter])

    useEffect(() => {
        const getLenght = async () => {
            try {
                const response = await axios.get(baseUrl + `pets/count`);
                const count = response.data
                setTotalCount(Math.ceil(count / 10));
            } catch (error) {
                console.error(error)
            }
        }
        getLenght();
    }, [])
    const previousPage = () => {
        if (pageNumber > 1) {
            setPageNumber((prevPag) => prevPag - 1);
            scrollToTopSmoothly()
        }
    }

    const nextPage = () => {
        if (pageNumber < totalCount) {
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
        <main className='adoption-main'>
            <TitleBlock 
            title ="Ellos te esperan" />
            <aside className='filter-container'>
                <Filter filter={filter} setFilters={setFilters}></Filter>
            </aside>
            <div className='cards-container'>
                <AdoptCards pageNumber={pageNumber} params={param} />
            </div>
            <section className='pagination-container'>
                <PaginationButton
                    className='pagination-btn'
                    id='previous-btn'
                    value='previous-btn'
                    onClick={previousPage}
                    text='< Anterior'
                />
                {/*Se crea un array declarando una longitud de totalCount, luego se itera en el mismo. Se utiliza '_' ya que no se requiere extraer valor, pero si el index para crear los botones */}
                {Array.from({ length: totalCount }).map((_, index) => (
                    <PaginationButton
                        key={index}
                        className={"pagination-btn " + activePage(index + 1)}
                        id={"pagination-btn" + index}
                        value={index + 1}
                        onClick={goPage}
                        text={index + 1}
                    />
                ))}
                <PaginationButton
                    id="next-btn"
                    className="pagination-btn"
                    value="next-btn"
                    onClick={nextPage}
                    text="Siguiente >"
                />
            </section>
        </main>
    )
};

export default Adopciones;