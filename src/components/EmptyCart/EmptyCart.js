import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const EmptyCart = () => {

    const { cart, cartTotal, emptyCart } = useContext(CartContext)

    return (
        <div id="cartContainer">
            <h2>Tu carrito esta vacío</h2>
            <hr />
            <Link to="/" className='button__empty'>Ir al inicio</Link>
        </div>
    )
}

export default EmptyCart;