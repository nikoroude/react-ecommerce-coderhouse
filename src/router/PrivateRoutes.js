import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import ListProducts from '../components/ListProducts/ListProducts.js';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Checkout from '../components/Checkout/Checkout';

const PrivateRoutes = () => {

    return (
        <Routes id='Routes'>
            <Route path='*' element={<ListProducts />} />

            <Route path='/Productos/:categoryId' element={<ListProducts />} />

            <Route path='/Item/:itemId' element={<ItemDetailContainer />} />

            <Route path='/Cart' element={<Cart />} />
            
            <Route path='/Checkout' element={<Checkout />} />
            
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    )
}

export default PrivateRoutes;