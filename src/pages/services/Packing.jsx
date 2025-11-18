// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Packing() {
//   const features = [
//     { title: 'Energy Sector Support', desc: 'Specialized processing for renewable energy' },
//     { title: 'Oil & Gas Solutions', desc: 'Advanced materials for energy infrastructure' },
//     { title: 'Secure Packaging', desc: 'Protective wrapping and packaging systems' },
//     { title: 'Safe Transport', desc: 'Ensures material integrity during delivery' }
//   ];

//   return (
//     <div className="min-h-screen pt-16 bg-gradient-to-b from-slate-50 to-yellow-50">
//       {/* Hero Section */}
//       <section className="container-custom py-12 md:py-20">
//         <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
//           <div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
//               Packing Services
//             </h1>
//             <p className="text-lg text-gray-600 mb-6">
//               Supporting renewable energy and oil & gas sectors with advanced steel processing and professional packing solutions. We ensure your materials arrive safely.
//             </p>
//             <Link 
//               to="/contact"
//               className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-700 hover:to-yellow-800 transition"
//             >
//               Get a Quote
//             </Link>
//           </div>
//           <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl h-96 flex items-center justify-center text-white text-center">
//             <div className="p-8">
//               <p className="text-lg font-semibold">Packing Service Image</p>
//               <p className="text-sm text-yellow-100">Professional packaging and handling</p>
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
//               <div key={feature.title} className="bg-gradient-to-br from-slate-50 to-yellow-50 p-6 rounded-lg shadow hover:shadow-lg transition">
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
//           <h2 className="text-3xl md:text-4xl font-bold mb-8">Packing Capabilities</h2>
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <table className="w-full text-sm md:text-base">
//               <tbody>
//                 <tr className="border-b hover:bg-yellow-50">
//                   <td className="p-4 font-semibold text-gray-900">Bundle Weight</td>
//                   <td className="p-4 text-gray-600">Up to 3000 kg per bundle</td>
//                 </tr>
//                 <tr className="border-b hover:bg-yellow-50">
//                   <td className="p-4 font-semibold text-gray-900">Wrapping Material</td>
//                   <td className="p-4 text-gray-600">High-grade protective films</td>
//                 </tr>
//                 <tr className="border-b hover:bg-yellow-50">
//                   <td className="p-4 font-semibold text-gray-900">Stacking Height</td>
//                   <td className="p-4 text-gray-600">Up to 2000 mm</td>
//                 </tr>
//                 <tr className="hover:bg-yellow-50">
//                   <td className="p-4 font-semibold text-gray-900">Labeling System</td>
//                   <td className="p-4 text-gray-600">Automated tracking & labeling</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-12 md:py-16">
//         <div className="container-custom text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
//           <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">Contact our sales team to discuss your packing and processing requirements.</p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/contact" className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition">
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
// import { Layers, Gauge, Truck, Package } from "lucide-react";
// import CountUp from "react-countup";

// export default function PackingIndustrial() {
//   const features = [
//     {
//       icon: <Layers className="w-7 h-7 text-sky-500" />,
//       title: "Energy Sector Support",
//       desc: "Specialized handling and packing workflows for renewable energy components.",
//     },
//     {
//       icon: <Gauge className="w-7 h-7 text-sky-500" />,
//       title: "Oil & Gas Solutions",
//       desc: "Robust protection and materials tailored for energy infrastructure shipments.",
//     },
//     {
//       icon: <Package className="w-7 h-7 text-sky-500" />,
//       title: "Secure Packaging",
//       desc: "Multi-layer protective systems (film, crating, blocking) to prevent transit damage.",
//     },
//     {
//       icon: <Truck className="w-7 h-7 text-sky-500" />,
//       title: "Safe Transport",
//       desc: "Certified logistics partners and handling procedures ensure integrity in transit.",
//     },
//   ];

//   const specs = [
//     { label: "Bundle Weight", value: "Up to 3000 kg" },
//     { label: "Wrapping Material", value: "High-grade protective films" },
//     { label: "Stacking Height", value: "Up to 2000 mm" },
//     { label: "Labeling System", value: "Automated tracking & labeling" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-100 via-gray-50 to-slate-200 text-gray-900 font-sans">
//       {/* HERO */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0 -z-10">
//           <img
//             src="https://images.unsplash.com/photo-1581092580498-6c3d0f9d8e8d?q=80&w=1600&auto=format&fit=crop"
//             alt="Packing and logistics"
//             className="w-full h-full object-cover opacity-40"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-800/70" />
//         </div>

//         <div className="relative container mx-auto px-6 py-24 md:py-36 text-white">
//           <div className="grid md:grid-cols-2 gap-10 items-center">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
//                 Packing <span className="text-sky-400">Services</span>
//               </h1>
//               <p className="mt-5 text-lg md:text-xl text-sky-100 max-w-2xl">
//                 Supporting renewable energy and oil & gas sectors with industrial-grade packing and material handling — engineered for safety and reliability.
//               </p>

//               <div className="mt-8 flex flex-wrap gap-4">
//                 <Link
//                   to="/contact"
//                   className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transform hover:scale-[1.02] transition"
//                 >
//                   Get a Quote
//                 </Link>
//                 <Link
//                   to="/"
//                   className="inline-block border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
//                 >
//                   Back Home
//                 </Link>
//               </div>

