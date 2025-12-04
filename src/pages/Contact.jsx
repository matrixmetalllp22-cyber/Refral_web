
import React from "react";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900 overflow-hidden transition-colors duration-300">

      {/* Soft Glow Orbs */}
      <div className="absolute top-20 left-5 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 
      bg-slate-400/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-10 right-5 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 
      bg-gray-400/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Page Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20"
      >

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold
            bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 
            bg-clip-text text-transparent tracking-tight drop-shadow-sm"
          >
            Get in Touch
          </h1>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700 max-w-xl md:max-w-2xl mx-auto px-2">
            Have questions or need assistance? We’re here to help you move forward.
          </p>

          <div className="w-20 sm:w-28 md:w-32 h-[3px] bg-gradient-to-r from-gray-500 to-gray-700 mx-auto mt-5 sm:mt-6 rounded-full shadow-sm"></div>
        </div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="
            bg-white/60 backdrop-blur-xl 
            border border-gray-300/40 
            shadow-[0_6px_30px_rgba(0,0,0,0.15)]
            rounded-2xl 
            p-5 sm:p-8 md:p-10 lg:p-12
            transition-all duration-500"
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </div>
  );
}
