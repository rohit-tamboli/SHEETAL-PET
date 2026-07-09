import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { motion } from "motion/react";

export default function Clients() {
  const clients = [
    { name: "Amarkantak Minerals", category: "Mineral Water Leader", logoText: "Amarkantak", color: "from-red-600 to-red-700" },
    { name: "Bisleri", category: "Mineral Water Leader", logoText: "Bisleri", color: "from-teal-600 to-emerald-700" },
    { name: "Adani Wilmar", category: "Fortune Edible Oils", logoText: "adani wilmar", color: "from-blue-700 to-indigo-800" },
    { name: "PepsiCo", category: "Global CSD & Beverages", logoText: "PEPSICO", color: "from-red-600 via-blue-700 to-blue-900" },
    { name: "Hamdard", category: "Rooh Afza & Juices", logoText: "Hamdard", color: "from-amber-600 to-red-700" },
    { name: "Oasis", category: "Premium Packaged Water", logoText: "OASIS", color: "from-cyan-600 to-blue-600" },
    { name: "Patanjali", category: "Ayurvedic & FMCG", logoText: "PATANJALI", color: "from-green-700 to-emerald-800" }
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-16 bg-[#F8FAFC] border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1280px]">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A4EA3] block mb-2">
            Trusted Partners
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
            Some of Our Clients
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7280] mt-2">
            Powering high-speed bottling and packaging lines for India's most demanding consumer brands.
          </p>
        </div>

        {/* Logos Marquee */}
        <div className="relative overflow-hidden w-full">
          <motion.div 
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {duplicatedClients.map((cl, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-[16px] border border-gray-200/70 shadow-sm hover:shadow-md hover:border-[#0A4EA3]/40 transition-all flex flex-col items-center justify-center text-center group w-48 flex-shrink-0"
              >
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${cl.color} text-white font-black text-xs flex items-center justify-center tracking-tighter mb-3 shadow-md group-hover:scale-110 transition-transform uppercase`}>
                  {cl.logoText.slice(0, 4)}
                </div>
                <span className="font-extrabold text-sm text-[#111827] block tracking-tight">
                  {cl.name}
                </span>
                <span className="text-[10px] text-[#6B7280] font-medium mt-0.5">
                  {cl.category}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 flex justify-center items-center gap-2 text-xs font-semibold text-[#4B5563]">
          <CheckCircle2 className="w-4 h-4 text-green-600" />
          <span>100% Quality Audit Compliance across all partner plants</span>
        </div>

      </div>
    </section>
  );
}
