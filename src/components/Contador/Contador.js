import './Contador.css'
// import { Link } from 'react-router-dom';

// import { useState } from "react"
import AddToCart from '../AddToCart/AddToCart'


const Contador = ({max, counter, setCounter, handleAgregar}) => {


    const handleSumar = () => {
        if (counter < max) {
            setCounter(counter + 1)
        }
    }

    const handleRestar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    

    return (

        <div className="Contador__container">

            <button onClick={handleRestar} className="button">-</button>
            <span className='contador'>{counter}</span>
            <button onClick={handleSumar} className="button">+</button>

            <div className="add__container">
                <span onClick={handleAgregar} className="button__agregar">AGREGAR AL CARRITO</span>
                
            </div>


        </div>

    );

}

export default Contador;