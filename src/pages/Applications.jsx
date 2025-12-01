


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const certificates = [
//   { id: 1, image: "/Images/prague.jpg" },
//   { id: 2, image: "/Images/bridge-5624104_1920.jpg" },
//   { id: 3, image: "/Images/button-4927935_1920.jpg" },
//   { id: 4, image: "/Images/firenze-9292729_1280.jpg" },
//   { id: 5, image: "/Images/prague.jpg" },
//   { id: 6, image: "/Images/prague.jpg" },
//   { id: 7, image: "/Images/bridge-5624104_1920.jpg" },
//   { id: 8, image: "/Images/button-4927935_1920.jpg" },
//   { id: 9, image: "/Images/firenze-9292729_1280.jpg" },
//   { id: 10, image:"/Images/prague.jpg" },
// ];

// export default function QualitySection() {
//   const [selectedCert, setSelectedCert] = useState(null);

//   return (
//     <section className="bg-gradient-to-b from-[#fafafa] via-[#f4f4f5] to-[#ededed] text-gray-900">


//       {/* ===== QUALITY CERTIFICATES ===== */}
//       <div className="relative py-20 px-6">
//         <div className="max-w-6xl mx-auto">
          
//           <h2 className="text-3xl font-bold text-gray-700 mb-4 tracking-tight">
//             Applications
//           </h2>

//           <p className="text-sm text-gray-600 mb-12 max-w-3xl leading-relaxed">
//            Applications of our products across various industries and sectors. 
//           </p>

//           {/* Cards Grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
//             {certificates.map((cert, idx) => (
//               <motion.div
//                 key={cert.id}
//                 initial={{ opacity: 0, y: 25 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: idx * 0.05 }}
//                 whileHover={{ y: -4 }}
//                 onClick={() => setSelectedCert(cert.image)}
//                 className="cursor-pointer"
//               >
//                 <div className="
//                   rounded-xl overflow-hidden border border-gray-200
//                   bg-white/80 backdrop-blur-sm
//                   shadow-sm hover:shadow-lg hover:border-gray-400
//                   transition-all duration-300
//                 ">
//                   <img
//                     src={cert.image}
//                     alt="Certificate"
//                     className="w-full h-40 object-contain p-3"
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* ===== POPUP MODAL ===== */}
//         <AnimatePresence>
//           {selectedCert && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedCert(null)}
//               className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]"
//             >
//               <motion.img
//                 initial={{ scale: 0.85, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.85, opacity: 0 }}
//                 src={selectedCert}
//                 className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl border border-gray-300 bg-white"
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }





// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const certificates = [
//   { id: 1, image: "/Images/prague.jpg" },
//   { id: 2, image: "/Images/bridge-5624104_1920.jpg" },
//   { id: 3, image: "/Images/button-4927935_1920.jpg" },
//   { id: 4, image: "/Images/firenze-9292729_1280.jpg" },
//   { id: 5, image: "/Images/prague.jpg" },
//   { id: 6, image: "/Images/prague.jpg" },
//   { id: 7, image: "/Images/bridge-5624104_1920.jpg" },
//   { id: 8, image: "/Images/button-4927935_1920.jpg" },
//   { id: 9, image: "/Images/firenze-9292729_1280.jpg" },
//   { id: 10, image:"/Images/prague.jpg" },
// ];

// export default function PhotoGallery() {
//   const [selectedCert, setSelectedCert] = useState(null);

//   return (
//     <section className="bg-gradient-to-b from-[#fafafa] via-[#f4f4f5] to-[#ededed] text-gray-900 py-20 px-6">
      
//       {/* Image Grid Only */}
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
//           {certificates.map((cert, idx) => (
//             <motion.div
//               key={cert.id}
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: idx * 0.05 }}
//               whileHover={{ y: -4 }}
//               onClick={() => setSelectedCert(cert.image)}
//               className="cursor-pointer"
//             >
//               <div
//                 className="
//                   rounded-xl overflow-hidden border border-gray-200
//                   bg-white/80 backdrop-blur-sm
//                   shadow-sm hover:shadow-lg hover:border-gray-400
//                   transition-all duration-300
//                 "
//               >
//                 <img
//                   src={cert.image}
//                   alt="Certificate"
//                   className="w-full h-100 object-contain p-3"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Image Zoom Modal */}
//       <AnimatePresence>
//         {selectedCert && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedCert(null)}
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]"
//           >
//             <motion.img
//               initial={{ scale: 0.85, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.85, opacity: 0 }}
//               src={selectedCert}
//               className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl border border-gray-300 bg-white"
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
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

// Masonry Breakpoints
const breakpointColumnsObj = {
  default: 4,
  1200: 3,
  768: 2,
  480: 1,
};

export default function PhotoGalleryMasonry() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-gradient-to-b from-[#fafafa] via-[#f4f4f5] to-[#ededed] py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Masonry Layout */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(cert.image)}
              className="cursor-pointer mb-4 rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all"
            >
              <img src={cert.image} alt="gallery" className="w-full object-cover" />
            </motion.div>
          ))}
        </Masonry>
      </div>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              className="max-h-[90vh] max-w-[90vw] rounded-xl border shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
