import React from 'react';
import { ShieldCheck, Cpu, Lightbulb, Recycle, Truck, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      desc: "Comprehensive 360° inspection using optical vision sorters and pressure burst testers to eliminate micro-leaks."
    },
    {
      icon: Cpu,
      title: "Advanced Manufacturing",
      desc: "European molding machines from Husky and SACMI running continuous multi-cavity servo tooling."
    },
    {
      icon: Lightbulb,
      title: "Custom Solutions",
      desc: "In-house CAD container engineering and 3D prototyping for proprietary beverage and jar contours."
    },
    {
      icon: Recycle,
      title: "Sustainable Practices",
      desc: "Lightweighting preform necks and processing food-grade rPET to reduce carbon footprints by up to 35%."
    },
    {
      icon: Truck,
      title: "Reliable Supply",
      desc: "Pan-India logistics network with 15 strategic plant locations guaranteeing Just-In-Time (JIT) factory delivery."
    },
    {
      icon: Award,
      title: "Industry Expertise",
      desc: "Over 25 years advising leading multinational beverage, dairy, pharmaceutical, and edible oil brands."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-[1280px]">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A4EA3] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight mt-4 mb-4">
            Your Trusted Packaging <span className="text-[#0A4EA3]">Partner</span>
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg">
            We deliver uncompromising engineering rigor so your automated filling lines achieve maximum OEE throughput.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((rs, idx) => {
            const Icon = rs.icon;
            return (
              <div 
                key={idx}
                className="bg-[#F8FAFC] p-8 rounded-[20px] border border-gray-200/60 hover:bg-white hover:shadow-[0_20px_50px_rgba(10,78,163,0.1)] hover:border-[#0A4EA3]/40 transition-all duration-300 flex flex-col items-start group"
              >
                <div className="w-14 h-14 rounded-[14px] bg-white shadow-sm text-[#0A4EA3] group-hover:bg-[#0A4EA3] group-hover:text-white transition-colors flex items-center justify-center mb-6 border border-gray-100">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-[#111827] mb-3 tracking-tight">
                  {rs.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {rs.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
