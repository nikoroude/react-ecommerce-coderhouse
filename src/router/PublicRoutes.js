import LoginScreen from '../components/LoginScreen/LoginScreen';
import { Routes, Route, Navigate } from 'react-router-dom';


const PublicRoutes = () => {

    return (
        <Routes>
            <Route path='/Login' element={<LoginScreen />} />
            <Route path='*' element={<Navigate to='/Login' />} />
        </Routes>
    )
}

export default PublicRoutes;