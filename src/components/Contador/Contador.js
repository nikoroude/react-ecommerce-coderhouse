import './Contador.css'

const Contador = ({max, counter, setCounter, handleAgregar}) => {


    const handleSumar = () => {
        if (counter < max) {
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

            <button onClick={handleRestar} className={(max < 1) ? "d-none" : "button"}>-</button>
            <span className={(max < 1) ? "d-none" : "contador"}>{counter}</span>
            <button onClick={handleSumar} className={(max < 1) ? "d-none" : "button"}>+</button>

            <div className="add__container">
                { 
                    max > 0
                    ? <span onClick={handleAgregar} className="button__add">AGREGAR AL CARRITO</span>
                    : <p className='no-stock'>No hay stock de este producto</p>
                }
                
                
            </div>


        </div>

    );

}

export default Contador;