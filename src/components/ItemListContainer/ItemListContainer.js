import './ItemListContainer.css'
import Contador from '../Contador/Contador'
import AddToCart from '../AddToCart/AddToCart';


const ItemListContainer = (props) => {

    return (

        <div className="ItemContainer">
            <div className="imgProduct">
                <img src={props.image} alt={props.alt} />
            </div>
            <div className="descriptionProduct">
                <h2>${props.price}</h2>
                <span>{props.description}</span>
            </div>

            <div className='btn__container'>
                <Contador stock={props.stock}/>
                <AddToCart />
            </div>

        </div>

    );

}

export default ItemListContainer;