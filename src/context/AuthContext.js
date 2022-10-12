import React, { createContext, useState, useEffect, useContext} from "react";
import { auth } from '../Firebase/configFirebase'

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = (props) => {

    const [currentUser, setCurrentUser] = useState ({});

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        })
    }, [])

    const signUp = (email, password) => {
        return auth.createUserWithEmailAndPassword (email, password);
    }
    
    const login = (email, password) => {
        return auth.sinInWhitEmailAndPassword (email, password);
    }

    const logOut = () => auth.logOut();

    const value={signUp, login, logOut, currentUser };

    return (
        <AuthProvider value={value} >
            {props.children}
        </AuthProvider>
    )
}