import { stock } from '../data/Stock/Stock'

export const buscarProducto = ({itemId}) => {
    return new Promise((resolve, reject)=>{
        setTimeout (() => {
            resolve(stock.find((stock => stock.id === Number(itemId))));
        }, 3000)
    })
}