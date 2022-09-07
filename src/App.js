import './App.css'
import NavBar from './components/NavBar/NavBar.js'
import ListProducts from './components/ListProducts/ListProducts.js';
import Footer from './components/Footer/Footer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    
    <div>
      
      <NavBar title="e-commerce" />
  
      {/* <ListProducts title="OFERTAS IMPERDIBLES" /> */}
      <ItemDetailContainer idProducto={4} />

      <Footer />
      
    </div>

  );
}

export default App;
