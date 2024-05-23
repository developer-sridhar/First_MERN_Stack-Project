import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import userImg from "../assets/Books/adminprofile.png";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineFavorite } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { GiWhiteBook } from "react-icons/gi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { user, logout } = useContext(AuthContext); // Assuming you have a logout function in AuthContext

    // Toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    // Nav Items
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Blog", path: "/blog" }
    ];

    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-teal-100" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* Logo */}
                    <Link to="/" className='text-2xl font-bold text-violet-700 flex items-center gap-2'>
                        <GiWhiteBook />Books Store
                    </Link>

                    {/* Nav items for Large Device */}
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => 
                            <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-violet-700'>
                                {link}
                            </Link>
                        )}

                        {/* Sell Your Book Link (conditionally rendered for admin) */}
                        {user && user.isAdmin && (
                            <Link to="/admin/dashboard" className='block text-base text-black uppercase cursor-pointer hover:text-violet-700'>
                                Sell Your Book
                            </Link>
                        )}
                    </ul>

                    {/* Conditionally render login/logout links */}
                    {user ? (
                        <div className='space-x-12 hidden lg:flex items-center uppercase'>
                            <div className='flex'>
                                <img src={user && user.photoURL ? user.photoURL : userImg} alt={user && user.displayName && user.displayName.trim() !== '' ? user.displayName : "Guest Account"} className='w-10 h-10 rounded-full mr-2 mt-1'/>
                                <div className='align-left'>
                                    <Link to="/userDashboard">
                                        <h2 className='font-semibold text-violet-700'>My Profile</h2>
                                    </Link>
                                    <div className='text-green-700'>
                                        {user && user.displayName ? user.displayName : "Demo User"}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link to="/favorite">
                                    <MdOutlineFavorite className='text-red-500 text-2xl ml-4'/>
                                    <h5 className='text-orange-500'>Favorites</h5>
                                </Link>
                            </div>
                            <div >
                                <Link to="/carts" className='flex '>
                                    <FaCartShopping className='text-blue-500 mt-3 text-2xl' />
                                    <div className='text-sm'>
                                        <h5 className='ml-3 bg-green-400 text-white rounded text-center font-bold'>Items</h5>
                                        <h5 className='ml-3 mt-2 pl-2 pr-2 bg-green-400 text-white rounded text-center font-bold'>₹ 150</h5>
                                    </div>
                                </Link>
                            </div>
                            <div className='text-2xl text-red-700 hover:text-red-500'>
                                <Link to="/logout">
                                    <button onClick={logout}>
                                        <RiLogoutCircleRLine />
                                        <h2 className='text-sm'>Logout</h2>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" className='text-base text-black uppercase cursor-pointer hover:text-violet-700'>Login</Link>
                    )}

                    {/* Menu Button for the Mobile Devices */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {isMenuOpen ? <FaXmark className='h-6 w-6 bg-red-600 rounded-full text-white'/> : <FaBarsStaggered className='h-5 w-5 text-black'/>}
                        </button>
                    </div>
                </div>
                
                {/* Nav Items for Small Devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-teal-200 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path }) => <Link key={path} to={path} className='block text-base text-violet-500 font-semibold hover:bg-teal-300 hover:pl-5 pt-2 w-full h-10 uppercase cursor-pointer'>{link}</Link>)}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
