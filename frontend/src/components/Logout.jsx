import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoAlertCircle } from "react-icons/io5";


const Logout = () => {
    const { logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    const handleLogout = () => {
        const confirmation = window.confirm('Are you sure you want to log out?');
        if (confirmation) {
            logOut().then(() => {
                // Sign-out successful.
                alert('SignOut Successfully!!!');
                navigate(from, { replace: true });
            }).catch((error) => {
                // Handle error if needed
                console.error('Logout error:', error);
            });
        }
    }

    

    return (
        <div className='h-screen bg-teal-100 flex flex-col items-center justify-center'>
            <IoAlertCircle className='w-96 text-red-700 h-48' />
            <div>
                <p className='text-2xl mb-5'>Are You Sure want to LogOut?</p>
            </div>
            <div className="flex gap-3">
                <button className='bg-red-700 px-4 py-2 text-white rounded mr-4 hover:bg-red-600' onClick={handleLogout}>Yes</button>
                <button className='bg-green-700 px-4 py-2 text-white rounded hover:bg-green-800' onClick={() => navigate(from, { replace: true })}>No</button>
            </div>
        </div>
    );
}

export default Logout;
