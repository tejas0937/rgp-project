
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./DiwaliIntro.css";

export default function DiwaliIntro() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("rgp-diwali-intro");

    if (alreadyShown) return;

    setShowIntro(true);
    sessionStorage.setItem("rgp-diwali-intro", "true");

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="diwali-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="diwali-glow diwali-glow-one" />
          <div className="diwali-glow diwali-glow-two" />

          <div className="diwali-particles">
            {Array.from({ length: 18 }).map((_, index) => (
              <span
                key={index}
                style={{
                  left: `${(index * 37) % 100}%`,
                  top: `${(index * 53) % 100}%`,
                  animationDelay: `${(index % 5) * 0.4}s`,
                }}
              />
            ))}
          </div>

          <div className="diwali-content">
            <motion.div
              className="diwali-diyas"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span>🪔</span>
              <span className="diwali-diya-center">🪔</span>
              <span>🪔</span>
            </motion.div>

            <motion.p
              className="diwali-eyebrow"
              initial={{ opacity: 0, letterSpacing: "8px" }}
              animate={{ opacity: 1, letterSpacing: "4px" }}
              transition={{ duration: 0.9 }}
            >
              RGP PACK TECH SOLUTION
            </motion.p>

            <motion.h1
              className="diwali-heading"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
            >
              Happy <span>Diwali</span>
            </motion.h1>

            <motion.div
              className="diwali-divider"
              initial={{ width: 0 }}
              animate={{ width: "110px" }}
              transition={{ delay: 0.7, duration: 0.7 }}
            />

            <motion.h2
              className="diwali-from"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Warm wishes from <strong>RGP GROUP</strong>
            </motion.h2>

            <motion.p
              className="diwali-quote"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              “May the light of every diya bring happiness,
              prosperity and new beginnings into your life.”
            </motion.p>

            <motion.div
              className="diwali-contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <a href="mailto:rgppacktech@gmail.com">
                rgppacktech@gmail.com
              </a>

              <span className="diwali-contact-dot">✦</span>

              <a
                href="https://www.rgpgroup.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.rgpgroup.in
              </a>
            </motion.div>

            <motion.button
              className="diwali-skip"
              onClick={() => setShowIntro(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              ENTER WEBSITE <span>↗</span>
            </motion.button>
          </div>

          <div className="diwali-bottom-line">
            <span>CELEBRATING LIGHT • SPREADING HAPPINESS</span>
            <span>RGP GROUP ©</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
