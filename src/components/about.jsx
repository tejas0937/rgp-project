import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white flex flex-col items-center justify-center bg-[#000938]">
      {/* 🌌 Background Glow & Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-black/60"></div>
        <div className="absolute top-10 left-10 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* 🏢 ABOUT SECTION */}
      <GlassSection>
        <motion.h1
          className="text-4xl font-bold mb-4 text-white text-center border-b border-white/30 pb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-lg text-center text-white/90 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true }}
        >
          Established in 2016 by <b>Mr. Ajay Ramdas Jaid</b>,{" "}
          <b>RGP Pack Tech Solution</b> is a trusted manufacturer and supplier
          of premium packaging solutions. Located in Chakan MIDC, Pune, we
          deliver high-quality, cost-effective, and sustainable packaging that
          meets diverse industrial and export requirements. Our production facility is equipped with fully automated, high-speed imported machines that ensure consistency, precision, and on-time delivery - all under one roof. Our commitment ensures that you get packaging that protects your products and your brand reputation.
        </motion.p>
      </GlassSection>

      {/* 🌍 VISION SECTION */}
      <GlassSection className="flex flex-col lg:flex-row items-center gap-10">
        <motion.img
          src="/plant/bg-m1.webp"
          alt="Vision"
          className="w-full lg:w-[500px] rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        />
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-semibold text-white mb-3 text-center">
            Our Vision
          </h1>
          <h2 className="text-2xl text-purple-200 mb-4 text-center">
            Complete Export Packing & Stress-Free Dispatch
          </h2>
          <p className="text-white/90 max-w-lg text-center">
           We ensure a complete solution for export packing: products are securely and professionally packed according to international standards, using the right materials like corrugated boxes, pallets, and moisture protection. Proper labeling, accurate documentation, and optimized loading ensure smooth transit. Coordinating with trusted logistics partners provides a stress-free dispatch experience, delivering goods safely, on time, and hassle-free.
          </p>
        </motion.div>
      </GlassSection>

      {/* ⚙️ INFRASTRUCTURE SECTION */}
      <GlassSection className="flex flex-col lg:flex-row items-center gap-10">
        <motion.div
          className="lg:w-1/2 text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-semibold mb-4 text-center">
            Infrastructure
          </h1>
          <p className="text-white/90 text-lg leading-relaxed">
            <span className="block font-semibold text-xl mt-2 text-purple-200">
              Location:
            </span>
            Chakan Phase II, Pune
            <span className="block font-semibold text-xl mt-4 text-purple-200">
              Factory Area:
            </span>
            16,000 sq-ft with future expansion
            <span className="block font-semibold text-xl mt-4 text-purple-200">
              Power:
            </span>
            Reliable plant power with generator backup
          </p>
        </motion.div>
        <motion.iframe
          className="w-full lg:w-[500px] h-[300px] rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/DuR1SviAjzA"
          title="RGP Infrastructure"
          allowFullScreen
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        ></motion.iframe>
      </GlassSection>

      {/* 🏭 MACHINES SECTION */}
      <GlassSection>
        <motion.h1
          className="text-3xl font-semibold text-center text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          Advanced High-Speed Imported Machines
        </motion.h1>
        <Carousel />
      </GlassSection>

      {/* 👨‍💼 DIRECTOR SECTION */}
      <GlassSection className="flex flex-col lg:flex-row items-center gap-0">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          <img
            src="/bg/director.webp"
            alt="Director"
            className="w-[300px] rounded-2xl shadow-lg"
          />
        </motion.div>
        <motion.div
          className="text-center ml-15"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-semibold text-white mb-2 text-left max-md:-ml-10 max-md:text-2xl max-md:mt-2 ">
            About Director
          </h1>
          <h2 className="text-2xl text-purple-200 mb-3 text-left max-md:-ml-10">
            Mr. Ajay Ramdas Jaid
          </h2>
          <p className="text-lg text-white/90 max-w-lg mx-auto text-left max-md:-ml-10">
            is a tech expert with skills in strategic planning, packaging innovation, supply chain management, team leadership, client relations, export compliance, financial oversight, sustainable packaging, quality assurance, and market analysis. He has worked for Bajaj Electricals Ltd (Chakan & Ranjangaon), Posco India, Raychem RPG Pvt Ltd, Hyt India Pvt Ltd, and many more companies in the area of Wooden Box, Pallet, and Packing materials.
          </p>
        </motion.div>
      </GlassSection>

      {/* 📍 LOCATION SECTION */}
      <GlassSection className="text-center">
        <motion.h1
          className="text-4xl font-bold text-white mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          Company Address
        </motion.h1>
        <motion.h2
          className="text-lg text-purple-100 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } }}
          viewport={{ once: true }}
        >
          Behind Surin Auto Company, Village Bhamboli, Chakan, Pune – 410501
        </motion.h2>
        <motion.iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.253777910555!2d73.7773357093428!3d18.786840382285522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b444de5039ab%3A0xee3d9503fb63bc7d!2sRGP%20Group!5e0!3m2!1sen!2sin!4v1751800429185!5m2!1sen!2sin"
          className="w-full md:w-3/4 h-[400px] mx-auto rounded-xl border-2 border-purple-400/50 shadow-lg"
          allowFullScreen
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
          viewport={{ once: true }}
        ></motion.iframe>
      </GlassSection>
    </div>
  );
};

// ✨ Glassmorphism Wrapper
function GlassSection({ children, className = "" }) {
  return (
    <section
      className={`relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 my-12 w-11/12 md:w-4/5 max-w-6xl shadow-lg transition hover:shadow-purple-500/30 hover:bg-white/15 ${className}`}
    >
      {children}
    </section>
  );
}

// 🌀 Carousel with fade-in & smooth transition
function Carousel() {
  const images = [
    "/bg/bg-m6.webp",
    "/plant/RGP -HD(7).webp",
    "/plant/RGP -HD(9).webp",
    "/bg/mach-1.webp",
    "/bg/bg-m1.webp",
    "/plant/RGP -HD(11).webp",
  ];
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="relative flex flex-col items-center">
      <motion.img
        key={current}
        src={images[current]}
        alt="Machine"
        className="w-[90%] max-md:max-w-60 max-md:h-40 max-w-4xl h-[400px] object-cover rounded-xl shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.7 } }}
      />
      <div className="flex gap-6 mt-6">
        <button
          onClick={prev}
          className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full border border-white/30 text-white transition"
        >
          ← Previous
        </button>
        <button
          onClick={next}
          className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full border border-white/30 text-white transition"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default About;
