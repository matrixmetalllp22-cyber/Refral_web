
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const IndustriesSection = () => {
  const navigate = useNavigate();

  
const industries = [
  {
    id: "slitting",
    name: "Slitting",
    image: "/Images/Metal-Slitter-Machine-Line-2-700x394.webp",
    description:
      "High-precision steel slitting engineered for consistency and industrial performance.",
  },
  {
    id: "cut-to-length",
    name: "Cut-to-Length",
    image: "/Images/Coil-Cut-to-Lengt.jpg",
    description:
      "Accurate CTL operations with optimized flatness for manufacturing and heavy fabrication.",
  },
  {
    id: "packing",
    name: "Packing",
    image: "/Images/aluminium-sector.jpg",
    description:
      "Industrial-grade packing ensuring safe, stable, and protected coil transport.",
  },
  {
    id: "blanking",
    name: "Blanking",
    image: "/Images/maxresdefault.jpg",
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
                  className="bg-gradient-to-r from-orange-600 to-orange-800 
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

