import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import { db } from '../../Firebase/configFirebase'
import { collection, getDocs, query, where } from 'firebase/firestore';




const ItemListContainer = () => {

    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {categoryId} = useParams()
    
    useEffect(() => {
        setLoading(true)
        //? referencia scync
        const productoRef = collection(db, 'productos')
        const q = categoryId
                    ? query(productoRef, where('category','==', categoryId)) //? busqueda en db
                    : productoRef
        //? consumir referencia (async)
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map( (doc) => ({id: doc.id , ...doc.data()}) ) //! creo un nuevo objeto, que incorpore el id dentro de los datos del mismo
                
                setProductos(productosDB)
            })
            .finally( () => {
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