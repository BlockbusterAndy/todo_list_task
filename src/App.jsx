import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import { useSelector, useDispatch } from 'react-redux';
import { getLocation } from './services/WeatherService';
import { useEffect } from 'react';
import { setLocation } from './redux/slices/interfaceSlice';
import { useNavigate } from 'react-router-dom';

function App() {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/dashboard');
        }
    });

    useEffect(() => {
      const fetchLocation = async () => {
        const location = await getLocation();
        dispatch(setLocation(location));
      };
      fetchLocation();
    });

    return (
        <>
            <Navbar />
            <main className="px-4 md:px-[5vw] pt-6 bg-primaryBG-light dark:bg-primaryBG-dark min-h-[calc(100vh-96px)]">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    {token ? (
                        <Route path="/dashboard" element={<Dashboard />} />
                    ) : (
                        <Route path="*" element={<Home />} />
                    )}
                </Routes>
            </main>
        </>
    );
}

export default App;
