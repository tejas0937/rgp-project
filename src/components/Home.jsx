import ourwork from "../data/ourwork.json";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Package,
  Layers3,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "./hero";
import Contact from "./contact";

const solutions = [
  {
    number: "01",
    title: "Corrugated Packaging",
    subtitle: "Strength in every layer.",
    image: "/Products/Corrugated1.jpg",
    description:
      "Engineered corrugated packaging for dependable storage, handling and transportation.",
  },
  {
    number: "02",
    title: "Wooden Packaging",
    subtitle: "Built for the journey.",
    image: "/Products/wooden-plywood boxes.jpg",
    description:
      "Durable wooden boxes and pallets for heavy-duty and export packaging requirements.",
  },
  {
    number: "03",
    title: "Protective Packaging",
    subtitle: "Protection without compromise.",
    image: "/Products/Protected1.jpg",
    description:
      "Reliable protective materials and cushioning for sensitive industrial products.",
  },
];

const capabilities = [
  {
    icon: Package,
    title: "Custom Engineering",
    text: "Packaging solutions designed around your product dimensions and requirements.",
  },
  {
    icon: Layers3,
    title: "Complete Solutions",
    text: "Corrugated and wooden packaging with protective accessories under one roof.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focus",
    text: "A consistent focus on material quality, precision and reliable packaging.",
  },
  {
    icon: Truck,
    title: "Export Readiness",
    text: "Packaging solutions developed for industrial movement and dispatch.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const SectionReveal = ({ children, className = "" }) => (
  <motion.div
    variants={reveal}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    className={className}
  >
    {children}
  </motion.div>
);

const Home = () => {
  return (
    <main className="overflow-hidden">

      {/* 01 HERO */}
      <Hero />
{/* Infrastructure Video */}
<section className="relative w-full bg-[#242521] py-16 md:py-24 overflow-hidden">

  <div className="max-w-7xl mx-auto px-5 md:px-10 mb-10 text-center">

    <p className="text-[#d8784e] uppercase tracking-[0.3em] text-sm font-bold mb-4">
      Inside RGP Group
    </p>

    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#f4f0e8]">
      Built for Protection.
      <span className="block text-[#d8784e]">
        Designed for Performance.
      </span>
    </h2>

    <p className="text-white/65 mt-5 text-base md:text-lg max-w-2xl mx-auto">
      Explore our manufacturing infrastructure and see how
      RGP delivers reliable packaging solutions.
    </p>

  </div>

  <div className="w-full px-5 md:px-10 lg:px-16">

    <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 shadow-2xl">

      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/DuR1SviAjzA?autoplay=1&mute=1&loop=1&playlist=DuR1SviAjzA&playsinline=1&rel=0"
        title="RGP Group Manufacturing Infrastructure"
        allow="autoplay; encrypted-media; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

    </div>

  </div>

  <div className="text-center mt-8">
    <span className="text-xs md:text-sm text-white/40 tracking-[0.2em] uppercase">
      RGP Pack Tech Solution | Chakan MIDC Pune
    </span>
  </div>

</section>
      {/* 02 BRAND INTRODUCTION */}
      <section className="bg-[#f4f0e8] py-28 md:py-36">
        <div className="rgp-container grid lg:grid-cols-12 gap-12 items-end">

          <div className="lg:col-span-7">
            <SectionReveal>
              <p className="section-label">The RGP difference</p>

              <h2 className="display-font text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.08] tracking-[-.06em] mt-8">
                Protection is not
                <br />
                just a box.
                <br />
                <span className="orange-text">
                  It's a promise.
                </span>
              </h2>
            </SectionReveal>
          </div>

          <div className="lg:col-span-5 pb-3">
            <SectionReveal>
              <p className="text-[#79766d] text-lg leading-relaxed">
                At RGP Pack Tech Solution, we believe every product
                deserves packaging that works as hard as the business
                behind it. We bring corrugated, wooden and protective
                packaging solutions together to deliver dependable
                industrial packaging.
              </p>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-4 border-b border-[#c65c32] pb-3 font-semibold hover:text-[#c65c32] transition"
              >
                Discover our story
                <ArrowUpRight size={19} />
              </Link>
            </SectionReveal>
          </div>

        </div>
      </section>

      {/* 03 SOLUTIONS */}
      <section id="solutions" className="bg-[#eae4d9] py-28">
        <div className="rgp-container">

          <SectionReveal className="flex flex-wrap justify-between items-end gap-8 mb-16">
            <div>
              <p className="section-label">What we make</p>
              <h2 className="display-font mt-6 text-4xl md:text-6xl font-semibold tracking-[-.06em]">
                Designed to protect.
                <br />
                <span className="text-[#c65c32]">Built to perform.</span>
              </h2>
            </div>

            <Link
              to="/products"
              className="flex items-center gap-3 text-sm font-bold border-b border-[#242521]/30 pb-3 hover:text-[#c65c32] hover:border-[#c65c32] transition"
            >
              View all solutions
              <ArrowUpRight size={18} />
            </Link>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((item, index) => (
              <SectionReveal key={item.number}>
                <Link
                  to="/products"
                  className="group block"
                >
                  <div className="relative h-[390px] sm:h-[470px] overflow-hidden rounded-[3px] bg-[#d4c6b0]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                    <span className="absolute top-5 left-5 text-xs text-white/80 tracking-widest">
                      / {item.number}
                    </span>

                    <div className="absolute bottom-7 left-7 right-7 text-white">
                      <p className="text-xs uppercase tracking-widest text-white/70 mb-3">
                        {item.subtitle}
                      </p>

                      <div className="flex items-end justify-between gap-3">
                        <h3 className="display-font text-2xl md:text-3xl font-semibold">
                          {item.title}
                        </h3>

                        <span className="rounded-full border border-white/60 p-3 group-hover:bg-[#c65c32] group-hover:border-[#c65c32] transition-all">
                          <ArrowUpRight size={18} />
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 text-sm text-[#79766d] leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              </SectionReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 04 FACTORY FEATURE */}
      <section className="bg-[#242521] text-white py-28 md:py-36">
        <div className="rgp-container">

          <SectionReveal>
            <p className="section-label">Behind the production</p>

            <div className="grid lg:grid-cols-2 gap-12 mt-10 items-center">

              <div>
                <h2 className="display-font text-4xl md:text-6xl font-semibold tracking-[-.06em] leading-[1.08]">
                  Ideas take shape.
                  <br />
                  <span className="text-[#d8784e]">
                    Precision makes
                    <br />
                    them stronger.
                  </span>
                </h2>

                <p className="mt-8 max-w-lg text-white/60 text-lg leading-relaxed">
                  Our manufacturing infrastructure combines
                  production expertise and modern equipment
                  to create packaging solutions suited to
                  demanding industrial applications.
                </p>

                <Link
                  to="/about"
                  className="mt-9 inline-flex items-center gap-3 rounded-full bg-black text-[#242521] px-7 py-4 font-semibold hover:bg-[#d8784e] hover:text-white transition"
                >
                  Explore our infrastructure
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="relative">
                <img
                  src="/bg/bg-m4.webp"
                  alt="RGP factory production machinery"
                  loading="lazy"
                  className="w-full h-[380px] md:h-[540px] object-cover rounded-sm"
                />

                <div className="absolute -bottom-7 -left-5 md:-left-8 bg-[#c65c32] p-6 md:p-9 max-w-[250px]">
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    Our foundation
                  </p>
                  <h3 className="display-font text-3xl font-bold mt-3">
                    Since 2016
                  </h3>
                  <p className="text-sm text-white/80 mt-2">
                    Building packaging solutions with purpose.
                  </p>
                </div>
              </div>

            </div>
          </SectionReveal>

        </div>
      </section>

      {/* 05 CAPABILITIES */}
      <section className="bg-[#f4f0e8] py-28">
        <div className="rgp-container">

          <SectionReveal>
            <p className="section-label">Our capabilities</p>
            <h2 className="display-font text-4xl md:text-6xl tracking-[-.06em] font-semibold mt-7 max-w-3xl">
              Everything your product needs.
              <span className="orange-text"> Nothing it doesn't.</span>
            </h2>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-16 border-t border-[#d9d3c8]">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <SectionReveal key={item.title}>
                  <div className="border-b lg:border-b-0 lg:border-r border-[#d9d3c8] p-7 md:p-8 min-h-[265px] hover:bg-white/60 transition-colors">
                    <div className="text-[#c65c32] mb-10">
                      <Icon size={30} strokeWidth={1.5} />
                    </div>

                    <p className="text-xs tracking-widest text-[#a19b8e]">
                      0{index + 1}
                    </p>

                    <h3 className="display-font text-xl font-bold mt-3">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-[#79766d]">
                      {item.text}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 06 SELECTED WORK */}
      
<section
  id="selected-work"
  className="bg-[#f4f0e8] py-24 md:py-32 overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-5 md:px-10">

    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">

      <div>
        <p className="text-[#c65c32] font-bold tracking-[0.25em] uppercase text-sm mb-4">
          Our Portfolio
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold text-[#242521]">
          Selected Work<span className="text-[#c65c32]">.</span>
        </h2>

        <p className="text-[#242521]/65 mt-5 max-w-xl text-base md:text-lg">
          A showcase of our packaging solutions created for
          industrial manufacturers and export businesses.
        </p>
      </div>

      <div className="text-sm font-semibold text-[#242521]/50">
        150+ PROJECTS
      </div>

    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

      {ourwork.slice(0, 6).map((work, index) => (

        <motion.article
          key={`${work.imgsrc}-${index}`}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
          className="group bg-white rounded-2xl overflow-hidden border border-[#242521]/10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
        >

          <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e1d6]">

            <img
              src={work.imgsrc}
              alt={work.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <span className="absolute top-4 left-4 bg-[#f4f0e8] text-[#242521] text-xs font-bold px-4 py-2 rounded-full">
              PROJECT {String(index + 1).padStart(2, "0")}
            </span>

          </div>

          <div className="p-6">

            <div className="flex justify-between items-start gap-4">

              <div>

                <h3 className="text-xl font-bold text-[#242521] leading-snug">
                  {work.title.trim()}
                </h3>

                {work.desc && work.desc !== "-" && work.desc !== "NA" && (
                  <div className="mt-4">

                    <p className="text-xs uppercase tracking-[0.16em] font-bold text-[#c65c32] mb-1">
                      Delivered for
                    </p>

                    <p className="text-sm text-[#242521]/65 leading-relaxed">
                      {work.desc}
                    </p>

                  </div>
                )}

              </div>

              <div className="shrink-0 w-10 h-10 rounded-full border border-[#242521]/20 flex items-center justify-center group-hover:bg-[#c65c32] group-hover:text-white group-hover:border-[#c65c32] transition-all duration-300">
                <ArrowUpRight size={19} />
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-[#242521]/10 flex justify-between items-center">

              <span className="text-xs text-[#242521]/45 font-semibold uppercase tracking-wider">
                RGP Pack Tech Solution
              </span>

              <span className="text-xs font-bold text-[#c65c32]">
                Packaging Project
              </span>

            </div>

          </div>

        </motion.article>

      ))}

    </div>

    <div className="flex justify-center mt-14">
      <Link
        to="/products#recent-work"
        className="group inline-flex items-center gap-3 rounded-full bg-[#f4b79b] text-white px-8 py-4 font-semibold hover:bg-[#c65c32] transition-all duration-300 hover:-translate-y-1"
      >
        View All Projects
        <ArrowUpRight
          size={19}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </Link>
    </div>

  </div>
</section>

      {/* 07 COMPANY STORY */}
      <section className="bg-[#f4f0e8] py-28">
        <div className="rgp-container grid md:grid-cols-2 gap-14 items-center">

          <SectionReveal>
            <div className="relative">
              <img
                src="/bg/director.webp"
                alt="RGP leadership"
                loading="lazy"
                className="w-full h-[450px] md:h-[770px] object-cover object-top"
              />

              <span className="absolute bottom-5 left-5 bg-[#f4f0e8] text-[#242521] px-5 py-3 text-xs font-bold tracking-widest uppercase">
                Leadership · RGP Group
              </span>
            </div>
          </SectionReveal>

          <SectionReveal>
            <p className="section-label">Our journey</p>

            <h2 className="display-font text-4xl md:text-6xl tracking-[-.06em] font-semibold leading-[1.08] mt-7">
              Built on experience.
              <br />
              <span className="orange-text">Driven by trust.</span>
            </h2>

            <p className="text-[#79766d] leading-relaxed text-lg mt-8">
              Founded in 2016 by Mr. Ajay Ramdas Jaid,
              RGP Pack Tech Solution focuses on delivering
              dependable industrial packaging solutions
              from Chakan MIDC, Pune.
            </p>

            <p className="text-[#79766d] leading-relaxed mt-5">
              Our commitment is simple: understand the
              product, engineer its protection and deliver
              packaging that supports our customers'
              operations.
            </p>

           <Link
  to="/about"
  className="inline-flex relative z-20 items-center gap-3 mt-9 bg-[#ecb27f] text-white px-7 py-4 rounded-full font-bold hover:bg-[#c65c32] transition-all duration-300"
>
  More about RGP
  <ArrowRight size={18} />
</Link>
          </SectionReveal>

        </div>
      </section>

      {/* 08 CTA */}
      <section className="bg-[#c65c32] text-white py-28 md:py-36">
        <div className="rgp-container">
          <SectionReveal>
            <p className="uppercase text-xs font-bold tracking-[.2em] text-white/70">
              Have a packaging requirement?
            </p>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-8">
              <h2 className="display-font text-5xl md:text-7xl lg:text-8xl leading-[.98] tracking-[-.07em] font-semibold max-w-4xl">
                Let's build
                <br />
                something
                <br />
                that protects.
              </h2>

              <Link
                to="/contact"
                className="group flex items-center gap-8 bg-[#242521] rounded-full py-5 px-7 hover:bg-white hover:text-[#242521] transition-colors whitespace-nowrap"
              >
                Start an enquiry
                <span className="bg-white/15 rounded-full p-3 group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={21} />
                </span>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 09 CONTACT */}
      <Contact />

   

    </main>
  );
};

export default Home;
