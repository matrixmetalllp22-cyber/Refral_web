// import React from "react";
// import { useNavigate } from "react-router-dom";

// const IndustriesSection = () => {
//   const navigate = useNavigate();

//   const industries = [
//     {
//       id: "slitting",
//       name: "Slitting",
//       image: "public/images/Metal-Slitter-Machine-Line-2-700x394.webp",
//       description:
//         "High-strength steel is crucial for modern vehicles, enabling manufacturers to build lighter cars without compromising safety. Innovative steel solutions also contribute to enhanced crash performance and better fuel efficiency due to the reduced weight. This material plays a key role in the automotive industry's pursuit of more sustainable and safer transportation options.High-strength steel is crucial for modern vehicles, enabling manufacturers to build lighter cars without compromising safety. Innovative steel solutions also contribute to enhanced crash performance and better fuel efficiency due to the reduced weight. This material plays a key role in the automotive industry's pursuit of more sustainable and safer transportation options.High-strength steel is crucial for modern vehicles, enabling manufacturers to build lighter cars without compromising safety. Innovative steel solutions also contribute to enhanced crash performance and better fuel efficiency due to the reduced weight. This material plays a key role in the automotive industry's pursuit of more sustainable and safer transportation options.",
//     },
//     {
//       id: "cut-to-length",
//       name: "Cut-to-Length",
//       image: "public/images/Coil-Cut-to-Lengt.webp",
//       description:
//         "Supplying durable and sustainable steel materials for modern infrastructure.",
//     },
//     {
//       id: "packing",
//       name: "Packing",
//       image: "/public/images/aluminium-sector.jpg",
//       description:
//         "Supporting renewable energy and oil & gas sectors with advanced steel processing.",
//     },
//     {
//       id: "blanking",
//       name: "Blanking",
//       image: "/public/images/maxresdefault.jpg",
//       description:
//         "Delivering precision-engineered steel for home appliances and manufacturing.",
//     },
//   ];

//   const handleServiceClick = (serviceId) => {
//     navigate(`/services/${serviceId}`);
//   };

//   return (
//     <section className="section-padding py-8 md:py-12 lg:py-16">
//       <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch gap-0 my-8 md:my-12 lg:my-16 min-h-auto lg:min-h-[1000px]">
//         {/* LEFT SIDE — Blue section */}
//         <div className="bg-gradient-to-br from-blue-300 to-blue-400 text-white flex flex-col justify-center items-start p-6 md:p-8 lg:p-10 rounded-2xl lg:rounded-l-2xl lg:rounded-r-none h-full">
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">Services </h2>
//           <p className="text-blue-100 max-w-md leading-relaxed text-sm md:text-base">
//             Delivering specialized solutions across multiple sectors with expertise and innovation.
//           </p>
//         </div>

//         {/* RIGHT SIDE — 2x2 grid */}
//         <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-0 h-full">
//           {industries.slice(0, 4).map((industry, idx) => (
//             <div
//               key={industry.id}
//               className="bg-white text-gray-800 p-4 md:p-6 flex flex-col justify-between text-center 
//                          border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
//             >
//               {/* Image Section */}
//               <div>
//                 <img
//                   src={industry.image}
//                   alt={industry.name}
//                   className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg mb-3 md:mb-4"
//                 />

//                 {/* Title */}
//                 <h3 className="font-semibold text-lg md:text-xl mb-2">{industry.name}</h3>

//                 {/* Description */}
//                 <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
//                   {industry.description ||
//                     "Specialized solutions for this sector with innovation and precision."}
//                 </p>
//               </div>

//               {/* Read More Button */}
//               <button 
//                 onClick={() => handleServiceClick(industry.id)}
//                 className="mt-4 md:mt-6 bg-gradient-to-r from-blue-300 to-blue-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-xs md:text-sm font-medium hover:from-blue-400 hover:to-gray-500 transition-all duration-300 self-center transform hover:scale-105 active:scale-95"
//               >
//                 Read More →
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IndustriesSection;

















// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const IndustriesSection = () => {
//   const navigate = useNavigate();

