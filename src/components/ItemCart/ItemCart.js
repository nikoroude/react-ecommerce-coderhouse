import './ItemCart.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const ItemCart = ({ producto }) => {

    const { itemTotal } = useContext(CartContext)

    return (
        <div>
            <div className="itemCartContainer">
                <div>
                    <img className="img-cart" src={producto.img} alt={producto.nombre} />
                </div>
                <div key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p>Precio: {producto.precio}</p>
                    <p>Cantidad: {producto.cantidad}</p>
                    <h3>Total: ${itemTotal(producto)}</h3>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ItemCart;