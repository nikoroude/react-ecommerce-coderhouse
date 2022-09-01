import './ItemListContainer.css'
import Contador from '../Contador/Contador'
import AddToCart from '../AddToCart/AddToCart';
import { pedirDatos } from '../../helpers/pedirDatos'
import { useEffect, useState } from 'react';



const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
               // console.log("Fin del proceso")
            })
    }, [])

    return (
        
        <div className='ItemListContainer'>
            {/* <div className="imgProduct">
                <img src={props.image} alt={props.alt} />
            </div>
            <div className="descriptionProduct">
                <h2>${props.price}</h2>
                <span>{props.description}</span>
            </div>

            <div className='btn__container'>
                <Contador stock={props.stock}/>
                <AddToCart />
            </div> */}
            {productos.map((prod) => {
                return (
                    <div key={prod.id} className="ItemContainer">
                        <div className="imgProduct">
                            <img src={prod.img} alt={prod.desc} />
                        </div>
                        <div className="descriptionProduct">
                            <h2>{prod.nombre}</h2>
                            <h2>${prod.precio}</h2>
                            <h6>Stock disponible: {prod.stock}</h6>
                            <span className="description">{prod.desc}</span>
                        </div>

                        <div className='btn__container'>
                            <Contador stock={prod.stock} />
                            <AddToCart />
                        </div>
                    </div>
                )
            })}

        </div>

    );

}

export default ItemListContainer;