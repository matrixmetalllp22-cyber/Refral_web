// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
  
//   const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'About Us', href: '/about' },
//     { name: 'Products & Solutions', href: '/products' },
//     { name: 'Quality', href: '/industries' },
//     // { name: 'Careers', href: '/careers' },
//     { name: 'News & Media', href: '/news' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   return (
//     <header className="fixed w-full bg-white/75 backdrop-blur-sm shadow z-50">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-3 md:py-4">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <span className="text-2xl font-bold text-blue-00">Matrix Metals</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-6">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className="text-slate-700 hover:text-blue-300 font-medium transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//             {/* <Link to="/contact" className="ml-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700">Contact</Link> */}
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             aria-expanded={isOpen}
//             aria-label="Toggle menu"
//             className="lg:hidden p-2 rounded-md text-slate-700 hover:text-blue-700"
//           >
//             <span className="sr-only">Open menu</span>
//             {!isOpen ? (
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             ) : (
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden">
//             <div className="mt-2 space-y-1 bg-white rounded-md shadow-md p-3">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <Link to="/contact" onClick={() => setIsOpen(false)} className="block mt-2 px-4 py-2 bg-blue-600 text-white text-center rounded-md">Contact</Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Phone, Mail } from "lucide-react";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navigation = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Products & Solutions", href: "/products" },
//     { name: "Quality", href: "/industries" },
//     { name: "News & Media", href: "/news" },
//     { name: "Contact", href: "/contact" },
//   ];

//   // Add scroll shadow effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className={`fixed w-full z-50 transition-all duration-500 ${
//         scrolled
//           ? "bg-white/80 backdrop-blur-lg shadow-lg"
//           : "bg-gradient-to-r from-gray-100/90 to-gray-200/90 backdrop-blur-sm"
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-3 md:py-4">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <motion.span
//               className="text-2xl font-extrabold bg-gradient-to-r from-gray-800 via-blue-700 to-gray-800 bg-clip-text text-transparent"
//               whileHover={{ scale: 1.05 }}
//             >
//               Matrix Metals
//             </motion.span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 hover:drop-shadow-sm"
//               >
//                 {item.name}
//               </Link>
//             ))}

//             {/* Contact Info */}
//             <div className="flex items-center space-x-5 ml-6 pl-6 border-l border-gray-300/40">
//               <a
//                 href="tel:+911234567890"
//                 className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 <Phone className="w-4 h-4 text-blue-600" />
//                 +91 12345 67890
//               </a>
//               <a
//                 href="mailto:info@matrixmetals.com"
//                 className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 <Mail className="w-4 h-4 text-blue-600" />
//                 info@matrixmetals.com
//               </a>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//             className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-700 transition"
//           >
//             {!isOpen ? (
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="lg:hidden bg-white/90 backdrop-blur-md rounded-xl shadow-md mt-2 overflow-hidden"
//           >
//             <div className="p-3 space-y-2">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   onClick={() => setIsOpen(false)}
//                   className="block px-4 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all"
//                 >
//                   {item.name}
//                 </Link>
//               ))}

//               <div className="mt-3 border-t border-gray-200 pt-3 space-y-2">
//                 <a
//                   href="tel:+911234567890"
//                   className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600"
//                 >
//                   <Phone className="w-4 h-4 text-blue-600" /> +91 12345 67890
//                 </a>
//                 <a
//                   href="mailto:info@matrixmetals.com"
//                   className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600"
//                 >
//                   <Mail className="w-4 h-4 text-blue-600" /> info@matrixmetals.com
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </nav>
//     </motion.header>
//   );
// }


















import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="w-full bg-gradient-to-r from-slate-800 to-slate-700 text-gray-100 text-sm py-2 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-2">
            <svg
              className="w-4 h-4 text-blue-400"
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
            <a href="mailto:info@matrixmetals.com" className="hover:text-blue-300 transition-colors">
              info@matrixmetals.com
            </a>
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-2">
            <svg
              className="w-4 h-4 text-blue-400"
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
            <a href="tel:+911234567890" className="hover:text-blue-300 transition-colors">
              +91 12345 67890
            </a>
          </span>
        </div>
      </div>

      {/* --- Main Navigation --- */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200">
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
                  className="text-slate-700 hover:text-orange-600 font-medium transition-all duration-200 hover:underline underline-offset-4"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-slate-700 hover:text-blue-700"
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
          <div className="lg:hidden bg-white shadow-md border-t border-slate-100">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md"
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
