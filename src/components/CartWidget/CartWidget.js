import cartWidget from '../../assets/img/carrito-vacio.png';
// import { BsFillCartCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return (
        <div>
            <Link to={'/Cart'}>
                {/* <BsFillCartCheckFill/> */}
                <img src={cartWidget} alt="Mi carrito" />
                <span>{cartQuantity()}</span>
            </Link>
        </div>
    )
}

export default CartWidget