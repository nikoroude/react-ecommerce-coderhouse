import './Detail.css'
import Contador from '../Contador/Contador'
// import AddToCart from '../AddToCart/AddToCart';
import { useState } from "react"

const Detail = ({ producto }) => {

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad
        }
        console.log({
            itemToCart
        })
    }

    return (
        <div className="DetailContainer">

            <span className='category'>{producto.category} / {producto.nombre}</span>
            <div className='productDetailContainer'>
                <div className="imgDetail">
                    <img src={producto.img} alt={producto.nombre} />
                    <h6>Stock disponible: {producto.stock}</h6>
                    <Contador
                        max={producto.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        handleAgregar={handleAgregar}
                    />
                </div>

                <div className="descriptionProductDetail">
                    <h1>{producto.nombre}</h1>
                    <h2>${producto.precio}</h2>
                    <span className="descriptionTitleDetail">Descripción:</span>
                    <p className='descriptionDetail'>{producto.desc}</p>
                    <p />
                    {/* <AddToCart item={producto} /> */}
                </div>
            </div>

        </div>
    )
}

export default Detail;