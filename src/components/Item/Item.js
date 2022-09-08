import './Item.css'
import Contador from '../Contador/Contador'
import VerMas from '../VerMas/VerMas';
import { Link } from 'react-router-dom';

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
                </div>
            </div>

            <div className='btn__container'>
                <Contador stock={producto.stock} />
                <VerMas itemId={producto.id}/>
                <Link to={'/'}/>
            </div>
        </div>
    )
    
}



export default Item;