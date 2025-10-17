import React, { useEffect } from 'react';
import Hero from "./hero";
import './about.css';
import Contact from './contact';
import { Link } from 'react-router-dom';
import './util.css';
import './responsive-home.css';
import Marquee from 'react-fast-marquee';
import Subsidiaries from './Subsidiaries';
import { motion, useAnimation } from 'framer-motion';

const Home = () => {
  const machines = ["bg-m4.webp","bg-m5.webp","bg-m6.webp","bg-m7.webp","bg-m8.webp","bg-m9.webp","bg-m10.webp"];
  const whyChoose = [
    {img: "experience.webp", text:"10+ Years of Expertise in Industrial Packaging"},
    {img: "safety.webp", text:"Fully EU-Compliant, Safe Materials"},
    {img: "procurement.webp", text:"Bulk production capacity with fast turn around"},
    {img: "precision.webp", text:"High precision and consistent quality"},
    {img: "move-in.webp", text:"Complete in-house operations"},
    {img: "assurance.webp", text:"Stringent quality checks at every stage"}
  ];

  // Infinite horizontal scroll animation for machines
  const scrollX = useAnimation();
  useEffect(() => {
    const loop = async () => {
      while(true) {
        await scrollX.start({ x: "-100%", transition: { duration: 20, ease: "linear" } });
        await scrollX.set({ x: 0 });
      }
    }
    loop();
  }, [scrollX]);

  return (
    <div className="home-container w-full relative font-sans">

      {/* Hero Section */}
      <div className="main w-full relative">
        <Hero />
      </div>

      {/* Company Infrastructure Section */}
      <section className="video-infra bg-white text-blue-950 py-10 flex flex-col items-center">
        <h1 className='text-4xl md:text-5xl font-bold pb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
          Company Infrastructure
        </h1>
        <div className="infra-video flex flex-col md:flex-row items-center justify-center gap-10 w-full">
          <iframe 
            width="690" 
            height="415" 
            src="https://www.youtube.com/embed/DuR1SviAjzA?si=DDaye2UoLZYFvYiY" 
            title="Company Infrastructure Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            className='rounded-2xl shadow-lg w-full md:w-[690px] h-[415px]'
            allowFullScreen
          />
          <div className="infra-details flex flex-col gap-6 max-w-xl">
            <h2 className='text-2xl font-bold text-blue-950'>Location</h2>
            <p>Located at the upcoming Industrial Zone Of Chakan Phase II, near Hyundai, Bridgestone and General Electrical Company.</p>
            <h2 className='text-2xl font-bold text-blue-950'>Factory Area</h2>
            <p>Buildup 15,000+ sq-ft, Total Size: 40,000 sq-ft for further development.</p>
            <h2 className='text-2xl font-bold text-blue-950'>Power</h2>
            <p>Well-connected electrical power capacity with backup gensets.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us bg-blue-50 py-24 text-center">
        <h2 className='text-4xl md:text-5xl font-bold mb-16 text-blue-950'>Why Choose RGP Pack Tech Solution?</h2>
        <div className="join-cont flex flex-wrap justify-center gap-10 px-6 md:px-20">
          {whyChoose.map((card, idx) => (
            <div key={idx} className="join-card flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 w-64">
              <img src={`/join-pngs/${card.img}`} alt={card.text} className='w-20 h-20 mb-4'/>
              <p className='text-lg font-semibold text-center'>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dedication Section */}
      <section className="dedication bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-32 text-center">
        <img src='/dedication.webp' alt="Dedication" className='w-24 md:w-32 mx-auto mb-6' />
        <h2 className='text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-snug'>
          Our commitment ensures that you get packaging that protects your products and your brand reputation.
        </h2>
      </section>

      {/* Products Section */}
      <section className="products bg-white py-24 text-center">
        <h2 id="our-products" className='text-5xl md:text-6xl font-bold mb-12 text-blue-950'>Our Products</h2>
        <div className="hp-info flex flex-wrap justify-center gap-10 px-6">
          {[ 
            {img:"cor-heavyduty.webp", title:"Corrugated Packaging", link:"/products#corrugated"},
            {img:"wooden-pinejunglewood.webp", title:"Wooden Packaging", link:"/products#wooden"},
            {img:"prot-edge protectors.webp", title:"Protective Accessories", link:"/products#protective"},
            {img:"cust-assemblywise.webp", title:"Custom Packaging Solutions", link:"/products#custom"},
            {img:"recentwork.webp", title:"View Our Recent Work", link:"/products#our-work"},
          ].map((prod, idx) => (
            <Link key={idx} to={prod.link} className="flex flex-col items-center bg-white rounded-2xl shadow-2xl border border-gray-300 hover:shadow-xl transition transform hover:-translate-y-2 p-4 w-60">
              <img src={`/Products/${prod.img}`} alt={prod.title} className='rounded-xl w-full mb-4' />
              <h3 className='font-bold text-xl mb-2'>{prod.title}</h3>
              <span className='text-blue-950 font-semibold underline'>View Products</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Advanced Machines 3D Carousel */}
      <section className="machinery mt-16 w-full flex flex-col items-center py-24 bg-blue-50">
        <h2 className='text-3xl md:text-4xl pb-10 font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
          Advanced Machinery We Use
        </h2>
        <div className="w-full overflow-hidden relative px-6">
          <motion.div 
            className="flex gap-6"z
            animate={scrollX}
          >
            {machines.concat(machines).map((img, idx) => (
              <motion.img 
                key={idx} 
                src={`/bg/${img}`} 
                alt={`Machine ${idx+1}`} 
                className='w-60 md:w-72 rounded-xl shadow-lg cursor-grab hover:scale-105 transition-transform'
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Director / About Us Section - Compact & Visible */}
<section className="director relative flex flex-col md:flex-row mt-0 items-center justify-center bg-black py-12 gap-1 px-4 md:px-16 shadow-2xl">
  <div className="dir-img relative w-full md:w-1/2">
    <img src="/bg/director.webp" alt="Director" className='rounded-2xl shadow-2xl w-full object-cover'/>
    <div className="dir-logo absolute -bottom- left-2/5 transform -translate-x-1/2">
      <img src="/LogoRGP1.webp" alt="Company Logo" className='w-24 md:w-32 filter drop-shadow-lg brightness-150 contrast-125 saturate-150' />
    </div>
  </div>
  <div className="dir-info max-w-xl text-center md:text-left flex flex-col justify-center gap-4">
    <h2 className='text-3xl md:text-4xl font-bold mb-2 text-black'>About Us</h2>
    <p className='text-base md:text-lg text-black leading-snug'>
      Established in 2016 by Mr. Ajay Ramdas Jaid, <b>RGP Pack Tech Solution</b> delivers premium, sustainable packaging solutions to industrial and export clients. Located in Chakan MIDC, Pune, we ensure high-quality, cost-effective packaging that safeguards your products and brand.
    </p>
    <p className='text-base md:text-lg text-black leading-snug'>
      Our team combines decades of expertise with cutting-edge machinery to ensure every package meets the highest standards of precision, durability, and aesthetic excellence.
    </p>
    <Link to="/about" className='mt-3 self-center md:self-start'>
      <button className='bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition transform'>
        View More Info
      </button>
    </Link>
  </div>
</section>


      {/* Team Section */}
      <section className="team bg-blue-50 py-24 flex flex-col md:flex-row items-center justify-center gap-10 px-6">
        <div className="team-text max-w-xl">
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-blue-950'>Our Team</h2>
          <p className='text-lg text-gray-700'>
            We have always been connected with experienced professionals since our inception, possessing outstanding industry knowledge and awareness of the latest market trends in the packaging industry. Skills enhancement classes and seminars are organized at regular intervals to keep our workforce up-to-date.
          </p>
        </div>
        <img src="/bg/emp-2.webp" alt="Team at work" className='rounded-2xl shadow-lg w-full md:w-1/2' />
      </section>

      {/* Clients Section */}
      <section className="clients bg-white py-24 text-center">
        <h2 className='text-4xl md:text-5xl font-bold mb-12 text-blue-950'>Our Clients</h2>
        <div className="marquee w-full px-6">
          <Marquee autoFill pauseOnHover speed={30}>
            {Array.from({length: 24}, (_, i) => (
              <img key={i} src={`/clients/client${i+1}.webp`} alt={`Client ${i+1}`} className='mx-4 w-16 h-16 object-contain'/>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Contact and Subsidiaries */}
      <Contact />
      <Subsidiaries />

    </div>
  )
}

export default Home;
