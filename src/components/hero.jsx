import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const heroImages = [
  "/bg/bg1cr.jpg",
  "/bg/bg2cr.jpg",
  "/bg/bg3cr.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000); // rotate every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const getPosition = (index) => {
    const total = heroImages.length;
    if (index === currentIndex) return "center";
    if (index === (currentIndex - 1 + total) % total) return "left";
    if (index === (currentIndex + 1) % total) return "right";
    return "hidden";
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-between overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white">
      {/* Background Glow & Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-black/60"></div>
        <div className="absolute top-10 left-10 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Left Content */}
      <motion.div
        className="relative z-10 w-full md:w-1/2 px-6 sm:px-10 md:px-16 py-16 md:py-0 flex flex-col items-start md:items-start justify-center text-center md:text-left"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Build a{" "}
          <span className="text-blue-300">Strong</span>,{" "}
          <span className="text-purple-300">Reliable</span>, and{" "}
          <span className="text-indigo-300">Smart</span> Packaging Future
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
          At <span className="font-semibold text-white">RGP Group</span>, we
          bring innovation, sustainability, and technology together to provide
          complete packaging solutions — all under one roof.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <motion.a
            className="px-6 sm:px-8 py-3 rounded-full bg-white text-blue-700 font-semibold shadow-lg hover:bg-blue-100 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/about">Explore More</Link>
          </motion.a>
          <motion.a
            className="px-6 sm:px-8 py-3 rounded-full border border-white/60 text-white font-semibold hover:bg-white hover:text-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/products">View Products</Link>
          </motion.a>
        </div>
      </motion.div>

      {/* Right Carousel Image */}
      <div className="relative z-10 w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0 px-4">
        {heroImages.map((img, index) => {
          const pos = getPosition(index);

          let styles = "";
          if (pos === "center") {
            styles = "z-30 w-[80%] opacity-100";
          } else if (pos === "left") {
            styles = "z-20 w-[65%] -translate-x-20 opacity-40";
          } else if (pos === "right") {
            styles = "z-20 w-[65%] translate-x-20 opacity-40";
          } else {
            styles = "hidden";
          }

          return (
            <motion.img
              key={index}
              src={img}
              alt="Hero Carousel"
              className={`absolute rounded-3xl shadow-2xl border border-white/40 object-cover ${styles}`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: pos === "center" ? 1 : 0.5,
                x: pos === "center" ? 0 : pos === "left" ? -100 : 100,
                scale: pos === "center" ? 1 : 0.8,
              }}
              transition={{ duration: 1 }}
            />
          );
        })}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Hero;
