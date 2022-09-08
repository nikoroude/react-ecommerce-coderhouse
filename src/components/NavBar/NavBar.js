import './NavBar.css';
import shop from '../../assets/img/TechShop.jpeg';
import profile from '../../assets/img/icon-profile.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';




const NavBar = (props) => {

    return (

        <div className="navbar">
            <header>
                <div className="title__container">
                    <Link to='/'><img src={shop} alt="Tienda Online" /></Link><h1 className="navbar__title">{props.title}</h1>
                </div>
                <nav className="menu__container">
                    <Link to='/Productos/smartwatch' className="navbar__item">SMARTWATCH</Link>
                    <Link to='/Productos/informatica' className="navbar__item">INFORMATICA</Link>
                    <Link to='/Productos/tv' className="navbar__item">TV</Link>
                    <Link to='/Productos/celulares' className="navbar__item">CELULARES</Link>
                    <Link to='/' className="navbar__item hotsale">VER TODOS</Link>
                    <div className="navbar__icon">
                        <Link to='#' className="icon"><CartWidget /></Link>
                        <Link to='#' className="icon"><img className='iconProfile' src={profile} alt="Mi perfil" /></Link>
                    </div>
                </nav>
            </header>
        </div>

    );

}

export default NavBar;