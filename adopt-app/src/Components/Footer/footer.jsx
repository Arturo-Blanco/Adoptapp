import './footer.css'

const Footer = () => {
    return (
        <footer className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className='contact-title'>Contacto</h3>
                    <ul className='contact-list'>
                        <li className='contact-item'>Teléfono</li>
                        <li className='contact-value'>2901-512505</li>
                        <li className='contact-item'>Email</li>
                        <li className='contact-value'>adoptapp@gmail.com</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Nuestras redes sociales</h3>
                    <ul className="icon-list">
                        <li><i className="fa-brands fa-whatsapp"></i></li>
                        <li><i className="fa-brands fa-facebook-f"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>x
                <div className="footer-section">
                    <form className="form-newsletter" action="">
                    <label htmlFor="newsletter">Newsletter</label>
                    <input className="newsletter" id="newsletter" type="email" placeholder="Ingresa tu email" />
                    <button className='newsletter-btn'>Enviar</button>
                    </form>
                </div>
            </div>
            <div className="copyright">
                <p>2023 AdoptApp - All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
