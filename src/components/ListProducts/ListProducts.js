import './ListProducts.css'
import ProductContainer from "../ItemListContainer/ItemListContainer";



const ListProducts = (props) => {

    return (

        <div>
            <div>
                <h1 className='containerList__title'>{props.title}</h1>                
            </div>
        
            <div className="containerList">
                <ProductContainer stock="10" price="18.999" image="./assets/img/products/000001.jpg" alt="Smartwatch Nictom NT16" description="Reloj Smartwatch Nictom NT16 Sumergible + Malla Metal"/>
                <ProductContainer stock="4" price="99.999" image="./assets/img/products/000005.jpg" alt="Notebook Lenovo 81WA00D8AR" description="Lenovo Notebook Lenovo IdeaPad 14 pulgadas 4GB 256GB Core i3"/>
                <ProductContainer stock="3" price="14.500" image="./assets/img/products/000003.jpg" alt="Smartwatch Nictom NT16" description="Reloj Inteligente Smartwatch Nictom NT16 Sumergible"/>
                <ProductContainer stock="15" price="68.587" image="./assets/img/products/000007.jpg" alt="Monitor Gamer 27" description="Aopen Monitor Gamer Curvo AOPEN 27 pulgadas Full HD"/>
                <ProductContainer stock="13" price="12.999" image="./assets/img/products/000006.jpg" alt="Tablet EXO i716" description="Exo Tablet Exo Wave i716 1/16 7 pulgadas"/>
                <ProductContainer stock="30" price="24.999" image="./assets/img/products/000004.jpg" alt="Smartwatch Nictom KW36" description="Reloj Smartwatch Nictom KW37 Negro Bluetooth"/>
                <ProductContainer stock="5" price="132.299" image="./assets/img/products/000008.jpg" alt="Monitor Gigabyte G27F" description="Gigabyte Monitor 27 Gigabyte G27F Gaming"/>
                <ProductContainer stock="15" price="15.999" image="./assets/img/products/000002.jpg" alt="Smartwatch Nictom NT14" description="Reloj Smartwatch Nictom NT14 Sumergible + Malla Metal"/>
                
            </div>

        </div>

    );

}

export default ListProducts;