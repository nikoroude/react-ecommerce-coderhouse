import { stock } from '../data/Stock/Stock'

export const buscarProducto = (idProducto) => {
    return new Promise((resolve, reject)=>{
        setTimeout (() => {
            resolve(stock.find((stock => stock.id === idProducto)));
        }, 1500)
    })
}