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
                                `px-5 py-2 min-w-[110px] min-h-[48px] flex items-center justify-center${isActive ? ' text-[#000851] font-bold' : ''}`
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
                            className={`px-5 py-2 min-w-[170px] min-h-[48px] flex items-center justify-center cursor-pointer ${productLinks.some(link => isActiveHash(link.hash)) ? 'text-[#000851] font-bold' : ''
                                }`}
                        >
                            <span className="flex items-center gap-x-2">
                                <AiFillProduct />
                                Products ▾
                            </span>
                        </div>

                        {productDropdownOpen && (
                            <div className="absolute top-full left-0 bg-[#ffffffd5] rounded-2xl shadow-lg z-50 min-w-[230px]">
                                <ul className="flex flex-col ">
                                    {productLinks.map((link, index) => (
                                        <li
                                            key={index}
                                            onClick={() => {
                                                handleProductChange(`/products${link.hash}`);
                                                setProductDropdownOpen(false); // close on select
                                            }}
                                            className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${isActiveHash(link.hash) ? 'text-[#000851] font-semibold' : ''
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
                                `px-5 py-2 min-w-[150px] min-h-[48px] flex items-center justify-center${isActive ? ' text-[#000851] font-bold' : ''}`
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
                                `px-5 py-2 min-w-[170px] min-h-[48px] flex items-center justify-center${isActive ? ' text-[#000851] font-bold' : ''}`
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
            <div className={nav ? 'fixed left-0 top-0 w-[75%] h-full bg-[#cdeeff] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <div className='w-full m-0 flex items-center p-4'>
                    <img src="/rgplogo-black.png" alt="RGP Group Logo" className='h-25' />
                    <h1 className='text-2xl font-semibold ml-2'>
                        RGPGROUP.IN
                        <p className='text-xs'>"Our Work is our Identity"</p>
                    </h1>
                </div>

                <ul className="p-4 flex flex-col font-medium gap-2 text-[16px] navl">

                    {/* Primary links */}
                    <li className='border-b pb-2'>
                        <NavLink
                            to='/'
                            onClick={() => setNav(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 rounded ${isActive ? 'text-[#000851] font-bold' : ''}`
                            }>
                            <IoMdHome />
                            Home
                        </NavLink>
                    </li>

                    <li className='border-b pb-2'>
                        <NavLink
                            to='/about'
                            onClick={() => setNav(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 rounded ${isActive ? 'text-[#000851] font-bold' : ''}`
                            }>
                            <IoIosPeople />
                            About
                        </NavLink>
                    </li>

                    <li className='border-b pb-2'>
                        <NavLink
                            to='/contact'
                            onClick={() => setNav(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 rounded ${isActive ? 'text-[#000851] font-bold' : ''}`
                            }>
                            <LuMessageCircleMore />
                            Contact
                        </NavLink>
                    </li>

                    {/* Section title for products */}
                    <li className="mt-3 mb-1 px-4 text-sm font-semibold text-gray-500 tracking-wide uppercase">
                        Products
                    </li>

                    {/* Product links */}
                    {productLinks.map((link, index) => (
                        <li
                            key={index}
                            onClick={() => handleProductChange(`/products${link.hash}`)}
                            className={`px-6 py-2 cursor-pointer hover:bg-[#fdf4ea] rounded transition-all ${isActiveHash(link.hash) ? 'text-[#000851] font-bold' : ''
                                }`}
                        >
                            - {link.name}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
}

export default Navbar;
