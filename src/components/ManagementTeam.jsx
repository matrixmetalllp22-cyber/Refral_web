// import React from "react";
// import { motion } from "framer-motion";

// /**
//  * ManagementTeam.jsx
//  * - Blanking metal/blue theme
//  * - Hero banner (keeps same look)
//  * - Grid of team members (image, name, role)
//  * - Hover lift + subtle metallic border
//  *
//  * Replace image paths with your real images (or keep placeholders).
//  */

// const team = [
//   { name: "Mr. Miki Yusuke", role: "Chairman", image: "/images/miki-yusuke.jpg" },
//   { name: "Mr. Rakesh Chauhan", role: "Joint Managing Director", image: "/images/rakesh-chauhan.jpg" },
//   // add more members as needed
//   { name: "Mr. Example A", role: "Head - Operations", image: "/images/person1.jpg" },
//   { name: "Ms. Example B", role: "Head - Quality", image: "/images/person2.jpg" },
//   { name: "Mr. Example C", role: "Head - Logistics", image: "/images/person3.jpg" },
//   { name: "Ms. Example D", role: "Head - HR", image: "/images/person4.jpg" },
// ];

// export default function ManagementTeam() {
//   return (
//     <section className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 text-gray-900">
//       {/* HERO */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0 -z-10">
//           <img src="/images/team-hero.jpg" alt="management hero" className="w-full h-72 md:h-96 object-cover opacity-30" />
//           <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-800/50" />
//         </div>

//         <div className="container-custom px-6 py-24 md:py-32 text-gray-800">
//           <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold">
//             Management & Team
//           </motion.h1>
//           <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-3 max-w-2xl text-gray-700">
//             Senior leadership and experienced teams driving operations, quality and logistics across JSW MI.
//           </motion.p>
//         </div>
//       </div>

//       {/* TEAM GRID */}
//       <div className="container-custom px-6 pb-24">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {team.map((member, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.08, duration: 0.6 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl p-6 text-center shadow-md border border-slate-200 hover:shadow-xl transition"
//             >
//               <div className="w-40 h-40 mx-auto overflow-hidden rounded-md border border-slate-100">
//                 <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
//               </div>

//               <h4 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h4>
//               <p className="text-sm text-gray-500 mt-1">{member.role}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




// import React from "react";
// import { motion } from "framer-motion";

// const leadership = [
//   { name: "Mr. Miki Yusuke", role: "Chairman", image: "/images/miki-yusuke.jpg" },
//   { name: "Mr. Rakesh Chauhan", role: "Joint Managing Director", image: "/images/rakesh-chauhan.jpg" },
// ];

// const team = [
//   { name: "Mr. Example A", role: "Head - Operations", image: "/images/person1.jpg" },
//   { name: "Ms. Example B", role: "Head - Quality", image: "/images/person2.jpg" },
//   { name: "Mr. Example C", role: "Head - Logistics", image: "/images/person3.jpg" },
//   { name: "Ms. Example D", role: "Head - HR", image: "/images/person4.jpg" },
// ];

// export default function ManagementTeam() {
//   return (
//     <section className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 text-gray-900">
//       {/* HERO */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0 -z-10">
//           <img
//             src="/images/team-hero.jpg"
//             alt="management hero"
//             className="w-full h-72 md:h-96 object-cover opacity-30"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-800/50" />
//         </div>

//         <div className="container-custom px-6 py-24 md:py-32 text-orange-400">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-5xl font-extrabold"
//           >
//             Management & Team
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.15 }}
//             className="mt-3 max-w-2xl text-gray-700"
//           >
//             Senior leadership and experienced teams driving operations, quality and logistics across JSW MI.
//           </motion.p>
//         </div>
//       </div>

//       {/* LEADERSHIP SECTION */}
//       <div className="container-custom px-6 py-16">
//         <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">
//           Leadership
//         </h2>
//         <div className="flex flex-col md:flex-row justify-center gap-10">
//           {leadership.map((leader, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1, duration: 0.6 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -6 }}
//               className="relative rounded-2xl p-[2px] bg-gradient-to-br from-slate-300 via-blue-400 to-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 w-full md:w-1/2 max-w-md"
//             >
//               <div className="bg-gradient-to-b from-white/80 to-slate-50/60 backdrop-blur-md rounded-2xl p-8 text-center border border-slate-200 hover:border-blue-500/40 transition-all duration-300">
//                 <div className="relative w-52 h-52 mx-auto overflow-hidden rounded-2xl shadow-inner">
//                   <motion.img
//                     src={leader.image}
//                     alt={leader.name}
//                     className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
//                   />
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/10 to-transparent" />
//                 </div>

