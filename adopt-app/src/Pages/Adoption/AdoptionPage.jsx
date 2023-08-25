
import './adoptionPage.css';
import { getMascotas } from '../../Apis/getMascotas.mjs';
import { scrollToTop } from '../../functions.mjs';
import Filter from '../../Components/FiltroBusqueda/Filter';
import PetCards from '../../Components/Card/PetCards/PetCards';
import PaginationButton from '../../Components/Adopciones/PaginationComponents/PaginationButton';
import TitleBlock from '../../Components/Blocks/TitleBlock/TitleBlock';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../Apis/getMascotas.mjs';
import NotFoundImg from '../../assets/not-found.svg';

const AdoptPage = () => {

    const [petList, setPetList] = useState([]);
    const [filter, setFilters] = useState({})
    const [pageNumber, setPageNumber] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [param, setParam] = useState();

    useEffect(() => {
        const getPets = async () => {
            const data = await getMascotas(pageNumber + `?${param}`);
            setPetList(data);
        }
        getPets();
    },
        [pageNumber, param]
    );

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
            scrollToTop()
        }
    }

    const nextPage = () => {
        if (pageNumber < totalCount) {
            setPageNumber((prevPag) => prevPag + 1);
            scrollToTop()
        }
    }

    const goPage = (event) => {
        setPageNumber(parseInt(event.target.value));
        scrollToTop()
    };

    const activePage = (page) => {
        return page === pageNumber ? 'active-page' : 'disable-page';
    }

    return (
        <main className='adoption-main'>
            <TitleBlock
                title="Ellos te esperan" />
            {petList && petList.length > 0 ? (
                <>
                    <aside className='filter-container'>
                        <Filter filter={filter} setFilters={setFilters}></Filter>
                    </aside>
                    <div className='cards-container'>
                        <PetCards petList={petList} />
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
                </>
            ) : (
                <>  <img className='not-found-img' src={NotFoundImg} alt='not-found'></img>
                    <h3 className='not-found-title'> Un momento por favor, estamos buscando a las mascotas.</h3>
                </>
            )
            }

        </main>
    )
};

export default AdoptPage;