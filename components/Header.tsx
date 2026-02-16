
import React from 'react';
import { COLORS } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-4" style={{ borderColor: COLORS.primary }}>
      <div className="bg-[#A52A2A] text-white text-xs py-1 text-center">
        <p className="tracking-widest uppercase">Tradition of Quality Since 1952</p>
      </div>
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-[#A52A2A]">
            <span className="text-white font-bold text-xl">Z</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tighter" style={{ color: COLORS.primary }}>
              ZAYRAH <span className="text-gray-700">SPICES</span>
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500">The Essence of Purity</p>
          </div>
        </div>

        <nav className="flex space-x-6 text-sm font-semibold uppercase tracking-wider">
          <a href="#" className="hover:text-[#A52A2A] transition-colors">Home</a>
          <a href="#products" className="hover:text-[#A52A2A] transition-colors">Products</a>
          <a href="#about" className="hover:text-[#A52A2A] transition-colors">Our Legacy</a>
          <a href="#quality" className="hover:text-[#A52A2A] transition-colors">Quality</a>
          <a href="#contact" className="hover:text-[#A52A2A] transition-colors">Contact</a>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-[#A52A2A]"><i className="fas fa-search"></i></button>
          <button className="bg-[#A52A2A] text-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#8B0000] transition-colors">
            Inquiry
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
