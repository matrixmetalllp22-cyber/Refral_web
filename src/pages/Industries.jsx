// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // const certificates = [
// //   { id: 1, image: "/images/cert1.jpg" },
// //   { id: 2, image: "/images/cert2.jpg" },
// //   { id: 3, image: "/images/cert3.jpg" },
// //   { id: 4, image: "/images/cert4.jpg" },
// //   { id: 5, image: "/images/cert5.jpg" },
// // ];

// // export default function QualitySection() {
// //   const [selectedCert, setSelectedCert] = useState(null);

// //   return (
// //     <section className="bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 text-gray-900">
// //       {/* === QUALITY STATEMENT === */}
// //       <div className="max-w-6xl mx-auto px-6 py-20">
// //         <motion.h2
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="text-3xl md:text-4xl font-bold text-blue-800 text-center"
// //         >
// //           Quality Statement
// //         </motion.h2>

// //         <p className="text-center mt-4 text-gray-600 italic max-w-3xl mx-auto">
// //           JSW MI Steel Service Center Pvt. Ltd. shall strive to sustain business
// //           excellence by adopting the best practices to improve the Quality of
// //           its products and services.
// //         </p>

// //         <div className="w-20 h-[2px] bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6" />

// //         <div className="text-center mb-6">
// //           <h3 className="text-xl font-semibold text-blue-700">
// //             We are committed to
// //           </h3>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
// //           <ul className="space-y-2 list-disc list-inside text-left">
// //             <li>
// //               Meet mutually agreed requirements of the customers & stakeholders
// //               and give them the highest satisfaction and become their preferred
// //               business partner.
// //             </li>
// //             <li>
// //               Comply with the best work practices and ethics in the industry
// //               within or outside the country.
// //             </li>
// //             <li>
// //               Mitigate risk through a strong process of Evaluation and
// //               Corrective & Preventive actions in all the areas of our business.
// //             </li>
// //           </ul>
// //           <ul className="space-y-2 list-disc list-inside text-left">
// //             <li>
// //               Engage everybody’s commitment across our value chain to build JSW
// //               MI Quality mindset.
// //             </li>
// //             <li>
// //               Continually challenge ourselves to improve the Quality Management
// //               System in the organization.
// //             </li>
// //             <li>
// //               Take required steps to contribute towards environment and society.
// //             </li>
// //           </ul>
// //         </div>
// //       </div>

// //       {/* === QUALITY CERTIFICATES === */}
// //       <div className="relative bg-slate-900 text-white py-20 px-6">
// //         <div className="max-w-6xl mx-auto">
// //           <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4">
// //             Quality Certificates
// //           </h2>
// //           <p className="text-sm text-gray-300 mb-10 max-w-3xl">
// //             JSW MI Management System complies with the International Standard –
// //             ISO 9001:2015, IATF 16949:2016 (Second Edition), ISO 14001:2015 &
// //             ISO 45001:2018
// //           </p>

// //           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
// //             {certificates.map((cert) => (
// //               <motion.div
// //                 key={cert.id}
// //                 whileHover={{ scale: 1.05 }}
// //                 className="cursor-pointer"
// //                 onClick={() => setSelectedCert(cert.image)}
// //               >
// //                 <img
// //                   src={cert.image}
// //                   alt="Certificate"
// //                   className="rounded-lg shadow-lg border border-slate-700 hover:border-blue-400 transition-all"
// //                 />
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* === POPUP MODAL === */}
// //         <AnimatePresence>
// //           {selectedCert && (
// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //               className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
// //               onClick={() => setSelectedCert(null)}
// //             >
// //               <motion.img
// //                 initial={{ scale: 0.9, opacity: 0 }}
// //                 animate={{ scale: 1, opacity: 1 }}
// //                 exit={{ scale: 0.9, opacity: 0 }}
// //                 src={selectedCert}
// //                 alt="Certificate"
// //                 className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl border border-slate-700"
// //               />
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>
// //     </section>
// //   );
// // }




// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// // import image from '../public/images/prague.jpg';


// const certificates = [
//   { id: 1, image: "/images/cert1.jpg" },
//   { id: 2, image: "/images/cert2.jpg" },
//   { id: 3, image: "/images/cert3.jpg" },
//   { id: 4, image: "/images/cert4.jpg" },
//   // { id: 5, img },
  
// ];

// export default function QualitySection() {
//   const [selectedCert, setSelectedCert] = useState(null);

//   return (
//     <section className="bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 text-gray-900">
//       {/* === QUALITY STATEMENT === */}
//       <div className="max-w-6xl mx-auto px-6 py-20">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold text-blue-800 text-center"
//         >
//           Quality Statement
//         </motion.h2>

//         <p className="text-center mt-4 text-gray-600 italic max-w-3xl mx-auto">
//           JSW MI Steel Service Center Pvt. Ltd. shall strive to sustain business
//           excellence by adopting the best practices to improve the Quality of
//           its products and services.
//         </p>

//         <div className="w-20 h-[2px] bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-6" />

