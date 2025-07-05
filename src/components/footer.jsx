import React from 'react'
import './footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='footer flex '>
            <div className="box-1 w-1/3 relative">
                <div className="logo flex-col items-center">
                    <img src="./rgplogo-black.png" alt="RGP company logo featuring stylized letters RGP in blue and green, set against a white background, conveying a professional and modern tone" />
                    <h1 className='info text-5xl font-bold'>RGPGROUP.IN</h1>
                </div>
                <h1 className='quote text-2xl text-left font-medium '>"Our Work is our Identity." </h1>
                <div className="copyright">
                    <h2>AS/NZS ISO 9001:2015</h2>
                    <h1>&copy; {currentYear} RGPGROUP.IN | All rights reserved.</h1>
                </div>
            </div>
            <div className="box-2 w-1/3">
                <h2 className="font-bold">Get in touch</h2>
                <ul className="space-y-2">
                    <li className="transition-colors duration-200 hover:text-blue-600">
                        <span className="font-semibold">Address:</span> RGP Group , Behind Surin Auto Company, Village Bhamboli, Chakan Tal - Khed, Pune - 410505,Maharashtra, India
                    </li>
                    <li className="transition-colors duration-200 hover:text-blue-600">
                        <span className="font-semibold">Email:</span> <a href="mailto:rgppacktech@gmail.com" className="hover:underline">rgppacktech@gmail.com</a>
                    </li>
                    <li className="transition-colors duration-200 hover:text-blue-600">
                        <span className="font-semibold">Contact No:</span> <a href="tel:7083477803" className="hover:underline">7083477803 / 9226771188</a>
                    </li>
                </ul>
            </div>
            <div className="box-3 w-1/3 ml-7 relative">
                <h2 className="font-bold ml-2">Links</h2>
                <ul className="space-y-1">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/products" className="hover:underline">Products</a></li>
                    <li><a href="/about" className="hover:underline">About us</a></li>
                    <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                </ul>
                <div className="wtsp">
                    <a href="https://wa.me/917083477803" target="_blank" rel="noopener noreferrer" className="flex items-center w-70 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200" >
                        <img src="/wtsp.svg" alt="whatsapp logo" />
                        <h1>Chat with us on WhatsApp</h1>
                    </a>
                </div>
            </div>
        </div>)
}

export default Footer