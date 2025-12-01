// import React from "react";
// import { motion } from "framer-motion";


// const leaders = [
//   {
//     name: "Jeeten",
//     role: "Chairman",
//     image: "/Images/miki-yusuke.jpg",
//     quote: `"We, Marubeni-Itochu Steel of Japan, are privileged to offer our business intelligence and join hands with JSW Steel of India in creating an entity in the field of value steel processing..."`,
//   },
//   {
//     name: "Rakesh Chauhan",
//     role: "JMD",
//     image: "/Images/rakesh-chauhan.jpg",
//     quote: `"At JSW MI, we are motivated and geared up to move in conjunction with the ever-increasing capacities of JSW Steel as well as all-India demand. We look forward to creating a better tomorrow for all stakeholders."`,
//   },
// ];

// const clients = [
//   { name: "Tata Motors", logo: "/Logos/TVS-Motor-Company.png" },
//   { name: "Bosch", logo: "/Logos/Ola-Cabs-Logo.png" },
//   { name: "Bajaj", logo: "/Logos/Wave_mec.png" },
//   { name: "Maruti Suzuki", logo: "/Logos/Taal.png" },
//   { name: "Mahindra", logo: "/Logos/Boeing.png" },
//   { name: "Hyundai", logo: "/Logos/BEML.png" },
//   { name: "Hero MotoCorp", logo: "/Logos/DRDO.png" },
//   { name: "TVS", logo: "/Logos/mg.png" },
//   { name: "Ashok Leyland", logo: "/Logos/indian_railways.png" },
//   { name: "Volvo Eicher", logo: "/Logos/General_Electric.png" },
//   { name: "TVS", logo: "/Logos/Siemens.png" },
//   { name: "Ashok Leyland", logo: "/Logos/Hitachi.png" },
//   { name: "Volvo Eicher", logo: "/Logos/AEQUS.png" },
//   { name: "Ashok Leyland", logo: "/Logos/garuda.png" },
//   { name: "Volvo Eicher", logo: "/Logos/AEQUS.png" },
// ];

// const LeadershipAndClients  = () => {
//   return (
//     <section className="bg-gray-50 py-20">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col gap-20">

//         {leaders.map((leader, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 
//             bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]
//             border border-gray-200 overflow-hidden`}
//           >
//             {/* IMAGE SIDE */}
//             <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
//               <img
//                 src={leader.image}
//                 alt={leader.name}
//                 className="w-full h-96 object-cover rounded-xl md:rounded-none"
//               />
//             </div>

//             {/* TEXT SIDE */}
//             <div
//               className="p-10 bg-gradient-to-br from-gray-100 to-gray-50 
//                 border-l border-gray-200"
//             >
//               <h2 className="text-4xl font-semibold text-gray-800 mb-2">
//                 {leader.name}
//               </h2>
//               <p className="text-xl text-gray-600 mb-6">{leader.role}</p>

//               <p className="text-gray-700 leading-relaxed text-base border-l-4 pl-4 border-blue-500">
//                 {leader.quote}
//               </p>
//             </div>
//           </motion.div>
//         ))}

//       </div>
//       {/* Clients Section */}
//       <div className="py-16 bg-white text-center overflow-hidden relative">
//         <h2 className="text-3xl font-bold text-gray-800 mb-12">
//           Our Esteemed Customers
//         </h2>
//       <div className="w-full overflow-hidden">
//   <motion.div
//     className="flex gap-12 justify-start items-center"
//     animate={{ x: ["0%", "-100%"] }}
//     transition={{
//       repeat: Infinity,
//       duration: 30,
//       ease: "linear",
//     }}
//   >
//     {[...clients, ...clients].map((client, index) => (
//       <div
//         key={index}
//         className="flex-shrink-0 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
//       >
//         <img
//           src={client.logo}
//           alt={client.name}
//           className="w-36 h-20 object-contain mx-auto transition-all duration-300 hover:scale-105"
//         />
//       </div>
//     ))}
//   </motion.div>
// </div>


