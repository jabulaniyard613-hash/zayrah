
import React from 'react';
import { COLORS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1600&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative container mx-auto h-full px-4 flex flex-col justify-center items-center text-center text-white">
        <div className="mb-6 p-4 border-2 border-[#D4AF37] inline-block bg-white bg-opacity-10 backdrop-blur-sm">
          <h2 className="text-5xl md:text-7xl font-bold font-heritage mb-2">ZAYRAH SPICES</h2>
          <div className="h-1 w-32 bg-[#D4AF37] mx-auto mb-2"></div>
          <p className="text-lg md:text-xl uppercase tracking-[0.3em] font-light">Asli Masale, Sach-Sach</p>
        </div>
        
        <p className="max-w-2xl text-lg md:text-xl mb-8 leading-relaxed font-light italic">
          "Bringing the authentic taste of tradition to every kitchen, crafted with the purest ingredients from the heart of our farms."
        </p>
        
        <div className="flex space-x-4">
          <button className="bg-[#A52A2A] text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-[#8B0000] transition-all transform hover:scale-105">
            Explore Range
          </button>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-all transform hover:scale-105">
            Our Story
          </button>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#FAF9F6]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 50% 100%, 0 0)' }}></div>
    </section>
  );
};

export default Hero;
