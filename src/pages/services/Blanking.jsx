// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Blanking() {
//   const features = [
//     { title: 'Precision Stamping', desc: 'Exact die-cut blanks for manufacturing' },
//     { title: 'Appliance Grade', desc: 'Engineered for home appliance production' },
//     { title: 'Consistent Quality', desc: 'Zero-defect manufacturing standards' },
//     { title: 'Fast Turnaround', desc: 'Quick delivery for production schedules' }
//   ];

//   return (
//     <div className="min-h-screen pt-16 bg-gradient-to-b from-slate-50 to-purple-50">
//       {/* Hero Section */}
//       <section className="container-custom py-12 md:py-20">
//         <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
//           <div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
//               Blanking Services
//             </h1>
//             <p className="text-lg text-gray-600 mb-6">
//               Precision-engineered steel blanks for home appliances and manufacturing. Our advanced die-cutting technology ensures consistent quality and tight tolerances.
//             </p>
//             <Link 
//               to="/contact"
//               className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition"
//             >
//               Get a Quote
//             </Link>
//           </div>
//           <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl h-96 flex items-center justify-center text-white text-center">
//             <div className="p-8">
//               <p className="text-lg font-semibold">Blanking Service Image</p>
//               <p className="text-sm text-purple-100">Precision die-cutting technology</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="bg-white py-12 md:py-20">
//         <div className="container-custom">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {features.map((feature) => (
//               <div key={feature.title} className="bg-gradient-to-br from-slate-50 to-purple-50 p-6 rounded-lg shadow hover:shadow-lg transition">
//                 <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
//                 <p className="text-gray-600 text-sm">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Specs */}
//       <section className="py-12 md:py-20">
//         <div className="container-custom">
//           <h2 className="text-3xl md:text-4xl font-bold mb-8">Technical Specifications</h2>
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <table className="w-full text-sm md:text-base">
//               <tbody>
//                 <tr className="border-b hover:bg-purple-50">
//                   <td className="p-4 font-semibold text-gray-900">Max Blank Size</td>
//                   <td className="p-4 text-gray-600">500 x 800 mm</td>
//                 </tr>
//                 <tr className="border-b hover:bg-purple-50">
//                   <td className="p-4 font-semibold text-gray-900">Material Thickness</td>
//                   <td className="p-4 text-gray-600">0.8 - 4.0 mm</td>
//                 </tr>
//                 <tr className="border-b hover:bg-purple-50">
//                   <td className="p-4 font-semibold text-gray-900">Tolerance Level</td>
//                   <td className="p-4 text-gray-600">±0.2 mm</td>
//                 </tr>
//                 <tr className="hover:bg-purple-50">
//                   <td className="p-4 font-semibold text-gray-900">Capacity</td>
//                   <td className="p-4 text-gray-600">10,000+ blanks/day</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12 md:py-16">
//         <div className="container-custom text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
//           <p className="text-purple-100 mb-8 max-w-2xl mx-auto">Contact our sales team to discuss your blanking requirements.</p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
//               Contact Sales
//             </Link>
//             <Link to="/" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
//               Back Home
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function Blanking() {
//   const features = [
//     {
//       title: "Precision Stamping",
//       desc: "Exact die-cut blanks for manufacturing",
//     },
//     {
//       title: "Appliance Grade",
//       desc: "Engineered for home appliance production",
//     },
//     {
//       title: "Consistent Quality",
//       desc: "Zero-defect manufacturing standards",
//     },
//     {
//       title: "Fast Turnaround",
//       desc: "Quick delivery for production schedules",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 via-purple-50 to-white text-gray-800">
//       {/* Hero Section */}
//       <section className="container mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 items-center gap-12">
//         {/* Left */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
//             Blanking <span className="text-purple-600">Services</span>
//           </h1>
//           <p className="text-lg text-gray-600 mb-8 max-w-lg">
//             Delivering precision-engineered steel blanks for appliance and
//             industrial manufacturing. Our advanced die-cutting ensures
//             consistent quality and tight tolerances.
//           </p>
//           <Link
//             to="/contact"
//             className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition-transform"
//           >
//             Get a Quote
//           </Link>
//         </motion.div>

//         {/* Right */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl h-80 md:h-[28rem] flex items-center justify-center text-white shadow-lg"
//         >
//           <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl"></div>
//           <div className="relative p-8 text-center">
//             <p className="text-xl font-semibold">High-Precision Blanking</p>
//             <p className="text-purple-100 text-sm mt-2">
//               Automated, defect-free steel cutting
//             </p>
//           </div>
//         </motion.div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
//             Key <span className="text-purple-600">Features</span>
//           </h2>
//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
//             {features.map((feature, i) => (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-purple-50 shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
//               >
//                 <h3 className="text-lg font-semibold mb-2 text-gray-900">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{feature.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technical Specs */}
//       <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
//             Technical <span className="text-purple-600">Specifications</span>
//           </h2>
//           <div className="overflow-hidden rounded-2xl shadow-xl bg-white">
//             <table className="w-full text-left border-collapse">
//               <tbody>
//                 {[
//                   ["Max Blank Size", "500 x 800 mm"],
//                   ["Material Thickness", "0.8 - 4.0 mm"],
//                   ["Tolerance Level", "±0.2 mm"],
//                   ["Capacity", "10,000+ blanks/day"],
//                 ].map(([key, value], i) => (
//                   <tr
//                     key={key}
//                     className={`border-b hover:bg-purple-50 transition ${
//                       i % 2 === 0 ? "bg-slate-50/30" : "bg-white"
//                     }`}
//                   >
//                     <td className="p-5 font-semibold text-gray-800">{key}</td>
//                     <td className="p-5 text-gray-600">{value}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white text-center">
//         <div className="container mx-auto px-6">
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl md:text-4xl font-bold mb-6"
//           >
//             Ready to <span className="text-purple-200">Get Started?</span>
//           </motion.h2>
//           <p className="text-purple-100 mb-10 max-w-2xl mx-auto">
//             Contact our sales team today to discuss your blanking requirements
//             and discover how we can enhance your production efficiency.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Link
//               to="/contact"
//               className="bg-white text-purple-700 px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition-transform"
//             >
//               Contact Sales
//             </Link>
//             <Link
//               to="/"
//               className="border-2 border-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
//             >
//               Back Home
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Cpu, Gauge, Layers, Zap } from "lucide-react";

