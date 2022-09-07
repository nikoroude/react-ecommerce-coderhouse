import './ItemDetail.css'
import Detail from '../Detail/Detail'

const ItemDetail = ({prod = [] , idProducto}) => {

    if (!Detail) {
        return
    }

    return (
        <div className='ItemDetail'>
            <Detail producto={prod} key= {idProducto} />
        </div>
    )
}

export default ItemDetail;