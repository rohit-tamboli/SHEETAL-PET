import React, { useState } from 'react';
import { Menu, X, ChevronDown, PhoneCall, Mail, Award } from 'lucide-react';
import Button from './Button';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const productLinks = [
    { name: 'PET Preforms', href: '#technology' },
    { name: 'Caps & Closures', href: '#technology' },
    { name: 'Jars & Containers', href: '#technology' },
    { name: 'Flexible Packaging', href: '#technology' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      {/* Top micro info bar */}
      <div className="bg-[#111827] text-gray-300 text-xs py-1.5 px-6 hidden md:block">
        <div className="container mx-auto max-w-[1280px] flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Award className="w-3.5 h-3.5 text-[#1E88E5]" />
              BRCGS & ISO 9001:2015 Certified Manufacturing
            </span>
            <a href="mailto:sheetalapetindustries@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#1E88E5]" />
              sheetalapetindustries@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <span>15+ Plants Across India</span>
            <span>•</span>
            <a href="tel:+917024806103" className="text-white font-semibold flex items-center gap-1 hover:text-[#1E88E5]">
              <PhoneCall className="w-3 h-3 text-green-400" />
              7024806103, 8319993571
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between max-w-[1280px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-[10px] bg-gradient-to-br from-[#0A4EA3] to-[#123B72] flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition-transform">
            SPI
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-[#111827] tracking-tight leading-none">SHEETAL PET</span>
            <span className="text-[10px] font-bold tracking-[0.18em] text-[#0A4EA3] uppercase mt-1">PET Preforms & Closures</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-[#0A4EA3] font-bold text-sm">Home</a>
          <a href="#about" className="text-[#4B5563] font-medium hover:text-[#0A4EA3] transition-colors text-sm">About Us</a>
          
          {/* Products Dropdown */}
          <div className="relative group py-2" 
               onMouseEnter={() => setProductsDropdownOpen(true)}
               onMouseLeave={() => setProductsDropdownOpen(false)}>
            <a href="#products" className="text-[#4B5563] font-medium group-hover:text-[#0A4EA3] transition-colors text-sm inline-flex items-center gap-1">
              Products
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
            </a>

            {productsDropdownOpen && (
              <div className="absolute top-full left-0 w-60 bg-white rounded-[12px] shadow-xl border border-gray-100 py-3 animate-fade-in z-50">
                {productLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setProductsDropdownOpen(false)}
                    className="block px-5 py-2.5 text-sm font-medium text-[#374151] hover:bg-blue-50 hover:text-[#0A4EA3] transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#why-choose-us" className="text-[#4B5563] font-medium hover:text-[#0A4EA3] transition-colors text-sm">Our Group</a>
          <a href="#industries" className="text-[#4B5563] font-medium hover:text-[#0A4EA3] transition-colors text-sm">Industries</a>
          <a href="#clients" className="text-[#4B5563] font-medium hover:text-[#0A4EA3] transition-colors text-sm">Gallery</a>
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button 
            variant="primary" 
            size="md" 
            onClick={onOpenQuote}
            className="hidden sm:inline-flex shadow-md hover:shadow-lg"
          >
            Get in Touch
          </Button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#111827] hover:text-[#0A4EA3] rounded-[8px] hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-6 py-6 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-[#0A4EA3] font-bold text-base py-1">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-[#111827] font-medium text-base py-1 border-t border-gray-50">About Us</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-[#111827] font-medium text-base py-1 border-t border-gray-50">Products</a>
            <a href="#why-choose-us" onClick={() => setMobileMenuOpen(false)} className="text-[#111827] font-medium text-base py-1 border-t border-gray-50">Our Group</a>
            <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="text-[#111827] font-medium text-base py-1 border-t border-gray-50">Industries</a>
            <a href="#clients" onClick={() => setMobileMenuOpen(false)} className="text-[#111827] font-medium text-base py-1 border-t border-gray-50">Gallery</a>
            
            <div className="pt-4 border-t border-gray-100">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
