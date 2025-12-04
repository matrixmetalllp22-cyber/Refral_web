

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products & Solutions", href: "/products" },
    { name: "Quality", href: "/industries" },
    { name: "News & Media", href: "/news" },
    { name: "Contact", href: "/contact" },
    { name: "Applications", href: "/applications" },
    { name: "Case Studies", href: "/case-studies" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 shadow-md">
      {/* --- Top Contact Bar --- */}
      <div className="w-full bg-gradient-to-r from-slate-800 to-slate-700 dark:from-gray-900 dark:to-gray-950 text-gray-100 text-sm py-2 px-6 flex justify-between items-center transition-colors duration-300">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-2">
            <svg
              className="w-4 h-4 text-orange-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <a href="mailto:info@matrixmetals.com" className="hover:text-orange-300 transition-colors">
              info@matrixmetals.com
            </a>
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-2">
            <svg
              className="w-4 h-4 text-orange-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414A2 2 0 0111 7.414V10a2 2 0 01-.293.707l-1.414 1.414a16.001 16.001 0 007.586 7.586l1.414-1.414A2 2 0 0119 17h2.586a1 1 0 01.707.293l2.414 2.414A1 1 0 0124 21.414V22a2 2 0 01-2 2h-1c-9.941 0-18-8.059-18-18V5z"
              />
            </svg>
            <a href="tel:+911234567890" className="hover:text-orange-300 transition-colors">
              +91 12345 67890
            </a>
          </span>
        </div>
      </div>

      {/* --- Main Navigation --- */}
      <nav className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-slate-600">
                Matrix Metals
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-slate-700 dark:text-gray-100 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-all duration-200 hover:underline underline-offset-4"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-orange-100 dark:bg-orange-900/30 hover:bg-orange-200 dark:hover:bg-orange-800/50 transition-colors duration-300"
                title={isDark ? "Light Mode" : "Dark Mode"}
              >
                {isDark ? (
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 6.464l.707-.707a1 1 0 011.414 0zM5 6a1 1 0 100-2H4a1 1 0 000 2h1z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-slate-700 dark:text-gray-100 hover:text-orange-700 dark:hover:text-orange-400 transition-colors"
            >
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-800 shadow-md border-t border-slate-100 dark:border-slate-700 transition-colors duration-300">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-2 text-slate-700 dark:text-gray-100 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-700 dark:hover:text-orange-400 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
