import './App.css'
import NavBar from './components/NavBar.js'
import ListProducts from './components/ListProducts';
import Footer from './components/Footer';


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
