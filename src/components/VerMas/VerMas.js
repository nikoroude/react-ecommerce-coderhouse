import { Link } from 'react-router-dom';
import './VerMas.css'
// import { useState } from "react"


const VerMas = ({itemId}) => {

    
    return (

        <div className="add__container">
            <Link to={`/Item/${itemId}`} className="button__verMas">Ver producto</Link>
        </div>

    );

}

export default VerMas;