//                 <h4 className="mt-5 text-xl font-semibold text-gray-900">
//                   {leader.name}
//                 </h4>
//                 <p className="text-sm text-gray-600 mt-1">{leader.role}</p>

//                 <div className="mt-4 mx-auto w-10 h-[2px] bg-gradient-to-r from-blue-500 to-blue-700 rounded-full" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* TEAM GRID */}
//       <div className="container-custom px-6 pb-24">
//         <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">
//           Core Team
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {team.map((member, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.08, duration: 0.6 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -6 }}
//               className="relative rounded-2xl p-[2px] bg-gradient-to-br from-slate-300 via-gray-400 to-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300"
//             >
//               <div className="bg-gradient-to-b from-white/80 to-slate-50/60 backdrop-blur-md rounded-2xl p-6 text-center border border-slate-200 hover:border-orange-500/40 transition-all duration-300">
//                 <div className="relative w-40 h-40 mx-auto overflow-hidden rounded-xl shadow-inner">
//                   <motion.img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
//                   />
//                   <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-slate-900/10 to-transparent" />
//                 </div>

//                 <h4 className="mt-4 text-lg font-semibold text-gray-900">
//                   {member.name}
//                 </h4>
//                 <p className="text-sm text-gray-500 mt-1">{member.role}</p>
//                 <div className="mt-3 mx-auto w-10 h-[2px] bg-gradient-to-r from-orange-500 to-orange-700 rounded-full" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

























































import React from "react";
import { motion } from "framer-motion";

const leadership = [
  { name: "Mr. Miki Yusuke", role: "Chairman", image: "/images/miki-yusuke.jpg" },
  { name: "Mr. Rakesh Chauhan", role: "Joint Managing Director", image: "/images/rakesh-chauhan.jpg" },
];

const team = [
  { name: "Mr. Example A", role: "Head - Operations", image: "/images/person1.jpg" },
  { name: "Ms. Example B", role: "Head - Quality", image: "/images/person2.jpg" },
  { name: "Mr. Example C", role: "Head - Logistics", image: "/images/person3.jpg" },
  { name: "Ms. Example D", role: "Head - HR", image: "/images/person4.jpg" },
];

export default function ManagementTeam() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-900">
      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/team-hero.jpg"
            alt="management hero"
            className="w-full h-72 md:h-96 object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100/70 to-gray-200/60" />
        </div>

        <div className="container-custom px-6 py-24 md:py-32 text-orange-500">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Management & Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-3 max-w-2xl text-gray-700"
          >
            Senior leadership and experienced teams driving operations, quality, and logistics across JSW MI.
          </motion.p>
        </div>
      </div>

      {/* LEADERSHIP SECTION */}
      <div className="container-custom px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">
          Leadership
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {leadership.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative rounded-2xl p-[2px] bg-gradient-to-br from-gray-300 via-gray-400 to-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 w-full md:w-1/2 max-w-md"
            >
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 text-center border border-gray-300 hover:border-gray-500 transition-all duration-300">
                <div className="relative w-52 h-52 mx-auto overflow-hidden rounded-2xl shadow-inner">
                  <motion.img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900/5 to-transparent" />
                </div>

                <h4 className="mt-5 text-xl font-semibold text-gray-900">
                  {leader.name}
                </h4>
                <p className="text-sm text-gray-600 mt-1">{leader.role}</p>

                {/* Animated underline */}
                <motion.div
                  className="mt-4 mx-auto h-[3px] bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: 48 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TEAM GRID */}
      <div className="container-custom px-6 pb-24">
        <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">
          Core Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative rounded-2xl p-[2px] bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 text-center border border-gray-300 hover:border-gray-400 transition-all duration-300">
                <div className="relative w-40 h-40 mx-auto overflow-hidden rounded-xl shadow-inner">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-gray-900/5 to-transparent" />
                </div>

                <h4 className="mt-4 text-lg font-semibold text-gray-900">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-600 mt-1">{member.role}</p>

                {/* Animated underline */}
                <motion.div
                  className="mt-3 mx-auto h-[2px] bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: 40 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
