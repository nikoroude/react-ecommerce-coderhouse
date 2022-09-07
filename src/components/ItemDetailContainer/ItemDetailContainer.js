import './ItemDetailContainer.css'
import {useState, useEffect} from 'react'
import { buscarProducto } from '../../helpers/buscarProducto'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({idProducto}) => {
    
    const [item, setItem] = useState([])

    useEffect (() => {
        buscarProducto(idProducto)
            .then((res) => {
                setItem(res)
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{})
            
    }, [])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail prod={item} idProducto={idProducto} />
        </div>
    )
}

export default ItemDetailContainer;