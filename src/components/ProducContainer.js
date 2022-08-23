


const ProductContainer = (props) => {

    return (

        <div className="productContainer">
            <div className="imgProduct">
                <img src={props.image} alt= {props.alt} />
            </div>
            <div className="descriptionProduct">
                <span>{props.description}</span>
            </div>

        </div>

    );

}

export default ProductContainer;