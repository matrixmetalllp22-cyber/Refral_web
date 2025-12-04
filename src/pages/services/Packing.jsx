
import React from "react";
import { motion } from "framer-motion";
import { Layers, Gauge, Truck, Package } from "lucide-react";

export default function PackingIndustrial() {
  const features = [
    { icon: <Layers className="w-7 h-7 text-orange-400" />, title: "Energy Sector Support", desc: "Specialized handling and packing workflows for renewable components." },
    { icon: <Gauge className="w-7 h-7 text-orange-400" />, title: "Oil & Gas Solutions", desc: "Robust protection and materials for energy infrastructure shipments." },
    { icon: <Package className="w-7 h-7 text-orange-400" />, title: "Secure Packaging", desc: "Multi-layer protective systems to prevent transit damage." },
    { icon: <Truck className="w-7 h-7 text-orange-400" />, title: "Safe Transport", desc: "Certified logistics partners and handling procedures ensure integrity." }
  ];

  const specs = [
    { label: "Bundle Weight", value: "Up to 3000 kg" },
    { label: "Wrapping Material", value: "High-grade protective films" },
    { label: "Stacking Height", value: "Up to 2000 mm" },
    { label: "Labeling System", value: "Automated tracking & labeling" }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-100 via-white to-slate-200 min-h-screen text-gray-900 font-sans">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* FIXED IMAGE PATH HERE */}
          <img 
            src="/public/images/prague.jpg"
            className="w-full h-full object-cover opacity-30"
            alt="Packing Industrial Machine"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-slate-800/60" />
        </div>

        <div className="relative container mx-auto px-6 py-28 md:py-40 text-white">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT TEXT CONTENT */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-800 mb-4">
                Packing <span className="text-orange-400">Services</span>
              </h1>

              <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-2xl">
                Industrial-grade packing, handling and logistics solutions that 
                protect your material from factory to site.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/contact" className="inline-block bg-orange-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transform hover:scale-[1.02] transition">
                  Get a Quote
                </a>
                <a href="/" className="inline-block border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
                  Back Home
                </a>
              </div>
            </motion.div>

            {/* RIGHT CARD */}
            <motion.div 
  initial={{ opacity: 0, scale: 0.98 }} 
  whileInView={{ opacity: 1, scale: 1 }} 
  transition={{ duration: 0.6 }}
  className="relative"
>
  <div className="rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-200">
    <div className="p-8 md:p-12">
      <div className="rounded-lg bg-gradient-to-tr from-white to-slate-50 p-6 border border-slate-100">

        {/* ✅ Replace SVG with Actual Image */}
        <img
          src="/public/images/Horizontal-Flow-Packing-Machine.webp"   // <-- change image if needed
          alt="Packing Machine"
          className="w-full h-48 md:h-60 object-cover rounded-lg"
        />

        {/* Text Section */}
        <div className="mt-4">
          <div className="text-sm text-slate-500">Handled with care</div>
          <div className="text-xl font-semibold mt-1">Robust packing & certified transport</div>
          <p className="text-sm text-gray-600 mt-2">
            Custom crating, shrink-wrap, blocking and certified logistics 
            to keep parts safe from factory to site.
          </p>
        </div>

      </div>
    </div>
  </div>
</motion.div>


          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Key <span className="text-orange-600">Features</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-slate-50 grid place-items-center border">
                    {feature.icon}
                  </div>

                  <div>
                    <div className="font-semibold text-gray-900">{feature.title}</div>
                    <div className="text-sm text-gray-500 mt-1">{feature.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Capabilities</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {specs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center hover:bg-white/20 transition"
              >
                <p className="text-2xl font-bold text-orange-300">{spec.value}</p>
                <p className="text-gray-300 text-sm mt-2 uppercase tracking-wide">{spec.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-orange-600 via-slate-700 to-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Your Shipments?</h2>

          <p className="text-orange-200 mb-8 max-w-2xl mx-auto">
            Contact our packing specialists to design a tailored protective solution 
            for your components and materials.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition transform">
              Contact Sales
            </a>

            <a href="/" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Back Home
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
