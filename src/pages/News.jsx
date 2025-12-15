// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // export default function NewsPage() {
// //   const allNews = [
// //     {
// //       id: 1,
// //       title: "Global Aluminium Prices Strengthen Amid Rising Aerospace Demand",
// //       image: "/Images/DDNews.jpg",
// //       date: "Dec 04, 2025",
// //       summary:
// //         "Growing consumption from aerospace and EV sectors has pushed aluminium prices upward this quarter.",
// //       content:
// //         "Growing consumption from aerospace and EV sectors has pushed aluminium prices upward this quarter. Analysts expect continued stability due to strong downstream demand and limited supply disruptions.",
// //     },
// //     {
// //       id: 2,
// //       title: "India's Aluminium Consumption Expected to Cross 9 Million Tons by 2030",
// //       image: "/Images/news01.jpeg",
// //       date: "Nov 30, 2025",
// //       summary:
// //         "According to industry forecasts, India will become one of the fastest-growing aluminium markets, driven by infrastructure, renewable energy, and mobility projects.",
// //       content:
// //         "Local processors are scaling capacity to meet this surge in demand driven by infrastructure, renewable energy, and mobility projects.",
// //     },
// //     {
// //       id: 3,
// //       title: "Auto & EV Manufacturers Shift Toward Lightweight Aluminium Sheets",
// //       image: "/Images/news03.jpg",
// //       date: "Nov 28, 2025",
// //       summary:
// //         "Major automotive companies have increased procurement of lightweight aluminium alloys to improve fuel efficiency and meet stricter emission norms.",
// //       content:
// //         "Precision rolling and surface finishing demand is rising as EV manufacturers prioritize weight reduction and performance improvements.",
// //     },
// //     {
// //       id: 4,
// //       title: "Aluminium Recycling Capacity Expands Across South India",
// //       image: "/Images/news02.jpg",
// //       date: "Nov 25, 2025",
// //       summary:
// //         "Southern clusters are investing heavily in scrap recycling and remelting units as sustainability-focused industries prefer recycled aluminium.",
// //       content:
// //         "Sustainability-focused industries prefer recycled aluminium due to its lower carbon footprint and cost efficiency.",
// //     },
// //     {
// //       id: 5,
// //       title: "New BIS Standards Released for Aluminium Flat Products",
// //       image: "/Images/news04.png",
// //       date: "Nov 22, 2025",
// //       summary:
// //         "The Bureau of Indian Standards updated compliance guidelines for aluminium sheets, coils, and extrusions to improve traceability and quality.",
// //       content:
// //         "The updated standards improve traceability, coating quality, and performance benchmarks across the industry.",
// //     },
// //     {
// //       id: 6,
// //       title: "Surge in Demand for Anodized Aluminium in Architecture & Interiors",
// //       image: "/Images/news05.jpg",
// //       date: "Nov 20, 2025",
// //       summary:
// //         "Premium anodized and brushed aluminium sheets are gaining traction in façade and interior applications.",
// //       content:
// //         "Demand for No.4 and hairline finishes has increased sharply in modular kitchens and architectural applications.",
// //     },
// //     {
// //       id: 7,
// //       title: "Solar Sector Drives Demand for High-Reflective Aluminium Sheets",
// //       image: "/Images/news06.jpg",
// //       date: "Nov 18, 2025",
// //       summary:
// //         "India's renewable energy installations are boosting orders for specialised aluminium reflector sheets.",
// //       content:
// //         "Specialised high-reflective aluminium sheets and structural components are crucial for solar power plant efficiency.",
// //     },
// //     {
// //       id: 8,
// //       title: "Import Policies Tighten on Low-Value Aluminium Items",
// //       image: "/Images/news07.jpg",
// //       date: "Nov 15, 2025",
// //       summary:
// //         "Government authorities are increasing scrutiny on under-invoiced aluminium imports.",
// //       content:
// //         "Several consignments were flagged due to valuation mismatches, encouraging industries to source domestically.",
// //     },
// //     {
// //       id: 9,
// //       title: "Aluminium Alloy 3xxx & 5xxx Series Gain Popularity in Food Packaging",
// //       image: "/Images/news08.jpg",
// //       date: "Nov 12, 2025",
// //       summary:
// //         "Food-packaging firms upgrade to safer materials; 3xxx and 5xxx series sheets become preferred.",
// //       content:
// //         "These alloys are chosen for their corrosion resistance, hygiene benefits, and suitability for food contact applications.",
// //     },
// //     {
// //       id: 10,
// //       title: "Indian Aluminium Processors Invest in Automation & Industry 4.0",
// //       image: "/Images/news09.jpg",
// //       date: "Nov 10, 2025",
// //       summary:
// //         "Advanced coil-to-coil polishing lines and automated inspection systems are being adopted across the industry.",
// //       content:
// //         "Investment in automation helps meet international export standards, improving precision and reducing manual errors.",
// //     },
// //   ];