//         {/* Soft gradient fade on sides */}
//         <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
//         <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
//       </div>
//     </section>
//   );
// };

// export default LeadershipAndClients;





// import React from "react";
// import ClientsSection from "./clientsSection";
// import { motion } from "framer-motion";

// const leaders = [
//   {
//     name: "Jeeten",
//     role: "Chairman",
//     image: "/Images/profile01.jpeg",
//     quote: `"We, Marubeni-Itochu Steel of Japan, are privileged to offer our business intelligence and join hands with JSW Steel of India in creating an entity in the field of value steel processing..."`,
//   },
//   {
//     name: "Rakesh Chauhan",
//     role: "JMD",
//     image: "/Images/profile02.jpeg",
//     quote: `"At JSW MI, we are motivated and geared up to move in conjunction with the ever-increasing capacities of JSW Steel as well as all-India demand. We look forward to creating a better tomorrow for all stakeholders."`,
//   },
// ];

// const clients = [
//   { name: "Tata Motors", logo: "/Logos/TVS-Motor-Company.png" },
//   { name: "Bosch", logo: "/Logos/Ola-Cabs-Logo.png" },
//   { name: "Bajaj", logo: "/Logos/Wave_mec.png" },
//   { name: "Maruti Suzuki", logo: "/Logos/Taal.png" },
//   { name: "Mahindra", logo: "/Logos/Boeing.png" },
//   { name: "Hyundai", logo: "/Logos/BEML.png" },
//   { name: "Hero MotoCorp", logo: "/Logos/DRDO.png" },
//   { name: "TVS", logo: "/Logos/mg.png" },
//   { name: "Ashok Leyland", logo: "/Logos/indian_railways.png" },
//   { name: "Volvo Eicher", logo: "/Logos/General_Electric.png" },
//   { name: "TVS", logo: "/Logos/Siemens.png" },
//   { name: "Ashok Leyland", logo: "/Logos/Hitachi.png" },
//   { name: "Volvo Eicher", logo: "/Logos/AEQUS.png" },
//   { name: "Ashok Leyland", logo: "/Logos/garuda.png" },
//   { name: "Volvo Eicher", logo: "/Logos/AEQUS.png" },
// ];

// const LeadershipAndClients = () => {
//   return (
//     <section className="bg-gray-50 py-16 md:py-20">
//       <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-16 md:gap-20">

//         {leaders.map((leader, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className={`grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 
//             bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden`}
//           >
//             {/* IMAGE SECTION */}
//             <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
//               <img
//                 src={leader.image}
//                 alt={leader.name}
//                 className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-xl md:rounded-none"
//               />
//             </div>

//             {/* TEXT SECTION */}
//             <div className="p-6 md:p-10 bg-gradient-to-br from-gray-100 to-gray-50 
//                 border-l border-gray-200">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
//                 {leader.name}
//               </h2>
//               <p className="text-lg sm:text-xl text-gray-600 mb-4 md:mb-6">
//                 {leader.role}
//               </p>

//               <p className="text-gray-700 leading-relaxed text-sm sm:text-base border-l-4 pl-4 border-blue-500">
//                 {leader.quote}
//               </p>
//             </div>
//           </motion.div>
//         ))}

//       </div>
        

//           <div className="py-14 bg-white text-center relative overflow-hidden">
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10">
//         Our Esteemed Customers
//       </h2>

//       <div className="overflow-hidden w-full">
//         <motion.div
//           className="flex items-center gap-10 sm:gap-14 whitespace-nowrap"
//           animate={{ x: ["0%", "-100%"] }}
//           transition={{
//             repeat: Infinity,
//             duration: 25,
//             ease: "linear",
//           }}
//         >
//           {[...clients, ...clients, ...clients].map((client, i) => (
//             <div
//               key={i}
//               className="flex-shrink-0 p-3 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
//             >
//               <img
//                 src={client.logo}
//                 alt={client.name}
//                 className="w-24 h-14 sm:w-32 sm:h-16 md:w-36 md:h-20 object-contain mx-auto transition-all duration-500 hover:scale-110 hover:grayscale"
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Left & Right Fade Gradient */}
//       <div className="absolute left-0 top-0 w-16 sm:w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
//       <div className="absolute right-0 top-0 w-16 sm:w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
//     </div>



