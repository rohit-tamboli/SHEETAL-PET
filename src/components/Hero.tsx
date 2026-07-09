import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface HeroProps {
  onOpenQuote: () => void;
}

const slides = [
  {
    badge: "COMPLETE PRODUCT RANGE",
    title: "India's Leading PET Preform Manufacturers",
    highlight: "PET Preform Manufacturers",
    subtitle:
      "From preforms to finished containers, we deliver high-quality sustainable packaging solutions that meet international standards.",
    ctaText: "Explore Products",
    ctaHref: "#products",
    image:
      "https://res.cloudinary.com/dmnmpn69n/image/upload/f_auto,q_auto,c_fill,w_1920,h_1080/v1782903469/Jul_1_2026_04_26_55_PM_ih8ohs.png",
    type: "image",
    imageAlt: "Manufacturing plant",
  },
  {
    badge: "PRECISION MANUFACTURING",
    title: "Advanced PET Manufacturing Technology",
    highlight: "PET Manufacturing Technology",
    subtitle:
      "Advanced machinery and high-speed production systems engineered for consistent quality and superior packaging performance.",
    ctaText: "Watch Process",
    ctaHref: "#technology",
    image:
      "https://res.cloudinary.com/dmnmpn69n/video/upload/v1783423698/v1_bthldw.mp4",
    type: "video",
    imageAlt: "PET manufacturing process",
  },
  {
    badge: "STATE-OF-THE-ART TECHNOLOGY",
    title: "Precision Manufacturing at Scale",
    highlight: "Manufacturing at Scale",
    subtitle:
      "High-speed production, strict quality control, and advanced automation delivering reliable packaging solutions.",
    ctaText: "Explore Technology",
    ctaHref: "#technology",
    image:
      "https://res.cloudinary.com/dmnmpn69n/video/upload/v1783423698/v_gflbm5.mp4",
    type: "video",
    imageAlt: "Industrial automation",
  },
  {
    badge: "TRUSTED PACKAGING PARTNER",
    title: "Reliable Packaging Across Industries",
    highlight: "Across Industries",
    subtitle:
      "Serving beverage, pharmaceutical, FMCG, food, and industrial sectors with dependable high-volume packaging solutions.",
    ctaText: "Contact Us",
    ctaHref: "#contact",
    image:
      "https://res.cloudinary.com/dmnmpn69n/video/upload/v1783422083/PET_3_l1wczk.mp4",
    type: "video",
    imageAlt: "PET packaging production",
  },
];

