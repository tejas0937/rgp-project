import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { VscWhitespace } from 'react-icons/vsc';

function Error() {
  return (
    <div className='justify-center items-center flex flex-col text-center mb-3'>
        <h1><img src="/Custom-404-Page-03.png" alt="Error" className='w-100' /></h1>
        <div className='text-5xl font-bold text-white m-3'>Page not found</div>
        <div className='p-3 text-2xl bg-sky-600 text-white mb-2 hover:bg-sky-500 rounded-lg'>
            <NavLink to="/" className='flex items-center'><IoArrowBackCircleSharp />&nbsp; Click to Go Back</NavLink>
        </div>
        <p>please check your URL or go back to the previous page.</p>
    </div>
  )
}

export default Error