// //   const [selectedArticle, setSelectedArticle] = useState(null);

// //   const openModal = (article) => {
// //     setSelectedArticle(article);
// //     setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
// //   };

// //   const closeModal = () => setSelectedArticle(null);

// //   const hero = allNews[0];

// //   return (
// //     <section className="min-h-screen pb-20 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-black">
// //       {/* Hero Section */}
// //       <div className="relative h-[560px] md:h-[620px] w-full">
// //         <img
// //           src={hero.image}
// //           alt={hero.title}
// //           className="absolute inset-0 w-full h-full object-cover"
// //         />

// //         <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

// //         <div className="absolute inset-0 flex items-center">
// //           <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 w-full">
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
// //               <motion.div 
// //                 className="text-white"
// //                 initial={{ opacity: 0, x: -40 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 transition={{ duration: 0.6 }}
// //               >
// //                 <p className="text-sm uppercase tracking-widest text-orange-400 mb-4 font-semibold">Latest News</p>
// //                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
// //                   {hero.title}
// //                 </h1>

// //                 <p className="max-w-xl text-base md:text-lg text-white/80 mb-6 leading-relaxed">
// //                   {hero.summary}
// //                 </p>

// //                 <div className="flex items-center gap-4 flex-wrap">
// //                   <motion.button
// //                     onClick={() => openModal(hero)}
// //                     whileHover={{ scale: 1.05 }}
// //                     whileTap={{ scale: 0.95 }}
// //                     className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
// //                   >
// //                     Read the story
// //                   </motion.button>

// //                   <span className="text-sm text-white/70">{hero.date}</span>
// //                 </div>
// //               </motion.div>

// //               <motion.div 
// //                 className="hidden md:block"
// //                 initial={{ opacity: 0, x: 40 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 transition={{ duration: 0.6, delay: 0.2 }}
// //               >
// //                 <div className="rounded-xl overflow-hidden shadow-2xl">
// //                   <img src={hero.image} alt="hero-preview" className="w-full h-80 object-cover" />
// //                 </div>
// //               </motion.div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* News Grid - 9 cards */}
// //       <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
// //         <motion.h2 
// //           className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
// //           initial={{ opacity: 0, y: -20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //           viewport={{ once: true }}
// //         >
// //           More Industry Updates
// //         </motion.h2>

// //         <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
// //           {allNews.slice(1).map((item, idx) => (
// //             <motion.article
// //               key={item.id}
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: idx * 0.1 }}
// //               viewport={{ once: true }}
// //               whileHover={{ y: -8 }}
// //               className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 dark:border-slate-700/30 hover:border-orange-500/30 transition-all group"
// //             >
// //               <div className="relative h-44 overflow-hidden">
// //                 <img
// //                   src={item.image}
// //                   alt={item.title}
// //                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
// //               </div>

// //               <div className="p-6">
// //                 <p className="text-xs uppercase tracking-widest text-orange-400 mb-2 font-semibold">
// //                   {item.date}
// //                 </p>
// //                 <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition mb-3 line-clamp-2">
// //                   {item.title}
// //                 </h3>
// //                 <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
// //                   {item.summary}
// //                 </p>

