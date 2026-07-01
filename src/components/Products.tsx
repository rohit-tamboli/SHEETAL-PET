import React from 'react';
import { ArrowRight, Package } from 'lucide-react';
import ProductCard, { ProductItem } from './ProductCard';

interface ProductsProps {
  onOpenQuote: () => void;
}

export default function Products({ onOpenQuote }: ProductsProps) {
  const productList: ProductItem[] = [
    {
      id: "preforms",
      title: "PET Preforms",
      category: "RIGID PACKAGING",
      desc: "High-clarity virgin preforms for mineral water, CSD, juices, and edible oils. Available in PCO 1881, Alaska 26.7mm, and CTC finishes.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      badge: "Best Seller",
      specs: ["9.5g to 750g", "PCO 1881 / Alaska", "Low AA Level"]
    },
    {
      id: "closures",
      title: "Caps & Closures",
      category: "PRECISION CLOSURES",
      desc: "SACMI compression molded closures engineered for precise torque, tamper-evident safety, and secure gas venting for carbonated beverages.",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80",
      badge: "Top Rated",
      specs: ["26.7mm / 29/25", "CSD & Water", "Promo Laser Coding"]
    },
    {
      id: "containers",
      title: "Bottles & Containers",
      category: "BLOW MOLDED JARS",
      desc: "Crystal-clear stretch blow molded jars and handles for edible oils, confectionery, cosmetics, and bulk 15L/20L water containers.",
      image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=800&q=80",
      badge: "Popular",
      specs: ["100ml to 20 Litres", "Drop Resistant", "Custom Embossing"]
    },
    {
      id: "flexible",
      title: "Flexible Packaging",
      category: "MULTI-LAYER LAMINATES",
      desc: "High-barrier printed pouches and shrink wraps delivering maximum shelf life and striking visual branding for retail food shelves.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      badge: "New Arrival",
      specs: ["9-Color Gravure", "High Barrier", "Puncture Resistant"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-[1280px]">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0A4EA3] text-xs font-bold uppercase tracking-wider mb-3">
              <Package className="w-3.5 h-3.5" />
              <span>Catalog Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
              Featured <span className="text-[#0A4EA3]">Products</span>
            </h2>
          </div>

          <button 
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 text-[#0A4EA3] font-bold text-sm hover:text-[#123B72] group"
          >
            <span>View All Products & Specifications</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productList.map((prod) => (
            <ProductCard key={prod.id} product={prod} onInquire={onOpenQuote} />
          ))}
        </div>

      </div>
    </section>
  );
}
