// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-[#f5f5f5] py-16 px-6 md:px-24">
      {/* Header */}
      <h2 className="text-sm font-semibold uppercase text-gray-800 mb-2">
        Contact Us
      </h2>
      <h1 className="text-5xl font-extrabold text-gray-900 mb-10">
        Get In Touch
      </h1>

      {/* Main Content: Info + Form */}
      <div className="grid md:grid-cols-2 gap-12">
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
                - Gat no.227, Bhamboli Village,<br />
                Chakan MIDC phase-2, Pune-410501
              </p>
              <p className="mt-2">
                - Gat no.155, Koregaon Khurd,<br />
                Chakan, Taluka-Khed, Pune-410501
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex gap-4">
            <div className="bg-[#fffaf0] p-3 rounded h-fit">
              <img src="/call-icon.png" alt="Phone" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase text-gray-800 mb-2">Contact Details</h3>
              <p>
                <a
                  href="mailto:rgpunit2@gmail.com"
                  className="text-blue-600 underline"
                >
                  rgpunit2@gmail.com
                </a>
              </p>
              <p className="text-xl font-bold mt-1 text-gray-900">+91 7066 727 272</p>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <form className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
