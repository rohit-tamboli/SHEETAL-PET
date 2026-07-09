import React from "react";
import {
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Factory,
  Send,
  Zap,
} from "lucide-react";

interface CTAProps {
  onOpenQuote: () => void;
}

export default function CTA({ onOpenQuote }: CTAProps) {
  return (
    <section
      className="
        relative overflow-hidden text-white
        bg-gradient-to-br
        from-[#071F42]
        via-[#0A4EA3]
        to-[#123B72]

        px-4 py-12
        sm:px-6 sm:py-16
        lg:py-20
      "
    >
      {/* Background Grid */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(#ffffff_1px,transparent_1px)]
          [background-size:20px_20px]
          opacity-[0.10]
          sm:opacity-15
        "
      />

      {/* Mobile Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-24 -top-24
          h-72 w-72
          rounded-full
          bg-blue-300/20
          blur-[100px]

          lg:hidden
        "
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div
          className="
            overflow-hidden
            rounded-[22px]
            border border-white/15
            bg-white/[0.08]
            p-5
            shadow-2xl
            backdrop-blur-lg

            min-[390px]:p-6

            sm:rounded-[28px]
            sm:p-10

            lg:p-16
          "
        >
          <div
            className="
              grid grid-cols-1
              gap-8
              items-center

              sm:gap-10

              lg:grid-cols-12
              lg:gap-12
            "
          >
            {/* LEFT CONTENT */}

            <div className="lg:col-span-8">
              {/* Badge */}

              <div
                className="
                  mb-4
                  inline-flex
                  max-w-full
                  items-center
                  gap-2
                  rounded-full
                  border border-white/10
                  bg-white/10
                  px-3
                  py-1.5
                  backdrop-blur-md

                  sm:mb-6
                  sm:px-3.5
                "
              >
                <Factory className="h-3.5 w-3.5 shrink-0 text-white sm:h-4 sm:w-4" />

                <span
                  className="
                    truncate
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#8AC8FF]

                    sm:text-xs
                    sm:tracking-widest
                  "
                >
                  Pan-India Manufacturing Capacity
                </span>
              </div>

              {/* Heading */}

              <h2
                className="
                  max-w-[350px]
                  text-[30px]
                  font-black
                  leading-[1.08]
                  tracking-[-0.035em]
                  text-white

                  min-[390px]:max-w-[380px]
                  min-[390px]:text-[34px]

                  sm:max-w-3xl
                  sm:text-4xl
                  sm:leading-[1.12]

                  lg:text-5xl
                "
              >
                Ready to Upgrade Your{" "}
                <span
                  className="
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-[#7CC4FF]
                    to-[#B9E2FF]
                  "
                >
                  Packaging Line Efficiency?
                </span>
              </h2>

              {/* Description */}

              <p
                className="
                  mt-5
                  max-w-[620px]
                  text-[14px]
                  leading-[1.65]
                  text-blue-100/85

                  sm:mt-6
                  sm:text-base

                  lg:text-lg
                  lg:leading-relaxed
                "
              >
                Partner with Sheetal Pet Industries for precision PET
                preforms, recyclable bottles, and high-speed SACMI closures.
                Connect with our technical team for custom neck finishes and
                product feasibility.
              </p>

              {/* BUTTONS */}

              <div
                className="
                  mt-7
                  flex
                  w-full
                  flex-col
                  gap-3

                  sm:mt-8
                  sm:w-auto
                  sm:flex-row
                  sm:flex-wrap
                  sm:items-center
                  sm:gap-4
                "
              >
                {/* Primary CTA */}

                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="
                    group
                    flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-white
                    px-4
                    text-[13px]
                    font-extrabold
                    text-[#0A4EA3]
                    shadow-xl
                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:bg-blue-50

                    active:translate-y-0
                    active:scale-[0.98]

                    sm:h-14
                    sm:w-auto
                    sm:px-7
                    sm:text-base
                  "
                >
                  <Send className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />

                  <span className="sm:hidden">
                    Request Specification
                  </span>

                  <span className="hidden sm:inline">
                    Request Custom Specification
                  </span>

                  <ArrowRight
                    className="
                      h-4 w-4
                      shrink-0
                      transition-transform
                      duration-300
                      group-hover:translate-x-1

                      sm:h-5 sm:w-5
                    "
                  />
                </button>

                {/* Phone CTA */}

                <a
                  href="tel:+911145678900"
                  className="
                    flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    gap-2.5
                    rounded-xl
                    border border-white/30
                    bg-white/[0.06]
                    px-4
                    text-sm
                    font-bold
                    text-white
                    backdrop-blur-sm
                    transition-all
                    duration-300

                    hover:border-white/60
                    hover:bg-white/[0.12]

                    active:scale-[0.98]

                    sm:h-14
                    sm:w-auto
                    sm:px-7
                    sm:text-base
                  "
                >
                  <PhoneCall className="h-4 w-4 shrink-0 text-green-400 sm:h-5 sm:w-5" />

                  <span>7024806103</span>
                </a>
              </div>
            </div>

            {/* TRUST COLUMN */}

            <div
              className="
                grid
                grid-cols-1
                gap-3

                sm:grid-cols-2
                sm:gap-4

                lg:col-span-4
                lg:grid-cols-1
                lg:gap-0
                lg:rounded-[20px]
                lg:border
                lg:border-white/15
                lg:bg-black/25
                lg:p-8
                lg:backdrop-blur-md
              "
            >
              {/* Trust Item 1 */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                  rounded-2xl
                  border border-white/10
                  bg-black/20
                  p-4
                  backdrop-blur-sm

                  sm:p-5

                  lg:rounded-none
                  lg:border-0
                  lg:bg-transparent
                  lg:p-0
                  lg:backdrop-blur-none
                "
              >
                <div
                  className="
                    flex
                    h-10 w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-green-500/15
                    text-green-400
                  "
                >
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white">
                    BRCGS Grade A Hygiene
                  </h4>

                  <p
                    className="
                      mt-1.5
                      text-[12px]
                      leading-[1.55]
                      text-white/65

                      sm:text-[13px]
                    "
                  >
                    Certified cleanroom manufacturing aligned with global food
                    safety benchmarks.
                  </p>
                </div>
              </div>

              {/* Trust Item 2 */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                  rounded-2xl
                  border border-white/10
                  bg-black/20
                  p-4
                  backdrop-blur-sm

                  sm:p-5

                  lg:mt-6
                  lg:rounded-none
                  lg:border-x-0
                  lg:border-b-0
                  lg:border-t
                  lg:border-white/10
                  lg:bg-transparent
                  lg:px-0
                  lg:pb-0
                  lg:pt-6
                  lg:backdrop-blur-none
                "
              >
                <div
                  className="
                    flex
                    h-10 w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#64B5F6]/15
                    text-[#64B5F6]
                  "
                >
                  <Zap className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white">
                    4-Hour Engineering Turnaround
                  </h4>

                  <p
                    className="
                      mt-1.5
                      text-[12px]
                      leading-[1.55]
                      text-white/65

                      sm:text-[13px]
                    "
                  >
                    Submit your bottle drawings or specifications and receive
                    fast technical feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}