export default function Hero({ onOpenQuote }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slide = slides[currentSlide];

  const goToPrevious = () => {
    setCurrentSlide(
      (previous) => (previous - 1 + slides.length) % slides.length
    );
  };

  const goToNext = () => {
    setCurrentSlide((previous) => (previous + 1) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(goToNext, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const renderTitle = () => {
    const index = slide.title.indexOf(slide.highlight);

    if (index === -1) {
      return slide.title;
    }

    const before = slide.title.slice(0, index);

    return (
      <>
        {before && <span>{before}</span>}

        <span
          className="
            block
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-[#6FA8FF]
            via-[#9BC2FF]
            to-white
          "
        >
          {slide.highlight}
        </span>
      </>
    );
  };

  return (
    <section
      className="
        relative
        isolate
        w-full
        h-[100svh]
        min-h-[620px]
        lg:h-[100dvh]
        lg:min-h-[700px]
        overflow-hidden
        bg-[#06142B]
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* BACKGROUND MEDIA */}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.75,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 7,
              ease: "linear",
            }}
            className="absolute inset-0"
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
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />
            ) : (
              <img
                src={slide.image}
                alt={slide.imageAlt}
                fetchPriority={currentSlide === 0 ? "high" : "auto"}
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />
            )}
          </motion.div>

          {/* Global Overlay */}

          <div className="absolute inset-0 bg-[#031027]/50" />

          {/* Desktop Left Gradient */}

          <div
            className="
              absolute
              inset-0
              hidden
              lg:block
              bg-gradient-to-r
              from-[#04142F]/95
              via-[#04142F]/65
              to-[#04142F]/10
            "
          />

          {/* Desktop Bottom Gradient */}

          <div
            className="
              absolute
              inset-0
              hidden
              lg:block
              bg-gradient-to-t
              from-[#031027]/70
              via-transparent
              to-[#031027]/15
            "
          />

          {/* Mobile Overlay */}

          <div
            className="
              absolute
              inset-0
              lg:hidden
              bg-gradient-to-b
              from-[#031027]/25
              via-[#031027]/20
              to-[#031027]/95
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              h-[72%]
              lg:hidden
              bg-gradient-to-t
              from-[#031027]
              via-[#031027]/70
              to-transparent
            "
          />
        </motion.div>
      </AnimatePresence>

      {/* DECORATIVE GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/3
          z-[1]
          hidden
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-600/10
          blur-[140px]
          lg:block
        "
      />

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-[1440px]
          items-end
          px-5
          pb-[100px]
          pt-28

          sm:px-8
          sm:pb-28

          md:px-12

          lg:items-center
          lg:px-20
          lg:pb-0
          lg:pt-20

          xl:px-24
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="
              w-full
              max-w-[720px]
            "
          >
            {/* Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.18,
              }}
              className="
                mb-4
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-white/[0.08]
                px-3
                py-1.5
                backdrop-blur-md

                sm:mb-5
                sm:px-4
                sm:py-2

                lg:mb-6
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-[#69A3FF]
                  shadow-[0_0_12px_rgba(105,163,255,0.9)]
                  animate-pulse
                "
              />

              <span
                className="
                  truncate
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#91B9FF]

                  sm:text-[11px]
                "
              >
                {slide.badge}
              </span>
            </motion.div>

            {/* TITLE */}

            <h1
              className="
                max-w-[350px]
                text-[36px]
                font-extrabold
                leading-[1.03]
                tracking-[-0.045em]
                text-white
                drop-shadow-lg

                min-[390px]:max-w-[390px]
                min-[390px]:text-[40px]

                sm:max-w-[620px]
                sm:text-[52px]
                sm:leading-[1.04]

                lg:max-w-[780px]
                lg:text-[64px]

                xl:text-[72px]
              "
            >
              {renderTitle()}
            </h1>

            {/* SUBTITLE */}

            <p
              className="
                mt-5
                max-w-[355px]
                text-[14px]
                font-normal
                leading-[1.65]
                text-white/75

                sm:mt-6
                sm:max-w-[580px]
                sm:text-[17px]

                lg:mt-7
                lg:max-w-[650px]
                lg:text-[19px]
                lg:leading-[1.7]
              "
            >
              {slide.subtitle}
            </p>

            {/* CTA AREA */}

            <div
              className="
                mt-7
                flex
                items-center
                gap-4

                sm:mt-8

                lg:mt-10
              "
            >
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
                  shadow-[0_10px_35px_rgba(29,78,216,0.35)]
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#2459E0]
                  hover:shadow-[0_14px_40px_rgba(29,78,216,0.45)]

                  active:translate-y-0
                  active:scale-[0.98]

                  sm:h-13
                  sm:px-7
                  sm:text-base

                  lg:h-14
                  lg:px-8
                "
              >
                <span>{slide.ctaText}</span>

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1

                    sm:h-5
                    sm:w-5
                  "
                />
              </a>

              {/* Optional Quote CTA - Desktop */}

              <button
                type="button"
                onClick={onOpenQuote}
                className="
                  hidden
                  h-14
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/25
                  bg-white/[0.07]
                  px-7
                  text-base
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300

                  hover:bg-white/[0.14]

                  lg:inline-flex
                "
              >
                Request Quote
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DESKTOP ARROWS */}

      <button
        type="button"
        onClick={goToPrevious}
        aria-label="Previous slide"
        className="
          absolute
          left-5
          top-1/2
          z-20
          hidden
          h-11
          w-11
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-black/20
          text-white
          backdrop-blur-md
          transition-all
          duration-300

          hover:scale-105
          hover:bg-white
          hover:text-[#081C3A]

          md:flex

          lg:left-7
          lg:h-13
          lg:w-13
        "
      >
        <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
      </button>

      <button
        type="button"
        onClick={goToNext}
        aria-label="Next slide"
        className="
          absolute
          right-5
          top-1/2
          z-20
          hidden
          h-11
          w-11
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-black/20
          text-white
          backdrop-blur-md
          transition-all
          duration-300

          hover:scale-105
          hover:bg-white
          hover:text-[#081C3A]

          md:flex

          lg:right-7
          lg:h-13
          lg:w-13
        "
      >
        <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
      </button>

      {/* BOTTOM NAVIGATION */}

      <div
        className="
          absolute
          bottom-7
          left-5
          right-5
          z-20
          flex
          items-center
          justify-between

          sm:bottom-9

          md:left-1/2
          md:right-auto
          md:-translate-x-1/2
          md:justify-center
        "
      >
        {/* Pagination */}

        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-black/15
            px-3
            py-2
            backdrop-blur-sm

            md:bg-transparent
            md:border-0
            md:px-0
          "
        >
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={
                currentSlide === index ? "true" : undefined
              }
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300

                md:h-2

                ${
                  currentSlide === index
                    ? "w-8 bg-[#69A3FF] md:w-10"
                    : "w-2 bg-white/35 hover:bg-white/70 md:w-5"
                }
              `}
            />
          ))}
        </div>

        {/* Mobile Counter */}

        <div
          className="
            flex
            items-center
            gap-1
            rounded-full
            border
            border-white/10
            bg-black/15
            px-3
            py-2
            text-[11px]
            font-medium
            tracking-wider
            text-white
            backdrop-blur-sm

            md:hidden
          "
        >
          <span>
            {String(currentSlide + 1).padStart(2, "0")}
          </span>

          <span className="text-white/35">/</span>

          <span className="text-white/50">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}