import { stock } from '../data/Stock/Stock'

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        //?cuerpo de promesa
        setTimeout(() => {
                resolve(stock)
        }, 3000)
    })
}