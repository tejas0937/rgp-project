import React, { useEffect } from 'react';
import Hero from "./hero";
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

  // Common animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="home-container w-full relative font-sans">

      {/* Hero Section */}
      <motion.div
        className="main w-full relative"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Hero />
      </motion.div>

      {/* Company Infrastructure Section */}
      <motion.section
        className="video-infra bg-white text-blue-950 py-10 flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h1 className='text-4xl md:text-5xl font-bold pb-10 text-center bg-gradient-to-r from-black to-purple-900 bg-clip-text text-transparent'>
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
          <motion.div 
            className="infra-details flex flex-col gap-6 max-w-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
          >
            <h2 className='text-2xl font-bold text-blue-950'>Location</h2>
            <p>Located at the upcoming Industrial Zone Of Chakan Phase II, near Hyundai, Bridgestone and General Electrical Company.</p>
            <h2 className='text-2xl font-bold text-blue-950'>Factory Area</h2>
            <p>Buildup 15,000+ sq-ft, Total Size: 40,000 sq-ft for further development.</p>
            <h2 className='text-2xl font-bold text-blue-950'>Power</h2>
            <p>Well-connected electrical power capacity with backup gensets.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="why-choose-us bg-blue-50 py-24 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className='text-4xl md:text-5xl font-bold mb-16 text-blue-950'>Why Choose RGP Pack Tech Solution?</h2>
        <div className="join-cont flex flex-wrap justify-center gap-10 px-6 md:px-20">
          {whyChoose.map((card, idx) => (
            <motion.div
              key={idx}
              className="join-card flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 w-64"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.2 } }}
              viewport={{ once: true }}
            >
              <img src={`/join-pngs/${card.img}`} alt={card.text} className='w-20 h-20 mb-4'/>
              <p className='text-lg font-semibold text-center'>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Dedication Section */}
      <motion.section
        className="dedication bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-32 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <motion.img src='/dedication.webp' alt="Dedication" className='w-24 md:w-32 mx-auto mb-6'
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.8 } }}
        />
        <h2 className='text-3xl md:text-5xl font-bold max-w-4xl mx-auto leading-snug'>
          Our commitment ensures that you get packaging that protects your products and your brand reputation.
        </h2>
      </motion.section>

      {/* Products Section */}
<section className="products bg-white py-24 text-center">
  <h2 id="our-products" className='text-5xl md:text-6xl font-bold mb-12 text-blue-950'>Our Products</h2>
  <div className="hp-info flex flex-wrap justify-center gap-10 px-6">

    {/* Product Card Template */}
    {[
      { img: "/Products/Corrugated1.jpg", title: "Corrugated Packaging", link: "/products#products" },
      { img: "/Products/Wooden1.webp", title: "Wooden Packaging", link: "/products#products" },
      { img: "/Products/Protected1.jpg", title: "Protective Accessories", link: "/products#products" },
      { img: "/Products/Custom1.webp", title: "Custom Packaging Solutions", link: "/products#products" },
      { img: "/Products/recentwork.webp", title: "View Our Recent Work", link: "/products#recent-work" }
    ].map((product, idx) => (
      <Link 
        to={product.link} 
        key={idx} 
        className="flex flex-col items-center bg-white rounded-2xl shadow-2xl border border-gray-300 hover:shadow-xl transition transform hover:-translate-y-2 p-4 w-60 h-[26rem]"
      >
        <img src={product.img} alt={product.title} className='rounded-xl w-full h-46 object-cover mb-4 border' />
        <h3 className='font-bold text-xl mb-4 flex-1'>{product.title}</h3>
        <button className="bg-blue-950 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition mt-auto">
          View Products
        </button>
      </Link>
    ))}

  </div>
</section>


      {/* Advanced Machines 3D Carousel */}
<section className="machinery mt-16 w-full flex flex-col items-center py-24 bg-blue-50">
  <motion.h2
    className='text-3xl md:text-4xl pb-10 font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
    viewport={{ once: true }}
  >
    We Use Advanced imported Machinery 
  </motion.h2>

  <div className="w-full overflow-hidden relative px-6">
    <motion.div 
      className="flex gap-6"
      animate={scrollX} // infinite horizontal scroll
    >
      {machines.concat(machines).map((img, idx) => (
        <motion.img 
          key={idx} 
          src={`/bg/${img}`} 
          alt={`Machine ${idx+1}`} 
          className='w-60 md:w-72 rounded-xl shadow-lg cursor-grab'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ 
            opacity: 1, 
            scale: 1, 
            transition: { duration: 0.6, delay: (idx % machines.length) * 0.2 } 
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
        />
      ))}
    </motion.div>
  </div>
</section>

      {/* About Us Section */}
      <motion.section
        className="about-director-sec relative flex flex-col md:flex-row items-center justify-center bg-black py-16 px-6 md:px-20 gap-12 shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        {/* Left Side - Image */}
        <motion.div 
          className="about-director-left relative w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-4/5 md:w-full">
            <img 
              src="/bg/director.webp" 
              alt="Director" 
              className="about-director-pic rounded-2xl shadow-lg object-cover w-full"
            />
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div 
          className="about-director-right max-w-2xl text-center md:text-left flex flex-col justify-center gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          <h2 className="about-director-title text-3xl md:text-4xl font-bold mb-2 text-white">
            About Us
          </h2>
          <p className="about-director-text text-base md:text-lg text-gray-200 leading-relaxed">
            Founded in 2016 by <b>Mr. Ajay Ramdas Jaid</b>, <b>RGP Pack Tech Solution</b> delivers high-quality, sustainable packaging solutions for industrial and export clients. 
            Based in Chakan MIDC, Pune, we focus on innovative design and reliable protection for your products.
          </p>
          <p className="about-director-text text-base md:text-lg text-gray-200 leading-relaxed">
            Combining decades of expertise with modern manufacturing technology, we ensure every package meets the highest standards of precision, durability, and visual appeal.
          </p>
          <Link to="/about" className="mt-3 self-center md:self-start">
            <motion.button 
              className="about-director-btn bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More Info
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="team bg-blue-50 py-24 flex flex-col md:flex-row items-center justify-center gap-10 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <motion.div 
          className="team-text max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-blue-950'>Our Team</h2>
          <p className='text-lg text-gray-700'>
            We have always been connected with experienced professionals since our inception, possessing outstanding industry knowledge and awareness of the latest market trends in the packaging industry. Skills enhancement classes and seminars are organized at regular intervals to keep our workforce up-to-date.
          </p>
        </motion.div>
        <motion.img 
          src="/bg/emp-2.webp" alt="Team at work" 
          className='rounded-2xl border shadow-lg w-full md:w-1/2'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        />
      </motion.section>

      {/* Clients Section */}
      <motion.section
        className="clients bg-gradient-to-r from-black via-blue-900 to-black py-24 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className='text-4xl md:text-5xl font-bold mb-12 text-white'>Our Happy Clients</h2>
        <div className="marquee w-full px-6">
          <Marquee autoFill pauseOnHover speed={30}>
            {Array.from({length: 24}, (_, i) => (
              <img key={i} src={`/clients/client${i+1}.webp`} alt={`Client ${i+1}`} className='mx-4 w-26 bg-cyan-50 rounded h-16 object-contain'/>
            ))}
          </Marquee>
        </div>
      </motion.section>

      {/* Contact and Subsidiaries */}
      <Contact />
      <Subsidiaries />

    </div>
  )
}

export default Home;
