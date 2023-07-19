import CardHome from './cardHome';
import './home.css';

const Home = () => {
    return(
        <main >
        <section>
        <article className="body-media">
            <div className="text-img">
                <h2>¿Porqué adoptar es mejor?</h2>
                <ul>
                <li>Salvar una vida, o dos en realidad.</li>
                <li>Reducir la sobrepoblación.</li>
                <li>Luchar contra la cría indiscriminada.</li>
                <li>Evitar futuros abandonos.</li>
            </ul>
        </div>
        <div className="img-home">
            </div> 
        </article>
        <article className="card-home-content">
            <CardHome
                name="Adoptar"
                info="efefefefe"
            />
            <CardHome
                name="Adoptar"
                info="efefefefe"
            />
            <CardHome
                name="Adoptar"
                info="efefefefe"
            />
            <CardHome
                name="Adoptar"
                info="efefefefe"
            />
        </article> 
        </section>
    </main>
    )
};

export default Home;
