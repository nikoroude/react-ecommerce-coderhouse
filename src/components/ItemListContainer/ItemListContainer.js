import './ItemListContainer.css'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading'




const ItemListContainer = () => {

    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {categoryId} = useParams()
    
    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then( (res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos( res.filter((prod) => prod.category === categoryId) )
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
               setLoading(false)
            })
    }, [categoryId])

    return (
        
        <div className='ItemListContainer'>

            {
                loading 
                ? <Loading className='loadingContainer'/>
                : <ItemList productos={productos} />
                
            }
        
        </div>

    );

}

export default ItemListContainer;