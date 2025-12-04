import React from "react";

export default function Blanking() {
  const capabilities = [
    {
      plant: "Pune plant",
      slitters: [
        "Slitter 1: (0.6 – 6.5 mm) × 1870 mm width (Ts up to 1180MPa)",
        "Slitter 2: (0.2 – 2.3 mm) × 1650 mm width (Ts up to 980MPa)",
      ],
    },
    {
      plant: "Palwal plant",
      slitters: [
        "Slitter 1: (0.25 – 3.2 mm) × 1870 mm width (Ts up to 980MPa)",
        "Slitter 2: (0.60 – 6.5 mm) × 1870 mm width (Ts up to 1180MPa)",
      ],
    },
    {
      plant: "Ahmedabad plant",
      slitters: [
        "Slitter 1: (0.25 – 2.3) × 1870 mm width (Ts up to 1180MPa)",
      ],
    },
    {
      plant: "Chennai plant",
      slitters: [
        "Slitter 1: (0.20 – 3.2mm) × 1870mm width (Ts up to 1180MPa)",
      ],
    },
  ];

  return (
    <section className="w-full font-sans">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src="/images/slitting-hero.jpg"
          alt="Slitting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
            Slitting
          </h1>
        </div>
      </div>

      {/* Description + Capabilities */}
      <div className="bg-white py-12 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">Slitting</h2>
            <p className="text-gray-600 leading-relaxed">
              Slitting is a metal manufacturing process which is used to cut a
              wide coil of metal into a number of narrower coils. The wide coils
              are moved through extremely sharp circular knives, making the
              cuts. These knives can be arranged in a sequence to make narrower
              coils of different widths as per the requirement.
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-2 bg-black text-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Capability</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((item, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2">
                    <span>✔</span> {item.plant}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {item.slitters.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Special Features */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">Special Features</h3>
              <ul className="list-disc list-inside text-gray-300 text-sm">
                <li>
                  Spare slitter head for offline setup, shimless tooling, and
                  vertical scrap winders
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
