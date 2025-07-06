// src/pages/Contact.jsx
import React from "react";
import './contact.css';
import { Link } from "react-router-dom";

// gst qms google map
const Contact = () => {
  return (
    <div className="w-full bg-[#f5f5f5] py-16 px-6 md:px-24">
      {/* Header */}
      <h2 className="text-md font-semibold uppercase text-orange-500 mb-2">
        Contact Us
      </h2>
      <h1 className="text-5xl font-extrabold text-gray-900 mb-10">
        Get In Touch
      </h1>

      {/* Main Content: Info + Form */}
      <div className="grid md:grid-cols-2 gap-16">
        {/* Left Section: Info */}
        <div className="space-y-10 text-gray-700 text-lg">
          <p>
            Ready to transform your packaging? Reach out today for customized
            solutions that speak to your brand's essence. Let's collaborate and
            elevate your product presentation. Contact us now and let's start
            crafting your perfect packaging solution together!
          </p>

          {/* Address */}
          <div className="flex gap-4">
            <div className="bg-[#fffaf0] p-3 rounded h-fit">
              <img src="/location-icon.png" alt="Location" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase text-gray-800 mb-2">Address</h3>
              <p>
                Gat No : , Behind Surin Auto Company <br />
                Village : Bhamboli, Chakan <br />
                Tal : Khed, Dist : Pune <br />
                State : Maharashtra <br />
                Pin: 410501. <br />
                INDIA
              </p>

            </div>
          </div>

          {/* Contact */}
          <div className="flex gap-4">
            <div className="bg-[#fffaf0] p-3 rounded h-fit">
              <img src="/wtsp.svg" alt="Phone" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase text-gray-800 mb-2">Contact Details</h3>
              <ul>
                <li className="transition-colors duration-200 hover:text-amber-800 flex items-center w-6 h-6 mb-2">
                  <img src='/mail-icon.png' alt="Location icon " /> <Link to="mailto:rgppacktech@gmail.com" className="hover:underline pl-3">rgppacktech@gmail.com</Link>
                </li>
                <li className="transition-colors duration-200 hover:text-amber-800 flex items-center whitespace-nowrap w-6 h-6">
                  <img src='/call-icon.png' alt="Location icon " /><Link to="tel:7083477803" className="hover:underline pl-3">+91 9881340251</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section: map*/}
        <div className="loc-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.253777910555!2d73.7773357093428!3d18.786840382285522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b444de5039ab%3A0xee3d9503fb63bc7d!2sRGP%20Group!5e0!3m2!1sen!2sin!4v1751800429185!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
      </div>

      {/* Contact Form */}

      <form className="bg-white shadow-md rounded-lg p-8 ">
        {/* Header */}
      <h2 className="text-md font-semibold uppercase text-orange-500 mb-2">
        Feedback Form
      </h2>
        <div className="txt_field">  
          <input
            type="text"
            required
          />
          <label>Name</label>
          
        </div>

        <div className="txt_field">          
          <input
            type="email"
            placeholder=" "
            required
          />
          <label>Email</label>
        </div>

        <div className="txt_field">
          <textarea
            rows="5"
            name="message"
            placeholder=" "
            required

          ></textarea>
          <label>Message</label>
        </div>

        <button
          type="submit"
          className="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
