import './ItemDetail.css'
import Item from '../Item/Item'

const ItemDetail = (prod = [] , idProducto = null) => {

    return (
        <div className='ItemDetail'>
            <Item producto={prod} key= {idProducto} />
        </div>
    )
}

export default ItemDetail;