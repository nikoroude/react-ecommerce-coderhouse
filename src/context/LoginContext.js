import { createContext, useContext, useState } from "react";


export const LoginContext = createContext()

export const LoginProvider = ({children}) => {

    const usuarios = [
        {
            username: 'nikoroude',
            password: '1234'
        },
        {
            username: 'clanusse',
            password: 'coderhouse'
        },
        {
            username: 'lsheridan',
            password: '1122'
        },
        {
            username: 'jhondoe',
            password: '0000'
        },

    ]

    const [ user , setUser ] = useState({
        user: '',
        logged: false,
        error: ''
    })

    const login = (values) => {
        const match = usuarios.find(user => (user.username === values.username))

        if (match) {
            if (match.password === values.password) {
                setUser({
                    user: match.username,
                    logged: true,
                })
            } else {
                alert("Contaseña incorrecta")
            }
        } else {
            alert("Usuario incorrecto")
        }
    }

    const register = (values) => {
        usuarios.push(values)
    }

    const logout = () => {
        setUser({
            user: '',
            logged: false,
        })
    }

    return (
        <LoginContext.Provider value={{user, login, logout, register}}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}