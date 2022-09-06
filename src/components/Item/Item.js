import './Item.css'
import Contador from '../Contador/Contador'
import AddToCart from '../AddToCart/AddToCart';

const Item = ({ producto }) => {

    return (
        <div className="ItemContainer">
            <div>
                <div className="imgProduct">
                    <img src={producto.img} alt={producto.desc} />
                </div>
                <div className="descriptionProduct">
                    <h3>{producto.nombre}</h3>
                    <h2>${producto.precio}</h2>
                    <h6>Stock disponible: {producto.stock}</h6>
                    <span className="description">{producto.desc}</span>
                </div>
            </div>

            <div className='btn__container'>
                <Contador stock={producto.stock} />
                <AddToCart />
            </div>
        </div>
    )
    
}



export default Item;