import React from 'react';
import { Award, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function Stats() {
  const statsList = [
    {
      icon: Award,
      value: "20+",
      title: "Years of Experience",
      desc: "Two decades of leadership in high-precision rigid PET packaging."
    },
    {
      icon: ShieldCheck,
      value: "BRCGS Grade A",
      title: "FSSC 22000 Certified",
      desc: "Top global hygiene standards for food & beverage containers."
    },
    {
      icon: Clock,
      value: "24/7",
      title: "Production Capacity",
      desc: "Continuous high-output automated molding lines meeting peak demand."
    },
    {
      icon: CheckCircle2,
      value: "100%",
      title: "Quality Commitment",
      desc: "Zero-compromise virgin resin inspection with automated vision systems."
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
      {statsList.map((st, idx) => {
        const Icon = st.icon;
        return (
          <div 
            key={idx} 
            className="bg-white p-6 rounded-[16px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(10,78,163,0.1)] hover:border-[#0A4EA3]/30 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="w-12 h-12 rounded-[12px] bg-blue-50 text-[#0A4EA3] group-hover:bg-[#0A4EA3] group-hover:text-white transition-colors flex items-center justify-center mb-4">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-black text-[#111827] tracking-tight mb-1">
                {st.value}
              </div>
              <div className="text-sm font-bold text-[#0A4EA3] mb-2">
                {st.title}
              </div>
              <p className="text-xs text-[#6B7280] leading-relaxed">
                {st.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
