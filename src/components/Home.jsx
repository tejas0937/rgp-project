import React from 'react'
import Hero from "./hero";
import './about.css'
import Contact from './contact';
import { Link } from 'react-router-dom';
import './util.css';

const Home = () => {
  return (
    <div>
      <div className="main w-full relative">
        <Hero />
      </div>

      <div className="video-infra bg-amber-50 w-full h-2/4 mt-40 flex items-center justify-center flex-col">
        <h1 className='text-6xl font-bold m-20text-amber-900 m-16 bg-amber-200 bg-center w-4xl text-center p-10 rounded-3xl'>Company Infrastructure</h1>
        <video src="/bg/bgvideo-rgp.mp4" controls muted autoPlay loop className='w-7/8 mb-20 rounded-2xl shadow-navbar shadow-[0_4px_12px_-4px_rgba(0,0,0,0.75)]'></video>
        <p className='flex justify-center m-10 gap-8 w-5/6 text-amber-800'>
        <h2 className='text-amber-900 text-3xl font-bold '>Location </h2> Located at the upcoming Industrial Zone Of Chakan Phase II , Near Hyundai and Bridgestone and General Electrical Company
          <h2 className='text-amber-900 text-3xl font-bold h-26 border-l-2 pl-4'>Factory Constructed area </h2> Buildup 4000+4000 sq-ft Total Size of 16000 sq-ft for further Development.
          <h2 className='text-amber-900 text-3xl font-bold mb-30 h-26 border-l-2 pl-4'>Power </h2> Well connected Capacity for Electrical Power at plant and Genset as a back up .</p>
        <div className="vd-infra-info text-2xl flex flex-col justify-center items-center">
          <h1 className='font-bold text-amber-900 text-3xl bg-amber-200 bg-center w-4xl text-center p-10 rounded-3xl'>We have invested in advanced, high-speed imported machines to offer</h1>
          <div className="mach-cards flex justify-center w-full flex-wrap overflow-hidden p-10">
            <img src="/bg/bg-m1.JPG" alt="" /><img src="/bg/bg-m2.JPG" alt="" /><img src="/bg/bg-m3.JPG" alt="" /><img src="/bg/bg-m4.JPG" alt="" /><img src="/bg/bg-m5.JPG" alt="" /><img src="/bg/bg-m6.JPG" alt="" /><img src="/bg/bg-m7.JPG" alt="" /><img src="/bg/bg-m8.JPG" alt="" /><img src="/bg/bg-m9.JPG" alt="" /><img src="/bg/bg-m10.JPG" alt="" />
          </div>
        </div>
        <h1 className='w-full bg-amber-950 text-5xl/15 text-amber-50  h-70 text-center pt-20'>Our commitment ensures that you get packaging that protects your products and your brand reputation.</h1>
      </div>
      <div className="director flex ">
        <div className="dir-img">
          <img src="/bg/director.JPG
          " alt="" />
          <div className="dir-logo"><img src="/LogoRGP1.png" alt="rgpgroup logo" /></div>
        </div>
        <div className="dir-info flex justify-center flex-col">
          <h2 className='ml-15 -mt-10 text-amber-900 '>About Us</h2>
          <div className="info-subh pl-15">

            <p id='info-submain'>Established in 2016 by Mr. Ajay Ramdas Jaid, <b>RGP Pack Tech Solution</b> is a trusted manufacturer and supplier of premium packaging solutions. Located in Chakan MIDC, Pune, we deliver high-quality, cost-effective, and sustainable packaging that meets diverse industrial and export requirements. Our production facility is equipped with fully automated, high-speed imported machines that ensure consistency, precision, and on-time delivery - all under one roof.Our commitment ensures that you get packaging that protects your products and your brand reputation. </p>
          </div><Link to="/about"><button className='text-amber-600 bg-white w-60 cursor-pointer mt-6 ml-15 p-5 text-2xl font-bold rounded-2xl'>View More Info</button></Link></div>

      </div>
      <div className="join-info flex w-full h-150 bg-amber-50 my-40">
        <div className="join-img">
          <img src="/plant/team-rgp.jpg
          " alt="" className='w-9/8 h-full' />
        </div>
        <div className="join-info m-15">
          <h1 className='text-4xl font-bold'>Why Choose RGP Pack Tech Solution?</h1>
          <div className="info-sub pl-15 w-full mt-10">
            <p className='w-full'><ul className='list-disc text-3xl'><li>8+ Years of Expertise in Industrial Packaging</li>
              <li>Fully EU-Compliant, Safe Materials</li>
              <li>Packaging Experts</li>
              <li>Sales & marketing executives</li>
              <li>Administrative staff</li>
              <li>Bulk production capacity with fast turnaround</li>
              <li>High precision and consistent quality</li>
              <li>Complete in-house operations</li>
              <li>Stringent quality checks at every stage</li>
            </ul></p>
          </div></div>
      </div>
      <div className="home-pro flex flex-col w-full  bg-amber-50 items-center py-20">
        <h1 className='text-6xl font-bold text-amber-900 text-center'>Our Primary Products</h1>
        <div className="hp-info flex flex-wrap w-3/4 justify-center gap-10 mt-10">
        <Link to="/products#corrugated" className="hp-ind"><div className='flex flex-col items-center' >
          <img src="/Products/cor-heavyduty.jpg" alt="" className='w-7/8' />
          <h1> Corrogated Packaging</h1>
        </div></Link>
        <Link to="/products#wooden"className="hp-ind"><div className='flex flex-col items-center' >
          <img src="/Products/wooden-pinejunglewood.jpg" alt="" className='w-7/8' />
          <h1> Wooden <br></br>Packaging</h1>
        </div></Link>
        <Link to="/products#protective" className="hp-ind "><div className='flex flex-col items-center'>
          <img src="/Products/prot-edge protectors.jpg" alt="" className='w-7/8' />
          <h1> Protective Accessories</h1>
        </div></Link>
        <Link to="/products#custom"className="hp-ind "><div  className='flex flex-col items-center'>
          <img src="/Products/cust-assembly wise packing.jpg" alt="" className='w-7/8' />
          <h1> Custom Packaging Solutions</h1>
        </div></Link>
        <Link to="/products#our-work"className="hp-ind "><div className='flex flex-col items-center' >
          <img src="/our-work/recentwork.jpg" alt="" className='w-7/8' />
          <h1> View Our Recent Work</h1>
        </div></Link></div>
      </div>
      <div className="vision-board flex ">

        <div className="vision"> <h1 className='text-5xl font-bold pb-4 pt-5 text-amber-900'>Our Team</h1><p className='team-info text-2xl'>We have always been connected with experienced professionals since our inception, that’s why we have a pool of professionals which possess outstanding industry knowledge. The professionals appointed by us are well aware of the latest market trends of packaging industry. The professionals of our firm have complete knowledge of advanced machines and technologies owing to which we are able to develop remarkable products. Also, skills enhancement classes and seminars are organized by us at regular intervals to keep our workforce abreast with latest technologies and market dynamics.
        </p>
        </div>
        <img src="/bg/emp-2.JPG" alt="background for plant photo" />

      </div>
      <div className="client-info flex w-full h-150 bg-amber-50 my-40 justify-center py-20">
        <h1 className='text-6xl font-bold text-amber-900'>Our Clients</h1>
      </div>
      <br></br>
      <Contact />
    </div>


  )
}

export default Home
