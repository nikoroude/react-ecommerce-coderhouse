import './Cart.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import EmptyCart from '../EmptyCart/EmptyCart';
import { Link } from 'react-router-dom';



const Cart = () => {

    const { cart, cartTotal, emptyCart } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <EmptyCart />
        )
    }


    return (
        <div id="cartContainer">

            <h2 id="cart-title">Mi Carrito</h2>
            <hr />

            {cart.map((producto) => {
                return <ItemCart producto={producto} key={producto.id} />
            })}

            <h4 id='total'>Total: ${cartTotal().toFixed()}</h4>

            <div className='button__container'>
                <span onClick={emptyCart} className="button__empty">VACIAR CARRITO</span>
                <Link to="/Checkout" className="button__finalizar">FINALIZAR COMPRA</Link>
            </div>

        </div>
    )
}

export default Cart;