// //                 <motion.button
// //                   onClick={() => openModal(item)}
// //                   whileHover={{ x: 4 }}
// //                   className="text-orange-400 hover:text-orange-300 font-semibold text-sm flex items-center gap-2 transition"
// //                 >
// //                   Read more <span>→</span>
// //                 </motion.button>
// //               </div>
// //             </motion.article>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Modal */}
// //       <AnimatePresence>
// //         {selectedArticle && (
// //           <motion.div
// //             className="fixed inset-0 bg-black/70 z-50 flex justify-center items-start overflow-auto pt-24 px-4"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={closeModal}
// //           >
// //             <motion.div
// //               className="bg-gray-900 dark:bg-slate-900 rounded-xl max-w-4xl w-full shadow-2xl p-8 relative border border-gray-800"
// //               initial={{ scale: 0.9, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.9, opacity: 0 }}
// //               transition={{ duration: 0.25 }}
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <button
// //                 onClick={closeModal}
// //                 className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl font-light transition"
// //               >
// //                 ✕
// //               </button>

// //               <div className="mb-6">
// //                 <p className="text-orange-400 text-sm uppercase tracking-widest font-semibold">
// //                   {selectedArticle.date}
// //                 </p>
// //                 <h2 className="text-3xl font-bold text-white mt-2 mb-4">
// //                   {selectedArticle.title}
// //                 </h2>
// //               </div>

// //               <img
// //                 src={selectedArticle.image}
// //                 alt={selectedArticle.title}
// //                 className="w-full h-80 object-cover rounded-lg mb-6"
// //               />

// //               <p className="text-gray-300 text-lg leading-relaxed mb-6">
// //                 {selectedArticle.content || selectedArticle.summary}
// //               </p>

// //               {selectedArticle.gallery && selectedArticle.gallery.length > 0 && (
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
// //                   {selectedArticle.gallery.map((img, idx) => (
// //                     <img
// //                       key={idx}
// //                       src={img}
// //                       alt={`Gallery ${idx}`}
// //                       className="w-full h-48 object-cover rounded-lg"
// //                     />
// //                   ))}
// //                 </div>
// //               )}
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </section>
// //   );
// // }























// // import { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // export default function NewsPage() {
// //   const [allNews, setAllNews] = useState([]);
// //   const [selectedArticle, setSelectedArticle] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   // Fetch news from API
// //   useEffect(() => {
// //     const fetchNews = async () => {
// //       try {
// //         const response = await fetch(
// //           `https://newsapi.example.com/v1/latest?apiKey=api_live_AFQhveEamhZAcD62q098IiCvRHscHQZfucZV0fGltTQpUaKRwZXW3aweb`
// //         );
// //         const data = await response.json();

// //         // Assuming API returns an array of articles in data.articles
// //         const formattedNews = data.articles.map((item, idx) => ({
// //           id: idx + 1,
// //           title: item.title,
// //           image: item.image || "/Images/default-news.jpg",
// //           date: item.publishedAt ? new Date(item.publishedAt).toDateString() : "Unknown date",
// //           summary: item.description || "",
// //           content: item.content || item.description || "",
// //         }));

// //         setAllNews(formattedNews);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching news:", error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchNews();
// //   }, []);

// //   const openModal = (article) => {
// //     setSelectedArticle(article);
// //     setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
// //   };

// //   const closeModal = () => setSelectedArticle(null);

// //   const hero = allNews[0] || {};

// //   if (loading) {
// //     return (
// //       <div className="flex justify-center items-center min-h-screen text-white text-xl">
// //         Loading latest news...
// //       </div>
// //     );
// //   }

