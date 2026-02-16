
import React from 'react';
import { CATEGORIES, COLORS } from '../constants';

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-2 font-heritage" style={{ color: COLORS.primary }}>Explore Our Kitchen</h3>
        <p className="text-gray-500 uppercase tracking-widest text-xs mb-12">Fine Spices for Every Palate</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="group relative h-80 overflow-hidden cursor-pointer rounded-lg shadow-lg">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
                <h4 className="text-2xl font-bold font-heritage mb-2">{cat.name}</h4>
                <div className="h-1 w-12 bg-[#D4AF37] transition-all group-hover:w-24"></div>
                <p className="mt-4 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">View Collection <i className="fas fa-arrow-right ml-2"></i></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
