

// import React, { useState } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// const KeyProducts = () => {
//   const products = [
//     {
//       title: "HR (Hot Rolled) Black",
//       description: "It is available in coil form, sheet form, and plates.",
//       image: "/public/images/prague.jpg",
//     },
//     {
//       title: "CR (Cold Rolled) Steel",
//       description:
//         "Used in applications requiring superior surface finish and tight thickness tolerances.",
//       image: "/public/images/firenze-9292729_1280.jpg",
//     },
//     {
//       title: "Galvanized Steel",
//       description:
//         "Provides superior corrosion resistance for construction and automotive applications.",
//       image: "/public/images/architecture-2182003_1920.jpg",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? products.length - 1 : prev - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) =>
//       prev === products.length - 1 ? 0 : prev + 1
//     );
//   };

//   const currentProduct = products[currentIndex];

//   return (
//     <section className="py-20 bg-white relative overflow-hidden">
//       <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//         {/* LEFT SIDE */}
//         <div className="transition-all duration-700 ease-in-out">
//           <h2 className="text-4xl font-bold text-orange-400 mb-4">
//             Key Products
//           </h2>
//           <p className="text-gray-700 mb-6 leading-relaxed">
//             Matrix plants are equipped with state-of-the-art lines to process
//             flat rolled steel products to cater to the needs of Automotive,
//             Home appliances, Electrical Steel, General Engineering, and other
//             sectors.
//           </p>

//           {/* Product Info */}
//           <div
//             key={currentProduct.title}
//             className="transition-all duration-700 ease-in-out opacity-100"
//           >
//             <h3 className="text-2xl font-bold mb-2 text-gray-800">
//               {currentProduct.title}
//             </h3>
//             <p className="text-gray-600">{currentProduct.description}</p>
//           </div>
//         </div>

//         {/* RIGHT SIDE — Circular Image */}
//         <div className="flex justify-center md:justify-end transition-transform duration-700 ease-in-out">
//           <img
//             src={currentProduct.image}
//             alt={currentProduct.title}
//             className="w-96 h-96 object-cover rounded-full shadow-xl transform translate-x-6"
//           />
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-center gap-4 mt-10">
//         <button
//           onClick={handlePrev}
//           className="bg-blue-300 hover:bg-orange-600 text-white p-3 rounded-md transition-colors"
//         >
//           <ArrowLeft className="w-5 h-5" />
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-blue-300 hover:bg-orange-600 text-white p-3 rounded-md transition-colors"
//         >
//           <ArrowRight className="w-5 h-5" />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default KeyProducts;




import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const KeyProducts = () => {
  const products = [
    {
      title: "HR (Hot Rolled) Black",
      description: "Available in coils, sheets, and plates with industrial-grade quality.",
      image: "/images/prague.jpg",
    },
    {
      title: "CR (Cold Rolled) Steel",
      description: "Used where high strength, precision thickness, and fine finishing matter.",
      image: "/images/firenze-9292729_1280.jpg",
    },
    {
      title: "Galvanized Steel",
      description: "Superior corrosion-resistant steel for automotive and construction sectors.",
      image: "/images/architecture-2182003_1920.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const currentProduct = products[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16">

        {/* LEFT SIDE TEXT */}
        <motion.div
          key={currentProduct.title + "-text"}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Key Products
          </h2>

          <p className="text-gray-700 mb-8 text-lg leading-relaxed max-w-lg">
            Matrix plants are equipped with advanced lines to process flat-rolled steel,
            delivering precision, durability, and consistency for industries worldwide.
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {currentProduct.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {currentProduct.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProduct.title + "-img"}
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -40 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:justify-end"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-300">
              <img
                src={currentProduct.image}
                alt={currentProduct.title}
                className="w-[380px] md:w-[420px] lg:w-[480px] h-[350px] md:h-[420px] object-cover 
                           hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* NAV BUTTONS */}
      <div className="flex justify-center gap-6 mt-16">
        <button
          onClick={handlePrev}
          className="bg-gray-800 hover:bg-blue-600 text-white p-4 rounded-xl shadow-lg 
                     transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-800 hover:bg-blue-600 text-white p-4 rounded-xl shadow-lg 
                     transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default KeyProducts;
