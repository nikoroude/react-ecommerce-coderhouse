import './App.css'
import NavBar from './components/NavBar/NavBar.js'
import ListProducts from './components/ListProducts/ListProducts.js';
import Footer from './components/Footer/Footer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';



const App = () => {

  return (

    <CartProvider>

      <BrowserRouter>

        <NavBar title="e-commerce" />

        <Routes id='Routes'>
          <Route path='*' element={<ListProducts title="OFERTAS IMPERDIBLES DE LA SEMANA" />} />

          <Route path='/Productos/:categoryId' element={<ListProducts />} />
          <Route path='/Item/:itemId' element={<ItemDetailContainer />} />

          <Route path='/Nosotros' element={<Nosotros />} />
          <Route path='/Contacto' element={<Contacto />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Checkout' element={<Checkout />} />
          
          <Route path='*' element={<Navigate to="/" />} />

        </Routes>



        <Footer id='App-footer' />

      </BrowserRouter>

    </CartProvider>
  );
}

export default App;
