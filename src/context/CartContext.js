import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const AddToCart = (item) => {
        setCart([...cart, item])
    }

    const isInCart = (id) => {
        return cart.find((item) => item.id === id)
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

    return(
        <CartContext.Provider value = { {
            cart,
            AddToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            itemTotal,
            emptyCart,
        } }>

            {children}

        </CartContext.Provider>
    )
}