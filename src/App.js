import './App.css'
import NavBar from './components/NavBar/NavBar.js'
import ListProducts from './components/ListProducts/ListProducts.js';
import Footer from './components/Footer/Footer.js';


function App() {
  return (
    
    <div>
      
      <NavBar title="COMPUMUNDO HIPER-MEGA-RED" />
  
      <ListProducts title="OFERTAS IMPERDIBLES" />

      <Footer />
      
    </div>

  );
}

export default App;
