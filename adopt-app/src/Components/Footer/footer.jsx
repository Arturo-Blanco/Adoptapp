import './footer.css'

const Footer = () => {
    return(
        <footer>
            <div className="footer-content">
                <div className="footer-text">
                    <a href="#"><img src="logo.svg.svg" className="logo" alt=""></img></a>
                    <p>Adoptapp nacio de la idea de ayudar a las mascotas sin hogar, mejorar la vida de los animales de la zona, informar a la poblacion sobre campañas de zoonosis, apoyar a las organizaciones locales y brindar cualquier tipo de contencion para nuestros amigos de cuatro patas.
                    </p>
                </div>
                <div className="footer-menu">
                    <ul className="menu">
                        <li >Inicio</li>
                        <li >Adopciones</li>
                        <li >Denuncias</li>
                        <li>Informacion general</li>
                        <li>Contacto</li>
                    </ul>
                </div>
                <div className="footer-info">
                    <label htmlFor="newsleatter">Suscribete a nuestro newsleatter</label>
                    <input className="newsleatter" type="email" placeholder="Ingresa tu email"/>
                    <div className="footer-icon">
                        <h4>Nuestras redes sociales</h4>
                        <ul className="icon">
                            <li><i className="fa-brands fa-whatsapp"></i></li>
                            <li><i className="fa-brands fa-facebook-f"></i></li>
                            <li><i className="fa-brands fa-instagram"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>2023 AdoptApp - All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