//   const industries = [
//     {
//       id: "slitting",
//       name: "Slitting",
//       image: "/images/Metal-Slitter-Machine-Line-2-700x394.webp",
//       description:
//         "High-precision steel slitting engineered for automotive and heavy-industry requirements.",
//     },
//     {
//       id: "cut-to-length",
//       name: "Cut-to-Length",
//       image: "/images/Coil-Cut-to-Lengt.webp",
//       description:
//         "Accurate CTL processing delivering smooth and stress-free sheets for fabrication and construction.",
//     },
//     {
//       id: "packing",
//       name: "Packing",
//       image: "/images/aluminium-sector.jpg",
//       description:
//         "Secure industrial packing solutions ensuring perfect protection during handling and transport.",
//     },
//     {
//       id: "blanking",
//       name: "Blanking",
//       image: "/images/maxresdefault.jpg",
//       description:
//         "Precision blanking for automotive and high-volume engineering applications.",
//     },
//   ];

//   const handleServiceClick = (serviceId) => navigate(`/services/${serviceId}`);

//   return (
//     <section className="py-16 md:py-24">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* HEADING */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center text-4xl md:text-5xl font-extrabold 
//                      text-gray-900 tracking-tight mb-14"
//         >
//           Our Services
//         </motion.h2>

//         {/* 2x2 GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">

//           {industries.map((industry, index) => (
//             <motion.div
//               key={industry.id}
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.15 }}
//               className="bg-gradient-to-br from-white via-gray-50 to-gray-200
//                          border border-gray-300 rounded-2xl overflow-hidden
//                          shadow-[0_8px_25px_rgba(0,0,0,0.10)]
//                          hover:shadow-[0_12px_35px_rgba(0,0,0,0.18)]
//                          transition-all duration-300 hover:-translate-y-2"
//             >
//               {/* IMAGE */}
//               <div className="h-56 md:h-64 overflow-hidden relative">
//                 <img
//                   src={industry.image}
//                   alt={industry.name}
//                   className="w-full h-full object-cover 
//                              transition-transform duration-700 
//                              hover:scale-110"
//                 />

//                 {/* Metallic overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t 
//                                 from-black/20 via-transparent"></div>
//               </div>

//               {/* CONTENT */}
//               <div className="p-7 flex flex-col justify-between h-[260px]">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   {industry.name}
//                 </h3>

//                 <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                   {industry.description}
//                 </p>

//                 {/* BUTTON */}
//                 <button
//                   onClick={() => handleServiceClick(industry.id)}
//                   className="w-fit bg-gradient-to-r from-blue-500 to-blue-700
//                              text-white px-6 py-2.5 rounded-xl text-sm font-medium
//                              shadow-md hover:shadow-lg 
//                              hover:scale-105 active:scale-95
//                              transition-all duration-300"
//                 >
//                   Read More →
//                 </button>
//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default IndustriesSection;
























// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const IndustriesSection = () => {
//   const navigate = useNavigate();

//   const industries = [
//     {
//       id: "slitting",
//       name: "Slitting",
//       image: "/images/Metal-Slitter-Machine-Line-2-700x394.webp",
//       description:
//         "High-precision steel slitting for automotive and industrial applications.",
//     },
//     {
//       id: "cut-to-length",
//       name: "Cut-to-Length",
//       image: "/images/Coil-Cut-to-Lengt.webp",
//       description:
//         "Accurate CTL processing with stress-free sheets for fabrication and construction.",
//     },
//     {
//       id: "packing",
//       name: "Packing",
//       image: "/images/aluminium-sector.jpg",
//       description:
//         "High-quality packing solutions ensuring safe coil handling and transport.",
//     },
//     {
//       id: "blanking",
//       name: "Blanking",
//       image: "/images/maxresdefault.jpg",
//       description:
//         "Precision blanking ideal for high-volume automotive and engineering needs.",
//     },
//   ];

//   const handleServiceClick = (id) => navigate(`/services/${id}`);

//   return (
//     <section className="py-16 md:py-24">
//       <div className="max-w-6xl mx-auto px-4">

//         {/* Heading with shimmer bar */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
//             Our Services
//           </h2>

//           {/* metallic shimmer underline */}
//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: "120px" }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="h-1 mt-3 mx-auto bg-gradient-to-r from-blue-500 via-blue-700 to-blue-500 rounded-full shadow-lg"
//           />
//         </motion.div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">

