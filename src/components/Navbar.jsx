import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoIosPeople } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef();
  const currentHash = location.hash;

  const handleNav = () => setNav((prev) => !prev);
  const handleProductChange = (value) => {
    if (value) {
      setNav(false);
      navigate(value);
    }
  };
  const toggleProductDropdown = () =>
    setProductDropdownOpen((prev) => !prev);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActiveHash = (hash) => currentHash === hash;

  const productLinks = [
    { name: "All Products", hash: "#allproduct" },
    { name: "Corrugated Packaging", hash: "#corrugated" },
    { name: "Wooden Packaging", hash: "#wooden" },
    { name: "Protective Accessories", hash: "#protective" },
    { name: "Custom Solutions", hash: "#custom" },
    { name: "Our Recent Work", hash: "#our-work" },
  ];

  return (
    <div className="relative z-50">
      {/* Navbar container */}
      <div className="text-black flex justify-between items-center shadow-[0_4px_12px_-4px_rgba(0,0,0,0.55)] navbarmain px-6 py-1">
        {/* Logo & Name */}
        <div className="flex items-center">
          <img
            src="/rgplogo-black.webp"
            alt="RGP Group Logo"
            className="h-16 sm:h-20"
          />
          <h1 className="text-2xl font-bold pl-4">
            RGPGROUP.IN
            <p className="text-xs font-normal hidden sm:block">
              "Our Work is our Identity"
            </p>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="justify-start items-center gap-6 text-lg hidden lg:flex navg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-5 py-2 flex items-center justify-center min-w-[110px] ${
                  isActive ? "text-[#000851] font-bold" : ""
                }`
              }
            >
              <IoMdHome /> Home
            </NavLink>
          </li>

          {/* Product Dropdown */}
          <li ref={dropdownRef} className="relative dropdown-item">
            <div
              onClick={toggleProductDropdown}
              className={`px-5 py-2 min-w-[170px] flex items-center justify-center cursor-pointer ${
                productLinks.some((link) => isActiveHash(link.hash))
                  ? "text-[#000851] font-bold"
                  : ""
              }`}
            >
              <AiFillProduct /> Products ▾
            </div>

            <AnimatePresence>
              {productDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-full left-0 bg-[#ffffffef] rounded-2xl shadow-lg z-50 min-w-[230px]"
                >
                  <ul className="flex flex-col">
                    {productLinks.map((link, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          handleProductChange(`/products${link.hash}`);
                          setProductDropdownOpen(false);
                        }}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                          isActiveHash(link.hash)
                            ? "text-[#000851] font-semibold"
                            : ""
                        }`}
                      >
                        {link.name}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-5 py-2 flex items-center justify-center min-w-[150px] ${
                  isActive ? "text-[#000851] font-bold" : ""
                }`
              }
            >
              <IoIosPeople /> About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-5 py-2 flex items-center justify-center min-w-[150px] ${
                  isActive ? "text-[#000851] font-bold" : ""
                }`
              }
            >
              <LuMessageCircleMore /> Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div
          onClick={handleNav}
          className="block lg:hidden cursor-pointer z-[60]"
        >
          <motion.div
            animate={nav ? "open" : "closed"}
            variants={{
              open: { rotate: 45, y: 7 },
              closed: { rotate: 0, y: 0 },
            }}
            className="w-7 h-[3px] bg-black mb-1"
          />
          <motion.div
            animate={nav ? { opacity: 0 } : { opacity: 1 }}
            className="w-7 h-[3px] bg-black mb-1"
          />
          <motion.div
            animate={nav ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-7 h-[3px] bg-black"
          />
        </div>
      </div>

      {/* Overlay Blur Background */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black backdrop-blur-sm z-40"
            onClick={() => setNav(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed left-0 top-0 w-[80%] h-full bg-gradient-to-b from-[#cdeeff] to-[#ffffff] z-50 shadow-xl"
          >
            <div className="w-full flex items-center p-4 border-b border-gray-300">
              <img
                src="/rgplogo-black.webp"
                alt="RGP Group Logo"
                className="h-16"
              />
              <h1 className="text-xl font-semibold ml-2">
                RGPGROUP.IN
                <p className="text-xs font-normal">
                  "Our Work is our Identity"
                </p>
              </h1>
            </div>

            <ul className="p-5 flex flex-col font-medium gap-3 text-[16px] navl">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setNav(false)}
                  className="flex items-center gap-3 px-4 py-2 rounded hover:bg-[#fce8d2]"
                >
                  <IoMdHome /> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setNav(false)}
                  className="flex items-center gap-3 px-4 py-2 rounded hover:bg-[#fce8d2]"
                >
                  <IoIosPeople /> About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setNav(false)}
                  className="flex items-center gap-3 px-4 py-2 rounded hover:bg-[#fce8d2]"
                >
                  <LuMessageCircleMore /> Contact
                </NavLink>
              </li>

              <li className="mt-4 mb-1 px-4 text-sm font-semibold text-gray-500 tracking-wide uppercase">
                Products
              </li>
              {productLinks.map((link, index) => (
                <li
                  key={index}
                  onClick={() => handleProductChange(`/products${link.hash}`)}
                  className="px-6 py-2 cursor-pointer hover:bg-[#fdf4ea] rounded transition-all"
                >
                  - {link.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inline Styles */}
      <style>{`
  /* Glass Effect for Navbar */
  .navbarmain {
    background: rgba(255, 255, 255, 0.75); /* semi-transparent */
    backdrop-filter: blur(12px); /* glass blur */
    -webkit-backdrop-filter: blur(12px);
   
    border: 1px solid rgba(255, 255, 255, 0.1); /* subtle border */
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    width: 100%;
  }

  /* Desktop menu items */
  .navg li {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(6px);
    border-radius: 12px;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.2s ease, box-shadow 0.3s ease, background 0.3s ease;
  }

  .navg li:hover {
    background: rgba(255, 255, 255, 0.35);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  /* Product Dropdown */
  .dropdown-item > div {
    transition: background 0.3s ease, color 0.3s ease;
  }

  .dropdown-item > div:hover {
    background: rgba(255, 255, 255, 1);
    color: #00000;
  }

  /* Mobile Drawer */
  .navl li {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
    border-radius: 10px;
    transition: background 0.3s ease;
  }

  .navl li:hover {
    background: rgba(255, 255, 255, 0.35);
  }
`}</style>

    </div>
  );
}

export default Navbar;
