import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import googleLogo from "../assets/googleLogo.svg";

const Login = () => {
    const { login, loginwithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    
    
    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        try {
            // Call the login function with email and password
            await login(email, password);
            // If login successful, navigate to the previous route
            alert("Login Successfully");
            navigate(from, { replace: true });
        } catch (error) {
            // If login fails, set the error state
            setError("Email or Password is not correct");
        }
    }

    const handleRegister = async () => {
        try {
            await loginwithGoogle();
            alert("Sign Up Successfully!!");
            navigate(from, { replace: true });
        } catch (error) {
            // Handle error if needed
            setError("An error occurred during Google login");
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-300 to-violet-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-bold text-center text-violet-500">LOGIN</h1>
                        </div>
                        <div className="divide-y divide-gray-200 border-none">
                            <form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email" />
                                </div>
                                <div className="relative">
                                    <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                </div>
                                {error && <p className='text-red-600 text-base'>{error}</p>}
                                <p className='text-base'>If you haven't an Account. Please <Link to="/sign-up" className="text-violet-500 underline">Sign up</Link> Here</p>
                                <div className="relative">
                                    <button className="bg-violet-500 text-white rounded-md px-6 py-2 align-center">Log In</button>
                                </div>
                            </form>
                        </div>
                        <hr />
                        <div className='flex w-full items-center flex-col mt-5 gap-3'>
                            <button onClick={handleRegister} className='block'><img src={googleLogo} alt="" className='w-5 h-5 inline-block mr-4'/>Login with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
