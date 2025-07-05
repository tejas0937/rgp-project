import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function Navbar() {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className='bg-red-50 text-black m-2 flex justify-between items-center rounded-xl'>
        <h1 className='w-full m-4'><img src="/rgplogo-black.png" alt="Logo" className='h-25' /></h1>
        <ul className='justify-start items-center gap-10 text-lg mr-6 hidden md:flex'>
            <link to='/'>Home</link>
            <link to='/product'>Product</link>
            <link to='/about'>About</link>
            <link to='/contact'>Contact</link>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <img src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png" alt="menu" className='h-10 mr-5' /> :  <img src='https://cdn-icons-png.freepik.com/512/566/566013.png' alt='close' className='h-8 mr-5' />}
             
        </div>

        <div className={nav ? 'fixed left-0 top-0 w-[65%] h-full border-r border-r-grey-900 bg-red-50 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <div className='w-full m-4 flex items-center'>
                <img src="/rgplogo-black.png" alt="Logo" className='h-25' /> 
                <h1 className='text-2xl font-semibold'>RGPGROUP.IN <p className='text-xs'>"Our Work is our Identity"</p></h1>
            </div>
            <ul className='uppercase p-4'>
                <link to='/' className='p-4 border-b border-grey-100'>Home</link>
                <link to='/product' className='p-4 border-b border-grey-100'>Product</link>
                <link to='/about' className='p-4 border-b border-grey-100'>About</link>
                <link to='/contact' className='p-4'>Contact</link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar