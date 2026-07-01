import React from 'react';
import { Cpu, Check, ArrowRight, Settings, Sliders, Zap } from 'lucide-react';
import Button from './Button';

interface TechnologyProps {
  onOpenQuote: () => void;
}

export default function Technology({ onOpenQuote }: TechnologyProps) {
  const techRows = [
    {
      title: "PET Preforms Manufacturing",
      machine: "Husky HyPET 5E+ & Injection Systems",
      desc: "Our preforms are manufactured on high-cavity Canadian Husky molding machines. Equipped with advanced hot runner balancing and robotics, we guarantee consistent wall thickness, zero acetaldehyde (AA) migration, and crystal-clear clarity across all weight classes from 9.5g to 750g.",
      specs: [
        "Up to 128-cavity continuous high-speed production",
        "PCO 1881, Alaska 26.7mm, CTC 29/25, & ROPP finishes",
        "Automated vision inspection for gate defects & ovality",
        "Optimized reheat profile for maximum stretch blow efficiency"
      ],
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
      imagePosition: "left",
      tag: "INJECTION MOLDING"
    },
    {
      title: "Precision Caps & Closures",
      machine: "SACMI Continuous Compression Molding (CCM)",
      desc: "We utilize SACMI Italian compression technology to produce ultra-lightweight, high-performance closures. Unlike standard injection molding, CCM delivers superior density uniformity, exceptional stress-crack resistance, and exact organoleptic neutrality for carbonated and still drinks.",
      specs: [
        "High-speed continuous compression output exceeding 2,000 BPM",
        "Tamper-evident scored bands with reliable bridge break",
        "Advanced seal venting geometry for carbonated safety",
        "Custom pantone color matching and laser promo-coding"
      ],
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=80",
      imagePosition: "right",
      tag: "COMPRESSION MOLDING"
    },
    {
      title: "Jars & Containers",
      machine: "NISSEI ASB 1-Step Injection Stretch Blow",
      desc: "For premium edible oils, confectionaries, and personal care jars, our Japanese NISSEI ASB single-stage ISBM systems transform virgin PET directly into finished containers. This ensures zero neck scratching, pristine surface luster, and exact volumetric precision.",
      specs: [
        "Wide mouth jar capacities from 100ml up to 20 Litres",
        "Integrated handle designs for 5L & 15L bulk containers",
        "Glass-like transparency with superior drop impact resistance",
        "Custom embossing of brand logos and graduation marks"
      ],
      image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=900&q=80",
      imagePosition: "left",
      tag: "SINGLE-STAGE ISBM"
    }
  ];

  return (
    <section id="technology" className="py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1280px]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0A4EA3] text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100">
            <Settings className="w-3.5 h-3.5 animate-spin-slow" />
            <span>World-Class Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight mb-4">
            State of the Art <span className="text-[#0A4EA3]">Technology</span>
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg">
            Our commitment to quality starts with our machinery. We invest exclusively in tier-1 robotics and molding automation to give our partners zero-defect packaging.
          </p>
        </div>

        {/* Rows */}
        <div className="space-y-20 lg:space-y-28">
          {techRows.map((row, idx) => {
            const isRight = row.imagePosition === 'right';
            return (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                
                {/* Image Col */}
                <div className={`lg:col-span-6 ${isRight ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-white bg-white group">
                    <img 
                      src={row.image} 
                      alt={row.title}
                      className="w-full h-[340px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 left-4 bg-[#111827]/80 backdrop-blur-md text-white px-3 py-1.5 rounded-[8px] text-xs font-bold tracking-wider uppercase border border-white/10">
                      {row.tag}
                    </div>
                  </div>
                </div>

                {/* Text Col */}
                <div className={`lg:col-span-6 ${isRight ? 'lg:order-1' : 'lg:order-2'} flex flex-col items-start`}>
                  <span className="text-xs font-bold text-[#0A4EA3] uppercase tracking-wider mb-2 font-mono">
                    {row.machine}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight mb-4">
                    {row.title}
                  </h3>

                  <p className="text-[#4B5563] text-base leading-relaxed mb-6">
                    {row.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8 bg-white p-5 rounded-[16px] border border-gray-200/80 shadow-sm">
                    {row.specs.map((sp, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs text-[#374151] font-medium">
                        <div className="w-4 h-4 rounded-full bg-blue-50 text-[#0A4EA3] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{sp}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="primary" size="md" onClick={onOpenQuote}>
                    Request Specs & Quote
                  </Button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Flexible Packaging Banner Feature below */}
        <div className="mt-24 bg-gradient-to-r from-[#0A4EA3] to-[#071F42] rounded-[24px] p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-[6px] text-blue-100">
              NEW DIVISION
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-3 mb-2">
              Multi-Layer Flexible Packaging & Laminates
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              High-barrier roto-gravure printed pouches, shrink films, and BOPP laminates for snacks, confectionery, and dairy products. Featuring anti-puncture seals and vibrant 9-color print reproduction.
            </p>
          </div>
          <Button variant="secondary" size="lg" onClick={onOpenQuote} className="flex-shrink-0">
            Inquire Flexible Packaging
          </Button>
        </div>

      </div>
    </section>
  );
}
