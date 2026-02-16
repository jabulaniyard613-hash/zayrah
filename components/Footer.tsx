
import React from 'react';
import { COLORS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#A52A2A] flex items-center justify-center border border-[#D4AF37]">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tighter">ZAYRAH <span className="text-gray-500">SPICES</span></h2>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              The world's leading spice company dedicated to bringing health and flavor to every meal since 1952.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#D4AF37]"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-[#D4AF37]"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-[#D4AF37]"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-[#D4AF37]"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Our Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Control</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recipes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Spice Range</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Blended Spices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pure Ground Spices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Whole Spices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Other Food Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bulk Inquiry</a></li>
            </ul>
          </div>
          
          <div id="contact">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#D4AF37]"></i>
                <span>ZAYRAH House, 12 Spice Estate, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-[#D4AF37]"></i>
                <span>+91 11 2345 6789</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-[#D4AF37]"></i>
                <span>info@zayrahspices.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-xs">
          <p>© {new Date().getFullYear()} ZAYRAH SPICES. All Rights Reserved. | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Use</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
