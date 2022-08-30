import './Contador.css'
import { useState } from "react"


const Contador = () => {

    const [counter, setCounter] = useState(1)

    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        if (counter > 1) {
        setCounter(counter - 1)
        }
    }

    return (

        <div className="Contador__container">
            <button onClick={restar} className="button">-</button>
                <span className='contador'>{counter}</span>
            <button onClick={sumar} className="button">+</button>


        </div>

    );

}

export default Contador;