import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ClientsCarousel({ clients }) {
  const [speed, setSpeed] = useState(35);

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) {
        setSpeed(15); // Mobile
      } else if (window.innerWidth < 1024) {
        setSpeed(25); // Tablet
      } else {
        setSpeed(35); // Desktop
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);

    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <div className="py-14 bg-white text-center relative overflow-hidden">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Our Esteemed Customers
      </h2>

      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-8 sm:gap-12 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: speed,
            ease: "linear",
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-3 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-24 h-14 sm:w-32 sm:h-16 md:w-36 md:h-20 object-contain mx-auto transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Side Fade */}
      <div className="absolute top-0 left-0 w-16 sm:w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 sm:w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
}
