
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-[#f4f0e8]  ">
      <div className="rgp-container">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="section-label">
              Start a conversation
            </p>

            <h2 className="display-font text-5xl md:text-7xl font-semibold tracking-[-.07em] leading-[1.05] mt-8 text-[#242521]">
              Let's talk
              <br />
              <span className="text-[#c65c32]">
                packaging.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-[#79766d] text-lg leading-relaxed">
              Have a packaging requirement or a custom
              project in mind? Connect with our team.
              We would be happy to understand your
              requirements and help you find the right solution.
            </p>

            {/* Email */}
            <a
              href="mailto:rgppacktech@gmail.com"
              className="contact-action-card mt-10"
            >
              <span className="contact-action-icon">
                <Mail size={22} />
              </span>

              <span className="flex-1 min-w-0">
                <small>Email us</small>
                <strong className="break-all">
                  rgppacktech@gmail.com
                </strong>
              </span>

              <ArrowUpRight size={21} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917083477803?text=Hello%20RGP%20Group%2C%20I%20am%20interested%20in%20your%20packaging%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp mt-4"
            >
              <MessageCircle size={21} />
              Chat with us on WhatsApp
              <ArrowUpRight size={19} />
            </a>

            {/* Phone */}
            <a
              href="tel:+917083477803"
              className="flex items-center gap-4 mt-8 text-[#79766d] hover:text-[#c65c32] transition"
            >
              <Phone size={19} />
              +91 7083477803
            </a>

          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">

            <div className="relative overflow-hidden rounded-sm">
              <img
                src="/plant/bg-m1.webp"
                alt="RGP manufacturing infrastructure"
                className="w-full h-[350px] md:h-[480px] object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-xs uppercase tracking-[.2em] text-white/70">
                  Visit RGP Group
                </p>

                <h3 className="display-font text-3xl font-semibold mt-3">
                  Chakan MIDC, Pune.
                </h3>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=RGP+Pack+Tech+Solution+Chakan+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-sm font-bold border-b border-white pb-2 hover:text-[#d8784e] transition"
                >
                  Get directions
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>

            <div className="bg-[#eae4d9] p-7 mt-4 flex gap-4 items-start">
              <MapPin className="text-[#c65c32] shrink-0" size={23} />

              <div>
                <h4 className="font-bold text-[#242521]">
                  Our Location
                </h4>

                <p className="text-sm text-[#79766d] leading-relaxed mt-2">
                  Plot No. A-44/1/A-58, Rajmata Jijau Mahila
                  Industrial Premises CHSL, Chakan Industrial
                  Area Phase II, Wasuli, Pune 410501.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
