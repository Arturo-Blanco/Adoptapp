import './header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <header>
            <nav id="nav" className="main-nav">
            <ul className="nav-links">
                <li>
                    <Link to='/'><img src="../../../Img/logo.svg.svg" className="logo" alt=""></img> </Link>
                </li>
                <li className="link-item" data-submenu="true">
                    <Link to='/adopciones'>Adopciones</Link>
                </li>
                <li className="link-item" data-submenu="true">
                    <Link to='/denuncias'>Denuncias</Link>
                </li>
                <li  className="link-item" data-submenu="true">
                    <Link to='/informaciongeneral'>Información general</Link>
                </li>
                <li className="link-item">
                    <Link to='/donaciones'>Donaciones</Link>
                </li>
                <li className="link-item">
                <Link to='/contactos'>Contactos</Link>
                    <ul className="nav-icons">
                        <li><i class="fa-brands fa-whatsapp"></i></li>
                        <li><i class="fa-brands fa-facebook-f"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <button type="button" id="btn-burger" className="button-menu">
            <span className="lines"></span>
            <span className="lines"></span>
            <span className="lines"></span>
        </button>
        </header>
    );
}


export default Header;