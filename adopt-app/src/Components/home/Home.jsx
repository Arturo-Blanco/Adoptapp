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
                <h2>Antes tienes que saber:</h2>
                <ul className='adopt-reason-list'>
                <li>Debes ser mayor de 18 años.</li>
                <li>Adoptar una mascota es una responsabilidad, por ello primero debes asegurarte que estas listo para esta tarea.</li>
                <li>Una mascota requiere cuidado, atencion y cariño.</li>
                <li>Te solicitaremos informacion para que un profesional verifique y apruebe tu peticion.</li>
            </ul>
            </div>
        </div>
        <div className="adopt-reason-img">
            </div> 
        </article>
        <article className='home-adopt-container'>
            <div className='home-adopt-div'>
                <h3 className='home-adopt-text'>Quiero adoptar</h3>
                <Link to="/adopciones"><div className='home-adopt-link'><h3>Ver mascotas</h3></div></Link>
            </div>
        </article>
        <article className="home-card-content">
            <CardHome
                title="Adoptar"
                info="efefefefe"
            />
            <CardHome
                title="Adoptar"
                info="efefefefe"
            />
            <CardHome
                name="Adoptar"
                info="efefefefe"
            />
            <CardHome
                title="Adoptar"
                info="efefefefe"
            />
    </article> 
        </section>
    </main>
    )
};

export default Home;