//     </section>
//   );
// };

// export default LeadershipAndClients;










import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const LeadershipAndClients = () => {
  const leaders = [
    {
      name: "Jeeten",
      role: "Chairman",
      image: "/Images/profile01.jpeg",
      quote: `"We, Marubeni-Itochu Steel of Japan, are privileged to offer our business intelligence and join hands with JSW Steel of India in creating an entity in the field of value steel processing..."`,
    },
    {
      name: "Rakesh Chauhan",
      role: "JMD",
      image: "/Images/profile02.jpeg",
      quote: `"At JSW MI, we are motivated and geared up to move in conjunction with the ever-increasing capacities of JSW Steel as well as all-India demand. We look forward to creating a better tomorrow for all stakeholders."`,
    },
  ];

  const clients = [
    { name: "Tata Motors", logo: "/Logos/TVS-Motor-Company.png" },
    { name: "Bosch", logo: "/Logos/Ola-Cabs-Logo.png" },
    { name: "Bajaj", logo: "/Logos/Wave_mec.png" },
    { name: "Maruti Suzuki", logo: "/Logos/Taal.png" },
    { name: "Mahindra", logo: "/Logos/Boeing.png" },
    { name: "Hyundai", logo: "/Logos/BEML.png" },
    { name: "Hero MotoCorp", logo: "/Logos/DRDO.png" },
    { name: "TVS", logo: "/Logos/mg.png" },
    { name: "Ashok Leyland", logo: "/Logos/indian_railways.png" },
    { name: "Volvo Eicher", logo: "/Logos/General_Electric.png" },
    { name: "TVS", logo: "/Logos/Siemens.png" },
    { name: "Ashok Leyland", logo: "/Logos/Hitachi.png" },
    { name: "Volvo Eicher", logo: "/Logos/AEQUS.png" },
    { name: "Ashok Leyland", logo: "/Logos/garuda.png" },
    { name: "Volvo Eicher", logo: "/Logos/AEQUS.png" },
  ];

  // --- Client Slider state & refs ---
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [duration, setDuration] = useState(25);

  useEffect(() => {
    const updateDuration = () => {
      if (containerRef.current && sliderRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = sliderRef.current.scrollWidth / 3; // repeated 3x
        const speed = 50; // pixels per second
        const newDuration = contentWidth / speed;
        setDuration(newDuration);
      }
    };

    updateDuration();
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, [clients]);

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      {/* --- Leaders Section --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-16 md:gap-20">
        {leaders.map((leader, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 
              bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden`}
          >
            {/* IMAGE */}
            <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-xl md:rounded-none"
              />
            </div>

            {/* TEXT */}
            <div className="p-6 md:p-10 bg-gradient-to-br from-gray-100 to-gray-50 border-l border-gray-200">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
                {leader.name}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-4 md:mb-6">
                {leader.role}
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base border-l-4 pl-4 border-blue-500">
                {leader.quote}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- Clients Slider Section --- */}
      <div className="py-14 bg-white text-center relative overflow-hidden" ref={containerRef}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Our Esteemed Customers
        </h2>

        <div className="overflow-hidden w-full">
          <motion.div
            ref={sliderRef}
            className="flex items-center gap-10 sm:gap-14 whitespace-nowrap"
            animate={{ x: ["0px", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: duration,
              ease: "linear",
            }}
          >
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 p-3 sm:p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-24 h-14 sm:w-32 sm:h-16 md:w-36 md:h-20 object-contain mx-auto transition-all duration-500 hover:scale-110 hover:grayscale"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Fade Gradients */}
        <div className="absolute left-0 top-0 w-16 sm:w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-16 sm:w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default LeadershipAndClients;
