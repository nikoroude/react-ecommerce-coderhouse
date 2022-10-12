import { Link } from 'react-router-dom';
import './VerMas.css'


const VerMas = ({itemId}) => {

    
    return (

        <div className="verMas__container">
            <Link to={`/Item/${itemId}`} className="button__verMas">Ver producto</Link>
        </div>

    );

}

export default VerMas;