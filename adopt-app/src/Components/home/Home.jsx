import { Link } from 'react-router-dom';
import CardHome from './cardHome';
import './home.css';

const Home = () => {
    return(
        <main >
        <section>
        <article className="adopt-reason-container">
            <div className="adopt-reason">
                <div className='adopt-reason-text'>
                    <div className='adopt-reason-title'>
                    <h2>¿Buscando un nuevo compañero?</h2>
                    </div>
                <h3>Antes tienes que saber:</h3>
                <ul className='adopt-reason-list'>
                <li>Adoptar una mascota es una responsabilidad, por ello primero debes asegurarte que estas listo para esta tarea.</li>
                <li>Una mascota requiere cuidado, atencion y cariño.</li>
                <li>Te solicitaremos informacion para que un profesional verifique y apruebe tu peticion.</li>
            </ul>
                </div>
        </div>
        <div className="adopt-reason-img">
            </div> 
        </article>

        <article className="adopt-reason-container">
            <div className="adopt-reason-img1">
            </div>
            <div className="adopt-reason">
                <div className='adopt-reason-title'>
                    <h2 className='titulo-requisito'>Requisitos para adoptar</h2>
                </div>
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
        </article>
        
        <article className='home-adopt-container'>
            <div className='home-adopt-div'>
                <h2 className='home-adopt-text1'>Estos son los miembros mas nuevos de nuestra familia</h2>
            </div>
        </article>

        <article className="home-card-content">
            <CardHome
                name="Adoptar"
                info="efefefefe"
            />
            <CardHome
                title="Adoptar"
                info="efefefefe"
            />
    </article> 

    <article>
            <div className='home-adopt-div'>
                <Link to="/adopciones"><div className='home-adopt-link'><h3>Ver mascotas</h3></div></Link>
            </div>
    </article>

    <article className='home-adopt-container'>
            <div className='home-adopt-div'>
                <h2 className='home-adopt-text1'>Informacion</h2>
            </div>
        </article>

        <article className="adopt-reason-container">
            <div className="adopt-reason-img1">
            </div>
            <div className="adopt-reason">
                <div className='adopt-reason-title'>
                    <h2 className='titulo-requisito'>Requisitos para adoptar</h2>
                </div>
            </div>
        </article>

    <article className='home-adopt-container'>
            <div className='home-adopt-div'>
                <h2 className='home-adopt-text1'>Ya hicieron match</h2>
            </div>
        </article>

        <article className="adopt-reason-container">
            <div className="adopt-reason">
                <div className='adopt-reason-text'>
                    <div className='adopt-reason-title'>
                    <h3>Ellos ya encontraron un hogar donde les brinden amor</h3> 
                    <p>¡Sumate vos tambien a esta familia y dales una oportunidad!</p>
                    </div>
                </div>
        </div>
        <div className="carrusel-container">
            <img className="carrusel-item" src="https://i.pinimg.com/564x/60/2f/15/602f1592b2ab6f76cce5d6d494b2acdf.jpg" alt="" />
            <img className="carrusel-item" src="https://i.pinimg.com/564x/18/41/f2/1841f2c427ecbd2c23ebb7836254ed12.jpg" alt="" />
            <img className="carrusel-item" src="https://i.pinimg.com/564x/42/04/8e/42048e1ef351f0c6e990e5f449d05baf.jpg" alt="" />
            </div> 
        </article>
        </section>
    </main>
    )
};

export default Home;
