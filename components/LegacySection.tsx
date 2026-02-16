
import React from 'react';
import { COLORS } from '../constants';

const LegacySection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#A52A2A] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <i className="fas fa-mortar-pestle text-[400px]"></i>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative">
          <div className="border-8 border-[#D4AF37] p-4 inline-block">
             <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop" 
              alt="Legacy" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] p-8 hidden lg:block">
            <p className="text-4xl font-bold font-heritage">70+</p>
            <p className="uppercase tracking-widest text-xs font-bold">Years of Trust</p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h3 className="text-4xl font-bold font-heritage mb-6">Our Legacy of Purity</h3>
          <div className="h-1 w-20 bg-[#D4AF37] mb-8"></div>
          <p className="text-lg leading-relaxed mb-6 opacity-90">
            Founded on the principles of integrity and quality, ZAYRAH SPICES has been a household name for decades. 
            We believe that spices are the soul of food, and their purity should never be compromised.
          </p>
          <p className="text-lg leading-relaxed mb-10 opacity-90">
            From the fertile fields to your kitchen table, every grain of ZAYRAH Masala is tested for potency, aroma, and color. 
            We maintain the traditional methods of slow-grinding to ensure the essential oils and flavors are preserved.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="text-[#D4AF37] font-bold text-xl mb-2">Hand-Picked</h4>
              <p className="text-sm opacity-80">Only the finest ingredients pass our quality standards.</p>
            </div>
            <div>
              <h4 className="text-[#D4AF37] font-bold text-xl mb-2">Modern Hygiene</h4>
              <p className="text-sm opacity-80">Automated cleaning and packaging processes.</p>
            </div>
          </div>
          
          <button className="bg-white text-[#A52A2A] px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors">
            Read Full History
          </button>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
