import {useState, useEffect} from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ( {idProducto} ) => {

    const [item, setItem] = useState(null)

    useEffect (() => {
        pedirDatos(idProducto)
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