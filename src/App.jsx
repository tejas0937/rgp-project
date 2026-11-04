
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import About from "./components/about";
import Products from "./components/products";
import Contact from "./components/contact";
import Home from "./components/Home";
import Error from "./components/error";
import ScrollToTop from "./components/ScrollToTop";
import FloatingActions from "./components/FloatingActions";
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </motion.div>
        <FloatingActions />
    </AnimatePresence>
    
  );
}

const App = () => (
  <>
    <ScrollToTop />

    <div className="main relative">
      <Navbar />

      <AnimatedRoutes />

      <Footer />
    </div>
  </>
);

export default App;
