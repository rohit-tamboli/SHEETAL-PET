import React from 'react';
import { ArrowRight, CheckCircle, PackageCheck, HeartHandshake } from 'lucide-react';
import Stats from './Stats';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0A4EA3] bg-blue-50 px-3.5 py-1.5 rounded-full mb-4 border border-blue-100">
              About Sheetal Pet Industries
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight leading-[1.15] mb-6">
              A Legacy of Excellence in <span className="text-[#0A4EA3]">Packaging</span>
            </h2>

            <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed mb-6">
              Founded with a vision to revolutionize rigid packaging in India, <strong>Sheetal Pet Industries</strong> has grown into a premier manufacturer of PET Preforms, Containers, Bottles, and Precision Closures. We partner with the world's most recognizable beverage, edible oil, and FMCG brands.
            </p>

            <p className="text-[#6B7280] text-sm leading-relaxed mb-8">
              Utilizing state-of-the-art European molding technology from Husky, SACMI, and NISSEI ASB, we process over 100,000 MT of virgin resin annually. Every preform and cap is engineered for lightweight sustainability, unmatched burst pressure resistance, and high-speed filling line compatibility.
            </p>

            {/* Quick Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8 pt-6 border-t border-gray-100">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#0A4EA3] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-[#111827]">100% Virgin Food-Grade</h4>
                  <p className="text-xs text-[#6B7280] mt-0.5">IV guaranteed resin adhering to international safety norms.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PackageCheck className="w-5 h-5 text-[#0A4EA3] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-[#111827]">Custom Neck Finishes</h4>
                  <p className="text-xs text-[#6B7280] mt-0.5">Alaska, PCO 1881, 30/25, and wide-mouth jar threads.</p>
                </div>
              </div>
            </div>

            <a 
              href="#why-choose-us"
              className="inline-flex items-center gap-2 text-[#0A4EA3] font-bold text-base hover:text-[#123B72] group pt-2"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Stats Column */}
          <div className="lg:col-span-6">
            <Stats />
          </div>

        </div>
      </div>
    </section>
  );
}
