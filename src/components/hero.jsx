
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  ShieldCheck,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="rgp-hero relative overflow-hidden">

      {/* Background */}
      <div className="hero-grid" />
      <div className="hero-glow" />

      <div className="rgp-container relative min-h-[760px] lg:min-h-[120px] grid lg:grid-cols-2 items-center gap-8">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          />

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="display-font text-[clamp(3.5rem,6.5vw,6.8rem)] leading-[.99] tracking-[-.075em] font-semibold text-[#242521]"
          >
            Packaging
            <br />
            with <span className="text-[#c65c32]">purpose.</span>
            <br />
            Built to protect.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#79766d] text-base md:text-lg leading-relaxed max-w-lg mt-8"
          >
            Innovative corrugated and wooden packaging
            solutions engineered to protect products
            and power businesses forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-9"
          >
            <Link to="/products" className="hero-primary-btn">
              Explore Solutions
              <span>
                <ArrowUpRight size={19} />
              </span>
            </Link>

            <Link to="/contact" className="hero-secondary-btn">
              Get in touch
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-3 mt-14 text-[#79766d]"
          >
            <ShieldCheck size={19} className="text-[#c65c32]" />
            <span className="text-xs tracking-wide">
              Industrial packaging. Engineered with care.
            </span>
          </motion.div>

        </div>

        {/* RIGHT WOODEN INDUSTRIAL CRATE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="hero-visual relative flex items-center justify-center"
        >

          {/* Decorative circles */}
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

          <div className="box-caption absolute top-5 right-0">
            <span>RGP / 001</span>
            <p>ENGINEERED PROTECTION</p>
          </div>

          {/* Original floating animation */}
          <motion.div
            className="floating-box-scene industrial-box-scale"
            animate={{
              y: [0, -18, 0],
              rotateZ: [-2, 1, -2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="box-3d wooden-crate">

              {/* TOP WOODEN FACE */}
              <div className="box-face box-top crate-top">

                <div className="crate-top-planks" />
                <div className="crate-top-seam" />

                <div className="crate-metal-edge crate-metal-top-left" />
                <div className="crate-metal-edge crate-metal-top-right" />

                <div className="crate-brand-top">
                  RGP GROUP
                  <small>INDUSTRIAL EXPORT PACKAGING</small>
                </div>

              </div>

              {/* FRONT WOODEN FACE */}
              <div className="box-face box-front crate-front">

                <div className="crate-front-planks" />

                {/* Reinforced wooden frame */}
                <div className="crate-frame crate-frame-left" />
                <div className="crate-frame crate-frame-right" />
                <div className="crate-frame crate-frame-top" />
                <div className="crate-frame crate-frame-bottom" />

                {/* Metal corner protection */}
                <div className="crate-corner crate-corner-left" />
                <div className="crate-corner crate-corner-right" />

                {/* RGP branding */}
                <div className="crate-main-brand">
                  <Package size={54} strokeWidth={1.2} />
                  <span>RGP</span>
                  <small>PACK TECH SOLUTION</small>

                  <div className="crate-brand-line" />

                  <p>BUILT TO PROTECT</p>
                </div>

                {/* Export shipping label */}
                <div className="crate-shipping-label">
                  <strong>EXPORT CARGO</strong>
                  <span>RGP / 2016</span>

                  <div className="crate-barcode">
                    || ||| || |||| ||| || ||
                  </div>

                  <small>HANDLE WITH CARE</small>
                </div>

                {/* Handling symbols */}
                <div className="crate-handling">
                  <span>↑ ↑</span>
                  <span>KEEP DRY</span>
                  <span>FRAGILE</span>
                </div>

                <div className="box-corrugation" />

              </div>

              {/* RIGHT WOODEN SIDE */}
              <div className="box-face box-side crate-side">

                <div className="crate-side-planks" />

                <div className="crate-side-frame" />

                <div className="crate-side-brand">
                  RGP
                  <small>PACKAGING</small>
                </div>

                <div className="crate-side-stamp">
                  <span>EXPORT QUALITY</span>
                  <span>EST. 2016</span>
                </div>

                <div className="crate-side-arrows">
                  ↑ ↑
                </div>

                <div className="side-lines" />

              </div>

            </div>

          </motion.div>

          {/* Original shadow animation */}
          <motion.div
            className="box-shadow"
            animate={{
              scaleX: [1, 0.86, 1],
              opacity: [0.22, 0.12, 0.22],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating information tags */}
          <motion.div
            className="hero-float-tag hero-tag-one"
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <Package size={18} />
            <span>Custom Packaging</span>
          </motion.div>

          <motion.div
            className="hero-float-tag hero-tag-two"
            animate={{ y: [0, 9, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          >
            <ShieldCheck size={18} />
            <span>Built for Protection</span>
          </motion.div>

        </motion.div>

      </div>

      {/* BOTTOM STRIP */}
      <div className="hero-bottom-strip">
        <div className="rgp-container flex justify-between items-center gap-5 flex-wrap py-5">

          <span>01 / INDUSTRIAL PACKAGING</span>

          <span>CORRUGATED · WOODEN · PROTECTIVE</span>

          <a href="#solutions" className="flex items-center gap-2">
            DISCOVER MORE
            <ArrowDownRight size={16} />
          </a>

        </div>
      </div>

    </section>
  );
};

export default Hero;
