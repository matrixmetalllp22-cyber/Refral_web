import React from "react";

/**
 * HeroSection - full-viewport hero similar to the referenced site
 * Replace /src/assets/hero.jpg with the actual hero image you want to use.
 */
export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/src/assets/hero.jpg')" }}
      aria-label="Hero"
    >
      {/* dark overlay */}
      <div className="absolute inset-0 hero-overlay"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl text-left">
          <p className="text-sm uppercase tracking-widest text-gray-200">JSW MI</p>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Creating A Value Paradigm
          </h1>

          <p className="mt-4 text-gray-200 text-lg md:text-xl max-w-2xl">
            Serving a wide domain spectrum — world-class processes & efficient operations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-md bg-brand text-white font-medium shadow hover:bg-orange-700 transition"
            >
              Get in Touch
            </a>

            <a
              href="#services"
              className="inline-block px-6 py-3 rounded-md border border-white/30 text-white/90 hover:bg-white/10 transition"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* optional decorative SVG or shape bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        {/* you can place an SVG wave here if desired */}
      </div>
    </section>
  );
}
