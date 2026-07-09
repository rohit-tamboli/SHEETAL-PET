import React from "react";
import {
  Mail,
  PhoneCall,
  MapPin,
  Linkedin,
  Award,
  ShieldCheck,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";

const navigationLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Products Catalog", href: "#products" },
  { label: "Infrastructure", href: "#technology" },
  { label: "Our Group", href: "#why-choose-us" },
  { label: "Industries", href: "#industries" },
];

const productLinks = [
  "PET Preforms (PCO 1881 / Alaska)",
  "SACMI Compression Closures",
  "Edible Oil Jars & Handles",
  "Pharma Cleanroom Bottles",
  "Multi-Layer Flexible Laminates",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t border-white/[0.06]
        bg-[#0B1220]
        text-sm
        text-gray-400
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#0A4EA3]/10
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-48
          right-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-blue-500/[0.05]
          blur-[140px]
        "
      />

      <div
        className="
          relative z-10
          mx-auto
          w-full
          max-w-[1280px]
          px-5
          pb-7
          pt-12

          sm:px-6
          sm:pb-8
          sm:pt-16

          lg:px-8
          lg:pb-10
          lg:pt-20
        "
      >
        {/* TOP BRAND AREA */}

        <div
          className="
            mb-10
            flex
            flex-col
            gap-6
            border-b border-white/[0.08]
            pb-10

            sm:mb-12
            sm:pb-12

            lg:mb-14
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-2xl">
            {/* Logo */}

            <a
              href="#"
              className="
                inline-flex
                max-w-full
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#0A4EA3]
                  text-base
                  font-black
                  text-white
                  shadow-[0_8px_30px_rgba(10,78,163,0.25)]

                  sm:h-12
                  sm:w-12
                  sm:text-lg
                "
              >
                SPI
              </div>

              <span
                className="
                  min-w-0
                  break-words
                  text-[20px]
                  font-black
                  leading-tight
                  tracking-[-0.03em]
                  text-white

                  min-[390px]:text-[22px]

                  sm:text-2xl
                "
              >
                sheetalapetindustries
              </span>
            </a>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-xl
                text-[13px]
                leading-6
                text-white/55

                sm:text-sm
                sm:leading-7
              "
            >
              Premier manufacturer of high-precision PET preforms,
              containers, bottles, and compression closures, delivering
              reliable packaging solutions for beverage, edible oil, and
              FMCG industries.
            </p>
          </div>

          {/* Certifications */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-2.5

              sm:gap-3

              lg:justify-end
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border border-white/[0.08]
                bg-white/[0.04]
                px-3
                py-2
                text-[11px]
                font-semibold
                text-[#7DB7FF]
              "
            >
              <Award className="h-4 w-4 shrink-0" />

              <span>ISO 9001:2015</span>
            </div>

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border border-white/[0.08]
                bg-white/[0.04]
                px-3
                py-2
                text-[11px]
                font-semibold
                text-green-400
              "
            >
              <ShieldCheck className="h-4 w-4 shrink-0" />

              <span>BRCGS Grade A</span>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER GRID */}

        <div
          className="
            grid
            grid-cols-2
            gap-x-5
            gap-y-10

            sm:gap-x-8
            sm:gap-y-12

            md:grid-cols-2

            lg:grid-cols-12
            lg:gap-10
          "
        >
          {/* NAVIGATION */}

          <div
            className="
              col-span-1
              lg:col-span-2
            "
          >
            <FooterHeading>Navigation</FooterHeading>

            <ul className="mt-5 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="
                      inline-flex
                      min-h-6
                      items-center
                      text-[13px]
                      text-white/55
                      transition-colors
                      duration-200

                      hover:text-white
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}

          <div
            className="
              col-span-1
              lg:col-span-4
            "
          >
            <FooterHeading>Product Range</FooterHeading>

            <ul className="mt-5 space-y-3">
              {productLinks.map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="
                      group
                      inline-flex
                      max-w-full
                      items-start
                      gap-1.5
                      text-[13px]
                      leading-5
                      text-white/55
                      transition-colors
                      duration-200

                      hover:text-white
                    "
                  >
                    <span>{product}</span>

                    <ArrowUpRight
                      className="
                        mt-0.5
                        h-3.5
                        w-3.5
                        shrink-0
                        text-white/30
                        transition-all
                        duration-200

                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-[#64B5F6]
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}

          <div
            className="
              col-span-2
              lg:col-span-4
            "
          >
            <FooterHeading>Corporate Office</FooterHeading>

            <div className="mt-5 space-y-4">
              {/* Address */}

              <div className="flex items-start gap-3">
                <ContactIcon>
                  <MapPin className="h-4 w-4" />
                </ContactIcon>

                <p
                  className="
                    max-w-sm
                    text-[13px]
                    leading-6
                    text-white/55
                  "
                >
                  Gorakhpur Village, Tehsil Pendra Road, District Gaurela
                  Pendra Marwahi, Chhattisgarh, India
                </p>
              </div>

              {/* Phone */}

              <div className="flex items-start gap-3">
                <ContactIcon>
                  <PhoneCall className="h-4 w-4" />
                </ContactIcon>

                <div
                  className="
                    flex
                    flex-col
                    gap-1

                    sm:flex-row
                    sm:flex-wrap
                    sm:gap-x-2
                  "
                >
                  <a
                    href="tel:+918349576332"
                    className="
                      text-[13px]
                      text-white/60
                      transition-colors
                      hover:text-white
                    "
                  >
                    +91 83495 76332
                  </a>

                  <span className="hidden text-white/20 sm:inline">•</span>

                  <a
                    href="tel:+918319993571"
                    className="
                      text-[13px]
                      text-white/60
                      transition-colors
                      hover:text-white
                    "
                  >
                    +91 83199 93571
                  </a>
                </div>
              </div>

              {/* Email */}

              <div className="flex items-start gap-3">
                <ContactIcon>
                  <Mail className="h-4 w-4" />
                </ContactIcon>

                <a
                  href="mailto:sheetalapetindustries@gmail.com"
                  className="
                    min-w-0
                    break-all
                    pt-1
                    text-[13px]
                    leading-5
                    text-white/60
                    transition-colors

                    hover:text-white
                  "
                >
                  sheetalapetindustries@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* COMPANY INFO */}

          <div
            className="
              col-span-2

              lg:col-span-2
            "
          >
            <FooterHeading>Company</FooterHeading>

            <div className="mt-5">
              <div
                className="
                  rounded-xl
                  border border-white/[0.08]
                  bg-white/[0.035]
                  p-4
                "
              >
                <div className="flex items-start gap-2.5">
                  <ShieldCheck
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      text-yellow-400
                    "
                  />

                  <div>
                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.1em]
                        text-white/35
                      "
                    >
                      Paid-up Share Capital <p
                      className="
                        
                        text-[12px]
                        font-bold
                        tracking-tight
                        text-white
                      "
                    >
                      ₹7 Crore
                    </p>
                    </p>

                    
                  </div>
                </div>
              </div>

              {/* Social */}

              <div className="mt-4">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    border border-white/[0.08]
                    bg-white/[0.04]
                    text-white/60
                    transition-all
                    duration-200

                    hover:-translate-y-0.5
                    hover:border-[#0A4EA3]
                    hover:bg-[#0A4EA3]
                    hover:text-white
                  "
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-6
            border-t border-white/[0.08]
            pt-7

            sm:mt-14
            sm:pt-8

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <p
            className="
              max-w-xl
              text-[11px]
              leading-5
              text-white/35

              sm:text-xs
            "
          >
            © {new Date().getFullYear()} Sheetala Pet Industries. All rights
            reserved. PET Preforms & Closures Division.
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-3
              text-[11px]
              text-white/40

              sm:gap-x-6
              sm:text-xs
            "
          >
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Terms of Supply
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              ESG Compliance
            </a>
          </div>
        </div>
      </div>

      {/* SCROLL TO TOP */}

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="
          absolute
          bottom-5
          right-5
          z-20
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border border-white/[0.1]
          bg-white/[0.06]
          text-white/60
          backdrop-blur-md
          transition-all
          duration-300

          hover:-translate-y-1
          hover:bg-[#0A4EA3]
          hover:text-white

          sm:bottom-7
          sm:right-7

          lg:h-11
          lg:w-11
        "
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </footer>
  );
}

/* Reusable Footer Heading */

function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h4
      className="
        text-[11px]
        font-bold
        uppercase
        tracking-[0.16em]
        text-white

        sm:text-xs
      "
    >
      {children}
    </h4>
  );
}

/* Reusable Contact Icon */

function ContactIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        flex
        h-8
        w-8
        shrink-0
        items-center
        justify-center
        rounded-lg
        border border-white/[0.06]
        bg-white/[0.04]
        text-[#64B5F6]
      "
    >
      {children}
    </div>
  );
}