import { stock } from '../data/Stock/Stock'

export const pedirDatos = (idProducto=null) => {
    return new Promise((resolve, reject) => {
        //?cuerpo de promesa
        setTimeout(() => {
            if (idProducto==null){
                resolve(stock)
            } else {
                resolve(stock.find((producto => producto.id === idProducto)));
            }
        }, 1500)
    })
}