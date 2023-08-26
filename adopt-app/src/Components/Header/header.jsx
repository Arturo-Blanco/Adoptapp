import './header.css';
import { Link } from 'react-router-dom';
import  Logo  from '../../../src/assets/logo.svg'
import { scrollToTop } from '../../functions.mjs';

const Header = () => {
    return (
        <>
            <nav id="nav" className="main-nav">
            <div className='logo-div'>
                <Link to='/' className='logo-link'>
                    <img className='logo' src={Logo} alt="logo" onClick={scrollToTop}/>
                </Link>
                    </div> 
                <ul className="nav-links">
                    <li className="link-item">
                        <Link to='/adopciones/mascotas' onClick={scrollToTop}>Adoptar</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/denuncias' onClick={scrollToTop} >Denunciar</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/informacion' onClick={scrollToTop} >Información</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/donaciones' onClick={scrollToTop} >Ayudar</Link>
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
            <header className="header" id="home">
        </header>
        </>
    );
}


export default Header;