//           {industries.map((industry, index) => (
//             <motion.div
//               key={industry.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.15 }}
//               whileHover={{
//                 scale: 1.03,
//                 boxShadow: "0px 15px 35px rgba(0,0,0,0.18)",
//               }}
//               className="bg-gradient-to-br from-white to-gray-100 
//                          border border-gray-300 rounded-2xl 
//                          overflow-hidden group relative"
//             >
//               {/* Metallic glow on hover */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileHover={{ opacity: 0.15 }}
//                 className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-blue-700/20 pointer-events-none"
//               />

//               {/* IMAGE */}
//               <motion.div
//                 whileHover={{ scale: 1.08 }}
//                 transition={{ duration: 0.5 }}
//                 className="h-48 md:h-56 overflow-hidden"
//               >
//                 <img
//                   src={industry.image}
//                   alt={industry.name}
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>

//               {/* CONTENT */}
//               <div className="p-6 h-[220px] flex flex-col justify-between">
//                 {/* Title */}
//                 <motion.h3
//                   whileHover={{ x: 5 }}
//                   transition={{ duration: 0.2 }}
//                   className="text-xl font-semibold text-gray-900"
//                 >
//                   {industry.name}
//                 </motion.h3>

//                 {/* Description */}
//                 <p className="text-gray-600 text-sm leading-relaxed mt-2 mb-4">
//                   {industry.description}
//                 </p>

//                 {/* BUTTON */}
//                 <motion.button
//                   onClick={() => handleServiceClick(industry.id)}
//                   whileHover={{ scale: 1.06, x: 4 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ duration: 0.2 }}
//                   className="bg-gradient-to-r from-blue-500 to-blue-700 
//                              text-white px-5 py-2.5 rounded-xl text-sm font-medium
//                              shadow-lg hover:shadow-xl"
//                 >
//                   Read More →
//                 </motion.button>

//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default IndustriesSection;














