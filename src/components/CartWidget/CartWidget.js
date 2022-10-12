import { BsFillCartCheckFill } from 'react-icons/bs'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return (
        <div className='cartWidget'>
            <div>
                <BsFillCartCheckFill className='icon' />
            </div>
            <span>{cartQuantity()}</span>
        </div>
    )
}

export default CartWidget