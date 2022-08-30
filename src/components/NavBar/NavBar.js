import './NavBar.css';
import shop from '../../assets/img/icono-tienda.png';
import profile from '../../assets/img/user.png';
import CartWidget from '../CartWidget/CartWidget'



const NavBar = (props) => {

    return (

        <div className="navbar">
            <header>
                <div className="title__container">
                    <img src={shop} alt="Tienda Online" /><h1 className="navbar__title">{props.title}</h1>
                </div>
                <nav className="menu__container">
                    <a href='#' className="navbar__item">CATEGORIAS</a>
                    <a href='#' className="navbar__item">LIQUIDACION</a>
                    <a href='#' className="navbar__item hotsale">HOT SALE</a>
                    <div className="navbar__icon">
                        <a href='#' className="icon"><CartWidget /></a>
                        <a href='#' className="icon"><img src={profile} alt="Mi perfil" /></a>
                    </div>
                </nav>
            </header>
        </div>

    );

}

export default NavBar;