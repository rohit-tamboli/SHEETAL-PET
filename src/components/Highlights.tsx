import React from 'react';
import { Factory, Scale, Flame, Box, Cpu, MapPin, Users, Maximize2 } from 'lucide-react';

export default function Highlights() {
  const highlights = [
    { value: "100,000 MT+", label: "Annual Resin Consumption", icon: Scale },
    { value: "250 MT+", label: "Preforms Manufactured Per Day", icon: Flame },
    { value: "14 Million+", label: "Bottles Manufactured Per Day", icon: Box },
    { value: "10,000+", label: "20-Litre Jars Per Day", icon: Factory },
    { value: "200+", label: "Plastic Processing Machines", icon: Cpu },
    { value: "15+", label: "Manufacturing Locations Across India", icon: MapPin },
    { value: "2,000+", label: "Total Dedicated Workforce", icon: Users },
    { value: "2,000K Sq. Ft.", label: "Total Manufacturing Area", icon: Maximize2 }
  ];

  return (
    <section className="bg-[#111827] text-white py-20 px-6 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#0A4EA3]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto max-w-[1280px] relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#64B5F6] block mb-2">
            QUANTITATIVE SCALE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Manufacturing Highlights
          </h2>
          <div className="w-16 h-1 bg-[#0A4EA3] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4x2 Bento Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#1F2937]/80 backdrop-blur-md p-6 rounded-[18px] border border-gray-700/60 hover:border-[#64B5F6]/40 hover:bg-[#1F2937] transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-[12px] bg-[#0A4EA3]/20 text-[#64B5F6] group-hover:bg-[#0A4EA3] group-hover:text-white transition-colors flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-black text-white font-mono tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs text-gray-400 font-medium leading-snug mt-1">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
