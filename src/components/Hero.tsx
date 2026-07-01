import React, { useState, useEffect } from 'react';
import { ArrowRight, Recycle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Button from './Button';

interface HeroProps {
  onOpenQuote: () => void;
}

const slides = [
  {
    badge: "COMPLETE PRODUCT RANGE",
    title: "India's Leading PET Preform Manufacturers",
    subtitle: "From preforms to finished containers, we deliver high-quality sustainable packaging solutions that meet international standards.",
    ctaText: "Explore Products",
    ctaHref: "#products",
    image: "https://res.cloudinary.com/dmnmpn69n/image/upload/f_auto,q_auto,c_fill,w_1920,h_1080/v1782903469/Jul_1_2026_04_26_55_PM_ih8ohs.png", // Manufacturing plant
    type: "image",
    imageAlt: "Manufacturing plant",
    stats: { rate: "72,000", unit: "PPH", recyclable: "100%" }
  },
  {
    badge: "PRECISION MANUFACTURING",
    title: "State-of-the-Art PET Technology",
    subtitle: "Advanced machinery and high-speed production for superior packaging results.",
    ctaText: "Watch Process",
    ctaHref: "#technology",
    image: "https://images.unsplash.com/photo-1565515024467-f49553f19106?auto=format&fit=crop&w=2000&q=80", // Production process
    type: "image",
    imageAlt: "Manufacturing process",
    stats: { rate: "85,000", unit: "PPH", recyclable: "100%" }
  },
  {
    badge: "SUSTAINABLE PACKAGING",
    title: "Sustainable Packaging for Modern Industries",
    subtitle: "Eco-friendly PET packaging solutions trusted by leading brands worldwide with advanced lightweighting.",
    ctaText: "Discover More",
    ctaHref: "#why-choose-us",
    image: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Sustainable factory",
    stats: { rate: "68,000", unit: "PPH", recyclable: "100%" }
  },
  {
    badge: "STATE-OF-THE-ART TECH",
    title: "State-of-the-Art Manufacturing Technology",
    subtitle: "High-speed production, strict quality control, and advanced automation for superior packaging.",
    ctaText: "Explore Technology",
    ctaHref: "#technology",
    image: "https://images.unsplash.com/photo-1537462715879-361eeb6b1c48?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Industrial automation",
    stats: { rate: "85,000", unit: "PPH", recyclable: "100%" }
  },
  {
    badge: "TRUSTED PARTNER",
    title: "Trusted Packaging Partner Across Industries",
    subtitle: "Serving beverage, pharmaceutical, FMCG, food, and industrial sectors with reliable, high-volume packaging solutions.",
    ctaText: "Contact Us",
    ctaHref: "#contact",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Distribution center",
    stats: { rate: "75,000", unit: "PPH", recyclable: "100%" }
  }
];

export default function Hero({ onOpenQuote }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, currentSlide]);

  const slide = slides[currentSlide];

  return (
    <section 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image/Video */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "linear" }}
            className="w-full h-full"
          >
            {slide.type === 'video' ? (
              <video
                src={slide.image}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img 
                src={slide.image} 
                alt={slide.imageAlt}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
          <div className="absolute inset-0 bg-[rgba(7,20,45,0.6)] mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#081C3A] via-transparent to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container mx-auto h-full flex items-center px-4 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-12 items-center w-full"
          >
            {/* Left Content */}
            <div className="flex flex-col items-center lg:items-start w-full max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-[#4F8DFF] text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4F8DFF] animate-pulse"></div>
                <span>{slide.badge}</span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-8 drop-shadow-lg">
                {slide.title.split('\n')[0]}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">{slide.title.split('\n')[1] || "Preform Manufacturers"}</span>
              </h1>

              <p className="text-gray-100 text-lg md:text-xl font-light leading-relaxed mb-10 drop-shadow-md">
                {slide.subtitle}
              </p>

              <a 
                href={slide.ctaHref}
                className="group bg-[#1D4ED8] hover:bg-[#1E40AF] text-white px-4 py-2.5 sm:px-10 sm:py-5 rounded-[12px] font-semibold text-sm sm:text-lg transition-all duration-300 shadow-[0_10px_30px_rgba(29,78,216,0.4)] flex items-center gap-3 hover:scale-105 mx-auto lg:mx-0"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <button 
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-white text-[#081C3A] flex items-center justify-center hover:scale-110 transition-transform shadow-xl z-20"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <button 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-white text-[#081C3A] flex items-center justify-center hover:scale-110 transition-transform shadow-xl z-20"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Bottom Pagination */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'bg-[#4F8DFF] scale-125' : 'bg-gray-500 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
