import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
        <div className='footer flex '>
            <div className="box-1 w-1/3 relative ">
                <div className="logo flex-col items-center">
                    <img src="./rgplogo-black.png" alt="RGP company logo featuring stylized letters RGP in blue and green, set against Link white background, conveying Link professional and modern tone" />
                    <h1 className='info text-5xl font-bold max-md:text-3xl'>RGPGROUP.IN</h1>
                </div>
                <h1 className='quote text-xl text-left font-medium '>"Our Work is our Identity." </h1>
                <div className="copyright">
                    <h2>AS/NZS ISO 9001:2015</h2>
                    <h1 >&copy; {currentYear} RGPGROUP.IN | All rights reserved.</h1>
                </div>
            </div>
            <div className="box-2 w-1/3">
                <h2 className="font-bold text-3xl pb-8">Get in touch</h2>
                <ul className="space-y-4">
                    <li className="transition-colors duration-200 hover:text-amber-800 flex ">
                        <img src='/location-icon.png' alt="Location icon" className='img-loc' /><p className='pl-3'>RGP Group , Behind Surin Auto Company, Village Bhamboli, Chakan Tal - Khed, Pune - 410505,Maharashtra, India</p>
                    </li>
                    <li className="transition-colors duration-200 hover:text-amber-800 flex items-center">
                        <img src='/mail-icon.png' alt="Location icon " /> <Link to="mailto:rgppacktech@gmail.com" className="hover:underline pl-3">rgppacktech@gmail.com</Link>
                    </li>
                    <li className="transition-colors duration-200 hover:text-amber-800 flex items-center">
                        <img src='/call-icon.png' alt="Location icon " /><Link to="tel:7083477803" className="hover:underline pl-3">9881340251 | 7083477803 </Link>
                    </li>
                </ul>
            </div>
            <div className="box-3 w-1/3  relative">
                <h2 className="font-bold text-3xl pb-5 ">Links</h2>
                <ul className="space-y-1">
                    <li><Link to="/" className="hover:underline ">Home</Link></li>
                    <li><Link to="/products" className="hover:underline">Products</Link></li>
                    <li><Link to="/about" className="hover:underline">About us</Link></li>
                    <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                </ul>
                <div className="wtsp">
                    <Link to="https://wa.me/917083477803" target="_blank" rel="noopener noreferrer" className="flex items-center w-60 bg-green-500 rounded-[50px] text-white hover:bg-green-800 transition-colors duration-500" >
                        <img src="/wtsp.svg" alt="whatsapp logo" />
                        <h1>Chat with us on WhatsApp</h1>
                    </Link>
                </div>
            </div>
        </div>
        </footer>)
}

export default Footer