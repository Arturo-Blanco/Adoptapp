import './header.css';
import { Link } from 'react-router-dom';
import  Logo  from '../../../src/assets/logo.svg'

const Header = () => {
    return (
        <>
            <nav id="nav" className="main-nav">
            <div className='logo-div'>
                <Link to='/' className='logo-link'>
                    <img className='logo' src={Logo} alt="logo" />
                </Link>
                    </div> 
                <ul className="nav-links">
                    <li className="link-item">
                        <Link to='/adopciones/mascotas'>Adoptar</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/denuncias'>Denunciar</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/informacion'>Información</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/donaciones'>Ayudar</Link>
                    </li>
                    <li className="link-item">
                        <a href='#footer'>Contacto</a>
                        <ul className="nav-icons">
                            <li><i className="fa-brands fa-whatsapp"></i></li>
                            <li><i className="fa-brands fa-facebook-f"></i></li>
                            <li><i className="fa-brands fa-instagram"></i></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <button type="button" id="btn-burger" className="button-menu">
                <span className="lines"></span>
                <span className="lines"></span>
                <span className="lines"></span>
            </button>
            <header id="home">
        </header>
        </>
    );
}


export default Header;