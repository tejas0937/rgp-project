import React from 'react'

function Navbar() {
  return (
    <div className='bg-red-50 text-black m-2 p-2 flex justify-between items-center rounded-xl'>
        <h1><img src="/rgplogo-black.png" alt="Logo" className='h-30' /></h1>
        <ul className='flex justify-start items-center gap-15 text-lg mr-6'>
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar