
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import "./SiteIntro.css";

export default function SiteIntro() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("rgp-site-intro");

    if (alreadyShown) return;

    setShowIntro(true);
    sessionStorage.setItem("rgp-site-intro", "true");

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="site-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* Background decorations */}
          <div className="site-intro-grid" />
          <div className="site-intro-glow" />

          <div className="site-intro-content">

            {/* Brand */}
            <motion.div
              className="site-intro-brand"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/rgplogo-black.webp"
                alt="RGP Group Logo"
                className="site-intro-logo"
              />

              <span>PACK TECH SOLUTION</span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              className="site-intro-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
            >
              <p className="site-intro-eyebrow">
                ENGINEERING PROTECTION SINCE 2016
              </p>

              <h1>
                WELCOME TO
                <span>RGP GROUP.</span>
              </h1>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="site-intro-divider"
              initial={{ width: 0 }}
              animate={{ width: "90px" }}
              transition={{ delay: 0.7, duration: 0.7 }}
            />

            {/* Tagline */}
            <motion.p
              className="site-intro-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              Strong. Reliable. Sustainable.
              <br />
              <strong>Innovative & Trusted Packaging Solutions.</strong>
            </motion.p>

            {/* Company details */}
            <motion.div
              className="site-intro-details"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              <span>INDUSTRIAL PACKAGING</span>
              <span className="site-intro-dot">✦</span>
              <span>CORRUGATED & WOODEN SOLUTIONS</span>
            </motion.div>

            {/* Enter button */}
            <motion.button
              className="site-intro-button"
              onClick={() => setShowIntro(false)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              EXPLORE WEBSITE
              <span>
                <ArrowUpRight size={17} />
              </span>
            </motion.button>

            {/* Contact */}
            <motion.div
              className="site-intro-contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.7 }}
            >
              <a href="mailto:rgppacktech@gmail.com">
                rgppacktech@gmail.com
              </a>

              <span> | </span>

              <a
                href="https://www.rgpgroup.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.rgpgroup.in
              </a>
            </motion.div>
          </div>

          {/* Bottom information */}
          <div className="site-intro-footer">
            <span>PACKAGING THAT PROTECTS WHAT MATTERS.</span>
            <span>RGP GROUP ©</span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