import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const IndustriesSection = () => {
  const navigate = useNavigate();

  const industries = [
    {
      id: "slitting",
      name: "Slitting",
      image: "/public/images/Metal-Slitter-Machine-Line-2-700x394.webp",
      description:
        "High-precision steel slitting engineered for consistency and industrial performance.",
    },
    {
      id: "cut-to-length",
      name: "Cut-to-Length",
      image: "/public/images/Coil-Cut-to-Lengt.webp",
      description:
        "Accurate CTL operations with optimized flatness for manufacturing and heavy fabrication.",
    },
    {
      id: "packing",
      name: "Packing",
      image: "/public/images/aluminium-sector.jpg",
      description:
        "Industrial-grade packing ensuring safe, stable, and protected coil transport.",
    },
    {
      id: "blanking",
      name: "Blanking",
      image: "/public/images/maxresdefault.jpg",
      description:
        "Highly accurate blanking operation ideal for automotive and precision engineering.",
    },
  ];

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="max-w-[1700px] mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-16"
        >
          Our Services
        </motion.h2>

        {/* 2×2 GRID – WIDE, NOT CENTERED */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
              className="rounded-3xl overflow-hidden
                         bg-gradient-to-br from-white via-gray-100 to-gray-200
                         border border-gray-300
                         shadow-[0_8px_20px_rgba(0,0,0,0.15)]
                         hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]
                         hover:-translate-y-2
                         transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <motion.div
                className="h-56 md:h-64 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {industry.name}
                </h3>

                <p className="text-gray-600 text-sm mt-3 leading-relaxed mb-6">
                  {industry.description}
                </p>

                {/* CTA Button */}
                <motion.button
                  onClick={() => handleServiceClick(industry.id)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-800 
                             text-white px-6 py-3 rounded-xl text-sm font-medium
                             shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  Read More →
                </motion.button>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;





















// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function IndustriesSection() {
//   const navigate = useNavigate();

//   const industries = [
//     {
//       id: "slitting",
//       name: "Slitting",
//       image: "/images/automotive.jpg",
//       description:
//         "Providing high-strength steel and innovative solutions for the automotive industry.",
//     },
//     {
//       id: "cut-to-length",
//       name: "Cut-to-Length",
//       image: "/images/construction.jpg",
//       description:
//         "Supplying durable and sustainable steel materials for modern infrastructure.",
//     },
//     {
//       id: "packing",
//       name: "Packing",
//       image: "/images/energy.jpg",
//       description:
//         "Supporting renewable energy and oil & gas sectors with advanced steel processing.",
//     },
//     {
//       id: "blanking",
//       name: "Blanking",
//       image: "/images/appliances.jpg",
//       description:
//         "Delivering precision-engineered steel for home appliances and manufacturing.",
//     },
//   ];

//   const handleServiceClick = (serviceId) => {
//     navigate(`/services/${serviceId}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 py-16 md:py-24">
//       <div className="container-custom">
//         {/* Hero Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
//             Our Services
//           </h2>
//           <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
//             Delivering specialized steel processing and industrial solutions
//             across multiple sectors with innovation and precision.
//           </p>
//         </motion.div>

//         {/* Zig-Zag Grid */}
//         <div className="flex flex-wrap justify-center gap-8 md:gap-10">
//           {industries.map((industry, index) => (
//             <motion.div
//               key={industry.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.15, duration: 0.6 }}
//               viewport={{ once: true }}
//               className={`group w-full sm:w-[320px] md:w-[340px] lg:w-[360px] 
//                           bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 
//                           rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 
//                           transition-all duration-300 overflow-hidden
//                           ${
//                             index % 2 === 0
//                               ? "md:-translate-y-4 lg:-translate-y-6"
//                               : "md:translate-y-4 lg:translate-y-6"
//                           }`}
//             >
//               {/* Image */}
//               <div className="relative">
//                 <img
//                   src={industry.image}
//                   alt={industry.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
//               </div>

//               {/* Content */}
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   {industry.name}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4">
//                   {industry.description}
//                 </p>

//                 <button
//                   onClick={() => handleServiceClick(industry.id)}
//                   className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 
//                              rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 
//                              transition-all duration-300 hover:shadow-md"
//                 >
//                   Read More →
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function IndustriesSection() {
//   const navigate = useNavigate();

//   const industries = [
//     {
//       id: "slitting",
//       name: "Slitting",
//       image: "/images/automotive.jpg",
//       description:
//         "Providing high-strength steel and innovative solutions for the automotive industry.",
//     },
//     {
//       id: "cut-to-length",
//       name: "Cut-to-Length",
//       image: "/images/construction.jpg",
//       description:
//         "Supplying durable and sustainable steel materials for modern infrastructure.",
//     },
//     {
//       id: "packing",
//       name: "Packing",
//       image: "/images/energy.jpg",
//       description:
//         "Supporting renewable energy and oil & gas sectors with advanced steel processing.",
//     },
//     {
//       id: "blanking",
//       name: "Blanking",
//       image: "/images/appliances.jpg",
//       description:
//         "Delivering precision-engineered steel for home appliances and manufacturing.",
//     },
//   ];

//   const handleServiceClick = (serviceId) => {
//     navigate(`/services/${serviceId}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 py-16 md:py-24">
//       <div className="container-custom">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
//             Our Services
//           </h2>
//           <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
//             Delivering specialized steel processing and industrial solutions
//             across multiple sectors with innovation and precision.
//           </p>
//         </motion.div>

//         {/* Two-tier Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {industries.map((industry, index) => (
//             <motion.div
//               key={industry.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.6 }}
//               viewport={{ once: true }}
//               className={`group bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 
//                           rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 
//                           transition-all duration-300 overflow-hidden flex flex-col justify-between text-center ${
//                             index >= 2 ? "md:row-span-1 md:h-[430px]" : "md:h-[380px]"
//                           }`}
//             >
//               {/* Image */}
//               <div className="relative">
//                 <img
//                   src={industry.image}
//                   alt={industry.name}
//                   className={`w-full object-cover ${
//                     index >= 2 ? "h-56 md:h-60" : "h-48 md:h-52"
//                   }`}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   {industry.name}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4">
//                   {industry.description}
//                 </p>

//                 <button
//                   onClick={() => handleServiceClick(industry.id)}
//                   className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 
//                              rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 
//                              transition-all duration-300 hover:shadow-md"
//                 >
//                   Read More →
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
