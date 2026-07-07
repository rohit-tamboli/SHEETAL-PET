import React from 'react';
import { Mail, PhoneCall, MapPin, Linkedin, Award, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-400 text-sm pt-20 pb-16 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-[1280px]">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-gray-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[8px] bg-[#0A4EA3] flex items-center justify-center text-white font-black text-lg">
                SPI
              </div>
              <span className="text-2xl font-black text-white tracking-tight">sheetalapetindustries</span>
            </a>
            <p className="text-xs leading-relaxed text-gray-400 max-w-sm">
              Premier manufacturer of high-precision PET Preforms, Containers, Bottles, and SACMI Compression Closures. Powering India's leading beverage, edible oil, and FMCG brands since 2001.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-gray-300 font-semibold">
              <span className="flex items-center gap-1.5 bg-gray-800 px-2.5 py-1 rounded text-[#64B5F6]">
                <Award className="w-3.5 h-3.5" /> ISO 9001:2015
              </span>
              <span className="flex items-center gap-1.5 bg-gray-800 px-2.5 py-1 rounded text-green-400">
                <ShieldCheck className="w-3.5 h-3.5" /> BRCGS Grade A
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products Catalog</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">Infrastructure</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Our Group</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Product Range</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#products" className="hover:text-white transition-colors flex items-center gap-1">PET Preforms (PCO 1881 / Alaska) <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#products" className="hover:text-white transition-colors flex items-center gap-1">SACMI Compression Closures <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#products" className="hover:text-white transition-colors flex items-center gap-1">Edible Oil Jars & Handles <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#products" className="hover:text-white transition-colors flex items-center gap-1">Pharma Cleanroom Bottles <ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#products" className="hover:text-white transition-colors flex items-center gap-1">Multi-Layer Flexible Laminates <ArrowUpRight className="w-3 h-3" /></a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Corporate Office</h4>
            <div className="space-y-2.5 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#64B5F6] flex-shrink-0 mt-0.5" />
                <span>Gorakhpur village, teh: Pendra Road, district: Gaurela Pendra Marwahi, state: Chhattisgarh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a href="tel:+918349576332" className="hover:text-white font-mono">8349576332, 8319993571</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#64B5F6] flex-shrink-0" />
                <a href="mailto:sheetalapetindustries@gmail.com" className="hover:text-white">sheetalapetindustries@gmail.com</a>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span>Paid-up share capital: ₹7 crore</span>
              </div>
            </div>
            
            <div className="pt-2 flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-[6px] bg-gray-800 hover:bg-[#0A4EA3] text-gray-300 hover:text-white flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} sheetalapetindustries. All rights reserved. PET Preforms & Closures Division.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Supply</a>
            <a href="#" className="hover:text-gray-400 transition-colors">ESG Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
