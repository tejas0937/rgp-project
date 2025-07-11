import React from 'react'
import { Link } from 'react-router-dom'
import './util.css'

const Subsidiaries = () => {
  return (
    <div>
      <div className="s-container bg-black max-md:mt-5 mt-20 py-20 w-full flex flex-col items-center">
        <h1 className='text-white text-4xl font-bold mb-20 max-md:mb-5 text-center max-md:text-3xl'>RGP GROUP other Subsidiaries</h1>
        <div className="sub-img flex justify-center w-full gap-20 ">
        <Link to="#"><img className="rounded-3xl h-50 border-2 border-white" src="/logorgother (1).png" alt="" /></Link>
        <Link to="#"><img className="rounded-3xl h-50 border-2 border-white" src="/logorgother (2).png" alt="" /></Link>
        <Link to="#"><img className="rounded-3xl h-50 border-2 border-white" src="/logorgother (3).png" alt="" /></Link>
      </div></div>
    </div>
  )
}

export default Subsidiaries
