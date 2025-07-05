import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import About from "./components/about";
import Products from "./components/products";
import Contact from "./components/contact";
import Hero from "./components/hero";

const App = () => {
  return (
    <>
    
      <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    
    <div className="main w-full">
      <Navbar />
      <Hero />
      <div className="head w-full h-screen"></div>
      <Footer />
    </div>
    
    </>
  )
}

export default App
