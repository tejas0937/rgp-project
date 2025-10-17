import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './util.css';

const Subsidiaries = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 py-20 flex flex-col items-center overflow-hidden">
      
      {/* Background Glow Circles */}
      <div className="absolute top-0 left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-60 h-60 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>

      <h1 className='text-white text-4xl font-bold mb-20 max-md:mb-5 text-center max-md:text-3xl drop-shadow-lg'>
        RGP GROUP Other Subsidiaries
      </h1>

      <div className="sub-img flex justify-center w-full gap-20 flex-wrap px-4 md:px-0">
        <Link to="#">
          <motion.img 
            src="/logorgother (1).webp" 
            alt="" 
            className="rounded-3xl h-50 border-2 border-white shadow-2xl object-cover transition duration-500 hover:scale-105" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>
        <Link to="#">
          <motion.img 
            src="/logorgother (2).webp" 
            alt="" 
            className="rounded-3xl h-50 border-2 border-white shadow-2xl object-cover transition duration-500 hover:scale-105" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>
        <Link to="#">
          <motion.img 
            src="/logorgother (3).webp" 
            alt="" 
            className="rounded-3xl h-50 border-2 border-white shadow-2xl object-cover transition duration-500 hover:scale-105" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Subsidiaries;
