import React from 'react';
import { ShieldCheck, Sparkles, HeartHandshake, Leaf } from 'lucide-react';

export default function Process() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      desc: "Rigorous laboratory testing for Intrinsic Viscosity (IV), top load strength, and torque seal integrity.",
      color: "bg-blue-600",
      position: "top-left"
    },
    {
      icon: Sparkles,
      title: "Innovative Excellence",
      desc: "Continuous R&D in neck lightweighting and high-cavity mold engineering to maximize line speeds.",
      color: "bg-indigo-600",
      position: "top-right"
    },
    {
      icon: HeartHandshake,
      title: "Customer-Centric",
      desc: "Dedicated technical service engineers stationed pan-India for immediate filling line troubleshooting.",
      color: "bg-teal-600",
      position: "bottom-left"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      desc: "Integrating food-grade recycled rPET and energy-efficient servo drives to meet ESG benchmarks.",
      color: "bg-emerald-600",
      position: "bottom-right"
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-[1280px]">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0A4EA3] block mb-2">
            THE SHEETAL PET MODEL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight mb-4">
            Our Core <span className="text-[#0A4EA3]">Strengths</span>
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg">
            How we combine European precision engineering with local industrial scale.
          </p>
        </div>

        {/* Infographic Layout */}
        <div className="relative max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Circular Center Diagram for Desktop */}
          <div className="relative w-full py-8 flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left 2 Pillars */}
            <div className="flex flex-col gap-10 w-full md:w-5/12">
              <div className="bg-white p-7 rounded-[20px] shadow-md border border-gray-100 relative group hover:border-[#0A4EA3] transition-all">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-[10px] bg-blue-50 text-[#0A4EA3] flex items-center justify-center font-bold">
                    01
                  </div>
                  <h3 className="text-lg font-black text-[#111827]">Quality Assurance</h3>
                </div>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Rigorous laboratory testing for Intrinsic Viscosity (IV), top load strength, and torque seal integrity.
                </p>
              </div>

              <div className="bg-white p-7 rounded-[20px] shadow-md border border-gray-100 relative group hover:border-[#0A4EA3] transition-all">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-[10px] bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                    02
                  </div>
                  <h3 className="text-lg font-black text-[#111827]">Customer-Centric</h3>
                </div>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Dedicated technical service engineers stationed pan-India for immediate filling line troubleshooting.
                </p>
              </div>
            </div>

            {/* Center Circle Core */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-[#071F42] via-[#0A4EA3] to-[#1E88E5] text-white flex flex-col items-center justify-center text-center p-6 shadow-[0_20px_50px_rgba(10,78,163,0.3)] border-8 border-white z-10 flex-shrink-0 animate-pulse-subtle">
              <div className="text-xs tracking-widest font-mono text-blue-200 uppercase mb-1 font-bold">CORE SYNERGY</div>
              <div className="text-xl sm:text-2xl font-black leading-tight">SHEETAL PET INDUSTRIES</div>
              <div className="text-[10px] text-blue-100 mt-2 font-medium">360° Packaging Excellence</div>
            </div>

            {/* Right 2 Pillars */}
            <div className="flex flex-col gap-10 w-full md:w-5/12">
              <div className="bg-white p-7 rounded-[20px] shadow-md border border-gray-100 relative group hover:border-[#0A4EA3] transition-all">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-[10px] bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                    03
                  </div>
                  <h3 className="text-lg font-black text-[#111827]">Innovative Excellence</h3>
                </div>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Continuous R&D in neck lightweighting and high-cavity mold engineering to maximize line speeds.
                </p>
              </div>

              <div className="bg-white p-7 rounded-[20px] shadow-md border border-gray-100 relative group hover:border-[#0A4EA3] transition-all">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-[10px] bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                    04
                  </div>
                  <h3 className="text-lg font-black text-[#111827]">Sustainability Focus</h3>
                </div>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Integrating food-grade recycled rPET and energy-efficient servo drives to meet ESG benchmarks.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
