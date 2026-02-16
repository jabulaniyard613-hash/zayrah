
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FeaturedSection from './components/FeaturedSection';
import LegacySection from './components/LegacySection';
import Footer from './components/Footer';
import { COLORS } from './constants';

const QualitySeal: React.FC = () => (
  <section id="quality" className="py-16 bg-white border-y border-gray-100">
    <div className="container mx-auto px-4 flex flex-wrap justify-around items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
      <div className="text-center">
        <i className="fas fa-certificate text-4xl mb-2" style={{ color: COLORS.primary }}></i>
        <p className="text-[10px] font-bold uppercase tracking-widest">ISO 9001:2015</p>
      </div>
      <div className="text-center">
        <i className="fas fa-check-double text-4xl mb-2" style={{ color: COLORS.primary }}></i>
        <p className="text-[10px] font-bold uppercase tracking-widest">FSSAI Certified</p>
      </div>
      <div className="text-center">
        <i className="fas fa-leaf text-4xl mb-2" style={{ color: COLORS.primary }}></i>
        <p className="text-[10px] font-bold uppercase tracking-widest">100% Natural</p>
      </div>
      <div className="text-center">
        <i className="fas fa-globe-americas text-4xl mb-2" style={{ color: COLORS.primary }}></i>
        <p className="text-[10px] font-bold uppercase tracking-widest">Global Exporter</p>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CategoryGrid />
        <FeaturedSection />
        <LegacySection />
        <QualitySeal />
        
        {/* Simple Newsletter / Inquiry Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h3 className="text-3xl font-bold font-heritage mb-4">Request a Wholesale Catalog</h3>
            <p className="text-gray-600 mb-10">Experience the world of ZAYRAH in your establishment. Join our network of thousands of retailers worldwide.</p>
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-6 py-4 border border-gray-300 rounded-sm focus:outline-none focus:border-[#A52A2A]"
              />
              <button className="bg-[#A52A2A] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-[#8B0000] transition-colors shadow-lg">
                Send Request
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
