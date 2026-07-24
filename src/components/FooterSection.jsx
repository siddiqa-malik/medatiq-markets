import React from 'react';
// React Icons library se required icons import kiye hain
import { 
  FaInstagram, 
  FaTwitter, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaGlobe 
} from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import logo from "../assets/logo.png"

const FooterSection = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-6 px-6 font-sans ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 mb-12">
          
          {/* Column 1: Brand Info & Social Icons */}
          <div className="space-y-4">
            {/* Logo Image Area */}
            <div className="flex items-center gap-2">
              <img 
                src={logo} // <--- Yahan apna exact logo image path lagayein
                alt="MEDATIQ MARKETS Logo" 
                className="h-10 w-auto object-contain" 
              />
            </div>
            <p className="text-black text-xs leading-relaxed max-w-xs">
              MEDATIQ Markets: A regulated trading platform across UAE empowering traders worldwide to access crypto, forex, and commodities markets.
            </p>
            
            {/* Social Icons using React Icons */}
            <div className="flex items-center gap-4 pt-2 text-gray-700">
              <a href="#" className="hover:text-black transition-colors" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-black transition-colors" aria-label="Twitter">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-black transition-colors" aria-label="Facebook">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-black transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-black transition-colors" aria-label="Website">
                <FaGlobe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">Quick links</h3>
            <ul className="space-y-3 text-xs font-medium text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-black transition-colors">About</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contacts Us */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">Contacts us</h3>
            <ul className="space-y-4 text-xs text-gray-600">
              <li className="flex items-center gap-2.5">
                <FiMail className="w-4 h-4 text-gray-400 shrink-0" />
                <a href="mailto:info@medatiq.com" className="hover:text-black font-medium">info@medatiq.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="w-4 h-4 text-gray-400 shrink-0" />
                <span className="font-medium">+971558098395</span>
              </li>
              <li className="flex items-start gap-2.5 leading-relaxed">
                <FiMapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                <span>
                  West Wing, Dubai, UAE.<br />
                  DIFC is a leading financial hub, offering a robust regulatory framework and infrastructure for financial services companies, including Forex brokers.
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Subscribe */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-wide">Subscribe</h3>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 mb-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black placeholder-gray-400"
              />
              <button type="submit" className="bg-black text-white px-4 py-2 text-xs font-medium rounded-md hover:bg-gray-800 transition-colors shrink-0">
                Subscribe
              </button>
            </form>
            <p className="text-[10px] text-gray-500 leading-tight">
              By subscribing you agree with to our <a href="#" className="underline hover:text-black">Privacy Policy</a>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 font-medium">
          <div className="flex items-center gap-4 order-2 md:order-1">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Cookies Settings</a>
          </div>
          <p className="order-1 md:order-2">
            © 2025 MEDATIQ markets. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
