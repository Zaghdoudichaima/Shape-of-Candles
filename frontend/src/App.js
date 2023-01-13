import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile/Profile';
import "./App.css";
import LandPage from './pages/Land/LandPage';
import NavBar from './components/Navbar'; 
import { currentUser } from './redux/authSlice';
import Register from "./pages/log/Register/Register";
import Login from "./pages/log/Login/Login";


export default function App() {


  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(currentUser());
    }, [dispatch]);
    
  return (
    <div>
     <NavBar />

     
      <Routes>
                <Route path="/" element={<LandPage />} /> 
              
                <Route path="login" element={<Login />} />
                <Route path="register" element={< Register />} /> 
                
                <Route path="profile" element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute> }/>
                       
      </Routes>
      
    </div>
  );
}