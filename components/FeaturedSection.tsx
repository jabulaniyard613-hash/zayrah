
import React from 'react';
import { FEATURED_PRODUCTS, COLORS } from '../constants';

const FeaturedSection: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h3 className="text-3xl font-bold font-heritage mb-2" style={{ color: COLORS.primary }}>Signature Blends</h3>
            <p className="text-gray-500 uppercase tracking-widest text-xs">Our Best Sellers</p>
          </div>
          <button className="mt-4 md:mt-0 text-[#A52A2A] font-bold uppercase tracking-widest text-sm hover:underline">
            View All Spices <i className="fas fa-long-arrow-alt-right ml-2"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-sm shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-[#D4AF37]">
              <div className="h-64 mb-6 overflow-hidden flex items-center justify-center bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-full object-contain mix-blend-multiply"
                />
              </div>
              <div className="text-center">
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">{product.category}</span>
                <h4 className="text-lg font-bold mt-1 text-gray-800">{product.name}</h4>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">{product.description}</p>
                <button className="mt-6 w-full border border-[#A52A2A] text-[#A52A2A] py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#A52A2A] hover:text-white transition-colors">
                  Product Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
