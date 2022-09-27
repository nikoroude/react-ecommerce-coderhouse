import './Checkout.css'
import { useState } from 'react'
import { useCartContext } from "../../context/CartContext";
import { Navigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Firebase/configFirebase';


const Checkout = () => {

    const {cart, cartTotal, terminarCompra} = useCartContext()

    const [orderId, setOrderId] = useState(null)


    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: '',
    })

    const handleInputChange = (e) => {
        
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal(),
        }

        const ordenesRef = collection(db, 'ordenes')

        addDoc(ordenesRef, orden)
            .then((doc) => {
                console.log(doc.id)
                setOrderId(doc.id)
                terminarCompra()
            })
    }

    if (orderId) {
        return (
            <div className="container__orderId">
                <h2>Orden de compra registrada!</h2>
                <hr/>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <h2>Checkout de compra</h2>
            <hr/>

            <form onSubmit={handleSubmit} className="formCheckoutConteiner">
                <input 
                    name='nombre'
                    value={values.nombre}
                    onChange={handleInputChange}
                    type={'text'}
                    className="form-control"
                    placeholder="Nombre y apellido" 
                />
                
                <input
                    name='email'
                    value={values.email}
                    onChange={handleInputChange}
                    type={'email'}
                    className="form-control"
                    placeholder="Email" 
                />
                
                <input
                    name='direccion'
                    value={values.direccion}
                    onChange={handleInputChange}
                    type={'text'}
                    className="form-control"
                    placeholder="Dirección de envio" 
                />
                
                <button type={'submit'}>ENVIAR</button>
            </form>
        </div>
    )
}

export default Checkout;