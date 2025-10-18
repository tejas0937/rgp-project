import React, { useState } from 'react';
import productscor from '../data/productscor.json';
import productswood from '../data/productswood.json';
import productsprot from '../data/productsprot.json';
import productscust from '../data/productscust.json';
import ourwork from '../data/ourwork.json';
import { motion } from 'framer-motion';

const Products = () => {
  const categories = {
    Corrugated: productscor,
    Wooden: productswood,
    Protective: productsprot,
    Custom: productscust,
  };

  const [selectedCategory, setSelectedCategory] = useState('Corrugated');
  const [showAllWork, setShowAllWork] = useState(false);
  const filteredWork = ourwork;

  const processData = {
    Corrugated: [
      "Paper Corrugation",
      "Sheet Cutting",
      "Printing & Slotting",
      "Folding & Gluing",
      "Bundling & Dispatch"
    ],
    Wooden: [
      "Lumber Cutting",
      "Machining & Assembly",
      "Finishing & Treatment",
      "Inspection & Shipping"
    ],
    Protective: [
      "Design & Material Selection",
      "Fabrication / Molding",
      "Assembly & Testing",
      "Packing & Dispatch"
    ],
    Custom: [
      "Client Consultation",
      "Design & Prototyping",
      "Material & Branding",
      "Final Assembly & Delivery"
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-800 to-black text-gray-900 relative overflow-hidden" id='products'>
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="relative z-10 px-4 sm:px-8 lg:px-16">

        {/* Header */}
        <section className="text-center py-20" >
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Our Product Portfolio
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
            Explore premium packaging solutions designed for efficiency, durability, and export standards.
          </p>
        </section>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg font-semibold transition transform hover:scale-105
                ${selectedCategory === cat
                  ? 'bg-yellow-500 text-black'
                  : 'bg-white/20 text-white hover:bg-yellow-400 hover:text-black'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Flowchart */}
        <section className="mb-20 text-center relative">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12">
            {selectedCategory} Box Manufacturing Process
          </h2>

          <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-12 sm:gap-12 relative">

            {processData[selectedCategory].map((step, idx) => (
              <React.Fragment key={idx}>
                {/* Step Bubble */}
                <motion.div
                  className="relative bg-white/10 border border-yellow-400/60 text-white px-6 py-4 rounded-full font-semibold text-lg backdrop-blur-md shadow-lg hover:bg-yellow-500 hover:text-black transition-all duration-300"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.15 }}
                >
                  {step}
                </motion.div>

                {/* Arrow between steps */}
                {idx !== processData[selectedCategory].length - 1 && (
                  <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.15 + 0.2 }}
                  >
                    {/* Desktop horizontal arrow */}
                    <div className="hidden sm:block w-12 h-0.5 bg-yellow-400 relative">
                      <div className="absolute top-[-7px] -right-1 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-yellow-400"></div>
                    </div>

                    {/* Mobile vertical arrow */}
                    <div className="sm:hidden text-yellow-400 text-3xl font-bold animate-bounce mt-2">
                      ↓
                    </div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap justify-center gap-8">
            {categories[selectedCategory].map((product, id) => (
              <div
                key={id}
                className="relative bg-white/90 rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between group transition-transform duration-300 hover:scale-105 w-64 h-[400px]"
              >
                <img
                  src={product.imgsrc}
                  alt={product.title || `Product ${id + 1}`}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h2 className="font-semibold text-lg mb-2 text-center">{product.title}</h2>
                  <p className="absolute inset-0 bg-black/80 text-white p-4 opacity-0 group-hover:opacity-100 flex items-center justify-center text-center transition-opacity duration-300 rounded-2xl">
                    {product.desc}
                  </p>
                  <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Recent Work */}
        <section className='flex flex-col items-center py-10' id='recent-work'>
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-white">Our Recent Work</h2>
            <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
              Showcasing our premium packaging solutions and projects for clients.
            </p>
          </div>

          <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-4/5 place-items-center">
            {(showAllWork ? filteredWork : filteredWork.slice(0, 9)).map((work, id) => (
              <div
                key={id}
                className="bg-white/90 rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl w-76"
              >
                <img
                  src={work.imgsrc}
                  alt={work.title || `Work ${id + 1}`}
                  className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-500 hover:scale-110"
                />
                <div className="p-4 flex flex-col gap-1">
                  <h3 className="font-semibold text-md text-gray-900">{work.title}</h3>
                  <p className="text-gray-700 text-sm">{work.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredWork.length > 8 && (
            <div className="text-center my-12 pb-12">
              <button
                onClick={() => setShowAllWork(!showAllWork)}
                className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
              >
                {showAllWork ? 'Show Less' : 'View All'}
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Products;
