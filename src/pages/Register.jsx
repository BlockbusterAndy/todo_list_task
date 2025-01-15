import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/slices/authSlice';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, token } = useSelector((state) => state.auth);

    // Redirect to dashboard if token exists
    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        if (savedToken || token) {
            navigate('/dashboard');
        }
    }, [token, navigate]);

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const { username, password, confirmPassword } = formData;

        if (!username || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        dispatch(registerUser({ username, password }));
    };

    return (
        <section className="flex justify-center items-center h-[calc(100vh-96px)] bg-primaryBG-light dark:bg-primaryBG-dark">
            <div className="flex flex-col gap-4 p-8 bg-secondaryBG-light dark:bg-secondaryBG-dark rounded-lg md:w-1/4">
                <h2 className="text-3xl text-center text-primaryBG-dark dark:text-primaryBG-light">Register</h2>
                <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-1xl text-primaryBG-dark dark:text-primaryBG-light">Username</p>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            className="p-2 rounded-md focus:outline-none bg-transparent border-2 border-green-700 text-primaryBG-dark dark:text-primaryBG-light"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-1xl text-primaryBG-dark dark:text-primaryBG-light">Password</p>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="p-2 rounded-md focus:outline-none bg-transparent border-2 border-green-700 text-primaryBG-dark dark:text-primaryBG-light"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-1xl text-primaryBG-dark dark:text-primaryBG-light">Confirm Password</p>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            className="p-2 rounded-md focus:outline-none bg-transparent border-2 border-green-700 text-primaryBG-dark dark:text-primaryBG-light"
                            onChange={handleOnChange}
                        />
                    </div>
                    <button type="submit" className="bg-green-700 text-white p-2 rounded-md">
                        Register
                    </button>
                    {error && <p className="text-red-600 py-4">{error}</p>}
                </form>
            </div>
        </section>
    );
};

export default Register;
