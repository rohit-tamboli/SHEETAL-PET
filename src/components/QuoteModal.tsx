import React, { useState } from 'react';
import { X, CheckCircle2, Send, Box, Layers, Cpu } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: 'Food & Beverage',
    volume: '50,000 - 100,000 units/mo',
    machineType: 'Automated Cartoning',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-[14px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] w-full max-w-2xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#0A4EA3] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Box className="w-6 h-6 text-[#1E88E5]" />
            <div>
              <h3 className="text-xl font-bold">Request Engineering Consultation</h3>
              <p className="text-xs text-blue-100 mt-0.5">Custom packaging line quote & CAD feasibility</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#111827]">Quote Request Received</h4>
              <p className="text-[#6B7280] max-w-md text-sm">
                Thank you, <span className="font-semibold text-[#111827]">{formData.name || 'Partner'}</span>. Our senior systems engineer will review your specs for <span className="font-semibold text-[#0A4EA3]">{formData.company || 'your facility'}</span> and contact you within 4 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-1.5">Full Name *</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-[8px] border border-gray-200 text-sm focus:outline-none focus:border-[#0A4EA3] focus:ring-1 focus:ring-[#0A4EA3]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-1.5">Company Name *</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Vance Global Logistics"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-[8px] border border-gray-200 text-sm focus:outline-none focus:border-[#0A4EA3] focus:ring-1 focus:ring-[#0A4EA3]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-1.5">Business Email *</label>
                  <input 
                    required
                    type="email" 
                    placeholder="m.vance@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-[8px] border border-gray-200 text-sm focus:outline-none focus:border-[#0A4EA3] focus:ring-1 focus:ring-[#0A4EA3]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-1.5">Phone Number *</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+1 (555) 234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-[8px] border border-gray-200 text-sm focus:outline-none focus:border-[#0A4EA3] focus:ring-1 focus:ring-[#0A4EA3]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-1.5">Target Industry</label>
                  <select 
                    value={formData.industry}
                    onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    className="w-full px-3 py-2.5 rounded-[8px] border border-gray-200 text-sm focus:outline-none focus:border-[#0A4EA3] bg-white"
                  >
                    <option>Food & Beverage</option>
                    <option>Pharmaceuticals</option>
                    <option>Cosmetics & Care</option>
                    <option>E-Commerce & Retail</option>
                    <option>Chemicals & Industrial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-1.5">Monthly Volume</label>
                  <select 
                    value={formData.volume}
                    onChange={(e) => setFormData({...formData, volume: e.target.value})}
                    className="w-full px-3 py-2.5 rounded-[8px] border border-gray-200 text-sm focus:outline-none focus:border-[#0A4EA3] bg-white"
                  >
                    <option>&lt; 50,000 units/mo</option>
                    <option>50,000 - 250,000 units/mo</option>
                    <option>250,000 - 1M units/mo</option>
                    <option>1M+ high-speed continuous</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-1.5">System Interest</label>
                  <select 
                    value={formData.machineType}
                    onChange={(e) => setFormData({...formData, machineType: e.target.value})}
                    className="w-full px-3 py-2.5 rounded-[8px] border border-gray-200 text-sm focus:outline-none focus:border-[#0A4EA3] bg-white"
                  >
                    <option>Automated Cartoning</option>
                    <option>Robotic Palletizing</option>
                    <option>Liquid Bottling Lines</option>
                    <option>Flexible Pouch Packers</option>
                    <option>Full Turnkey Factory</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#111827] mb-1.5">Line Specifications / Custom Requirements</label>
                <textarea 
                  rows={3}
                  placeholder="Describe carton dimensions, speed targets (e.g. 120 PPM), or cleanroom compliance..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-[8px] border border-gray-200 text-sm focus:outline-none focus:border-[#0A4EA3]"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button 
                  type="button" 
                  onClick={onClose}
                  className="px-5 py-2.5 text-sm font-medium text-[#6B7280] hover:text-[#111827] transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-[#0A4EA3] text-white px-6 py-2.5 rounded-[8px] font-medium text-sm hover:bg-[#123B72] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  Submit Engineering Spec
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
