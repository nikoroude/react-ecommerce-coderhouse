import './LoginScreen.css'
import { useContext, useState } from 'react';
import { LoginContext } from '../../context/LoginContext';

const LoginScreen = () => {

    const {login,user, register} = useContext(LoginContext);
    console.log(user)

    const [ username , setUser ] = useState('')
    const [ password , setPassword ] = useState('')

    
    
    const handleUserChange = (e) => {
        setUser(e.target.value)
    }
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        login({
            username, password
        })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        
        register({username, password})
    }
    

    return (
        <div>
            <form className='loginContainer' onSubmit={handleSubmit}>
                <input 
                    type={'text'}
                    className='form-control m-1'
                    value={username}
                    onChange={handleUserChange}
                    placeholder={'Nombre de usuario'}
                />
                
                <input 
                    type={'password'}
                    className='form-control m-1'
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder={'Contraseña'}
                />
                
                <button className='buttonSubmit' type='submit'>Log In</button>
                <span className='buttonLogOut' onClick={handleRegister}>Crear Ususario</span>
            </form>
        </div>
    )
}

export default LoginScreen;