// export default function Blanking() {
//   const features = [
//     {
//       icon: <Cpu className="w-8 h-8 text-purple-600" />,
//       title: "Precision Stamping",
//       desc: "Exact die-cut blanks with micron-level accuracy using automated lines.",
//     },
//     {
//       icon: <Layers className="w-8 h-8 text-purple-600" />,
//       title: "Appliance Grade",
//       desc: "High-grade materials optimized for appliance and industrial production.",
//     },
//     {
//       icon: <Gauge className="w-8 h-8 text-purple-600" />,
//       title: "Zero-Defect Quality",
//       desc: "AI-driven inspection ensures consistent quality and tolerance control.",
//     },
//     {
//       icon: <Zap className="w-8 h-8 text-purple-600" />,
//       title: "Fast Turnaround",
//       desc: "Streamlined production and logistics for quicker delivery cycles.",
//     },
//   ];

//   const specs = [
//     { label: "Max Blank Size", value: "500 x 800 mm" },
//     { label: "Material Thickness", value: "0.8 - 4.0 mm" },
//     { label: "Tolerance Level", value: "±0.2 mm" },
//     { label: "Daily Output", value: "10,000+ blanks" },
//   ];

//   return (
//     <div className="bg-gradient-to-b from-slate-50 via-white to-purple-50 text-gray-900">
//       {/* ================= HERO ================= */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1603126856740-2d4cf7b36cf2?q=80&w=1200"
//             alt="Blanking steel sheet"
//             className="w-full h-full object-cover opacity-30"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-800/60 to-indigo-600/60"></div>
//         </div>

//         <div className="relative container mx-auto px-6 py-28 md:py-40 text-white">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
//           >
//             Blanking <span className="text-purple-200">Solutions</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-lg md:text-xl text-purple-100 max-w-2xl mb-10"
//           >
//             High-precision blanking and stamping services designed for industrial
//             and appliance-grade manufacturing — where consistency meets innovation.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//           >
//             <Link
//               to="/contact"
//               className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-xl shadow hover:bg-purple-50 hover:scale-105 transition-transform"
//             >
//               Request a Quote
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= FEATURES ================= */}
//       <section className="py-20 bg-white/70 backdrop-blur-sm">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
//             Core <span className="text-purple-600">Capabilities</span>
//           </h2>