//               <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 grid place-items-center rounded-md bg-white/10">
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
//                       <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                       <path d="M6 8l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </div>
//                   <div>
//                     <div className="text-sm text-sky-200">Turnaround</div>
//                     <div className="text-lg font-semibold">2–5 days</div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 grid place-items-center rounded-md bg-white/10">
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
//                       <path d="M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                       <path d="M5 11h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </div>
//                   <div>
//                     <div className="text-sm text-sky-200">Compliance</div>
//                     <div className="text-lg font-semibold">ISO & logistics</div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.98 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//               className="relative"
//             >
//               <div className="rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-200">
//                 <div className="p-8 md:p-12">
//                   <div className="rounded-lg bg-gradient-to-tr from-white to-slate-50 p-6 border border-slate-100">
//                     <svg viewBox="0 0 800 480" className="w-full h-48 md:h-60 block" preserveAspectRatio="xMidYMid slice">
//                       <defs>
//                         <linearGradient id="pg" x1="0" x2="1">
//                           <stop offset="0%" stopColor="#eef2ff" />
//                           <stop offset="100%" stopColor="#ffffff" />
//                         </linearGradient>
//                       </defs>
//                       <rect width="800" height="480" fill="url(#pg)" />
//                       <g stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" opacity="0.9">
//                         <path d="M60 360 L740 360" />
//                         <path d="M50 300 L730 300" />
//                         <path d="M80 220 L700 220" />
//                       </g>
//                     </svg>

//                     <div className="mt-4">
//                       <div className="text-sm text-slate-500">Handled with care</div>
//                       <div className="text-xl font-semibold mt-1">Robust packing & certified transport</div>
//                       <p className="text-sm text-gray-600 mt-2">Custom crating, shrink-wrap, blocking and certified logistics to keep parts safe from factory to site.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="py-16 container mx-auto px-6">
//         <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Key Features</h3>

//         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {features.map((f, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.08 }}
//               className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-md bg-slate-50 grid place-items-center border">
//                   {f.icon}
//                 </div>
//                 <div>
//                   <div className="font-semibold text-gray-900">{f.title}</div>
//                   <div className="text-sm text-gray-500 mt-1">{f.desc}</div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* SPECS / STATS */}
//       <section className="py-20 bg-slate-50">
//         <div className="container mx-auto px-6">
//           <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Packing Capabilities</h3>

//           <div className="grid md:grid-cols-2 gap-8 items-start">
//             <div className="space-y-4">
//               <div className="bg-white p-6 rounded-2xl border shadow">
//                 <table className="w-full text-sm md:text-base">
//                   <tbody>
//                     {specs.map((s, idx) => (
//                       <tr key={idx} className="border-b last:border-b-0 hover:bg-slate-50 transition">
//                         <td className="p-4 font-semibold text-gray-900">{s.label}</td>
//                         <td className="p-4 text-gray-600">{s.value}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-2xl shadow">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div className="text-sm text-gray-500">Bundles Processed</div>
//                     <div className="text-2xl font-bold"><CountUp end={86000} duration={2} separator="," /></div>
//                   </div>
//                   <div className="text-sky-600"><Package className="w-8 h-8" /></div>
//                 </div>
//               </motion.div>

//               <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-2xl shadow">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div className="text-sm text-gray-500">Safe Deliveries</div>
//                     <div className="text-2xl font-bold">99.1%</div>
//                   </div>
//                   <div className="text-sky-600"><Truck className="w-8 h-8" /></div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-gradient-to-r from-sky-600 via-slate-700 to-gray-900 text-white text-center">
//         <div className="container mx-auto px-6">
//           <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold mb-4">
//             Ready to Protect Your Shipments?
//           </motion.h2>
//           <p className="text-sky-200 mb-8 max-w-2xl mx-auto">Contact our packing specialists to design a tailored protective solution for your components and materials.</p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/contact" className="bg-white text-sky-800 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition transform">
//               Contact Sales
//             </Link>
//             <Link to="/" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
//               Back Home
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { Layers, Gauge, Truck, Package } from "lucide-react";

export default function PackingIndustrial() {
  const features = [
    { icon: <Layers className="w-7 h-7 text-blue-400" />, title: "Energy Sector Support", desc: "Specialized handling and packing workflows for renewable components." },
    { icon: <Gauge className="w-7 h-7 text-blue-400" />, title: "Oil & Gas Solutions", desc: "Robust protection and materials for energy infrastructure shipments." },
    { icon: <Package className="w-7 h-7 text-blue-400" />, title: "Secure Packaging", desc: "Multi-layer protective systems to prevent transit damage." },
    { icon: <Truck className="w-7 h-7 text-blue-400" />, title: "Safe Transport", desc: "Certified logistics partners and handling procedures ensure integrity." }
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
                Packing <span className="text-blue-400">Services</span>
              </h1>

              <p className="mt-5 text-lg md:text-xl text-gray-700 max-w-2xl">
                Industrial-grade packing, handling and logistics solutions that 
                protect your material from factory to site.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/contact" className="inline-block bg-blue-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transform hover:scale-[1.02] transition">
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
            Key <span className="text-blue-600">Features</span>
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
                <p className="text-2xl font-bold text-blue-300">{spec.value}</p>
                <p className="text-gray-300 text-sm mt-2 uppercase tracking-wide">{spec.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-slate-700 to-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Your Shipments?</h2>

          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Contact our packing specialists to design a tailored protective solution 
            for your components and materials.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition transform">
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
