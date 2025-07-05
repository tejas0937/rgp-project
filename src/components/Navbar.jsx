import React from 'react'

function Navbar() {
  return (
    <div className='bg-red-50 text-black m-2 p-2 flex justify-between items-center rounded-xl'>
        <h1><img src="/rgplogo-black.png" alt="Logo" className='h-25' /></h1>
        <ul className='flex justify-start items-center gap-10 text-lg mr-6'>
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png" alt="Logo" className='h-12' /> 
        </div>

        <div className='fixed left-0 top-0 w-[60%] border-r border-r-grey-900 h-full'>
            <ul className='pt-24'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Product</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar