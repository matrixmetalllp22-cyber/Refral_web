
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, ShoppingBag, Award, Rss, Mail, Grid, Briefcase, X, Menu } from 'lucide-react'; // Using lucide-react for icons

export default function SidebarNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Updated menu items based on your screenshot, now including an icon
  const menuItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about-us", icon: Info },
    { name: "Products & Solutions", href: "/products-solutions", icon: ShoppingBag },
    { name: "Quality", href: "/quality", icon: Award },
    { name: "News & Media", href: "/news-media", icon: Rss },
    { name: "Contact", href: "/contact", icon: Mail },
    { name: "Applications", href: "/applications", icon: Grid },
    { name: "Case Studies", href: "/case-studies", icon: Briefcase },
  ];

  // --- Framer Motion Animation Variants ---
  const sidebarVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
  };

  return (
    <>
      {/* -------------------- 1. DESKTOP SIDEBAR (md:block) -------------------- */}
      <div className="hidden md:flex flex-col w-64 fixed h-full bg-gray-900 shadow-xl z-50">
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-700">
          <Link to="/" className="text-2xl font-extrabold text-[#F57C00]">
            Matrix <span className="text-orange-400">Metals</span>
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition duration-150"
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Contact Footer */}
        <div className="p-4 border-t border-gray-700 text-xs text-gray-500">
            <p>info@matrixmetals.com</p>
            <p>+91 12345 67890</p>
        </div>
      </div>
      
      {/* -------------------- 2. MOBILE TOP BAR (sm/xs) -------------------- */}
      {/* This top bar remains visible and has the hamburger button */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-lg z-[60] md:hidden">
        <div className="flex justify-between items-center h-full px-4">
            <Link to="/" className="text-xl font-bold text-gray-800">
                Matrix Metals
            </Link>
            <button
                onClick={() => setIsOpen(true)} // Open full screen menu
                className="p-2 rounded-full text-gray-800 hover:bg-gray-100 transition focus:outline-none"
            >
                <Menu className="w-6 h-6" />
            </button>
        </div>
      </header>

      {/* -------------------- 3. MOBILE FULL-SCREEN OVERLAY -------------------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
            className="fixed inset-0 bg-gray-900 z-[70] flex flex-col p-6"
          >
            {/* Header/Close Button */}
            <div className="flex justify-between items-center mb-10">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-extrabold text-[#F57C00]">
                Matrix <span className="text-orange-400">Metals</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full text-gray-300 hover:bg-gray-700 transition"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex-grow space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-4 p-4 text-3xl font-semibold rounded-lg text-gray-200 hover:bg-gray-700 hover:text-white transition duration-200"
                >
                  <item.icon className="w-7 h-7 text-[#F57C00]" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
            
            {/* Contact Info */}
            <div className="pt-8 text-center border-t border-gray-700 mt-auto">
                <a href="mailto:info@matrixmetals.com" className="text-lg text-gray-400 block hover:text-white transition">
                    info@matrixmetals.com
                </a>
                <a href="tel:+911234567890" className="text-lg text-gray-400 block mt-1 hover:text-white transition">
                    +91 12345 67890
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* NOTE: Content should be wrapped in a main container and given 'ml-64'
        to shift it over on desktop, but 'mt-16' for mobile.
      */}
      {/* <main className="md:ml-64 pt-16 md:pt-0">
          Your main page content goes here...
      </main> */}
    </>
  );
}