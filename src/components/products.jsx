
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import productscor from "../data/productscor.json";
import productswood from "../data/productswood.json";
import productsprot from "../data/productsprot.json";
import productscust from "../data/productscust.json";
import ourwork from "../data/ourwork.json";

import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowUp,
  ArrowUpRight,
  ArrowRight,
  Package,
  ShieldCheck,
  Factory,
  Layers3,
  Box,
  CheckCircle2,
} from "lucide-react";

const Products = () => {
  const location = useLocation();

  const categories = {
    Corrugated: productscor,
    Wooden: productswood,
    Protective: productsprot,
    Custom: productscust,
  };

  const [selectedCategory, setSelectedCategory] = useState("Corrugated");
  const [showAllWork, setShowAllWork] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [showScroll, setShowScroll] = useState(false);

  const processData = {
    Corrugated: [
      "Paper Corrugation",
      "Sheet Cutting",
      "Printing & Slotting",
      "Folding & Gluing",
      "Bundling & Dispatch",
    ],
    Wooden: [
      "Lumber Cutting",
      "Machining & Assembly",
      "Finishing & Treatment",
      "Inspection & Shipping",
    ],
    Protective: [
      "Design & Material Selection",
      "Fabrication / Molding",
      "Assembly & Testing",
      "Packing & Dispatch",
    ],
    Custom: [
      "Client Consultation",
      "Design & Prototyping",
      "Material & Branding",
      "Final Assembly & Delivery",
    ],
  };

  const categoryInfo = {
    Corrugated: {
      number: "01",
      description:
        "Durable corrugated packaging solutions designed for safe storage, efficient handling and reliable transportation.",
      icon: <Layers3 size={23} />,
    },
    Wooden: {
      number: "02",
      description:
        "Strong wooden boxes and pallets engineered for heavy industrial products and export transportation.",
      icon: <Box size={23} />,
    },
    Protective: {
      number: "03",
      description:
        "Protective packaging materials designed to minimize movement, impact and damage during transit.",
      icon: <ShieldCheck size={23} />,
    },
    Custom: {
      number: "04",
      description:
        "Custom engineered packaging solutions developed around your product dimensions and protection requirements.",
      icon: <Package size={23} />,
    },
  };

  // =====================================
  // URL HASH NAVIGATION
  // =====================================

  useEffect(() => {
    const hash = location.hash.replace("#", "").toLowerCase();

    const categoryMap = {
      corrugated: "Corrugated",
      wooden: "Wooden",
      protective: "Protective",
      custom: "Custom",
    };

    const targetCategory = categoryMap[hash];

    if (targetCategory) {
      setSelectedCategory(targetCategory);
      setActiveCard(null);
    }

    let targetId = null;

    if (targetCategory) {
      targetId = hash;
    } else if (hash === "product-categories") {
      targetId = "product-categories";
    } else if (hash === "recent-work") {
      targetId = "recent-work";
    }

    if (!targetId) return;

    const timeout = setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);

    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);


  // =====================================
  // SCROLL TO TOP VISIBILITY
  // =====================================

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setActiveCard(null);

    // Keep the URL in sync with the selected category
    window.history.replaceState(
      null,
      "",
      `/products#${category.toLowerCase()}`
    );
  };

  const filteredWork = ourwork;

  return (
    <main
      id="products"
      className="min-h-screen bg-[#f4f0e8] text-[#242521] overflow-hidden"
    >

      {/* =====================================
          HERO SECTION
      ====================================== */}

      <section className="relative min-h-[480px] md:min-h-[540px] flex items-center overflow-hidden">

        <div className="absolute inset-0">

          <img
            src="/bg/bg-m1.webp"
            alt="RGP manufacturing facility"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#242521]/75" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#242521] via-[#242521]/80 to-transparent" />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-24">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >

            <div className="flex items-center gap-3 mb-7">

              <span className="w-10 h-[2px] bg-[#c65c32]" />

              <span className="text-[#e4b08f] text-xs tracking-[0.3em] font-semibold uppercase">
                RGP / Product Portfolio
              </span>

            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.98] text-[#f4f0e8]">

              Packaging
              <br />

              <span className="text-[#d77b50]">
                without limits.
              </span>

            </h1>

            <p className="text-[#e1ddd4] text-base md:text-lg leading-relaxed max-w-xl mt-8">
              Explore our range of industrial packaging solutions
              designed for durability, efficiency and dependable
              product protection.
            </p>

            <a
              href="#product-categories"
              className="inline-flex items-center gap-3 mt-9 bg-[#c65c32] hover:bg-[#a94927] text-white px-7 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Explore Products
              <ArrowUpRight size={19} />
            </a>

          </motion.div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#c65c32]" />

      </section>


      {/* =====================================
          INTRODUCTION
      ====================================== */}

      <section className="py-20 md:py-24 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="text-[#c65c32] text-xs tracking-[0.25em] uppercase font-bold">
              01 / What We Offer
            </span>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mt-6">
              The right protection
              <br />
              for every <span className="text-[#c65c32]">product.</span>
            </h2>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >

            <p className="text-[#79766d] text-lg leading-[1.9]">
              Every product has different packaging requirements.
              At RGP Pack Tech Solution we provide corrugated,
              wooden, protective and custom packaging solutions
              designed to meet different industrial and export needs.
            </p>

            <div className="flex items-center gap-3 mt-7 text-[#242521] font-semibold">
              <span className="w-10 h-[2px] bg-[#c65c32]" />
              Engineered for protection and performance
            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================
          PRODUCT CATEGORIES
      ====================================== */}

      <section
        id="product-categories"
        className="bg-[#eae3d7] py-20 md:py-28 px-6 scroll-mt-28"
      >

        <div className="max-w-7xl mx-auto">

          {/* SECTION HEADING */}

          <div className="text-center max-w-3xl mx-auto mb-14">

            <span className="text-[#c65c32] text-xs tracking-[0.25em] uppercase font-bold">
              02 / Explore Our Range
            </span>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mt-6">
              Our product
              <span className="text-[#c65c32]"> categories.</span>
            </h2>

            <p className="text-[#79766d] mt-6 leading-relaxed">
              Discover packaging solutions developed to support
              different products, industries and transportation needs.
            </p>

          </div>


          {/* CATEGORY SELECTOR */}

          <div
            id={selectedCategory.toLowerCase()}
            className="flex justify-center flex-wrap gap-3 mb-12 scroll-mt-28"
          >

            {Object.keys(categories).map((category) => (

              <button
                key={category}
                type="button"
                onClick={() => selectCategory(category)}
                aria-pressed={selectedCategory === category}
                className={`px-7 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 border ${
                  selectedCategory === category
                    ? "bg-[#242521] text-[#f4f0e8] border-[#242521] shadow-lg"
                    : "bg-transparent text-[#55534c] border-[#c9bca9] hover:border-[#c65c32] hover:text-[#c65c32]"
                }`}
              >
                {category}
              </button>

            ))}

          </div>


          {/* SELECTED CATEGORY INTRO */}

          <AnimatePresence mode="wait">

            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 pb-8 border-b border-[#d4c8b8]"
            >

              <div className="flex items-start gap-4">

                <div className="bg-[#c65c32] text-white p-4 rounded-sm">
                  {categoryInfo[selectedCategory].icon}
                </div>

                <div>

                  <p className="text-[#c65c32] text-xs tracking-[0.2em] font-bold uppercase">
                    Category {categoryInfo[selectedCategory].number}
                  </p>

                  <h3 className="text-2xl md:text-3xl font-semibold mt-2">
                    {selectedCategory} Packaging
                  </h3>

                  <p className="text-[#79766d] text-sm md:text-base mt-2 max-w-2xl">
                    {categoryInfo[selectedCategory].description}
                  </p>

                </div>

              </div>

              <span className="text-sm text-[#79766d] whitespace-nowrap">
                {categories[selectedCategory].length} Products
              </span>

            </motion.div>

          </AnimatePresence>


          {/* PRODUCT GRID */}

          <AnimatePresence mode="wait">

            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7"
            >

              {categories[selectedCategory].map((product, id) => {

                const cardKey = `${selectedCategory}-${id}`;
                const isActive = activeCard === cardKey;

                return (

                  <motion.div
                    key={cardKey}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: id * 0.04,
                    }}
                    className="group bg-[#f8f5ef] border border-[#e0d6c8] overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                  >

                    {/* PRODUCT IMAGE */}

                    <div className="relative overflow-hidden bg-[#e5ddd0]">

                      <img
                        src={product.imgsrc}
                        alt={product.title || `Product ${id + 1}`}
                        loading="lazy"
                        className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute top-4 left-4 bg-[#242521] text-[#f4f0e8] text-xs px-3 py-2 tracking-wider">
                        RGP / {String(id + 1).padStart(2, "0")}
                      </div>

                    </div>


                    {/* PRODUCT DETAILS */}

                    <div className="p-6 flex flex-col flex-grow">

                      <h3 className="text-xl font-semibold text-[#242521]">
                        {product.title}
                      </h3>

                      <div className="w-10 h-[2px] bg-[#c65c32] mt-4 mb-4" />

                      <AnimatePresence initial={false}>

                        {isActive && (

                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-[#79766d] text-sm leading-relaxed overflow-hidden mb-4"
                          >
                            {product.desc}
                          </motion.p>

                        )}

                      </AnimatePresence>

                      <div className="mt-auto pt-3">

                        <button
                          type="button"
                          onClick={() =>
                            setActiveCard(isActive ? null : cardKey)
                          }
                          className="flex items-center justify-between w-full text-sm font-semibold text-[#c65c32] group/btn"
                        >

                          {isActive ? "Show Less" : "View Details"}

                          <span className="w-9 h-9 rounded-full border border-[#c65c32]/40 flex items-center justify-center group-hover/btn:bg-[#c65c32] group-hover/btn:text-white transition-all duration-300">

                            <ArrowUpRight size={17} />

                          </span>

                        </button>

                      </div>

                    </div>

                  </motion.div>

                );

              })}

            </motion.div>

          </AnimatePresence>

        </div>

      </section>


      {/* =====================================
          MANUFACTURING PROCESS
      ====================================== */}

      <section className="py-24 md:py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <span className="text-[#c65c32] text-xs tracking-[0.25em] uppercase font-bold">
              03 / How We Work
            </span>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mt-6">
              From raw material
              <br />
              to <span className="text-[#c65c32]">ready delivery.</span>
            </h2>

            <p className="text-[#79766d] leading-relaxed mt-6">
              A structured manufacturing process focused on quality,
              precision and dependable packaging solutions.
            </p>

          </div>


          {/* PROCESS CATEGORY LABEL */}

          <div className="flex justify-center mb-12">

            <div className="inline-flex items-center gap-3 bg-[#242521] text-[#f4f0e8] px-6 py-4">

              <Factory size={20} className="text-[#d77b50]" />

              <span className="font-semibold">
                {selectedCategory} Manufacturing Process
              </span>

            </div>

          </div>


          {/* PROCESS STEPS */}

          <AnimatePresence mode="wait">

            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

                {processData[selectedCategory].map((step, idx) => (

                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.1,
                    }}
                    className="relative bg-[#eae3d7] border border-[#d9cfc0] p-7 min-h-[190px] flex flex-col justify-between group hover:bg-[#242521] hover:text-[#f4f0e8] transition-all duration-300"
                  >

                    <div className="flex items-center justify-between">

                      <span className="text-4xl font-semibold text-[#c65c32]">
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      <CheckCircle2
                        size={21}
                        className="text-[#c65c32] opacity-70"
                      />

                    </div>

                    <h3 className="text-lg font-semibold leading-snug mt-8">
                      {step}
                    </h3>

                    {idx !== processData[selectedCategory].length - 1 && (

                      <div className="hidden lg:flex absolute top-1/2 -right-4 z-10 w-8 h-8 rounded-full bg-[#c65c32] text-white items-center justify-center">
                        <ArrowRight size={16} />
                      </div>

                    )}

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

      </section>


      {/* =====================================
          RECENT WORK
      ====================================== */}

      <section
        id="recent-work"
        className="bg-[#242521] text-[#f4f0e8] py-24 md:py-28 px-6 scroll-mt-28"
      >

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-14">

            <div>

              <span className="text-[#d77b50] text-xs tracking-[0.25em] uppercase font-bold">
                04 / Our Portfolio
              </span>

              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mt-6">
                Work that
                <br />
                <span className="text-[#d77b50]">
                  speaks for itself.
                </span>
              </h2>

              <p className="text-[#c9c3b9] mt-6 max-w-xl leading-relaxed">
                A glimpse of our packaging projects and solutions
                delivered for different industrial requirements.
              </p>

            </div>

            <div className="border border-white/20 px-7 py-5">

              <p className="text-4xl font-semibold text-[#d77b50]">
                150+
              </p>

              <p className="text-xs tracking-[0.2em] uppercase text-[#c9c3b9] mt-2">
                Projects
              </p>

            </div>

          </div>


          {/* PROJECT GRID */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {filteredWork
              .slice(0, showAllWork ? filteredWork.length : 9)
              .map((work, id) => (

                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.55,
                    delay: (id % 3) * 0.08,
                  }}
                  className="group bg-[#30312c] border border-white/10 overflow-hidden hover:border-[#c65c32]/70 transition-all duration-300"
                >

                  <div className="relative overflow-hidden">

                    <img
                      src={work.imgsrc}
                      alt={work.title || `RGP project ${id + 1}`}
                      loading="lazy"
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute top-4 left-4 bg-[#c65c32] text-white text-xs px-3 py-2 tracking-wider">
                      PROJECT / {String(id + 1).padStart(2, "0")}
                    </div>

                  </div>

                  <div className="p-6">

                    <h3 className="text-xl font-semibold text-[#f4f0e8]">
                      {work.title}
                    </h3>

                    {work.desc &&
                      work.desc !== "-" &&
                      work.desc.toLowerCase() !== "na" && (

                        <p className="text-[#c9c3b9] text-sm mt-3 leading-relaxed">

                          <span className="text-[#d77b50] font-semibold">
                            Delivered for:
                          </span>

                          {" "}

                          {work.desc}

                        </p>

                      )}

                    <div className="w-10 h-[2px] bg-[#c65c32] mt-5 group-hover:w-20 transition-all duration-300" />

                  </div>

                </motion.div>

              ))}

          </div>


          {/* VIEW ALL BUTTON */}

          {filteredWork.length > 9 && (

            <div className="flex justify-center mt-14">

              <button
                type="button"
                onClick={() => setShowAllWork(!showAllWork)}
                className="inline-flex items-center gap-3 bg-[#c65c32] hover:bg-[#a94927] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >

                {showAllWork
                  ? "Show Less Projects"
                  : "View All Projects"}

                <ArrowUpRight
                  size={19}
                  className={`transition-transform duration-300 ${
                    showAllWork ? "-rotate-45" : ""
                  }`}
                />

              </button>

            </div>

          )}

        </div>

      </section>


      {/* =====================================
          FINAL CTA
      ====================================== */}

      <section className="bg-[#eae3d7] py-20 md:py-24 px-6">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          <div>

            <span className="text-[#c65c32] text-xs tracking-[0.25em] uppercase font-bold">
              Need a Packaging Solution?
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-5">
              Let's protect what
              <br />
              matters to your business.
            </h2>

          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#242521] hover:bg-[#c65c32] text-white px-8 py-5 rounded-full font-semibold transition-all duration-300"
          >
            Discuss Your Requirement
            <ArrowUpRight size={19} />
          </Link>

        </div>

      </section>


      {/* =====================================
          SCROLL TO TOP
      ====================================== */}

      {showScroll && (

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-7 right-6 sm:hidden bg-[#c65c32] text-white p-4 rounded-full shadow-xl hover:bg-[#a94927] transition-all duration-300 z-50"
        >
          <ArrowUp size={22} />
        </button>

      )}

    </main>
  );
};

export default Products;
