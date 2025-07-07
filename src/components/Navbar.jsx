import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    const handleProductChange = (e) => {
        const value = e.target.value;
        if (value) navigate(value);
    };

    const navigate = useNavigate();

    return (
        <div className='text-black flex justify-between items-center shadow-navbar bg-amber-500 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.55)]' >
            <div className='w-full flex items-center m-1 pl-8'>
                <img src="/rgplogo-black.png" alt="Logo" className='h-25' />
                <h1 className='text-2xl font-bold pl-5 hidden sm:block'>RGPGROUP.IN  <p className='text-xs'>"Our Work is our Identity"</p></h1>
            </div>
            <ul className='justify-start items-center gap-15 text-lg mr-16 hidden lg:flex navg'>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `px-6 py-3 min-w-[120px] min-h-[48px] flex items-center justify-center${isActive ? ' text-[#964B00] font-bold' : ''}`
                        }
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <select
                        className="px-6 py-3 min-w-[200px] min-h-[54px] flex items-center justify-center nav-select"
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: window.location.hash === '#corrugated' || window.location.hash === '#wooden' || window.location.hash === '#protective' || window.location.hash === '#custom' ? '#964B00' : undefined, fontWeight: window.location.hash === '#corrugated' || window.location.hash === '#wooden' || window.location.hash === '#protective' || window.location.hash === '#custom' ? 'bold' : undefined }}
                        onChange={handleProductChange}
                        defaultValue=""
                    >
                        <option value="">Products</option>
                        <option value="/products#corrugated" style={{ color: window.location.hash === '#corrugated' ? '#964B00' : undefined, fontWeight: window.location.hash === '#corrugated' ? 'bold' : undefined }}>Corrugated Packaging</option>
                        <option value="/products#wooden" style={{ color: window.location.hash === '#wooden' ? '#964B00' : undefined, fontWeight: window.location.hash === '#wooden' ? 'bold' : undefined }}>Wooden Packaging</option>
                        <option value="/products#protective" style={{ color: window.location.hash === '#protective' ? '#964B00' : undefined, fontWeight: window.location.hash === '#protective' ? 'bold' : undefined }}>Protective Accessories</option>
                        <option value="/products#custom" style={{ color: window.location.hash === '#custom' ? '#964B00' : undefined, fontWeight: window.location.hash === '#custom' ? 'bold' : undefined }}>Custom Solutions</option>
                    </select>
                </li>
                <li>
                    <NavLink
                        to='/about'
                        className={({ isActive }) =>
                            `px-6 py-3 min-w-[150px] min-h-[48px] flex items-center justify-center${isActive ? ' text-[#964B00] font-bold' : ''}`
                        }
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            `px-6 py-3 min-w-[150px] min-h-[48px] flex items-center justify-center${isActive ? ' text-[#964B00] font-bold' : ''}`
                        }
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        Contact Us
                    </NavLink>
                </li>
            </ul>

            <div onClick={handleNav} className='block lg:hidden'>
                {!nav ? <img src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png" alt="menu" className='h-10 mr-10' /> : <img src='https://cdn-icons-png.freepik.com/512/566/566013.png' alt='close' className='h-6 mr-10' />}
            </div>

            <div className={nav ? 'fixed left-0 top-0 w-[75%] h-full border-r border-r-grey-900 bg-gradient-to-r  ease-in-out duration-500' : 'fixed left-[-100%]'} style={{ backgroundColor: "#FFECDF" }}>
                <div className='w-full m-0 flex items-center'>
                    <img src="/rgplogo-black.png" alt="Logo" className='h-25' />
                    <h1 className='text-2xl font-semibold'>RGPGROUP.IN <p className='text-xs'>"Our Work is our Identity"</p></h1>
                </div>
                <ul className='uppercase p-4 flex flex-col font-semibold  navl'>
                    <li className=' border-b border-grey-100'>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                `px-6 py-6 min-w-[160px] min-h-[56px] flex items-center justify-center${isActive ? ' text-[#964B00] font-bold' : ''}`
                            }
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className=' border-b border-grey-100'>
                        <NavLink
                            to='/about'
                            className={({ isActive }) =>
                                `px-6 py-6 min-w-[160px] min-h-[56px] flex items-center justify-center${isActive ? ' text-[#964B00]' : ''}`
                            }
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className=' border-b border-grey-100'>
                        <NavLink
                            to='/contact'
                            className={({ isActive }) =>
                                `px-6 py-6 min-w-[160px] min-h-[56px] flex items-center justify-center${isActive ? ' text-[#964B00]' : ''}`
                            }
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li className=' border-b p-2 flex justify-center'>
                        <select
                            className="px-6 py-6 min-w-[160px] min-h-[56px] flex items-center justify-center nav-select"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: window.location.hash === '#corrugated' || window.location.hash === '#wooden' || window.location.hash === '#protective' || window.location.hash === '#custom' ? '#964B00' : undefined }}
                            onChange={handleProductChange}
                            defaultValue=""
                        >
                            <option value="">Products</option>
                            <option value="/products#corrugated" style={{ color: window.location.hash === '#corrugated' ? '#964B00' : undefined }}>Corrugated Packaging</option>
                            <option value="/products#wooden" style={{ color: window.location.hash === '#wooden' ? '#964B00' : undefined }}>Wooden Packaging</option>
                            <option value="/products#protective" style={{ color: window.location.hash === '#protective' ? '#964B00' : undefined }}>Protective Accessories</option>
                            <option value="/products#custom" style={{ color: window.location.hash === '#custom' ? '#964B00' : undefined }}>Custom Solutions</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar
