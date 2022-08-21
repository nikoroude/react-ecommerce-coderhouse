import './NavBar.css';
import shop from '../assets/img/icono-tienda.png';
import cart from '../assets/img/cart.png';
import profile from '../assets/img/user.png';


const NavBar = () => {

    return (

        <div className="navbar">
            <header>
                <div className="title__container">
                    <h1 className="navbar__title">Tienda Online</h1> <img src={shop} alt="Tienda Online" />
                </div>
                <nav className="menu__container">
                    <a className="navbar__item">CATEGORIAS</a>
                    <a className="navbar__item">LIQUIDACION</a>
                    <a className="navbar__item hotsale">HOT SALE</a>
                    <div className="navbar__icon">
                        <a className="icon"><img src={cart} alt="Mi carrito" /></a>
                        <a className="icon"><img src={profile} alt="Mi perfil" /></a>
                    </div>
                </nav>
            </header>
        </div>

    );

}

export default NavBar;