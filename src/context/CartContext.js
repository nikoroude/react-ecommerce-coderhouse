import { createContext, useContext, useState } from "react";
import Swal from 'sweetalert2'


export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(init)

    const AddToCart = (item) => {
        setCart([...cart, item])
    }

    const removeItem = (id) => {
        setCart( cart.filter((item) => item.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    const itemTotal = (item) => {
        return (item.cantidad * item.precio)
    }

    const emptyCart = () => {
        setCart([])
    }

    const terminarCompra = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value = { {
            cart,
            AddToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            itemTotal,
            emptyCart,
            removeItem,
            terminarCompra,
        } }>

            {children}

        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}