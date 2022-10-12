import './ListProducts.css'
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { useParams } from 'react-router-dom';



const ListProducts = () => {

    const {categoryId} = useParams()

    return (

        <div id='contenedorPadre'>
            <div>
                
                {
                    categoryId 
                    ? <h1 className='containerList__title'>{categoryId}</h1>  
                    : <h1 className='containerList__title'>BIENVENIDO</h1>  
                }
                
            </div>
        
            <div className="containerList">
                <ItemListContainer/>
            </div>

        </div>

    );

}

export default ListProducts;