import './Item.css'
import VerMas from '../VerMas/VerMas';


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
                    <VerMas itemId={producto.id}/>
                </div>
            </div>

        </div>
    )
    
}



export default Item;