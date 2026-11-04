
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Factory,
  Zap,
  ShieldCheck,
  Package,
  Globe2,
  Building2,
} from "lucide-react";

const machineImages = [
  "/bg/bg-m6.webp",
  "/plant/RGP -HD(7).webp",
  "/plant/RGP -HD(9).webp",
  "/bg/mach-1.webp",
  "/bg/bg-m1.webp",
  "/plant/RGP -HD(11).webp",
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <main className="bg-[#f4f0e8] text-[#242521] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[540px] flex items-center overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="/bg/bg-m1.webp"
            alt="RGP industrial packaging facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#242521]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#242521] via-[#242521]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-28">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-7">
              <span className="w-10 h-[2px] bg-[#c65c32]" />
              <span className="text-[#e4b08f] text-xs tracking-[0.3em] font-semibold uppercase">
                About RGP Group
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.98] text-[#f4f0e8]">
              Packaging
              <br />
              built on <span className="text-[#d77b50]">trust.</span>
            </h1>

            <p className="text-[#e1ddd4] text-base md:text-lg leading-relaxed max-w-xl mt-8">
              Protecting products and empowering businesses through
              innovative corrugated and wooden packaging solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-9">
              <a
                href="#our-story"
                className="inline-flex items-center gap-3 bg-[#c65c32] hover:bg-[#a94927] text-white px-7 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Discover RGP
                <ArrowUpRight size={19} />
              </a>

              <div className="flex items-center gap-2 text-[#e1ddd4] text-sm">
                <ShieldCheck size={18} className="text-[#d77b50]" />
                Engineered with care since 2016
              </div>
            </div>
          </motion.div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#c65c32]" />
      </section>


      {/* COMPANY INTRODUCTION */}
      <section id="our-story" className="py-24 md:py-32 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-24 items-start">

          <Reveal>
            <span className="text-[#c65c32] text-xs tracking-[0.25em] uppercase font-bold">
              01 / Who We Are
            </span>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mt-6">
              More than
              <br />
              just <span className="text-[#c65c32]">packaging.</span>
            </h2>

            <div className="w-16 h-[3px] bg-[#c65c32] mt-8" />
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-lg md:text-xl leading-relaxed text-[#55534c]">
              Established in 2016 by{" "}
              <strong className="text-[#242521]">Mr. Ajay Ramdas Jaid</strong>
              {" "}RGP Pack Tech Solution is a trusted manufacturer and
              supplier of premium packaging solutions.
            </p>

            <p className="text-[#79766d] leading-[1.9] mt-6">
              Located in Chakan MIDC, Pune, we deliver high-quality,
              cost-effective and sustainable packaging that meets diverse
              industrial and export requirements.
            </p>

            <p className="text-[#79766d] leading-[1.9] mt-4">
              Our production facility is equipped with fully automated,
              high-speed imported machines that ensure consistency,
              precision and on-time delivery, all under one roof.
              Our commitment ensures that you get packaging that protects
              your products and your brand reputation.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t border-[#d9cfc0]">

              <div>
                <h3 className="text-4xl md:text-5xl font-semibold text-[#c65c32]">
                  2016
                </h3>
                <p className="text-sm text-[#79766d] mt-2">
                  Year Established
                </p>
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-semibold text-[#c65c32]">
                  16,000
                </h3>
                <p className="text-sm text-[#79766d] mt-2">
                  Sq. Ft. Factory Area
                </p>
              </div>

            </div>
          </Reveal>

        </div>
      </section>


      {/* VISION */}
      <section className="py-20 md:py-28 bg-[#eae3d7]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <Reveal>
              <div className="relative">

                <img
                  src="/plant/bg-m1.webp"
                  alt="RGP packaging and manufacturing facility"
                  className="w-full h-[360px] md:h-[520px] object-cover rounded-sm"
                />

                <div className="absolute -bottom-5 -right-5 md:-right-8 bg-[#c65c32] text-white p-7 md:p-9">
                  <Globe2 size={32} strokeWidth={1.3} />
                  <p className="text-xs tracking-[0.2em] mt-4 uppercase">
                    Export Ready
                  </p>
                </div>

              </div>
            </Reveal>

            <Reveal delay={0.15}>

              <span className="text-[#c65c32] text-xs tracking-[0.25em] uppercase font-bold">
                02 / Our Vision
              </span>

              <h2 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight mt-6">
                Complete export packing.
                <br />
                <span className="text-[#c65c32]">
                  Stress-free dispatch.
                </span>
              </h2>

              <p className="text-[#79766d] leading-[1.9] mt-7">
                We ensure a complete solution for export packing.
                Products are securely and professionally packed according
                to international standards, using the right materials like
                corrugated boxes, pallets and moisture protection.
              </p>

              <p className="text-[#79766d] leading-[1.9] mt-4">
                Proper labeling, accurate documentation and optimized
                loading ensure smooth transit. Coordinating with trusted
                logistics partners provides a stress-free dispatch
                experience, delivering goods safely, on time and hassle-free.
              </p>

              <div className="flex items-center gap-3 mt-8 text-[#242521] font-semibold">
                <span className="w-10 h-[2px] bg-[#c65c32]" />
                Complete packaging solutions under one roof
              </div>

            </Reveal>

          </div>
        </div>
      </section>


      {/* INFRASTRUCTURE */}
      <section className="py-24 md:py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <Reveal className="max-w-3xl mb-14">

            <span className="text-[#c65c32] text-xs tracking-[0.25em] uppercase font-bold">
              03 / Our Infrastructure
            </span>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mt-6">
              Built for precision.
              <br />
              <span className="text-[#c65c32]">Designed for scale.</span>
            </h2>

            <p className="text-[#79766d] leading-relaxed mt-6 max-w-2xl">
              Our manufacturing infrastructure combines advanced machinery,
              reliable power and a dedicated production facility to support
              industrial packaging requirements.
            </p>

          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 items-stretch">

            <Reveal>
              <div className="h-full bg-[#242521] text-[#f4f0e8] p-8 md:p-12">

                <Factory size={34} className="text-[#d77b50]" />

                <h3 className="text-3xl font-semibold mt-7 mb-8">
                  Facility Overview
                </h3>

                <div className="space-y-7">

                  <InfrastructureItem
                    icon={<MapPin size={21} />}
                    label="Location"
                    value="Chakan Phase II, Pune"
                  />

                  <InfrastructureItem
                    icon={<Building2 size={21} />}
                    label="Factory Area"
                    value="16,000 sq-ft with future expansion"
                  />

                  <InfrastructureItem
                    icon={<Zap size={21} />}
                    label="Power"
                    value="Reliable plant power with generator backup"
                  />

                </div>

                <div className="mt-10 pt-7 border-t border-white/15">
                  <p className="text-[#d1c8b9] text-sm leading-relaxed">
                    Advanced manufacturing capabilities focused on
                    consistency, precision and dependable delivery.
                  </p>
                </div>

              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative min-h-[350px] lg:min-h-full bg-[#d9c9ac] overflow-hidden">

                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/DuR1SviAjzA?rel=0"
                  title="RGP Infrastructure"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />

              </div>
            </Reveal>

          </div>
        </div>
      </section>


      {/* MACHINERY */}
      <section className="py-24 md:py-28 bg-[#eae3d7]">

        <div className="max-w-7xl mx-auto px-6">

          <Reveal className="text-center max-w-3xl mx-auto mb-14">

            <span className="text-[#c65c32] text-xs tracking-[0.25em] uppercase font-bold">
              04 / Manufacturing Capabilities
            </span>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mt-6">
              Advanced machinery.
              <br />
              <span className="text-[#c65c32]">Consistent quality.</span>
            </h2>

            <p className="text-[#79766d] leading-relaxed mt-6">
              Our facility is equipped with advanced high-speed imported
              machines that support efficient and precise manufacturing.
            </p>

          </Reveal>

          <Reveal>
            <MachineCarousel />
          </Reveal>

        </div>
      </section>


      {/* DIRECTOR */}
      <section className="py-24 md:py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">

            <Reveal>
              <div className="relative max-w-[480px] mx-auto">

                <img
                  src="/bg/director.webp"
                  alt="Mr. Ajay Ramdas Jaid"
                  className="w-full h-[420px] md:h-[560px] object-cover object-top"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#242521]/90 to-transparent p-8">
                  <p className="text-[#f4f0e8] text-xs tracking-[0.25em] uppercase">
                    Founder
                  </p>
                  <h3 className="text-white text-2xl font-semibold mt-2">
                    Mr. Ajay Ramdas Jaid
                  </h3>
                </div>

              </div>
            </Reveal>

            <Reveal delay={0.15}>

              <span className="text-[#c65c32] text-xs tracking-[0.25em] uppercase font-bold">
                05 / Leadership
              </span>

              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mt-6">
                The vision
                <br />
                behind <span className="text-[#c65c32]">RGP.</span>
              </h2>

              <h3 className="text-xl md:text-2xl font-semibold mt-8">
                Mr. Ajay Ramdas Jaid
              </h3>

              <p className="text-[#79766d] leading-[1.9] mt-5">
                Mr. Ajay Ramdas Jaid is a tech expert with skills in
                strategic planning, packaging innovation, supply chain
                management, team leadership, client relations, export
                compliance, financial oversight, sustainable packaging,
                quality assurance and market analysis.
              </p>

              <p className="text-[#79766d] leading-[1.9] mt-4">
                He has worked for Bajaj Electricals Ltd (Chakan &
                Ranjangaon), Posco India, Raychem RPG Pvt Ltd, Hyt India
                Pvt Ltd and many more companies in the area of Wooden Box,
                Pallet and Packing materials.
              </p>

              <div className="mt-9 flex items-center gap-3 text-[#c65c32] font-semibold">
                <span className="w-10 h-[2px] bg-[#c65c32]" />
                Building trust through packaging
              </div>

            </Reveal>

          </div>

        </div>
      </section>


      {/* ADDRESS */}
      <section className="bg-[#242521] text-[#f4f0e8] py-24 md:py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">

            <Reveal>

              <span className="text-[#d77b50] text-xs tracking-[0.25em] uppercase font-bold">
                06 / Find Us
              </span>

              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mt-6">
                Visit our
                <br />
                <span className="text-[#d77b50]">facility.</span>
              </h2>

              <div className="w-16 h-[3px] bg-[#c65c32] mt-8" />

              <div className="flex items-start gap-4 mt-9">

                <div className="bg-[#c65c32] p-3 rounded-full">
                  <MapPin size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    RGP Pack Tech Solution
                  </h3>

                  <p className="text-[#d1c8b9] leading-relaxed">
                    Plot no - A-44/1/a-58, Rajmata Jijau Mahila Industrial
                    Premises CHSL, Chakan Industrial Area Phase 2,
                    Wasuli Chakan, Pune - 410501.
                  </p>
                </div>

              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=RGP+Pack+Tech+Solution+Chakan+Pune"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 mt-9 bg-[#c65c32] hover:bg-[#a94927] text-white px-7 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Get Directions
                <ArrowUpRight size={18} />
              </a>

            </Reveal>

            <Reveal delay={0.15}>
              <div className="h-[350px] md:h-[450px] overflow-hidden border border-white/15">

                <iframe
                  title="RGP Pack Tech Solution Location"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15110.28130627342!2d73.76746626288487!3d18.772720002396035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQ2JzE1LjEiTiA3M8KwNDYnMDYuMSJF!5e0!3m2!1sen!2sin!4v1766942650965!5m2!1sen!2sin"
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>
            </Reveal>

          </div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="bg-[#c65c32] text-white py-20 px-6">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          <div>
            <p className="text-white/75 text-xs tracking-[0.25em] uppercase font-semibold">
              Let's Work Together
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">
              Let's build something
              <br className="hidden md:block" />
              that protects.
            </h2>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-4 bg-[#242521] hover:bg-[#393a34] text-white px-8 py-5 rounded-full font-semibold transition-all duration-300"
          >
            Get in Touch
            <ArrowUpRight size={20} />
          </a>

        </div>

      </section>

    </main>
  );
};


/* REVEAL ANIMATION */
function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


/* INFRASTRUCTURE DETAIL */
function InfrastructureItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4">

      <div className="text-[#d77b50] mt-1">
        {icon}
      </div>

      <div>
        <p className="text-[#d77b50] text-xs uppercase tracking-[0.2em] font-bold">
          {label}
        </p>

        <p className="text-[#f4f0e8] mt-2 text-base">
          {value}
        </p>
      </div>

    </div>
  );
}


/* MACHINES CAROUSEL */
function MachineCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((current - 1 + machineImages.length) % machineImages.length);
  };

  const next = () => {
    setCurrent((current + 1) % machineImages.length);
  };

  return (
    <div className="max-w-5xl mx-auto">

      <div className="relative overflow-hidden bg-[#242521]">

        <AnimatePresence mode="wait">

          <motion.img
            key={current}
            src={machineImages[current]}
            alt={`RGP manufacturing machine ${current + 1}`}
            className="w-full h-[260px] md:h-[500px] object-cover"
            initial={{ opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          />

        </AnimatePresence>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8 flex justify-between items-end">

          <div className="text-white">
            <p className="text-xs tracking-[0.2em] uppercase text-[#e7b18e]">
              Manufacturing Infrastructure
            </p>

            <p className="text-xl font-semibold mt-2">
              Machine {String(current + 1).padStart(2, "0")}
              <span className="text-white/60 text-sm ml-2">
                / {String(machineImages.length).padStart(2, "0")}
              </span>
            </p>
          </div>

          <div className="flex gap-2">

            <button
              type="button"
              onClick={prev}
              aria-label="Previous machine image"
              className="w-11 h-11 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-[#c65c32] hover:border-[#c65c32] transition"
            >
              <ChevronLeft size={21} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next machine image"
              className="w-11 h-11 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-[#c65c32] hover:border-[#c65c32] transition"
            >
              <ChevronRight size={21} />
            </button>

          </div>

        </div>

      </div>

      <div className="flex justify-center gap-2 mt-6">

        {machineImages.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show machine image ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === index
                ? "w-10 bg-[#c65c32]"
                : "w-5 bg-[#c9bca9]"
            }`}
          />
        ))}

      </div>

    </div>
  );
}

export default About;
