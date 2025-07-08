import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';
import { IoMdHome } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";


function Navbar() {
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const currentHash = location.hash;

    const handleNav = () => {
        setNav(!nav);
    };

    const handleProductChange = (value) => {
        if (value) {
            setNav(false); // close mobile menu if open
            navigate(value);
        }
    };

    const [productDropdownOpen, setProductDropdownOpen] = useState(false);

    const toggleProductDropdown = () => {
        setProductDropdownOpen((prev) => !prev);
    };



    const dropdownRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setProductDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);



    const isActiveHash = (hash) => currentHash === hash;

    const productLinks = [
        { name: 'All Products', hash: '#allproduct' },
        { name: 'Corrugated Packaging', hash: '#corrugated' },
        { name: 'Wooden Packaging', hash: '#wooden' },
        { name: 'Protective Accessories', hash: '#protective' },
        { name: 'Custom Solutions', hash: '#custom' },
        { name: 'Our Recent Work', hash: '#our-work' }
    ];

    return (
        <div className='text-black flex justify-between items-center shadow-navbar shadow-[0_4px_12px_-4px_rgba(0,0,0,0.55)]'>
            <div className='navbarmain flex'>
                <div className='w-full flex items-center m-1 pl-8'>
                    <img src="/rgplogo-black.png" alt="RGP Group Logo" className='h-25' />
                    <h1 className='text-2xl font-bold pl-5 hidden sm:block'>
                        RGPGROUP.IN
                        <p className='text-xs'>"Our Work is our Identity"</p>
                    </h1>
                </div>

                {/* Desktop Menu */}
                <ul className='justify-start items-center gap-6 text-lg mr-8 hidden lg:flex navg'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                `px-5 py-2 min-w-[110px] min-h-[48px] flex items-center justify-center${isActive ? ' text-[#964B00] font-bold' : ''}`
                            }>
                                <span className="flex items-center gap-x-2">
                                    <IoMdHome />
                                    Home
                                </span>
                        </NavLink>
                    </li>

                     <li ref={dropdownRef} className="relative dropdown-item">
                        <div
                            onClick={toggleProductDropdown}
                            className={`px-5 py-2 min-w-[160px] min-h-[48px] flex items-center justify-center cursor-pointer ${productLinks.some(link => isActiveHash(link.hash)) ? 'text-[#964B00] font-bold' : ''
                                }`}
                        >
                            <span className="flex items-center gap-x-2">
                                <AiFillProduct />
                                Products ▾
                            </span>
                        </div>

                        {productDropdownOpen && (
                            <div className="absolute top-full left-0 bg-[#ffffff90] rounded-2xl shadow-lg mt-1 z-50 min-w-[230px]">
                                <ul className="flex flex-col ">
                                    {productLinks.map((link, index) => (
                                        <li
                                            key={index}
                                            onClick={() => {
                                                handleProductChange(`/products${link.hash}`);
                                                setProductDropdownOpen(false); // close on select
                                            }}
                                            className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${isActiveHash(link.hash) ? 'text-[#964B00] font-semibold' : ''
                                                }`}
                                        >
                                            {link.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>


                    <li>
                        <NavLink
                            to='/about'
                            className={({ isActive }) =>
                                `px-5 py-2 min-w-[150px] min-h-[48px] flex items-center justify-center${isActive ? ' text-[#964B00] font-bold' : ''}`
                            }>
                                <span className="flex items-center gap-x-2">
                                    <IoIosPeople />
                                    About Us
                                </span>
                                
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/contact'
                            className={({ isActive }) =>
                                `px-5 py-2 min-w-[170px] min-h-[48px] flex items-center justify-center${isActive ? ' text-[#964B00] font-bold' : ''}`
                            }> 
                            <span className="flex items-center gap-x-2">
                                <LuMessageCircleMore />
                                Contact Us
                            </span>
                        </NavLink>
                    </li>

                </ul>

                {/* Mobile Menu Icon */}
                <div onClick={handleNav} className='block lg:hidden'>
                    {!nav ? (
                        <img src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png" alt="menu" className='h-10 mr-10 mt-8' />
                    ) : (
                        <img src='https://cdn-icons-png.freepik.com/512/566/566013.png' alt='close' className='h-6 mr-10 mt-8' />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 'fixed left-0 top-0 w-[75%] h-full bg-[#FFECDF] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <div className='w-full m-0 flex items-center p-4'>
                    <img src="/rgplogo-black.png" alt="RGP Group Logo" className='h-25' />
                    <h1 className='text-2xl font-semibold ml-2'>
                        RGPGROUP.IN
                        <p className='text-xs'>"Our Work is our Identity"</p>
                    </h1>
                </div>

                <ul className='uppercase p-4 flex flex-col font-semibold navl'>
                    <li className='border-b'>
                        <NavLink
                            to='/'
                            onClick={() => setNav(false)}
                            className={({ isActive }) =>
                                `block px-6 py-4${isActive ? ' text-[#964B00] font-bold' : ''}`
                            }>
                            Home
                        </NavLink>
                    </li>

                    <li className='border-b'>
                        <NavLink
                            to='/about'
                            onClick={() => setNav(false)}
                            className={({ isActive }) =>
                                `block px-6 py-4${isActive ? ' text-[#964B00] font-bold' : ''}`
                            }>
                            About
                        </NavLink>
                    </li>

                    <li className='border-b'>
                        <NavLink
                            to='/contact'
                            onClick={() => setNav(false)}
                            className={({ isActive }) =>
                                `block px-6 py-4${isActive ? ' text-[#964B00] font-bold' : ''}`
                            }>
                            Contact
                        </NavLink>
                    </li>

                    <li className='border-b'>
                        <div className='px-6 pt-4 font-semibold text-base'>Products</div>
                        <ul>
                            {productLinks.map((link, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleProductChange(`/products${link.hash}`)}
                                    className={`block px-6 py-2 cursor-pointer hover:bg-gray-100 ${isActiveHash(link.hash) ? 'text-[#964B00] font-semibold' : ''
                                        }`}
                                >
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
