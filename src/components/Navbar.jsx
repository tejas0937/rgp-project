
import React, { useState, useEffect, useRef } from "react";
import {
  Link,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  Menu,
  X,
  Home,
  Package,
  Users,
  MessageCircle,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Product navigation destinations
  const productLinks = [
    {
      name: "All Products",
      hash: "#product-categories",
    },
    {
      name: "Corrugated Packaging",
      hash: "#corrugated",
    },
    {
      name: "Wooden Packaging",
      hash: "#wooden",
    },
    {
      name: "Protective Accessories",
      hash: "#protective",
    },
    {
      name: "Custom Solutions",
      hash: "#custom",
    },
    {
      name: "Our Recent Work",
      hash: "#recent-work",
    },
  ];

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "About Us",
      path: "/about",
      icon: Users,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: MessageCircle,
    },
  ];

  const closeMenus = () => {
    setMobileOpen(false);
    setProductOpen(false);
  };

  // Navigate to selected product category
  const handleProductClick = (hash) => {
    closeMenus();

    // Handle clicking the same destination again
    if (
      location.pathname === "/products" &&
      location.hash === hash
    ) {
      const targetId = hash.replace("#", "");

      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);

      return;
    }

    navigate(`/products${hash}`);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setProductOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Close menus when route changes
  useEffect(() => {
    closeMenus();
  }, [location.pathname, location.hash]);

  const navLinkClass = ({ isActive }) =>
    `nav-premium-link ${isActive ? "nav-premium-active" : ""}`;

  return (
    <header className="sticky top-0 z-[100] w-full">

      <nav className="nav-premium-container">

        {/* LOGO */}
        <NavLink
          to="/"
          onClick={closeMenus}
          className="nav-brand"
        >
          <img
            src="/rgplogo-black.webp"
            alt="RGP Group Logo"
            className="nav-logo"
          />

          <div className="nav-brand-text">
            <span className="nav-brand-name">
              RGPGROUP.IN
            </span>

            <span className="nav-brand-tagline">
              Our Work is our Identity
            </span>
          </div>
        </NavLink>


        {/* DESKTOP NAVIGATION */}
        <div className="nav-desktop-menu">

          <NavLink to="/" className={navLinkClass}>
            <Home size={19} />
            <span>Home</span>
          </NavLink>


          {/* PRODUCTS DROPDOWN */}
          <div className="nav-dropdown" ref={dropdownRef}>

            <button
              type="button"
              onClick={() => setProductOpen((prev) => !prev)}
              className={`nav-premium-link ${
                location.pathname === "/products"
                  ? "nav-premium-active"
                  : ""
              }`}
              aria-expanded={productOpen}
              aria-haspopup="true"
            >
              <Package size={19} />

              <span>Products</span>

              <motion.span
                animate={{ rotate: productOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown size={17} />
              </motion.span>
            </button>

            <AnimatePresence>
              {productOpen && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 12,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    scale: 0.97,
                  }}
                  transition={{ duration: 0.2 }}
                  className="nav-dropdown-menu"
                >

                  <p className="nav-dropdown-heading">
                    EXPLORE OUR PRODUCTS
                  </p>

                  {productLinks.map((item) => (

                    <button
                      type="button"
                      key={item.name}
                      onClick={() => handleProductClick(item.hash)}
                      className="nav-dropdown-item"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight size={15} />
                    </button>

                  ))}

                </motion.div>

              )}
            </AnimatePresence>

          </div>


          <NavLink to="/about" className={navLinkClass}>
            <Users size={19} />
            <span>About Us</span>
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            <MessageCircle size={19} />
            <span>Contact</span>
          </NavLink>

        </div>


        {/* LET'S TALK BUTTON */}
        <NavLink
          to="/contact"
          onClick={closeMenus}
          className="nav-cta"
        >
          <span>Let's Talk</span>

          <span className="nav-cta-icon">
            <ArrowUpRight size={19} />
          </span>
        </NavLink>


        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait">

            {mobileOpen ? (

              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={26} />
              </motion.span>

            ) : (

              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu size={26} />
              </motion.span>

            )}

          </AnimatePresence>
        </button>

      </nav>


      {/* MOBILE NAVIGATION DRAWER */}
      <AnimatePresence>

        {mobileOpen && (

          <>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              onClick={closeMenus}
              className="nav-mobile-overlay"
            />

            <motion.div
              initial={{
                opacity: 0,
                x: "100%",
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: "100%",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="nav-mobile-drawer"
            >

              {/* MOBILE HEADING */}
              <div className="nav-mobile-heading">

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#c65c32] font-bold">
                    Navigation
                  </p>

                  <h2 className="text-2xl font-extrabold text-[#242521] mt-1">
                    Explore RGP
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={closeMenus}
                  className="nav-mobile-close"
                  aria-label="Close navigation"
                >
                  <X size={22} />
                </button>

              </div>


              {/* MOBILE LINKS */}
              <div className="nav-mobile-links">

                {navItems.map((item) => {

                  const Icon = item.icon;

                  return (

                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={closeMenus}
                      className={navLinkClass}
                    >
                      <Icon size={20} />
                      <span>{item.name}</span>
                      <ArrowUpRight size={17} className="ml-auto" />
                    </NavLink>

                  );

                })}


                {/* MOBILE PRODUCT LINKS */}
                <div className="nav-mobile-product-heading">
                  Our Products
                </div>

                {productLinks.map((item) => (

                  <button
                    type="button"
                    key={item.name}
                    onClick={() => handleProductClick(item.hash)}
                    className="nav-mobile-product"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={16} />
                  </button>

                ))}


                <NavLink
                  to="/contact"
                  onClick={closeMenus}
                  className="nav-mobile-cta"
                >
                  Let's Talk
                  <ArrowUpRight size={19} />
                </NavLink>

              </div>


              {/* MOBILE FOOTER */}
              <div className="nav-mobile-footer">
                RGP Pack Tech Solution
                <span>Chakan MIDC, Pune</span>
              </div>

            </motion.div>

          </>

        )}

      </AnimatePresence>


      {/* NAVBAR STYLES */}
      <style>{`

        .nav-premium-container {
          width: 100%;
          min-height: 94px;
          padding: 12px clamp(16px, 4vw, 64px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          background: rgba(244, 240, 232, 0.97);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(36, 37, 33, 0.15);
          box-shadow: 0 8px 28px rgba(36, 37, 33, 0.07);
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          text-decoration: none;
        }

        .nav-logo {
          height: 66px;
          width: auto;
          object-fit: contain;
        }

        .nav-brand-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .nav-brand-name {
          color: #242521;
          font-size: 21px;
          font-weight: 900;
          letter-spacing: -0.8px;
          line-height: 1.1;
        }

        .nav-brand-tagline {
          color: #77756e;
          font-size: 10px;
          letter-spacing: 0.04em;
        }

        .nav-desktop-menu {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .nav-premium-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 17px;
          border: 1.5px solid rgba(36, 37, 33, 0.2);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.42);
          color: #242521;
          font-size: 15px;
          font-weight: 750;
          white-space: nowrap;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-premium-link:hover {
          color: white;
          background: #242521;
          border-color: #c65c32;
          transform: translateY(-3px);
          box-shadow: 0 9px 22px rgba(36, 37, 33, 0.15);
        }

        .nav-premium-active {
          color: #c65c32;
          border-color: #c65c32;
          background: rgba(198, 92, 50, 0.07);
        }

        .nav-dropdown {
          position: relative;
        }

        .nav-dropdown-menu {
          position: absolute;
          top: calc(100% + 13px);
          left: 0;
          width: 280px;
          padding: 10px;
          border: 1px solid rgba(36, 37, 33, 0.12);
          border-radius: 18px;
          background: #fffdf8;
          box-shadow: 0 20px 50px rgba(36, 37, 33, 0.16);
          z-index: 120;
        }

        .nav-dropdown-heading {
          padding: 10px 13px 12px;
          color: #c65c32;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.16em;
        }

        .nav-dropdown-item {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 12px 13px;
          border-radius: 11px;
          color: #242521;
          font-size: 14px;
          font-weight: 650;
          text-align: left;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .nav-dropdown-item:hover {
          background: #f4f0e8;
          color: #c65c32;
          padding-left: 18px;
        }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          flex-shrink: 0;
          padding: 14px 19px;
          border: 2px solid #242521;
          border-radius: 999px;
          color: white;
          background: #242521;
          font-size: 16px;
          font-weight: 850;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.3s ease;
        }

        .nav-cta:hover {
          background: #c65c32;
          border-color: #c65c32;
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(198, 92, 50, 0.25);
        }

        .nav-cta-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .nav-cta:hover .nav-cta-icon {
          transform: translate(3px, -3px);
        }

        .nav-mobile-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 47px;
          height: 47px;
          border: 1.5px solid rgba(36, 37, 33, 0.25);
          border-radius: 14px;
          color: #242521;
          background: white;
          cursor: pointer;
        }

        .nav-mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 130;
          background: black;
          backdrop-filter: blur(5px);
        }

        .nav-mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 140;
          width: min(88%, 410px);
          overflow-y: auto;
          padding: 26px 22px;
          background: #f4f0e8;
          box-shadow: -15px 0 50px rgba(0,0,0,0.15);
        }

        .nav-mobile-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 22px;
          border-bottom: 1px solid rgba(36,37,33,0.15);
        }

        .nav-mobile-close {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(36,37,33,0.2);
          border-radius: 50%;
          cursor: pointer;
        }

        .nav-mobile-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 25px;
        }

        .nav-mobile-links .nav-premium-link {
          width: 100%;
          justify-content: flex-start;
          padding: 15px;
          border-radius: 13px;
          font-size: 16px;
        }

        .nav-mobile-product-heading {
          margin-top: 17px;
          color: #c65c32;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.17em;
          text-transform: uppercase;
        }

        .nav-mobile-product {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 13px 14px;
          border: 1px solid rgba(36,37,33,0.1);
          border-radius: 11px;
          background: rgba(255,255,255,0.55);
          color: #242521;
          font-size: 14px;
          font-weight: 650;
          text-align: left;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .nav-mobile-product:hover {
          background: #242521;
          color: white;
        }

        .nav-mobile-cta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 14px;
          padding: 16px 18px;
          border-radius: 13px;
          background: #242521;
          color: white;
          font-weight: 850;
          font-size: 17px;
          text-decoration: none;
        }

        .nav-mobile-footer {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-top: 35px;
          padding-top: 20px;
          border-top: 1px solid rgba(36,37,33,0.15);
          color: #242521;
          font-size: 13px;
          font-weight: 800;
        }

        .nav-mobile-footer span {
          color: #77756e;
          font-size: 12px;
          font-weight: 500;
        }

        @media (max-width: 1150px) {
          .nav-desktop-menu {
            gap: 6px;
          }

          .nav-premium-link {
            padding: 12px;
            font-size: 14px;
          }

          .nav-brand-name {
            font-size: 18px;
          }
        }

        @media (max-width: 950px) {
          .nav-premium-container {
            min-height: 80px;
            padding: 9px 17px;
            gap: 12px;
          }

          .nav-desktop-menu {
            display: none;
          }

          .nav-mobile-toggle {
            display: inline-flex;
          }

          .nav-logo {
            height: 55px;
          }

          .nav-brand-name {
            font-size: 18px;
          }

          .nav-cta {
            margin-left: auto;
            padding: 11px 15px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .nav-premium-container {
            min-height: 72px;
            padding: 8px 12px;
          }

          .nav-logo {
            height: 45px;
          }

          .nav-brand {
            gap: 7px;
          }

          .nav-brand-name {
            font-size: 15px;
          }

          .nav-brand-tagline {
            font-size: 8px;
          }

          .nav-cta {
            padding: 10px 12px;
            gap: 6px;
            font-size: 13px;
          }

          .nav-cta-icon svg {
            width: 16px;
          }

          .nav-mobile-toggle {
            width: 40px;
            height: 40px;
          }
        }

        @media (max-width: 360px) {
          .nav-brand-tagline {
            display: none;
          }

          .nav-brand-name {
            font-size: 13px;
          }

          .nav-logo {
            height: 39px;
          }
        }

      `}</style>

    </header>
  );
}

export default Navbar;
