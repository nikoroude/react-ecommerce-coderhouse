import './Checkout.css'
import { useState } from 'react'
import { useCartContext } from "../../context/CartContext";
import { Link, Navigate } from 'react-router-dom';
import { addDoc, collection, doc, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore';
import { db } from '../../Firebase/configFirebase';
import Swal from 'sweetalert2'


const Checkout = () => {

    const { cart, cartTotal, terminarCompra } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: '',
        pago: '',
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal(),
        }

        if (values.nombre.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Ingrese su nombre completo',
                customClass: {
                    popup: 'format-pre'
                }
            });

            return
        }

        if (values.email.length < 7) {
            Swal.fire({
                icon: 'error',
                title: 'Ingrese un mail valido',
                customClass: {
                    popup: 'format-pre'
                }
            });

            return
        }

        if (values.direccion.length < 5) {
            Swal.fire({
                icon: 'error',
                title: 'Ingrese una dirección valida',
                customClass: {
                    popup: 'format-pre'
                }
            });

            return
        }

        const ordenesRef = collection(db, 'ordenes')
        const batch = writeBatch(db)
        const productosRef = collection(db, 'productos')



        const q = query(productosRef, where(documentId(), 'in', cart.map(el => el.id)))

        const productos = await getDocs(q)

        const outOfStock = []

        productos.docs.forEach((doc) => {
            const itemInCart = cart.find(prod => prod.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            } else {
                outOfStock.push(itemInCart)
            }
        })


        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            console.log(doc.id)
                            setOrderId(doc.id)
                            terminarCompra()
                        })
                })
        } else {

            Swal.fire({
                icon: 'error',
                title: 'Hay productos sin stock',
                customClass: {
                    popup: 'format-pre'
                }
            });
            console.log(outOfStock)
        }

    }

    if (orderId) {
        return (
            <div className="container__orderId">
                <h2>Orden de compra registrada!</h2>
                <hr />
                <p>Tu número de orden es: <strong>{orderId}</strong></p>

                <h5>No pierdas este número. El area de facturación se pondra en contacto contigo para el pago y envío del pedido.</h5>
                <small>En caso de problemas con el envio, por favor comunicarse a <strong>contacto@techshop.com</strong></small>

                <Link to='/' className="buttonSubmit button-checkout mt-2">VOLVER AL INICIO</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className=''>
            <h2 className='checkout-title'>Checkout de compra</h2>
            <hr />

            <div className='form-checkout'>
                <h3>Por favor, ingrese sus datos</h3>
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

                    <button className='buttonSubmit button-checkout' type={'submit'}>ENVIAR</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout;