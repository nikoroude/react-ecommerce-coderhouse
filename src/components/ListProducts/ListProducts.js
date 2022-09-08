import './ListProducts.css'
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { useParams } from 'react-router-dom';



const ListProducts = () => {

    const {categoryId} = useParams()

    if (!{categoryId}){
        categoryId='OFERTAS IMPERDIBLES'
    }

    return (

        <div id='contenedorPadre'>
            <div>
                <h1 className='containerList__title'>{categoryId}</h1>                
            </div>
        
            <div className="containerList">
                <ItemListContainer/>
            </div>

        </div>

    );

}

export default ListProducts;