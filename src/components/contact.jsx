import React, { useState } from "react";
import './contact.css';
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false); // popup state

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_yzd803e',
      'template_71jtals',
      e.target,
      '2gYroeIOoZxiFadt8'
    ).then((res) => {
      console.log('Email sent successfully!', res.text);
      setShowSuccess(true);     
      e.target.reset();        

     
      setTimeout(() => setShowSuccess(false), 5000);
    }).catch((error) => {
      console.error('Email sending failed:', error.text);
      alert("Something went wrong. Please try again.");
    });
  };

  return (
    <div className="w-full bg-[#d4f6ff] py-20 px-6 md:px-24 relative">
      
      {showSuccess && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-10 py-5 rounded-lg flex items-center gap-2 shadow-lg z-50 animate-fade-in-out text-center">
          <img src="/check.png" alt="Success checkmark icon" className="w-5 h-5" />
          Message sent successfully!
        </div>
      )}

      
      <h2 className="text-md font-semibold uppercase text-blue-500 mb-2">
        Contact Us
      </h2>
      <h1 className="text-5xl font-extrabold text-gray-900 mb-10">
        Get In Touch
      </h1>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-10 text-gray-700 text-lg">
          <p>Ready to transform your packaging?... Contact us now...</p>

         
          <div className="flex gap-4">
            <div className="bg-[#fffaf0] p-3 rounded h-fit">
              <img src="/location-icon.png" alt="Location pin icon" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase text-gray-800 mb-2">Address</h3>
              <p>
                Gat No : , Behind Surin Auto Company <br />
                Village : Bhamboli, Chakan <br />
                Tal : Khed, Dist : Pune <br />
                Maharashtra, 410501, INDIA
              </p>
            </div>
          </div>

         
          <div className="flex gap-4">
            <div className="bg-[#ffffff] p-3 rounded h-fit">
              <img src="/wtsp.svg" alt="WhatsApp icon" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase text-gray-800 mb-2">Contact Details</h3>
              <ul>
                <li className="hover:text-blue-800 flex items-center w-6 h-6 mb-2">
                  <img src='/mail-icon.png' alt="Email icon" />
                  <Link to="mailto:rgppacktech@gmail.com" className="hover:underline pl-3">rgppacktech@gmail.com</Link>
                </li>
                <li className="hover:text-blue-800 flex items-center w-6 h-6  whitespace-nowrap">
                  <img src='/call-icon.png' alt="Phone call icon" />
                  <Link to="tel:9881340251" className="hover:underline pl-3 ">9881340251</Link>
                </li>
              </ul>
          
              <div className="whtsp">
                <Link to="https://wa.me/917083477803" target="_blank" rel="noopener noreferrer" className="flex items-center bg-green-500 rounded-[50px] text-white hover:bg-green-800 transition-colors duration-500" >
                  <img src="/wtsp.svg" alt="WhatsApp logo" />
                  <h1>Chat with us on WhatsApp</h1>
                  </Link>
              </div>
            </div>
          </div>
        </div>

     
        <div className="loc-map absolute">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.253777910555!2d73.7773357093428!3d18.786840382285522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b444de5039ab%3A0xee3d9503fb63bc7d!2sRGP%20Group!5e0!3m2!1sen!2sin!4v1751800429185!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    
      <form className="bg-white shadow-md rounded-lg p-8 mt-12" onSubmit={sendEmail}>
        <h2 className="text-lg font-semibold uppercase text-blue-500 mb-2 mt-2">
          Enquiry Form
        </h2>

        <div className="txt_field">
          <input type="text" name="name" required />
          <label>Name</label>
        </div>

        <div className="txt_field">
          <input type="email" name="email_id" required />
          <label>Email</label>
        </div>

        <div className="txt_field">
          <textarea rows="3" name="message" placeholder=" " required></textarea>
          <label>Message</label>
        </div>

        <button type="submit" className="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

