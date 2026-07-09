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
    image: "https://res.cloudinary.com/dmnmpn69n/video/upload/v1783423698/v1_bthldw.mp4",
    type: "video",
    imageAlt: "Manufacturing process video",
    stats: { rate: "85,000", unit: "PPH", recyclable: "100%" }
  },
  {
    badge: "STATE-OF-THE-ART TECH",
    title: "State-of-the-Art Manufacturing Technology",
    subtitle: "High-speed production, strict quality control, and advanced automation for superior packaging.",
    ctaText: "Explore Technology",
    ctaHref: "#technology",
    image: "https://res.cloudinary.com/dmnmpn69n/video/upload/v1783423698/v_gflbm5.mp4",
    type: "video",
    imageAlt: "Industrial automation video",
    stats: { rate: "85,000", unit: "PPH", recyclable: "100%" }
  },
  {
    badge: "TRUSTED PARTNER",
    title: "Trusted Packaging Partner Across Industries",
    subtitle: "Serving beverage, pharmaceutical, FMCG, food, and industrial sectors with reliable, high-volume packaging solutions.",
    ctaText: "Contact Us",
    ctaHref: "#contact",
    image: "https://res.cloudinary.com/dmnmpn69n/video/upload/v1783422083/PET_3_l1wczk.mp4",
    type: "video",
    imageAlt: "Distribution center video",
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
    className="relative w-full h-[100svh] min-h-[620px] lg:h-[100dvh] overflow-hidden"
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
  >
    {/* Background */}
    <AnimatePresence mode="wait">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "linear" }}
          className="w-full h-full"
        >
          {slide.type === "video" ? (
            <video
              src={slide.image}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="
                w-full h-full
                object-cover
                object-center
                sm:object-center
              "
            />
          ) : (
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className="
                w-full h-full
                object-cover
                object-center
              "
            />
          )}
        </motion.div>

        {/* Mobile-friendly overlays */}
        <div className="absolute inset-0 bg-[#06152D]/55 sm:bg-[#07142D]/60" />

        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-[#06152D]/35
            via-[#06152D]/20
            to-[#06152D]/95
            sm:bg-gradient-to-t
            sm:from-[#081C3A]
            sm:via-transparent
            sm:to-transparent
          "
        />

        {/* Extra mobile gradient behind content */}
        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#06152D] via-[#06152D]/60 to-transparent sm:hidden" />
      </motion.div>
    </AnimatePresence>

    {/* Hero Content */}
    <div
      className="
        relative z-10
        mx-auto
        flex h-full
        w-full
        max-w-7xl
        items-end
        px-5
        pb-24
        pt-24

        sm:items-center
        sm:px-8
        sm:pb-20
        sm:pt-24

        lg:px-12
        lg:pb-0
        lg:pt-0
      "
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div
            className="
              flex w-full max-w-3xl
              flex-col
              items-start
              text-left

              sm:items-center
              sm:text-center

              lg:items-start
              lg:text-left
            "
          >
            {/* Badge */}
            <div
              className="
                mb-4
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-full
                border border-white/20
                bg-white/10
                px-3 py-1.5
                text-[9px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-blue-300
                backdrop-blur-md

                sm:mb-6
                sm:px-4
                sm:py-2
                sm:text-xs
              "
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400 animate-pulse" />

              <span className="truncate">
                {slide.badge}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                mb-4
                max-w-[340px]
                text-[34px]
                font-extrabold
                leading-[1.05]
                tracking-[-0.035em]
                text-white
                drop-shadow-lg

                min-[390px]:max-w-[370px]
                min-[390px]:text-[38px]

                sm:mb-6
                sm:max-w-3xl
                sm:text-5xl
                sm:leading-[1.08]

                lg:text-6xl
              "
            >
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p
              className="
                mb-6
                max-w-[350px]
                text-[14px]
                font-normal
                leading-6
                text-white/80
                drop-shadow-md

                sm:mb-8
                sm:max-w-2xl
                sm:text-lg
                sm:leading-relaxed

                lg:text-xl
              "
            >
              {slide.subtitle}
            </p>

            {/* CTA */}
            <a
              href={slide.ctaHref}
              className="
                group
                inline-flex
                h-11
                items-center
                justify-center
                gap-2.5
                rounded-xl
                bg-[#1D4ED8]
                px-5
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_25px_rgba(29,78,216,0.35)]
                transition-all
                duration-300

                hover:bg-[#1E40AF]
                active:scale-[0.97]

                sm:h-auto
                sm:px-8
                sm:py-4
                sm:text-base

                lg:px-10
                lg:py-5
                lg:text-lg
                lg:hover:scale-105
              "
            >
              <span>{slide.ctaText}</span>

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

    {/* Desktop/Tablet Navigation Arrows */}
    <button
      type="button"
      aria-label="Previous slide"
      onClick={() =>
        setCurrentSlide(
          (prev) => (prev - 1 + slides.length) % slides.length
        )
      }
      className="
        absolute
        left-6
        top-1/2
        z-20
        hidden
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        bg-white
        text-[#081C3A]
        shadow-xl
        transition-transform
        hover:scale-110

        sm:flex
        sm:h-12
        sm:w-12

        lg:h-16
        lg:w-16
      "
    >
      <ChevronLeft className="h-6 w-6 lg:h-8 lg:w-8" />
    </button>

    <button
      type="button"
      aria-label="Next slide"
      onClick={() =>
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }
      className="
        absolute
        right-6
        top-1/2
        z-20
        hidden
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        bg-white
        text-[#081C3A]
        shadow-xl
        transition-transform
        hover:scale-110

        sm:flex
        sm:h-12
        sm:w-12

        lg:h-16
        lg:w-16
      "
    >
      <ChevronRight className="h-6 w-6 lg:h-8 lg:w-8" />
    </button>

    {/* Mobile Slide Counter */}
    <div
      className="
        absolute
        bottom-7
        right-5
        z-20
        flex
        items-center
        gap-1
        rounded-full
        border border-white/15
        bg-black/20
        px-3
        py-1.5
        text-xs
        font-medium
        text-white
        backdrop-blur-md

        sm:hidden
      "
    >
      <span>{String(currentSlide + 1).padStart(2, "0")}</span>

      <span className="text-white/40">/</span>

      <span className="text-white/50">
        {String(slides.length).padStart(2, "0")}
      </span>
    </div>

    {/* Pagination */}
    <div
      className="
        absolute
        bottom-8
        left-5
        z-20
        flex
        items-center
        gap-2

        sm:bottom-10
        sm:left-0
        sm:right-0
        sm:justify-center
        sm:gap-3
      "
    >
      {slides.map((_, idx) => (
        <button
          key={idx}
          type="button"
          aria-label={`Go to slide ${idx + 1}`}
          onClick={() => setCurrentSlide(idx)}
          className={`
            h-1.5
            rounded-full
            transition-all
            duration-300

            sm:h-3
            sm:w-3

            ${
              currentSlide === idx
                ? "w-8 bg-blue-400 sm:w-3 sm:scale-125"
                : "w-2 bg-white/40 hover:bg-white/70 sm:w-3 sm:bg-gray-500"
            }
          `}
        />
      ))}
    </div>
  </section>
);
}
