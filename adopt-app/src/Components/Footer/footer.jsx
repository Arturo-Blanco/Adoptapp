import './footer.css'

const Footer = () => {
    return(
        <footer>
            <div class="footer-content">
                <div class="footer-text">
                    <a href="#"><img src="logo.svg.svg" class="logo" alt=""></img></a>
                    <p>Adoptapp es una aplicación para ayudar a las mascotas sin hogar, 
                        mejorar la vida en general de los animales de la zona, informar sobre
                        campañas de zoonosis, y ayudar a las organizaciones locales, todo con el fin de
                        ayudar a los animales.
                    </p>
                </div>
                <div class="footer-menu">
                    <ul class="menu">
                        <li >Inicio</li>
                        <li >Adopciones</li>
                        <li >Denuncias</li>
                        <li>Informacion general</li>
                        <li>Contacto</li>
                    </ul>
                </div>
                <div class="footer-info">
                    <label for="newsleatter">Suscribete a nuestro newsleatter</label>
                    <input class="newsleatter" type="email" placeholder="Ingresa tu email"/>
                    <div class="footer-icon">
                        <h4>Nuestras redes sociales</h4>
                        <ul class="icon">
                            <li><i class="fa-brands fa-whatsapp"></i></li>
                            <li><i class="fa-brands fa-facebook-f"></i></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <p>2023 AdoptApp - All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
