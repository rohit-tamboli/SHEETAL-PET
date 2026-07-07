import React from 'react';
import { Factory, Cog, Thermometer, CheckCircle, Package, Truck, Layers, ArrowRight } from 'lucide-react';

export default function Process() {
  const steps = [
    { icon: Layers, title: "Raw Material" },
    { icon: Thermometer, title: "Drying" },
    { icon: Factory, title: "Injection Moulding" },
    { icon: Cog, title: "Cooling" },
    { icon: CheckCircle, title: "Quality Check" },
    { icon: Package, title: "Packaging" },
    { icon: Truck, title: "Dispatch" }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-[1280px]">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0A4EA3] block mb-2">
            SHEETAL PET INDUSTRIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight mb-4">
            Our <span className="text-[#0A4EA3]">Manufacturing Process</span>
          </h2>
        </div>

        <div className="flex flex-row flex-wrap justify-center items-start gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-[20px] shadow-sm border border-gray-100 w-28 sm:w-32 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0A4EA3] flex items-center justify-center mb-3">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[10px] sm:text-xs text-gray-900">{step.title}</h3>
                <div className="mt-2 text-[10px] text-gray-400 font-mono">0{index + 1}</div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center text-gray-300 self-center">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
