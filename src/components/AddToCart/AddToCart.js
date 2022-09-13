import './AddToCart.css'
// import { useState } from "react"


const AddToCart = (item) => {

    const handleAgregar = () => {
        console.log(item.nombre)
    }
    
    return (

        <div className="add__container">
            <span onClick={handleAgregar} className="button__add">AGREGAR AL CARRITO</span>
        </div>


    );
        
}

export default AddToCart;