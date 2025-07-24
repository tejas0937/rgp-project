import React from 'react'
import Hero from "./hero";
import './about.css'
import Contact from './contact';
import { Link } from 'react-router-dom';
import './util.css';
import './responsive-home.css';
import Marquee from 'react-fast-marquee';
import Subsidiaries from './Subsidiaries';

const Home = () => {
  return (
    <div>
      <div className="main w-full relative">
        <Hero />
      </div>

      <div className="video-infra bg-white text-blue-950  w-full h-2/4 mt-0 flex items-center justify-center flex-col">
        <h1 className='text-4xl font-bold m-20text-amber-900 m-16 bg-[linear-gradient(360deg,_rgba(112,210,255,1)_0%,_rgba(17,81,130,1)_100%)] bg-center w-xl text-center p-10 rounded-3xl text-black'>Company Infrastructure</h1>
        <iframe width="690" height="415" src="https://www.youtube.com/embed/DuR1SviAjzA?si=DDaye2UoLZYFvYiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" className='rounded-2xl max-md:w-96 max-md:h-64 max-md:mb-10 ' allowfullscreen></iframe>
        {/* <video src="/bg/rgpvideo.mp4" controls muted autoPlay loop className='w-6/8 max-md:w-4/4 mb-30 max-md:mb-5 max-md:rounded-xs max-mt-5 rounded-2xl shadow-navbar shadow-[0_4px_12px_-4px_rgba(0,0,0,0.75)]'></video> */}
        <p className='infraloc-info flex justify-center m-10 gap-8 w-5/6 text-black max-md:m-1'>
          <h2 className='text-black text-3xl font-bold max-md:border-l-2 max-md:pl-4 max-md:h-11 '>Location </h2> Located at the upcoming Industrial Zone Of Chakan Phase II , Near Hyundai and Bridgestone and General Electrical Company
          <h2 className='text-black text-3xl font-bold h-26 border-l-2 pl-4 max-md:h-22'>Factory Constructed area </h2> Buildup 15000+ 25000 sq-ft Total Size of 40000 sq-ft for further Development.
          <h2 className='text-black text-3xl font-bold mb-30 max-md:mb-0 h-26 max-md:h-12 border-l-2 pl-4'>Power </h2> Well connected Capacity for Electrical Power at plant and Genset as a back up .</p>
        <div className="vd-infra-info text-2xl flex flex-col justify-center items-center">
          <h1 className='font-bold text-white text-3xl bg-[linear-gradient(360deg,_rgba(112,210,255,1)_0%,_rgba(17,81,130,1)_100%)] bg-center w-4xl text-center p-10 rounded-3xl '>We have invested in advanced, high-speed imported machines to offer</h1>
          <div className="mach-cards flex justify-center w-full flex-wrap overflow-hidden py-10">
            <img src="/bg/bg-m4.webp" alt="RGP Pack Tech Solution packaging machine 1" /><img src="/bg/bg-m5.webp" alt="RGP Pack Tech Solution packaging machine 2" /><img src="/bg/bg-m6.webp" alt="RGP Pack Tech Solution packaging machine 3" /><img src="/bg/bg-m7.webp" alt="RGP Pack Tech Solution packaging machine 4" /><img src="/bg/bg-m8.webp" alt="RGP Pack Tech Solution packaging machine 5" /><img src="/bg/bg-m9.webp" alt="RGP Pack Tech Solution packaging machine 6" /><img src="/bg/bg-m10.webp" alt="RGP Pack Tech Solution packaging machine 7" />
          </div>
        </div>
        <h1 className='w-full bg-black text-5xl/15 text-amber-50  h-80 max-md:h-96 text-center pt-20
         '><img src='/dedication.webp' alt="Dedication icon representing commitment to quality" className='w-1/4 hidden max-md:block m-auto pt-5'></img>Our commitment ensures that you get packaging that protects your products and your brand reputation.</h1>
      </div>
      <div className="director flex ">
        <div className="dir-img">
          <img src="/bg/director.webp" alt="Director of RGP Pack Tech Solution, Mr. Ajay Ramdas Jaid" />
          <div className="dir-logo"><img src="/LogoRGP1.webp" alt="RGP Group company logo" /></div>
        </div>
        <div className="dir-info flex justify-center flex-col">
          <h2 className='ml-15 -mt-10 text-black max-md:invisible'>About Us</h2>
          <div className="info-subh pl-15">

            <p id='info-submain'>Established in 2016 by Mr. Ajay Ramdas Jaid, <b>RGP Pack Tech Solution</b> is a trusted manufacturer and supplier of premium packaging solutions. Located in Chakan MIDC, Pune, we deliver high-quality, cost-effective, and sustainable packaging that meets diverse industrial and export requirements. Our production facility is equipped with fully automated, high-speed imported machines that ensure consistency, precision, and on-time delivery - all under one roof.Our commitment ensures that you get packaging that protects your products and your brand reputation. </p>
          </div>
          <Link to="/about">
            <button
              className='  border-2 border-white  bg-white w-60 cursor-pointer mt-6 ml-15 p-5 text-2xl font-bold rounded-2xl transition duration-200 ease-in-out hover:bg-blue-950 text-blue-950  hover:text-white hover:shadow-lg hover:border-none hover:p-5.5'
            >
              View More Info
            </button>
          </Link>
        </div>

      </div>
      <div className="join-info flex w-full h-min bg-white text-blue-950  my-40 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.55)]">

        <div className="join-info m-15 flex flex-col w-full ">
          <h1 className='text-4xl font-bold w-full text-center mb-20 max-md:mt-10 max-md:mb-10'>Why Choose RGP Pack Tech Solution ?</h1>
          <div className="join-cont flex flex-wrap w-full gap-10 justify-center  ">
            <div className="join-card flex justify-center flex-col items-center w-1/4 h-50 max-md:w-4/6 max-md:h-45 max-md:text-xl bg-blue-100 rounded-2xl gap-2 text-2xl text-center"><img src="/join-pngs/experience.webp" alt="assurance png" className='w-25' /> 10+ Years of Expertise in Industrial Packaging</div>
            <div className="join-card flex justify-center flex-col items-center w-1/4 h-50 max-md:w-4/6 max-md:h-45 max-md:text-xl bg-blue-100 rounded-2xl gap-2 text-2xl text-center"><img src="/join-pngs/safety.webp" alt="assurance png" className='w-25' />Fully EU-Compliant, Safe Materials</div>
            <div className="join-card flex justify-center flex-col items-center w-1/4 h-50 max-md:w-4/6 max-md:h-45 max-md:text-xl bg-blue-100 rounded-2xl gap-2 text-2xl text-center"><img src="/join-pngs/procurement.webp" alt="assurance png" className='w-25' />Bulk production capacity with fast turn around</div>
            <div className="join-card flex justify-center flex-col items-center w-1/4 h-50 max-md:w-4/6 max-md:h-45 max-md:text-xl bg-blue-100 rounded-2xl gap-2 text-2xl text-center"><img src="/join-pngs/precision.webp" alt="assurance png" className='w-25' />High precision and consistent quality</div>
            <div className="join-card flex justify-center flex-col items-center w-1/4 h-50 max-md:w-4/6 max-md:h-45 max-md:text-xl bg-blue-100 rounded-2xl gap-2 text-2xl text-center"><img src="/join-pngs/move-in.webp" alt="assurance png" className='w-25' />Complete in-house operations</div>
            <div className="join-card flex justify-center flex-col items-center w-1/4 h-50 max-md:w-4/6 max-md:h-45 max-md:mb-10 max-md:text-xl bg-blue-100 rounded-2xl gap-2 text-2xl text-center"><img src="/join-pngs/assurance.webp" alt="assurance png" className='w-25' />Stringent quality checks at every stage</div>
          </div>
        </div>
      </div>
      <div className="home-pro flex flex-col w-full  bg-white text-blue-950 items-center py-20 max-md:py-7">
        <h1 id="our-products" className='text-6xl font-bold text-blue-950 text-center '>Our Products</h1>
        <div className="hp-info flex flex-wrap w-3/4 justify-center gap-14 mt-10">
          <Link to="/products#corrugated" className="hp-ind"><div className='flex flex-col items-center' >
            <img src="/Products/cor-heavyduty.webp" alt="Heavy-duty corrugated packaging products" className='w-7/8' />
            <h1> Corrogated Packaging</h1> <p className='bg-white text-blue-950 w-50 p-1 m-2 rounded  border-1 border-black'>View Products</p>
          </div></Link>
          <Link to="/products#wooden" className="hp-ind"><div className='flex flex-col items-center' >
            <img src="/Products/wooden-pinejunglewood.webp" alt="Wooden packaging made from pine and jungle wood" className='w-7/8' />
            <h1> Wooden <br></br>Packaging</h1><p className='bg-white text-blue-950  w-50 p-1 m-2 rounded   border-1 border-black'>View Products</p>
          </div></Link>
          <Link to="/products#protective" className="hp-ind "><div className='flex flex-col items-center'>
            <img src="/Products/prot-edge protectors.webp" alt="Protective edge protectors for packaging" className='w-7/8' />
            <h1> Protective Accessories</h1><p className='bg-white text-blue-950  w-50 p-1 m-2 rounded   border-1 border-black'>View Products</p>
          </div></Link>
          <Link to="/products#custom" className="hp-ind "><div className='flex flex-col items-center'>
            <img src="/Products/cust-assemblywise.webp" alt="Custom assembly-wise packaging solutions" className='w-7/8' />
            <h1> Custom Packaging Solutions</h1><p className='bg-white text-blue-950  w-50 p-1 m-2 rounded   border-1 border-black'>View Products</p>
          </div></Link>
          <Link to="/products#our-work" className="hp-ind "><div className='flex flex-col items-center' >
            <img src="/our-work/recentwork.webp" alt="Recent work showcase by RGP Pack Tech Solution" className='w-7/8' />
            <h1> View Our Recent Work</h1><p className='bg-white text-blue-950  w-50 p-1 m-2 rounded  border-1 border-black'>View Recent Work</p>
          </div></Link></div>
      </div>
      <div className="vision-board flex ">

        <div className="vision"> <h3 className='text-6xl font-bold pb-4 pt-5 text-blue-950 '>Our Team</h3><p className='team-info text-2xl'>We have always been connected with experienced professionals since our inception, that's why we have a pool of professionals which possess outstanding industry knowledge. The professionals appointed by us are well aware of the latest market trends of packaging industry. The professionals of our firm have complete knowledge of advanced machines and technologies owing to which we are able to develop remarkable products. Also, skills enhancement classes and seminars are organized by us at regular intervals to keep our workforce abreast with latest technologies and market dynamics.
        </p>
        </div>
        <img src="/bg/emp-2.webp" alt="RGP Pack Tech Solution employees at work in the facility" />

      </div>
      <div className="client-info flex w-full h-150 bg-gradient-to-r  text-blue-950  to-white my-40 items-center flex-col shadow-[0_4px_12px_-4px_rgba(0,0,0,0.55)]">
        <h1 className='text-6xl font-bold  text-blue-950  text-center w-7/8 my-20  white  0 border-b-2 pb-10'>Our Clients</h1>
        <div className="marquee w-7/8">
          <Marquee autoFill pauseOnClick speed={30} className=' p-3'>
            <img src="/clients/client1.webp" width="65px" alt="Client company logo 1" className='bg-amber-white ml-5' />
            <img src="/clients/client2.webp" width="65px" alt="Client company logo 2" className='bg-amber-white ml-5' />
            <img src="/clients/client3.webp" width="65px" alt="Client company logo 3" className='bg-amber-white ml-5' />
            <img src="/clients/client4.webp" width="65px" alt="Client company logo 4" className='bg-amber-white ml-5' />
            <img src="/clients/client5.webp" width="65px" alt="Client company logo 5" className='bg-amber-white ml-5' />
            <img src="/clients/client6.webp" width="65px" alt="Client company logo 6" className='bg-amber-white ml-5' />
            <img src="/clients/client7.webp" width="65px" alt="Client company logo 7" className='bg-amber-white ml-5' />
            <img src="/clients/client8.webp" width="65px" alt="Client company logo 8" className='bg-amber-white ml-5' />
            <img src="/clients/client9.webp" width="65px" alt="Client company logo 9" className='bg-amber-white ml-5' />
            <img src="/clients/client10.webp" width="65px" alt="Client company logo 10" className='bg-amber-white ml-5' />
            <img src="/clients/client11.webp" width="65px" alt="Client company logo 11" className='bg-amber-white ml-5' />
            <img src="/clients/client12.webp" width="65px" alt="Client company logo 12" className='bg-amber-white ml-5' />
            <img src="/clients/client13.webp" width="65px" alt="Client company logo 13" className='bg-amber-white ml-5' />
            <img src="/clients/client14.webp" width="65px" alt="Client company logo 14" className='bg-amber-white ml-5' />
            <img src="/clients/client15.webp" width="65px" alt="Client company logo 15" className='bg-amber-white ml-5' />
            <img src="/clients/client16.webp" width="65px" alt="Client company logo 16" className='bg-amber-white ml-5' />
            <img src="/clients/client17.webp" width="65px" alt="Client company logo 17" className='bg-amber-white ml-5' />
            <img src="/clients/client18.webp" width="65px" alt="Client company logo 18" className='bg-amber-white ml-5' />
            <img src="/clients/client19.webp" width="65px" alt="Client company logo 19" className='bg-amber-white ml-5' />
            <img src="/clients/client20.webp" width="65px" alt="Client company logo-50" className='bg-amber-white ml-5' />
            <img src="/clients/client21.webp" width="65px" alt="Client company logo 21" className='bg-amber-white ml-5' />
            <img src="/clients/client22.webp" width="65px" alt="Client company logo 22" className='bg-amber-white ml-5' />
            <img src="/clients/client23.webp" width="65px" alt="Client company logo 23" className='bg-amber-white ml-5' />
            <img src="/clients/client24.webp" width="65px" alt="Client company logo 24" className='bg-amber-white ml-5' />
          </Marquee><br></br>
          <Marquee autoFill pauseOnClick direction='right' speed={40} className=' p-3'>
            <img src="/clients/client1.webp" width="65px" alt="Client company logo 1" className='bg-amber-white ml-5' />
            <img src="/clients/client2.webp" width="65px" alt="Client company logo 2" className='bg-amber-white ml-5' />
            <img src="/clients/client3.webp" width="65px" alt="Client company logo 3" className='bg-amber-white ml-5' />
            <img src="/clients/client4.webp" width="65px" alt="Client company logo 4" className='bg-amber-white ml-5' />
            <img src="/clients/client5.webp" width="65px" alt="Client company logo 5" className='bg-amber-white ml-5' />
            <img src="/clients/client6.webp" width="65px" alt="Client company logo 6" className='bg-amber-white ml-5' />
            <img src="/clients/client7.webp" width="65px" alt="Client company logo 7" className='bg-amber-white ml-5' />
            <img src="/clients/client8.webp" width="65px" alt="Client company logo 8" className='bg-amber-white ml-5' />
            <img src="/clients/client9.webp" width="65px" alt="Client company logo 9" className='bg-amber-white ml-5' />
            <img src="/clients/client10.webp" width="65px" alt="Client company logo 10" className='bg-amber-white ml-5' />
            <img src="/clients/client11.webp" width="65px" alt="Client company logo 11" className='bg-amber-white ml-5' />
            <img src="/clients/client12.webp" width="65px" alt="Client company logo 12" className='bg-amber-white ml-5' />
            <img src="/clients/client13.webp" width="65px" alt="Client company logo 13" className='bg-amber-white ml-5' />
            <img src="/clients/client14.webp" width="65px" alt="Client company logo 14" className='bg-amber-white ml-5' />
            <img src="/clients/client15.webp" width="65px" alt="Client company logo 15" className='bg-amber-white ml-5' />
            <img src="/clients/client16.webp" width="65px" alt="Client company logo 16" className='bg-amber-white ml-5' />
            <img src="/clients/client17.webp" width="65px" alt="Client company logo 17" className='bg-amber-white ml-5' />
            <img src="/clients/client18.webp" width="65px" alt="Client company logo 18" className='bg-amber-white ml-5' />
            <img src="/clients/client19.webp" width="65px" alt="Client company logo 19" className='bg-amber-white ml-5' />
            <img src="/clients/client20.webp" width="65px" alt="Client company logo-50" className='bg-amber-white ml-5' />
            <img src="/clients/client21.webp" width="65px" alt="Client company logo 21" className='bg-amber-white ml-5' />
            <img src="/clients/client22.webp" width="65px" alt="Client company logo 22" className='bg-amber-white ml-5' />
            <img src="/clients/client23.webp" width="65px" alt="Client company logo 23" className='bg-amber-white ml-5' />
            <img src="/clients/client24.webp" width="65px" alt="Client company logo 24" className='bg-amber-white ml-5' />
          </Marquee></div>
      </div>
      <br></br>

      <Contact />
      <Subsidiaries />
    </div>
  )
}

export default Home