// //   return (
// //     <section className="min-h-screen pb-20 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-black">
// //       {/* Hero Section */}
// //       {hero && (
// //         <div className="relative h-[560px] md:h-[620px] w-full">
// //           <img
// //             src={hero.image}
// //             alt={hero.title}
// //             className="absolute inset-0 w-full h-full object-cover"
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
// //           <div className="absolute inset-0 flex items-center">
// //             <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 w-full">
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
// //                 <motion.div
// //                   className="text-white"
// //                   initial={{ opacity: 0, x: -40 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   transition={{ duration: 0.6 }}
// //                 >
// //                   <p className="text-sm uppercase tracking-widest text-orange-400 mb-4 font-semibold">
// //                     Latest News
// //                   </p>
// //                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
// //                     {hero.title}
// //                   </h1>
// //                   <p className="max-w-xl text-base md:text-lg text-white/80 mb-6 leading-relaxed">
// //                     {hero.summary}
// //                   </p>
// //                   <div className="flex items-center gap-4 flex-wrap">
// //                     <motion.button
// //                       onClick={() => openModal(hero)}
// //                       whileHover={{ scale: 1.05 }}
// //                       whileTap={{ scale: 0.95 }}
// //                       className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
// //                     >
// //                       Read the story
// //                     </motion.button>
// //                     <span className="text-sm text-white/70">{hero.date}</span>
// //                   </div>
// //                 </motion.div>
// //                 <motion.div
// //                   className="hidden md:block"
// //                   initial={{ opacity: 0, x: 40 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   transition={{ duration: 0.6, delay: 0.2 }}
// //                 >
// //                   <div className="rounded-xl overflow-hidden shadow-2xl">
// //                     <img src={hero.image} alt="hero-preview" className="w-full h-80 object-cover" />
// //                   </div>
// //                 </motion.div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* News Grid */}
// //       <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
// //         <motion.h2
// //           className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
// //           initial={{ opacity: 0, y: -20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //           viewport={{ once: true }}
// //         >
// //           More Industry Updates
// //         </motion.h2>

// //         <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
// //           {allNews.slice(1).map((item, idx) => (
// //             <motion.article
// //               key={item.id}
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: idx * 0.1 }}
// //               viewport={{ once: true }}
// //               whileHover={{ y: -8 }}
// //               className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 dark:border-slate-700/30 hover:border-orange-500/30 transition-all group"
// //             >
// //               <div className="relative h-44 overflow-hidden">
// //                 <img
// //                   src={item.image}
// //                   alt={item.title}
// //                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
// //               </div>
// //               <div className="p-6">
// //                 <p className="text-xs uppercase tracking-widest text-orange-400 mb-2 font-semibold">
// //                   {item.date}
// //                 </p>
// //                 <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition mb-3 line-clamp-2">
// //                   {item.title}
// //                 </h3>
// //                 <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
// //                   {item.summary}
// //                 </p>
// //                 <motion.button
// //                   onClick={() => openModal(item)}
// //                   whileHover={{ x: 4 }}
// //                   className="text-orange-400 hover:text-orange-300 font-semibold text-sm flex items-center gap-2 transition"
// //                 >
// //                   Read more <span>→</span>
// //                 </motion.button>
// //               </div>
// //             </motion.article>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Modal */}
// //       <AnimatePresence>
// //         {selectedArticle && (
// //           <motion.div
// //             className="fixed inset-0 bg-black/70 z-50 flex justify-center items-start overflow-auto pt-24 px-4"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={closeModal}
// //           >
// //             <motion.div
// //               className="bg-gray-900 dark:bg-slate-900 rounded-xl max-w-4xl w-full shadow-2xl p-8 relative border border-gray-800"
// //               initial={{ scale: 0.9, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.9, opacity: 0 }}
// //               transition={{ duration: 0.25 }}
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <button
// //                 onClick={closeModal}
// //                 className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl font-light transition"
// //               >
// //                 ✕
// //               </button>

// //               <div className="mb-6">
// //                 <p className="text-orange-400 text-sm uppercase tracking-widest font-semibold">
// //                   {selectedArticle.date}
// //                 </p>
// //                 <h2 className="text-3xl font-bold text-white mt-2 mb-4">{selectedArticle.title}</h2>
// //               </div>

// //               <img
// //                 src={selectedArticle.image}
// //                 alt={selectedArticle.title}
// //                 className="w-full h-80 object-cover rounded-lg mb-6"
// //               />

// //               <p className="text-gray-300 text-lg leading-relaxed mb-6">
// //                 {selectedArticle.content || selectedArticle.summary}
// //               </p>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </section>
// //   );
// // }




// // File: src/components/AluminumNews.jsx
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AluminumNews = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Your working API key (safe for client-side demo use)
//   const API_KEY = "7347fdca6aa84c0c9e4c39358710b34e";