//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
//             {features.map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="group bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
//               >
//                 <div className="flex justify-center mb-4">{item.icon}</div>
//                 <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//                 <p className="text-gray-600 text-sm">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= SPECS / STATS ================= */}
//       <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//             Technical <span className="text-purple-600">Specifications</span>
//           </h2>

//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             {specs.map((spec, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow hover:shadow-lg transition"
//               >
//                 <p className="text-purple-600 text-sm font-semibold uppercase tracking-wide mb-2">
//                   {spec.label}
//                 </p>
//                 <p className="text-2xl font-bold text-gray-900">{spec.value}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="py-24 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="container mx-auto px-6"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready to Elevate Your Manufacturing?
//           </h2>
//           <p className="text-purple-200 mb-10 max-w-2xl mx-auto">
//             Let’s discuss your precision blanking requirements and tailor a
//             solution for your production line.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Link
//               to="/contact"
//               className="bg-white text-purple-700 px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition-transform"
//             >
//               Contact Us
//             </Link>
//             <Link
//               to="/"
//               className="border-2 border-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
//             >
//               Back Home
//             </Link>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }





import React from "react";
import { motion } from "framer-motion";
import { Layers, Gauge, Cog, Zap } from "lucide-react";
import CountUp from "react-countup";

// ==============================
// ⚙️ Industrial-Tech Theme
// ==============================
export default function BlankingIndustrial() {
  const features = [
    {
      icon: <Layers className="w-8 h-8 text-orange-500" />,
      title: "Precision Stamping",
      desc: "CNC-driven die cutting for perfect steel blanks with micron-level accuracy.",
    },
    {
      icon: <Gauge className="w-8 h-8 text-orange-500" />,
      title: "Appliance Grade",
      desc: "Meets global standards for appliance and sheet-metal production.",
    },
    {
      icon: <Cog className="w-8 h-8 text-orange-500" />,
      title: "Quality Control",
      desc: "Fully automated inspection and defect elimination systems.",
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "High Throughput",
      desc: "10,000+ blanks daily powered by robotic feeding and automation.",
    },
  ];

  const stats = [
    { label: "Max Blank Size", value: "500 × 800 mm" },
    { label: "Material Thickness", value: "0.8 – 4.0 mm" },
    { label: "Tolerance", value: "±0.2 mm" },
    { label: "Output / Day", value: 10000, unit: "+" },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-100 via-gray-50 to-slate-200 min-h-screen text-gray-900 font-sans">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091870622-3a940d7f7c07?q=80&w=1600"
            alt="Industrial blanking press"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-slate-800/70"></div>
        </div>

        <div className="relative container mx-auto px-6 py-28 md:py-40 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight"
          >
            Precision <span className="text-orange-400">Blanking</span> Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-orange-100 max-w-3xl mb-10"
          >
            Delivering world-class blanking and stamping precision for manufacturing
            and home appliance industries with unmatched consistency.
          </motion.p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg"
          >
            Request a Quote
          </motion.a>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Industrial <span className="text-orange-600">Capabilities</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all border border-gray-200"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Technical <span className="text-orange-400">Specifications</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center hover:bg-white/20 transition"
              >
                {typeof stat.value === "number" ? (
                  <p className="text-4xl font-bold text-orange-400">
                    <CountUp end={stat.value} duration={2} />
                    {stat.unit}
                  </p>
                ) : (
                  <p className="text-2xl font-semibold text-orange-300">
                    {stat.value}
                  </p>
                )}
                <p className="text-gray-300 text-sm mt-2 uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-orange-600 via-slate-700 to-gray-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Production?
          </h2>
          <p className="text-orange-200 mb-10 max-w-2xl mx-auto">
            Partner with us for industry-leading blanking solutions engineered for
            precision, efficiency, and reliability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold shadow hover:scale-105 transition-transform"
            >
              Contact Us
            </a>
            <a
              href="/"
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Back Home
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
