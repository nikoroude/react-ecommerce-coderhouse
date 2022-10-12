import './NavBar.css';
import shop from '../../assets/img/TechShop.jpeg';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { LoginContext } from '../../context/LoginContext';
import { BiLogOut } from 'react-icons/bi';
import { CgProfile } from "react-icons/cg";


const NavBar = (props) => {

    const {user, logout} = useContext(LoginContext);
    const { cart } = useContext(CartContext);

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
                        <Link to='/Cart' className={(cart.length === 0) ? "d-none" : "icon"}><CartWidget /></Link>

                        {
                            user.logged
                                ? <Link to='/Login' className="icon"><BiLogOut onClick={logout} className='iconLogOut' alt="Salir"/></Link>
                                : <Link to='/Login' className="icon"><CgProfile className='iconProfile' /></Link>
                        }
                    </div>
                </nav>
            </header>
            { user.logged && <div className='welcome'><small>Bienvenido: </small><b>{user.user}</b></div> }
        </div>

    );

}

export default NavBar;