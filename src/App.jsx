import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import About from "./components/about";
import Products from "./components/products";
import Contact from "./components/contact";
import SmoothScroll from "./components/smooth-scroll";
import Home from "./components/Home";

const App = () => {
  return (
    <>
    
    <SmoothScroll />
    <div className="main relative">
      <nav className="sticky z-50 top-0">
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App
