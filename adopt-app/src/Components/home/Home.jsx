import './home.css';

const Home = () => {
    return(
        <main >
        <section>
        <article className="body-media">
            <div className="text-img">
                <h2>¿Porqué adoptar es mejor?</h2>
                <ul>
                <li>Salvar una vida o dos, en realidad.</li>
                <li>Reducir la sobrepoblación.</li>
                <li>Luchar contra la cría indiscriminada.</li>
                <li>Evitar futuros abandonos.</li>
                <li> Conocer la verdad.</li>
            </ul>
                <a href="#" class="btn-info">Leer Más</a>
        </div>
        <div className="img-home">
            </div> 
        </article>
        <article className="card-content">
            <div className="card-adopt">
                <div className="card-image">
                <div className="card-text">
                    <h3 className="card-name"> Name</h3>
                    <p className="card-info">Info</p>
                    <button type="button" className="card-button" id="card-button1"> Ver más</button>
                </div>
                </div>
            </div>
            <div className="card-adopt">
                <div className="card-image">
                <div className="card-text">
                    <h3 className="card-name"> Name</h3>
                    <p className="card-info">Info</p>
                    <button type="button" className="card-button" id="card-button1"> Ver más</button>
                </div>
                </div>
            </div>
            <div className="card-adopt">
                <div className="card-image">
                <div className="card-text">
                    <h3 className="card-name"> Name</h3>
                    <p className="card-info">Info</p>
                    <button type="button" className="card-button" id="card-button1"> Ver más</button>
                </div>
                </div>
            </div>
            <div className="card-adopt">
                <div className="card-image">
                <div className="card-text">
                    <h3 className="card-name"> Name</h3>
                    <p className="card-info">Info</p>
                    <button type="button" className="card-button" id="card-button1"> Ver más</button>
                </div>
                </div>
            </div>
        </article> 
        </section>
    </main>

    )
};

export default Home;
