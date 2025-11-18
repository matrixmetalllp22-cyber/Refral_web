import React from "react";
import { motion } from "framer-motion";
import { Layers, Gauge, Cog, Zap } from "lucide-react";
import CountUp from "react-countup";

export default function SlittingIndustrial() {
  const features = [
    { icon: <Layers className="w-7 h-7 text-blue-400" />, title: "Precision Cutting", desc: "Advanced precision technology for exact measurements." },
    { icon: <Gauge className="w-7 h-7 text-blue-400" />, title: "High Speed", desc: "Fast processing without compromising quality." },
    { icon: <Cog className="w-7 h-7 text-blue-400" />, title: "Quality Control", desc: "Rigorous testing at every stage." },
    { icon: <Zap className="w-7 h-7 text-blue-400" />, title: "Customization", desc: "Tailored solutions for specific needs." }
  ];

  const specs = [
    { label: "Max Coil Width", value: "1500 mm" },
    { label: "Material Thickness", value: "0.5 - 3.0 mm" },
    { label: "Processing Speed", value: "Up to 300 m/min" },
    { label: "Precision Level", value: "±0.5 mm" }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-100 via-white to-slate-200 min-h-screen text-gray-900 font-sans">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1549399545-1241b6f6f1b3?q=80&w=1600" alt="slitting" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-slate-800/60"></div>
        </div>

        <div className="relative container mx-auto px-6 py-28 md:py-40 text-white">
          <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Precision <span className="text-blue-400">Slitting</span> Services
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-blue-100 max-w-3xl mb-10">
            High-quality slitting services for automotive and industrial clients engineered for speed, precision, and repeatability.
          </motion.p>

          <motion.a whileHover={{ scale: 1.05 }} href="/contact" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg">
            Request a Quote
          </motion.a>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-50 to-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">  <span className="text-blue-400">Capabilities</span></h2>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">Core Spare Slitter Head for Offline Setup Shimless Tooling and Vertical Scrap Winders 
</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all border border-gray-200">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical <span className="text-blue-400">Specifications</span></h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {specs.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center hover:bg-white/20 transition">
                <p className="text-2xl md:text-3xl font-semibold text-blue-300">{s.value}</p>
                <p className="text-gray-300 text-sm mt-2 uppercase tracking-wide">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-600 via-slate-700 to-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-blue-200 mb-10 max-w-2xl mx-auto">Contact our sales team to discuss your slitting requirements and find the right solution for your production line.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-blue-400 px-8 py-3 rounded-lg font-semibold shadow hover:scale-105 transition-transform">Contact Us</a>
            <a href="/" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Back Home</a>
          </div>
        </div>
      </section>
    </div>
  );
}
