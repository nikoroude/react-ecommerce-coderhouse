import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { buscarProducto } from '../../helpers/buscarProducto'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    

    useEffect(() => {
        setLoading(true)

        buscarProducto({ itemId })
            .then((res) => {
                setItem(res)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <div className='ItemDetailContainer'>

            {
                loading
                    ? <Loading />
                    : <ItemDetail prod={item} idProducto={itemId} />
            }

        </div>
    )
}

export default ItemDetailContainer;