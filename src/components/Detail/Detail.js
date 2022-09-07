import './Detail.css'
import Contador from '../Contador/Contador'
import AddToCart from '../AddToCart/AddToCart';

const Detail = ({ producto }) => {

    return (
        <div className="DetailContainer">
            <span className='category'>{producto.category}</span>
            <div className='productDetailContainer'>
                <div className="imgDetail">
                    <img src={producto.img} alt={producto.nombre} />
                    <h6>Stock disponible: {producto.stock}</h6>
                    <Contador stock={producto.stock} />
                </div>
                <div className="descriptionProductDetail">
                    <h1>{producto.nombre}</h1>
                    <h2>${producto.precio}</h2>
                    <span className="descriptionTitleDetail">Descripción:</span>
                    <p className='descriptionDetail'>{producto.desc}</p>
                    <AddToCart />
                </div>
            </div>

            <div className='btn__container'>
            </div>
        </div>
    )
}

export default Detail;