//         <div className="text-center mb-6">
//           <h3 className="text-xl font-semibold text-blue-700">
//             We are committed to
//           </h3>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
//           <ul className="space-y-2 list-disc list-inside text-left">
//             <li>
//               Meet mutually agreed requirements of the customers & stakeholders
//               and give them the highest satisfaction and become their preferred
//               business partner.
//             </li>
//             <li>
//               Comply with the best work practices and ethics in the industry
//               within or outside the country.
//             </li>
//             <li>
//               Mitigate risk through a strong process of Evaluation and
//               Corrective & Preventive actions in all the areas of our business.
//             </li>
//           </ul>
//           <ul className="space-y-2 list-disc list-inside text-left">
//             <li>
//               Engage everybody’s commitment across our value chain to build JSW
//               MI Quality mindset.
//             </li>
//             <li>
//               Continually challenge ourselves to improve the Quality Management
//               System in the organization.
//             </li>
//             <li>
//               Take required steps to contribute towards environment and society.
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* === QUALITY CERTIFICATES (Transparent) === */}
//       <div className="relative py-20 px-6 bg-transparent backdrop-blur-0">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
//             Quality Certificates
//           </h2>
//           <p className="text-sm text-gray-700 mb-10 max-w-3xl">
//             JSW MI Management System complies with the International Standard –
//             ISO 9001:2015, IATF 16949:2016 (Second Edition), ISO 14001:2015 &
//             ISO 45001:2018
//           </p>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
//             {certificates.map((cert) => (
//               <motion.div
//                 key={cert.id}
//                 whileHover={{ scale: 1.05 }}
//                 className="cursor-pointer group"
//                 onClick={() => setSelectedCert(cert.image)}
//               >
//                 <div className="rounded-xl overflow-hidden shadow-lg border border-slate-300 group-hover:border-blue-500 transition-all">
//                   <img
//                     src={cert.image}
//                     alt="Certificate"
//                     className="w-full h-auto object-contain"
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* === POPUP MODAL === */}
//         <AnimatePresence>
//           {selectedCert && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
//               onClick={() => setSelectedCert(null)}
//             >
//               <motion.img
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 src={selectedCert}
//                 alt="Certificate"
//                 className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl border border-slate-300 bg-white"
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }






import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  { id: 1, image: "/Images/prague.jpg" },
  { id: 2, image: "/Images/bridge-5624104_1920.jpg" },
  { id: 3, image: "/Images/button-4927935_1920.jpg" },
  { id: 4, image: "/Images/firenze-9292729_1280.jpg" },
  { id: 5, image: "/Images/prague.jpg" },
  { id: 6, image: "/Images/prague.jpg" },
  { id: 7, image: "/Images/bridge-5624104_1920.jpg" },
  { id: 8, image: "/Images/button-4927935_1920.jpg" },
  { id: 9, image: "/Images/firenze-9292729_1280.jpg" },
  { id: 10, image: "/Images/prague.jpg" },
];

const breakpointColumns = {
  default: 4,
  1200: 3,
  768: 2,
  480: 1,
};

export default function QualitySection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="bg-gradient-to-b from-[#fafafa] via-[#f4f4f5] to-[#ededed] text-gray-900">

      {/* ===== QUALITY STATEMENT ===== */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-700"
        >
          Quality Statement
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center mt-5 text-[17px] text-gray-600 leading-relaxed max-w-3xl mx-auto"
        >
          JSW MI Steel Service Center Pvt. Ltd. shall strive to sustain business
          excellence by adopting the best practices to improve the Quality of
          its products and services.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-24 h-[3px] bg-gray-400/60 mx-auto my-10 rounded-full"
        />

        <h3 className="text-xl font-semibold text-center text-gray-700 mb-8 tracking-wide">
          We Are Committed To
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 text-gray-700 leading-relaxed text-[16px] max-w-4xl mx-auto">
          <ul className="space-y-3 list-disc list-inside">
            <li>Meeting mutually agreed customer & stakeholder requirements.</li>
            <li>Following best work ethics and industry practices globally.</li>
            <li>Mitigating risks with strong evaluation & corrective actions.</li>
          </ul>
          <ul className="space-y-3 list-disc list-inside">
            <li>Building quality mindset across the JSW MI value chain.</li>
            <li>Continuously improving the Quality Management System.</li>
            <li>Contributing positively to environment & society.</li>
          </ul>
        </div>
      </div>

      {/* ===== QUALITY CERTIFICATES WITH MASONRY GRID ===== */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-gray-700 mb-4 tracking-tight">
            Quality Certificates
          </h2>

          <p className="text-sm text-gray-600 mb-12 max-w-3xl leading-relaxed">
            JSW MI Management System complies with ISO 9001:2015, IATF 16949:2016,
            ISO 14001:2015 & ISO 45001:2018.
          </p>

          <Masonry
            breakpointCols={breakpointColumns}
            className="flex gap-4"
            columnClassName="masonry-col"
          >
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                className="cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 mb-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedCert(cert.image)}
              >
                <img src={cert.image} alt="certificate" className="w-full object-cover" />
              </motion.div>
            ))}
          </Masonry>
        </div>

        {/* ===== POPUP MODAL ===== */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] flex items-center justify-center p-6 cursor-pointer"
              onClick={() => setSelectedCert(null)}
            >
              <motion.img
                src={selectedCert}
                className="rounded-xl max-w-[90vw] max-h-[90vh] border shadow-2xl bg-white"
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
