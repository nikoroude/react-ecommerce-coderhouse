import './ProductContainer.css'


const ProductContainer = (props) => {

    return (

        <div className="productContainer">
            <div className="imgProduct">
                <img src={props.image} alt= {props.alt} />
            </div>
            <div className="descriptionProduct">
                <h2>${props.price}</h2>
                <span>{props.description}</span>
            </div>

        </div>

    );

}

export default ProductContainer;