import React from 'react';
import { GlassWater, Pill, Cookie, Sparkles, Milk, ShoppingBag, ArrowRight } from 'lucide-react';

interface IndustriesProps {
  onOpenQuote: () => void;
}

export default function Industries({ onOpenQuote }: IndustriesProps) {
  const sectors = [
    {
      icon: GlassWater,
      title: "Packaged Water & CSD",
      desc: "Lightweight Alaska and PCO 1881 preforms engineered for high-speed mineral water and carbonated soft drink lines.",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Cookie,
      title: "Edible Oils & Foods",
      desc: "Drop-impact resistant wide-mouth jars, 1-litre bottles, and sturdy 5L/15L jerry cans with ergonomic built-in handles.",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Pill,
      title: "Pharmaceuticals",
      desc: "Amber and clear virgin PET syrup bottles adhering to strict pharma cleanroom standards and moisture barrier specs.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Milk,
      title: "Dairy & Beverages",
      desc: "Opaque and UV-protected containers designed for flavored milks, buttermilk, cold coffee, and fresh fruit juices.",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Sparkles,
      title: "Personal & Home Care",
      desc: "Elegant custom blow molded contours for shampoos, sanitizers, hand washes, dishwash liquids, and floor cleaners.",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: ShoppingBag,
      title: "FMCG & Retail",
      desc: "Multi-layer barrier flexible pouches and shrink films delivering eye-catching shelf presence and tamper-evident retail seals.",
      image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-[1280px]">
        
        {/* Banner header */}
        <div className="bg-gradient-to-r from-[#071F42] via-[#0A4EA3] to-[#123B72] rounded-[24px] p-8 sm:p-14 text-white shadow-xl mb-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#64B5F6] block mb-2">
              SECTOR EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3">
              Industries We Serve
            </h2>
            <p className="text-blue-100/90 text-sm sm:text-base max-w-xl">
              Engineered container solutions tailored to the unique regulatory, barrier, and filling speed demands of every market.
            </p>
          </div>
          <button 
            onClick={onOpenQuote}
            className="bg-white text-[#0A4EA3] hover:bg-blue-50 px-7 py-3.5 rounded-[10px] font-bold text-sm transition-all shadow-md self-start md:self-center flex items-center gap-2"
          >
            <span>Consult Sector Engineer</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div 
                key={idx}
                className="bg-[#F8FAFC] rounded-[20px] border border-gray-200/70 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="h-44 relative overflow-hidden bg-gray-100">
                  <img 
                    src={sec.image} 
                    alt={sec.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                    <div className="p-2 rounded-[8px] bg-[#0A4EA3] text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-extrabold text-lg tracking-tight">{sec.title}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                  <p className="text-xs text-[#6B7280] leading-relaxed mb-6">
                    {sec.desc}
                  </p>
                  
                  <button 
                    onClick={onOpenQuote}
                    className="text-xs font-bold text-[#0A4EA3] hover:text-[#123B72] flex items-center gap-1 group/btn self-start"
                  >
                    <span>Request Industry Kit</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
