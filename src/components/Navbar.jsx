import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './util.css';
import { color } from 'three/tsl';


function Navbar() {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='bg-red-50 text-black m-2 flex justify-between items-center rounded-xl'>
            <div className='w-full flex items-center m-1 pl-8'>
                <img src="/rgplogo-black.png" alt="Logo" className='h-25'/>
                <h1 className='text-2xl font-bold pl-5'>RGPGROUP.IN  <p className='text-xs'>"Our Work is our Identity"</p></h1>
            </div>
            <ul className='justify-start items-center gap-10 text-lg mr-6 hidden md:flex navg'>
                <li><Link to='/'>Home</Link></li>
                <li>
                    <select name="Products">
                        <option value=""><Link to='/products'>Products</Link></option>
                        <option value="packaging"><Link to='/products'>Corrugated Packaging Solutions</Link></option>
                        <option value="printing"><Link to='/products'>Wooden Packaging Solutions</Link></option>
                        <option value="shipping"><Link to='/products'>Protective Packaging & Accessories</Link></option>
                        <option value="shipping"><Link to='/products'>Custom Solutions</Link></option>
                    </select>
                </li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <img src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png" alt="menu" className='h-10 mr-10' /> : <img src='https://cdn-icons-png.freepik.com/512/566/566013.png' alt='close' className='h-6 mr-10' />}

            </div>

            <div className={nav ? 'fixed left-0 top-0 w-[75%] h-full border-r border-r-grey-900 bg-red-50 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <div className='w-full m-0 flex items-center'>
                    <img src="/rgplogo-black.png" alt="Logo" className='h-25' />
                    <h1 className='text-2xl font-semibold'>RGPGROUP.IN <p className='text-xs'>"Our Work is our Identity"</p></h1>
                </div>
                <ul className='uppercase p-4 flex flex-col font-semibold  navl'>
                    <li className='p-4 border-b border-grey-100'><Link to='/'>Home</Link></li>
                    <li className='p-4 border-b border-grey-100'>
                        <select name="Products">
                            <option value=""><Link to='/products'>PRODUCTS</Link></option>
                            <option value="packaging"><Link to='/products'>Corrugated Packaging Solutions</Link></option>
                            <option value="printing"><Link to='/products'>Wooden Packaging Solutions</Link></option>
                            <option value="shipping"><Link to='/products'>Protective Packaging & Accessories</Link></option>
                            <option value="shipping"><Link to='/products'>Custom Solutions</Link></option>
                        </select>
                    </li>
                    <li className='p-4 border-b border-grey-100'><Link to='/about'>About</Link></li>
                    <li className='p-4 border-b border-grey-100'><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
  )
}
export default Navbar
