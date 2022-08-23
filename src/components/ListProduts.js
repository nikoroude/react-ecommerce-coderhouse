import ProductContainer from "./ProducContainer";


const ListProducts = (props) => {

    return (

        <div>
            <div>
                <h1>{props.title}</h1>                
            </div>
        
            <div className="containerList">
                <ProductContainer image="../assets/img/cart.png" alt="carrito" description="carrito de ejemplo"/>
                <ProductContainer />
                <ProductContainer />
                <ProductContainer />
                <ProductContainer />
            </div>

        </div>

    );

}

export default ListProducts;