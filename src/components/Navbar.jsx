import React from 'react'

function Navbar() {
  return (
    <div className='bg-red-50 text-black m-2 p-2 flex justify-between items-center rounded-xl'>
        <h1><img src="https://media.discordapp.net/attachments/1390667063483305992/1390742794100015274/RGPLOGO.png?ex=686a0668&is=6868b4e8&hm=3dc37e5aba54f108fd8ea25621cf3afea2347b01ac8fed698adad8031c0451f1&=&format=webp&quality=lossless&width=823&height=823" alt="Logo" className='h-25' /></h1>
        <ul className='flex justify-start items-center gap-10 text-lg mr-6'>
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png" alt="Logo" className='h-12' /> 
        </div>

        <div className=''>
            <ul>
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