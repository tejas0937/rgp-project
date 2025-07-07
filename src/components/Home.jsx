import React from 'react'
import Hero from "./hero";
import Woodenbox from './Woodenbox'
import './about.css'
import { motion } from 'framer-motion';
import Contact from './contact';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="main w-full relative">
        <Hero />
        </div>
          { /* 
      
          <Woodenbox />
          A Complete Solution for Export Packing and stress free dispatch
        
       */}
       <div className="director flex ">
        <div className="dir-img">
          <img src="/bg/director.JPG
          " alt="" />
          <div className="dir-logo"><img src="/LogoRGP1.png" alt="rgpgroup logo" /></div>
        </div>
        <div className="dir-info flex justify-center flex-col">
          <h2 className='ml-15 -mt-20'>About Us</h2>
          <div className="info-subh pl-15">
            
            <p id='info-submain'>Established in 2016 by Mr. Ajay Ramdas Jaid, <b>RGP Pack Tech Solution</b> is a trusted manufacturer and supplier of premium packaging solutions. Located in Chakan MIDC, Pune, we deliver high-quality, cost-effective, and sustainable packaging that meets diverse industrial and export requirements. Our production facility is equipped with fully automated, high-speed imported machines that ensure consistency, precision, and on-time delivery - all under one roof.Our commitment ensures that you get packaging that protects your products and your brand reputation. </p>
          </div><Link to="/about"><button className='text-amber-600 bg-white w-60 cursor-pointer mt-6 ml-15 p-5 text-2xl font-bold rounded-2xl'>View More Info</button></Link></div>
          
      </div>
      <br></br>
       <Contact />
        </div>
    
   
  )
}

export default Home
