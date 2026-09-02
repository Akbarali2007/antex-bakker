import React from "react";
import { Link } from "react-router";
import { Phone, Mail, MapPin, Star } from "lucide-react";
import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF6F0] font-sans pt-16 relative overflow-hidden text-stone-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand Info & Ratings */}
          <div className="space-y-4">
            <Link to="/" className="text-3xl font-black text-[#2D122D] tracking-tight block">
              antix_r
            </Link>
            <p className="text-xs text-stone-500 leading-relaxed max-w-xs">
              Delectable treats cooked daily with passion. Experience sweet moments with our artisan recipes.
            </p>
            {/* Rating Stars */}
            <div className="flex items-center space-x-1 pt-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={14}
                  className="fill-amber-500 text-amber-500"
                />
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-sm text-[#2D122D] tracking-wide mb-1">
              Quick Links
            </h4>
            <div className="w-6 h-[2px] bg-amber-500 mb-4 rounded-full" />
            <ul className="space-y-2.5 text-xs text-stone-600 font-medium">
              <li>
                <Link to="/" className="hover:text-[#2D122D] transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#2D122D] transition">About Us</Link>
              </li>
              <li>
                <Link to="/coupons" className="hover:text-[#2D122D] transition">Coupons</Link>
              </li>
              <li>
                <Link to="/recipes" className="hover:text-[#2D122D] transition">Recipes</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#2D122D] transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div>
            <h4 className="font-bold text-sm text-[#2D122D] tracking-wide mb-1">
              Our Products
            </h4>
            <div className="w-6 h-[2px] bg-amber-500 mb-4 rounded-full" />
            <ul className="space-y-2.5 text-xs text-stone-600 font-medium">
              <li>
                <Link to="/products?cat=cupcakes" className="hover:text-[#2D122D] transition">Cupcakes</Link>
              </li>
              <li>
                <Link to="/products?cat=cookies" className="hover:text-[#2D122D] transition">Cookies</Link>
              </li>
              <li>
                <Link to="/products?cat=breads" className="hover:text-[#2D122D] transition">Breads</Link>
              </li>
              <li>
                <Link to="/products?cat=pastries" className="hover:text-[#2D122D] transition">Pastries</Link>
              </li>
              <li>
                <Link to="/products?cat=cakes" className="hover:text-[#2D122D] transition">Cakes</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info & Socials */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-[#2D122D] tracking-wide mb-1">
              Contact Info
            </h4>
            <div className="w-6 h-[2px] bg-amber-500 mb-4 rounded-full" />
            
            <ul className="space-y-3 text-xs text-stone-600 font-medium">
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <Phone size={12} />
                </div>
                <span>+1 (123) 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <Mail size={12} />
                </div>
                <span>hello@antixr.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <MapPin size={12} />
                </div>
                <span>123 Bakery Street, Sweet City, CA</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#2D122D] text-white flex items-center justify-center hover:opacity-80 transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={12} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#2D122D] text-white flex items-center justify-center hover:opacity-80 transition"
                aria-label="Pinterest"
              >
                <FaPinterestP size={12} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#2D122D] text-white flex items-center justify-center hover:opacity-80 transition"
                aria-label="Instagram"
              >
                <FaInstagram size={12} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave Divider & Copyright Section */}
      <div className="relative bg-[#2D122D] pt-12 pb-4 text-center">
        {/* SVG Wavy Layer */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%]">
          <svg
            className="relative block w-full h-12 text-[#2D122D]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        <p className="text-[11px] text-stone-300 font-medium relative z-10">
          © {new Date().getFullYear()} antix_r. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}