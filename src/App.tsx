/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Products from './components/Products';
import Technology from './components/Technology';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Industries from './components/Industries';
import Clients from './components/Clients';
import CTA from './components/CTA';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenQuote = () => {
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col font-sans selection:bg-[#0A4EA3] selection:text-white">
      <Navbar onOpenQuote={handleOpenQuote} />
      <main className="flex-grow">
        <Hero onOpenQuote={handleOpenQuote} />
        <Highlights />
        <About />
        <Products onOpenQuote={handleOpenQuote} />
        <Technology onOpenQuote={handleOpenQuote} />
        <WhyChooseUs />
        <Process />
        <Industries onOpenQuote={handleOpenQuote} />
        <Clients />
        <CTA onOpenQuote={handleOpenQuote} />
      </main>
      <Footer />
      
      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
      />
    </div>
  );
}
