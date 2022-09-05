import './ItemListContainer.css'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';



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
            <ItemList productos={productos} />
        </div>

    );

}

export default ItemListContainer;