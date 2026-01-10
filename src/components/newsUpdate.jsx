import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
/* ---------------- DATA ---------------- */
const newsData = [
  {
    title: "Global Aluminium Prices Strengthen Amid Rising Aerospace Demand",
    text:
      "Growing consumption from the aerospace and EV sectors has pushed aluminium prices upward this quarter. Analysts expect continued stability due to strong downstream demand and limited supply disruptions.",
    images: [
      "/Images/Auto & EV Manufacturers Shift Toward Lightweight Aluminium Sheets.jpeg",
      "/Images/Aluminium Alloy 3xxx & 5xxx Series Gain Popularity in Food Packaging.jpeg",
    ],
  },
  {
    title: "India’s Aluminium Consumption Expected to Cross 9 Million Tons by 2030",
    text:
      "India is projected to become one of the fastest-growing aluminium markets driven by infrastructure, renewables, and mobility projects.",
    images: [
      "/Images/India’s Aluminium Consumption Expected to Cross 9 Million Tons by 2030.jpeg",
      "/Images/New BIS Standards Released for Aluminium Flat Products.jpeg",
    ],
  },
  {
    title: "EV Manufacturers Shift Toward Lightweight Aluminium Sheets",
    text:
      "Major automakers are increasing procurement of lightweight alloys to meet fuel efficiency and emission regulations.",
    images: [
      "/Images/Import Policies Tighten on Low-Value Aluminium Items.jpeg",
      "/Images/Aluminium Recycling Capacity Expands Across South India.jpeg",
    ],
  },
];
/* ---------------- HELPERS ---------------- */
const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};
/* ---------------- COMPONENT ---------------- */
export default function NewsUpdate() {
  const [contentIndex, setContentIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const textSlides = chunkArray(newsData, 1); // One item per slide for balanced display
  const totalSlides = textSlides.length; // Unified total slides
  /* -------- AUTO SLIDE -------- */
  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      setContentIndex((prev) => (prev + 1) % totalSlides);
      setImageIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovering, totalSlides]);
  /* -------- CONTROLS -------- */
  const nextSlide = () => {
    setContentIndex((prev) => (prev + 1) % totalSlides);
    setImageIndex((prev) => (prev + 1) % totalSlides);
  };
  const prevSlide = () => {
    setContentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setImageIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  /* ---------------- UI ---------------- */
  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-black/90 to-black/60" // Reverted to original dark gradient with enhanced depth
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* ARROWS - Enhanced: larger, with shadow, orange hover */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 z-20 bg-white/50 rounded-full p-4 hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md"
      >
        <FiChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 z-20 bg-white/50 rounded-full p-4 hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md"
      >
        <FiChevronRight size={28} />
      </button>
      {/* -------- MAIN SLIDE SECTION - Integrated, with improved spacing and overlays -------- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`slide-${contentIndex}`}
          initial={{ x: 300, opacity: 0 }} // Smoother slide-in
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }} // Refined spring for natural bounce
          className="h-[650px] flex flex-col lg:flex-row justify-between items-center gap-8 px-10 py-12" // Taller for better visual balance, responsive
        >
          {/* TEXT CONTENT - Dark overlay, improved typography with line clamps */}
          <div className="lg:w-1/2 space-y-6 p-8 bg-black/70 rounded-2xl shadow-xl backdrop-blur-md text-white">
            {textSlides[contentIndex].map((item, i) => (
              <div key={i}>
                <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight line-clamp-3">
                  {item.title}
                </h2>
                <p className="text-gray-300 text-base lg:text-lg mt-4 line-clamp-4">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          {/* IMAGES - With gradient overlay for text if needed, enhanced hover */}
          <div className="lg:w-1/2 flex gap-6">
            {newsData[imageIndex].images.slice(0, 2).map((img, i) => (
              <div
                key={i}
                className="flex-1 rounded-3xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:brightness-110 relative"
              >
                <img
                  src={img}
                  alt="news"
                  className="w-full h-full object-cover"
                />
                {/* Optional subtle overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
      {/* -------- DOTS - Enhanced: larger, with hover effect, orange active */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setImageIndex(i);
              setContentIndex(i);
            }}
            className={`w-4 h-4 rounded-full transition-all duration-300 shadow-sm ${
              i === imageIndex
                ? "bg-orange-500 scale-125"
                : "bg-gray-400 hover:bg-orange-300 hover:scale-110"
            }`}
          />
        ))}
      </div>
    </div>
  );
}