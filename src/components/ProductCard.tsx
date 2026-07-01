import React from 'react';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  desc: string;
  image: string;
  badge?: string;
  badgeColor?: string;
  specs: string[];
}

interface ProductCardProps {
  product: ProductItem;
  onInquire: (productTitle: string) => void;
}

export default function ProductCard({ product, onInquire }: ProductCardProps) {
  return (
    <div className="bg-white rounded-[18px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(10,78,163,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group">
      {/* Image container */}
      <div className="relative h-[220px] sm:h-[240px] w-full bg-gray-50 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3.5 left-3.5 bg-[#0A4EA3] text-white px-3 py-1 rounded-[6px] text-[10px] font-bold uppercase tracking-wider shadow-md">
            {product.badge}
          </div>
        )}

        <div className="absolute bottom-3.5 right-3.5 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-[6px] text-[10px] font-bold text-[#111827] flex items-center gap-1 shadow-sm">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span>Food Grade</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A4EA3] block mb-1">
            {product.category}
          </span>
          <h3 className="text-xl font-extrabold text-[#111827] mb-2 tracking-tight group-hover:text-[#0A4EA3] transition-colors">
            {product.title}
          </h3>
          <p className="text-xs text-[#6B7280] leading-relaxed mb-4 line-clamp-3">
            {product.desc}
          </p>

          {/* Micro specs chips */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {product.specs.map((sp, idx) => (
              <span key={idx} className="bg-gray-100 text-[#374151] px-2 py-0.5 rounded text-[10px] font-medium">
                {sp}
              </span>
            ))}
          </div>
        </div>

        <button 
          onClick={() => onInquire(product.title)}
          className="w-full py-2.5 px-4 bg-gray-50 hover:bg-[#0A4EA3] text-[#111827] hover:text-white rounded-[10px] font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 group/btn border border-gray-200/80 hover:border-[#0A4EA3]"
        >
          <span>Request Quote & Samples</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
