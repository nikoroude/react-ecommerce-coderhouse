import './Cart.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";


const Cart = () => {

    const { cart, cartTotal, emptyCart } = useContext(CartContext)

    
    return (
        <div id="cartContainer">
            <h2 id="cart-title">Mi Carrito</h2>
            <hr/>

            { cart.map((producto) => {
                return <ItemCart producto={producto} key={producto.id} />
            })}

            <h4 id='total'>Total: ${cartTotal().toFixed()}</h4>
            
            <span onClick={emptyCart} className="button__empty">VACIAR CARRITO</span>

        </div>
    )
}

export default Cart;