//   // Super-targeted query to get ONLY real aluminum industry news
//   const query =
//     '("aluminum" OR "aluminium" OR "LME aluminum" OR "bauxite" OR "alumina" OR "Alcoa" OR "Rusal" OR "Norsk Hydro" OR "Rio Tinto aluminum" OR "aluminum price" OR "aluminum market") -football -recipe -cooking -beer -can';

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get(
//           `https://newsapi.org/v2/everything?q=${encodeURIComponent(
//             query
//           )}&language=en&pageSize=20&sortBy=publishedAt&apiKey=${API_KEY}`
//         );

//         // Final strict filter – only true aluminum industry articles
//         const aluminumArticles = response.data.articles.filter((article) => {
//           const text = `${article.title} ${article.description || ""} ${article.content || ""}`.toLowerCase();
//           return /(alumin(i)?um|bauxite|alumina|lme|alcoa|rusal|hydro|rio tinto|chalco|primary aluminum|smelter|extrusion)/i.test(
//             text
//           );
//         });

//         setArticles(aluminumArticles.slice(0, 15)); // Top 15 most relevant
//         setLoading(false);
//       } catch (error) {
//         console.error("News API Error:", error.response?.data || error.message);
//         setLoading(false);
//       }
//     };

//     fetchNews();
//     // Refresh every 15 minutes
//     const interval = setInterval(() => fetchNews(), 15 * 60 * 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const formatDate = (dateString) => {
//     const options = { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" };
//     return new Date(dateString).toLocaleDateString("en-US", options);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-blue-50 to-cyan-50">
//       {/* Hero Header */}
//       <div className="bg-gradient-to-r from-blue-700 to-cyan-700 py-16 px-6 shadow-2xl">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
//             Aluminum Industry Live News
//           </h1>
//           <p className="text-xl md:text-2xl text-blue-100 font-light">
//             LME Prices • Global Supply • Bauxite • Alumina • Smelters • Trade • Sustainability
//           </p>
//           <div className="mt-6 flex justify-center gap-4 flex-wrap">
//             <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium">
//               Updated Every 15 Minutes
//             </span>
//             <span className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium">
//               {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-12">
//         {/* Loading State */}
//         {loading && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[...Array(9)].map((_, i) => (
//               <div key={i} className="bg-white rounded-3xl shadow-xl overflow-hidden animate-pulse">
//                 <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300"></div>
//                 <div className="p-8">
//                   <div className="h-8 bg-gray-300 rounded-lg mb-4"></div>
//                   <div className="h-5 bg-gray-200 rounded w-full mb-3"></div>
//                   <div className="h-5 bg-gray-200 rounded w-4/5"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* News Grid */}
//         {!loading && articles.length > 0 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {articles.map((article, index) => (
//               <article
//                 key={`${article.url}-${index}`}
//                 className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col h-full"
//               >
//                 {/* Image */}
//                 <div className="relative overflow-hidden">
//                   {article.urlToImage ? (
//                     <img
//                       src={article.urlToImage}
//                       alt={article.title}
//                       className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
//                       loading="lazy"
//                       onError={(e) => {
//                         e.target.src = "https://images.unsplash.com/photo-1613267632429-7d79c0ec3e2b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80";
//                       }}
//                     />
//                   ) : (
//                     <div className="bg-gradient-to-br from-blue-600 to-cyan-700 h-64 flex items-center justify-center">
//                       <span className="text-7xl font-black text-white/30">AL</span>
//                     </div>
//                   )}
//                   <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
//                     {article.source.name}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-8 flex flex-col flex-grow">
//                   <h2 className="text-2xl font-bold text-gray-800 mb-4 line-clamp-3 group-hover:text-blue-700 transition-colors">
//                     {article.title}
//                   </h2>

//                   <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-4 flex-grow">
//                     {article.description || "Latest update from the global aluminum sector..."}
//                   </p>

//                   <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
//                     <span className="font-medium">{formatDate(article.publishedAt)}</span>
//                     <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs font-semibold">
//                       Industry News
//                     </span>
//                   </div>

//                   <a
//                     href={article.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mt-auto inline-block text-center w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-2xl hover:from-blue-700 hover:to-cyan-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
//                   >
//                     Read Full Story
//                   </a>
//                 </div>
//               </article>
//             ))}
//           </div>
//         )}

//         {/* Empty State */}
//         {!loading && articles.length === 0 && (
//           <div className="text-center py-24">
//             <div className="text-6xl mb-6">Newspaper</div>
//             <h3 className="text-3xl font-bold text-gray-700 mb-4">No Recent Aluminum News</h3>
//             <p className="text-xl text-gray-500">Check back soon — the industry moves fast!</p>
//           </div>
//         )}
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-400 py-8 mt-20">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <p className="text-sm">
//             Live Aluminum Industry News • Powered by{" "}
//             <a href="https://newsapi.org" className="text-cyan-400 hover:underline">
//               NewsAPI.org
//             </a>{" "}
//             • {new Date().getFullYear()}
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AluminumNews;



// import React, { useState, useEffect, memo } from "react";
// import axios from "axios";

// // Optimized Card Component
// const NewsCard = memo(({ article }) => {
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   return (
//     <article className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:bg-white/15 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/30 h-full flex flex-col">
//       <div className="relative h-64 overflow-hidden">
//         {article.urlToImage ? (
//           <img
//             src={article.urlToImage}
//             alt={article.title}
//             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//             loading="lazy"
//             onError={(e) => {
//               e.target.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80";
//             }}
//           />
//         ) : (
//           <div className="w-full h-full bg-gradient-to-br from-blue-600/50 to-cyan-700/50 flex items-center justify-center">
//             <span className="text-8xl font-black text-white/20">AL</span>
//           </div>
//         )}
//         <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold border border-white/30">
//           {article.source.name || "News"}
//         </div>
//       </div>

//       <div className="p-7 flex flex-col flex-grow">
//         <h3 className="text-xl font-bold text-white mb-3 line-clamp-3 group-hover:text-cyan-300 transition-colors">
//           {article.title}
//         </h3>

//         <p className="text-blue-200 text-sm mb-6 line-clamp-3 flex-grow">
//           {article.description || "Click to read the full article..."}
//         </p>

//         <div className="flex justify-between items-center text-xs text-cyan-300 mb-6">
//           <span>{formatDate(article.publishedAt)}</span>
//           <span className="px-3 py-1 bg-cyan-500/30 rounded-full">Aluminum</span>
//         </div>

//         <a
//           href={article.url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="block text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg mt-auto"
//         >
//           Read Article
//         </a>
//       </div>
//     </article>
//   );
// });

// const AluminumNewsDashboard = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const API_KEY = "7347fdca6aa84c0c9e4c39358710b34e";

//   const query = `("aluminum" OR "aluminium" OR "LME aluminum" OR "bauxite" OR "alumina" OR "Alcoa" OR "Rusal" OR "Norsk Hydro" OR "aluminum price" OR "primary aluminum") -football -recipe -cooking`;

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const res = await axios.get(
//           `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en&pageSize=40&sortBy=publishedAt&apiKey=${API_KEY}`
//         );

//         const filtered = res.data.articles
//           .filter((a) => {
//             const text = `${a.title || ""} ${a.description || ""}`.toLowerCase();
//             return /(alumin(i)?um|bauxite|alumina|lme|alcoa|rusal|hydro|smelter)/i.test(text);
//           })
//           .slice(0, 24);

//         setArticles(filtered);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to load news:", err.message);
//         setLoading(false);
//       }
//     };

//     fetchNews();
//     const interval = setInterval(fetchNews, 600000); // 10 minutes
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white">
//       {/* Background Effects */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//       </div>

//       {/* Header */}
//       <header className="relative z-10 pt-16 pb-32 text-center px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full mb-8">
//             <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
//             <span>LIVE • {articles.length} Articles</span>
//           </div>
//           <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
//             ALUMINUM NEWS
//           </h1>
//           <p className="mt-6 text-xl text-blue-200">Real-time Global Industry Updates</p>
//         </div>
//       </header>

//       {/* Main Grid */}
//       <main className="relative z-10 max-w-7xl mx-auto px-6 pb-20 -mt-16">
//         {loading ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {[...Array(20)].map((_, i) => (
//               <div key={i} className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden animate-pulse">
//                 <div className="h-64 bg-gradient-to-br from-white/10 to-white/5"></div>
//                 <div className="p-8">
//                   <div className="h-8 bg-white/20 rounded-xl mb-4"></div>
//                   <div className="h-5 bg-white/10 rounded-lg w-full mb-3"></div>
//                   <div className="h-5 bg-white/10 rounded-lg w-4/5"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {articles.map((article, i) => (
//               <NewsCard key={i} article={article} />
//             ))}
//           </div>
//         )}
//       </main>

//       <footer className="text-center py-8 text-blue-300 text-sm border-t border-white/10">
//         Powered by NewsAPI • Updated every 10 minutes • {new Date().getFullYear()}
//       </footer>
//     </div>
//   );
// };

// export default AluminumNewsDashboard;

















// import React, { useState, useEffect, memo } from "react";
// import axios from "axios";

// // HORIZONTAL CARD
// const NewsCard = memo(({ article }) => {
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   return (
//     <article className="group bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row w-full h-auto">
      
//       {/* IMAGE SECTION */}
//       <div className="w-full md:w-1/3 h-64 md:h-auto overflow-hidden">
//         {article.urlToImage ? (
//           <img
//             src={article.urlToImage}
//             alt={article.title}
//             className="w-full h-full object-cover md:object-cover transition-transform duration-700 group-hover:scale-105"
//             loading="lazy"
//             onError={(e) => {
//               e.target.src =
//                 "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80";
//             }}
//           />
//         ) : (
//           <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//             <span className="text-6xl font-black text-gray-400">AL</span>
//           </div>
//         )}
//       </div>

//       {/* TEXT SECTION */}
//       <div className="p-6 md:p-8 flex flex-col md:w-2/3 text-black">

//         <div className="flex justify-between items-center mb-3">
//           <span className="text-xs bg-black text-white px-3 py-1 rounded-full">
//             {article.source.name || "News"}
//           </span>
//           <span className="text-xs text-orange-400 font-semibold">
//             {formatDate(article.publishedAt)}
//           </span>
//         </div>

//         <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
//           {article.title}
//         </h3>

//         <p className="text-gray-700 text-sm mb-6 line-clamp-3">
//           {article.description || "Click below to read more..."}
//         </p>

//         <div className="mt-auto">
//           <a
//             href={article.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block text-center bg-orange-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-400 transition-all duration-300 shadow-md"
//           >
//             Read Article
//           </a>
//         </div>
//       </div>
//     </article>
//   );
// });


// // MAIN COMPONENT
// const AluminumNewsDashboard = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const API_KEY = "7347fdca6aa84c0c9e4c39358710b34e";
//   const query = `("aluminum" OR "aluminium" OR "LME aluminum" OR "bauxite" OR "alumina")`;

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const res = await axios.get(
//           `https://newsapi.org/v2/everything?q=${encodeURIComponent(
//             query
//           )}&language=en&pageSize=40&sortBy=publishedAt&apiKey=${API_KEY}`
//         );

//         const filtered = res.data.articles
//           .filter((a) => {
//             const text = `${a.title || ""} ${a.description || ""}`.toLowerCase();
//             return /(alumin|bauxite|alumina|lme|smelter)/i.test(text);
//           })
//           .slice(0, 20);

//         setArticles(filtered);
//         setLoading(false);
//       } catch (err) {
//         console.error("Failed to load news:", err.message);
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div className="min-h-screen bg-white bg-gradient-to-r from-white to-gray-300 text-black">
      
//       {/* HEADER */}
//       <header className="text-center pt-16 pb-12 px-6">
//         <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm mb-8 border border-gray-300">
//           <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
//           <span className="text-gray-700">LIVE • {articles.length} Articles</span>
//         </div>

//         <h1 className="text-5xl md:text-7xl font-black">ALUMINUM NEWS</h1>
//         <p className="mt-4 text-lg text-gray-600">
//           Real-time Global Industry Updates
//         </p>
//       </header>

//       {/* HORIZONTAL CARD GRID */}
//       <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
//         {loading ? (
//           [...Array(6)].map((_, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl h-48 shadow animate-pulse"
//             ></div>
//           ))
//         ) : (
//           articles.map((article, i) => <NewsCard key={i} article={article} />)
//         )}
//       </main>

//       <footer className="text-center py-8 text-gray-600 text-sm border-t border-gray-300">
//         Powered by NewsAPI • Updated Every 10 Minutes • {new Date().getFullYear()}
//       </footer>
//     </div>
//   );
// };

// export default AluminumNewsDashboard;




import React, { useState, useEffect, memo } from "react";
import axios from "axios";

// -------------------- CARD --------------------
const NewsCard = memo(({ article }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <article className="group bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row w-full">
      
      <div className="w-full md:w-1/3 h-64 md:h-auto overflow-hidden">
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={(e) =>
              (e.target.src =
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c")
            }
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-6xl font-black text-gray-400">AL</span>
          </div>
        )}
      </div>

      <div className="p-6 md:p-8 flex flex-col md:w-2/3 text-black">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs bg-black text-white px-3 py-1 rounded-full">
            {article.source?.name || "News"}
          </span>
          <span className="text-xs text-orange-400 font-semibold">
            {formatDate(article.publishedAt)}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="text-gray-700 text-sm mb-6 line-clamp-3">
          {article.description || "Click below to read more..."}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block bg-orange-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-400 transition"
        >
          Read Article
        </a>
      </div>
    </article>
  );
});

// -------------------- MAIN --------------------
const AluminumNewsDashboard = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const NEWS_API_KEY = "7347fdca6aa84c0c9e4c39358710b34e";
  const GNEWS_API_KEY = "YOUR_GNEWS_API_KEY"; // 👈 add once

  const query = "aluminum OR aluminium OR bauxite OR alumina OR LME";

  const fromDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  // ---------- PRIMARY API ----------
  const fetchFromNewsAPI = async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        query
      )}&from=${fromDate}&language=en&sortBy=publishedAt&pageSize=40&apiKey=${NEWS_API_KEY}`
    );

    return res.data.articles;
  };

  // ---------- FALLBACK API ----------
  const fetchFromGNews = async () => {
    const res = await axios.get(
      `https://gnews.io/api/v4/search?q=${encodeURIComponent(
        query
      )}&from=${fromDate}&lang=en&max=40&apikey=${GNEWS_API_KEY}`
    );

    return res.data.articles.map((a) => ({
      title: a.title,
      description: a.description,
      url: a.url,
      urlToImage: a.image,
      publishedAt: a.publishedAt,
      source: { name: a.source.name },
    }));
  };

  // ---------- FETCH LOGIC ----------
  const loadNews = async () => {
    try {
      setLoading(true);
      const articles = await fetchFromNewsAPI();
      setArticles(articles.slice(0, 20));
    } catch (err) {
      console.warn("NewsAPI failed → switching to GNews");
      try {
        const fallbackArticles = await fetchFromGNews();
        setArticles(fallbackArticles.slice(0, 20));
      } catch (fallbackErr) {
        console.error("Both APIs failed");
      }
    } finally {
      setLoading(false);
    }
  };

  // ---------- AUTO REFRESH (10 MIN) ----------
  useEffect(() => {
    loadNews(); // initial load

    const interval = setInterval(() => {
      loadNews();
    }, 10 * 60 * 1000); // 10 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-gray-300 text-black">
      <header className="text-center pt-16 pb-12 px-6">
        <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow border border-gray-300 mb-8">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
          <span className="text-gray-700">
            LIVE • Auto-refresh every 10 mins
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black">ALUMINUM NEWS</h1>
        <p className="mt-4 text-lg text-gray-600">
          Last 7 Days • Global Industry Updates
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        {loading
          ? [...Array(6)].map((_, i) => (
              <div key={i} className="h-48 bg-white rounded-xl animate-pulse" />
            ))
          : articles.map((a, i) => <NewsCard key={i} article={a} />)}
      </main>

      <footer className="text-center py-8 text-gray-600 text-sm border-t border-gray-300">
        NewsAPI + GNews • Auto-updating • {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default AluminumNewsDashboard;
