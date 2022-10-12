import { BrowserRouter} from 'react-router-dom';
import { useLoginContext } from "../context/LoginContext";
import NavBar from '../components/NavBar/NavBar.js'
import Footer from '../components/Footer/Footer.js';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';


const AppRouter = () => {

    const { user } = useLoginContext();

    return (
        <BrowserRouter>
            <NavBar title="e-commerce" />

            {
                user.logged
                ? <PrivateRoutes />
                : <PublicRoutes />
            }

            <Footer id='App-footer' />

        </BrowserRouter>

    )
}

export default AppRouter;