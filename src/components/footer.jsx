
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#242521] text-white pt-20 pb-8">

      <div className="rgp-container">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 pb-16">

          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/LogoRGP1.webp"
                alt="RGP Group"
                className="w-16 h-16 object-contain"
              />

              <div>
                <h2 className="display-font text-3xl font-bold">
                  RGP<span className="text-[#d8784e]">.</span>
                </h2>
                <p className="text-[10px] tracking-[.2em] uppercase text-white/50">
                  Pack Tech Solution
                </p>
              </div>
            </Link>

            <p className="text-white/55 leading-relaxed max-w-sm mt-8">
              Packaging engineered with purpose.
              Reliable corrugated and wooden packaging
              solutions from RGP Group, Chakan Pune.
            </p>

            <p className="text-sm text-white/40 mt-8">
              Our work is our identity.
            </p>
          </div>

          <div>
            <h3 className="uppercase tracking-[.18em] text-xs font-bold text-[#d8784e] mb-8">
              Explore
            </h3>

            <div className="flex flex-col gap-5 text-white/70">
              {[
                ["Home", "/"],
                ["About RGP", "/about"],
                ["Products & Solutions", "/products"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="hover:text-[#d8784e] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="uppercase tracking-[.18em] text-xs font-bold text-[#d8784e] mb-8">
              Get in touch
            </h3>

            <div className="space-y-6 text-white/65 text-sm">

              <div className="flex gap-4">
                <MapPin className="shrink-0 text-[#d8784e]" size={19}/>
                <p>
                  Plot No. A-44/1/A-58, Rajmata Jijau Mahila
                  Industrial Premises CHSL, Chakan Industrial
                  Area Phase II, Wasuli, Pune 410501.
                </p>
              </div>

              <a
                href="mailto:rgppacktech@gmail.com"
                className="flex items-center gap-4 hover:text-white"
              >
                <Mail className="text-[#d8784e]" size={19}/>
                rgppacktech@gmail.com
              </a>

              <a
                href="tel:7083477803"
                className="flex items-center gap-4 hover:text-white"
              >
                <Phone className="text-[#d8784e]" size={19}/>
                +91 7083477803
              </a>

              <a
                href="https://wa.me/917083477803"
                target="_blank"
                rel="noreferrer"
                className="inline-flex gap-3 items-center bg-[#c65c32] text-white px-5 py-3 rounded-full hover:bg-[#d8784e] transition"
              >
                WhatsApp us
                <ArrowUpRight size={17}/>
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-white/15 pt-7 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {year} RGP Pack Tech Solution | RGP Group.</p>

          <p>
            AS/NZS ISO 9001:2015
          </p>

          <a
            href="https://www.rgpgroup.in"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#d8784e] transition"
          >
            www.rgpgroup.in
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
