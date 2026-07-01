import React from 'react';
import { ArrowRight, PhoneCall, Mail, ShieldCheck, Factory, Send } from 'lucide-react';
import Button from './Button';

interface CTAProps {
  onOpenQuote: () => void;
}

export default function CTA({ onOpenQuote }: CTAProps) {
  return (
    <section className="bg-gradient-to-br from-[#071F42] via-[#0A4EA3] to-[#123B72] py-20 px-6 text-white relative overflow-hidden">
      {/* Background industrial grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none"></div>

      <div className="container mx-auto max-w-[1280px] relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-[28px] p-8 sm:p-14 lg:p-16 border border-white/20 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-[#64B5F6] text-xs font-bold uppercase tracking-widest mb-6">
                <Factory className="w-4 h-4 text-white" />
                <span>Pan-India Manufacturing Capacity</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] mb-6 text-white">
                Ready to Upgrade Your <br />
                <span className="text-[#64B5F6]">Packaging Line Efficiency?</span>
              </h2>

              <p className="text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
                Partner with Sheetal Pet Industries for precision PET preforms, 100% recyclable bottles, and high-speed SACMI closures. Speak directly with our senior polymer engineers for custom neck finishes and CAD feasibility.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button 
                  onClick={onOpenQuote}
                  className="bg-white text-[#0A4EA3] hover:bg-blue-50 px-8 py-4 rounded-[10px] font-extrabold text-base transition-all shadow-xl flex items-center gap-2 group"
                >
                  <Send className="w-5 h-5 text-[#0A4EA3]" />
                  <span>Request Custom Specification</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a 
                  href="tel:+911145678900"
                  className="border-2 border-white/40 hover:border-white text-white px-7 py-4 rounded-[10px] font-bold text-base transition-all flex items-center gap-2.5 bg-white/5 hover:bg-white/10"
                >
                  <PhoneCall className="w-5 h-5 text-green-400 animate-pulse" />
                  <span>+91 (11) 4567-8900</span>
                </a>
              </div>
            </div>

            {/* Right Trust Column */}
            <div className="lg:col-span-4 bg-black/30 backdrop-blur-md p-8 rounded-[20px] border border-white/15 space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-[10px] bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">BRCGS Grade A Hygiene</h4>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">Certified cleanroom manufacturing adhering strictly to global food safety benchmarks.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-[10px] bg-[#64B5F6]/20 text-[#64B5F6] flex items-center justify-center flex-shrink-0 mt-0.5">
                  ⚡
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">4-Hour Engineering Turnaround</h4>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">Submit your bottle drawing or sample specs and receive comprehensive technical feedback.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
