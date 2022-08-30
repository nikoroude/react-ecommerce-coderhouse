import './Contador.css'
import { useState } from "react"


const Contador = (props) => {

    const [counter, setCounter] = useState(1)
    let maxStock = (props.stock)
    
    const handleSumar = () => {
        if (counter < maxStock ) {
            setCounter(counter + 1)
            }
    }

    const handleRestar = () => {
        if (counter > 1) {
        setCounter(counter - 1)
        }
    }

    return (

        <div className="Contador__container">

            <button onClick={handleRestar} className="button">-</button>
                <span className='contador'>{counter}</span>
            <button onClick={handleSumar} className="button">+</button>

        </div>

    );

}

export default Contador;