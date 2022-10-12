import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../Firebase/configFirebase'


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'productos', itemId)
        getDoc(docRef)
            .then((doc) => {
                setItem({ id: doc.id, ...doc.data() })
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