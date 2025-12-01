// import React from "react";
// import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";

// const caseStudies = [
//   {
//     id: 1,
//     title: "Matrix Metals Smart Factory Dashboard",
//     description:
//       "We transformed a legacy process into a modern real-time dashboard enabling production tracking, downtime analysis, and automated reporting.",
//     problem:
//       "Manual data entry delayed reporting and reduced operational efficiency.",
//     solution:
//       "Implemented an automated IoT-enabled dashboard using MERN stack with live sensor data.",
//     result:
//       "Operational visibility improved by 62% and reporting time reduced from hours to seconds.",
//     tech: ["React", "Node.js", "MongoDB", "IoT", "TailwindCSS"],
//   },
//   {
//     id: 2,
//     title: "Customer Portal with Analytics",
//     description:
//       "Built a scalable customer management system with analytics and automated workflows.",
//     problem:
//       "Client struggled with scattered customer data and manual status tracking.",
//     solution:
//       "Centralized customer records, communication logs and real-time analytics with secure authentication.",
//     result:
//       "Reduced manual workload by 78% and boosted customer response time by 45%.",
//     tech: ["Next.js", "Express", "MySQL", "JWT", "Framer Motion"],
//   },
// ];

// export default function CaseStudies() {
//   return (
//     <section className="px-6 md:px-16 py-20 bg-gradient-to-b from-slate-100 to-slate-200">
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-14"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
//           Case Studies
//         </h2>
//         <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//           Real business problems solved with modern, scalable solutions.
//         </p>
//         <div className="w-28 h-[3px] bg-gray-700 mx-auto mt-6 rounded-full"></div>
//       </motion.div>

//       {/* Case Study Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {caseStudies.map((study) => (
//           <motion.div
//             key={study.id}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             whileHover={{ scale: 1.03 }}
//             className="bg-white/70 backdrop-blur-xl shadow-lg border border-gray-300 rounded-2xl p-8 transition-all hover:shadow-2xl"
//           >
//             <h3 className="text-2xl font-semibold text-gray-800 mb-3">
//               {study.title}
//             </h3>
//             <p className="text-gray-600 mb-5">{study.description}</p>

//             {/* Breakdown */}
//             <div className="space-y-2 mb-5 text-gray-700">
//               <p><span className="font-semibold text-gray-800">Problem:</span> {study.problem}</p>
//               <p><span className="font-semibold text-gray-800">Solution:</span> {study.solution}</p>
//               <p><span className="font-semibold text-gray-800">Result:</span> {study.result}</p>
//             </div>

//             {/* Tech Stack */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {study.tech.map((t, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-800"
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <motion.button
//               whileHover={{ x: 4 }}
//               className="flex items-center gap-2 text-gray-800 font-semibold hover:text-gray-500 transition-all"
//             >
//               View Full Case Study <FaArrowRight />
//             </motion.button>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }






import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const caseStudies = [
  {
    id: 1,
    title: "Smart Manufacturing & IoT Automation System",
    description:
      "A fully automated manufacturing data platform built to replace traditional excel and paper-based production tracking.",
    problem:
      "Manufacturing supervisors recorded processes manually, causing delays, inaccurate reports, and lack of real-time insights.",
    approach:
      "Conducted requirement analysis, mapped workflow, integrated IoT modules with machine PLC signals, and built a real-time monitoring UI.",
    solution:
      "Designed and developed a MERN-based dashboard with live metrics, automated downtime alerts, and predictive maintenance insights.",
    result:
      "Production efficiency improved by 62%, error rate dropped by 80%, and reporting time reduced from 6 hours to under 15 seconds.",
    impact:
      "Enabled management to make faster decisions, reduced workforce dependency, and increased transparency across the production chain.",
    tech: ["React", "Node.js", "MongoDB", "MQTT", "TailwindCSS", "IoT Sensors", "Chart.js"],
  },
  {
    id: 2,
    title: "Industrial Customer Support Portal & Analytics Engine",
    description:
      "A centralized web portal to manage customer orders, warranty claims, and service logs with real-time analytics dashboard.",
    problem:
      "Client struggled with scattered customer communication and no automated tracking for order lifecycle or service requests.",
    approach:
      "Interviewed end-users, analyzed workflows, designed data models, and created automated notification and tracking pipelines.",
    solution:
      "Built a secure role‑based portal with automated emails, data visualization dashboards, and advanced filtering and audit trail logging.",
    result:
      "Manual workload reduced by 78%, response speed increased by 45%, and customer satisfaction rating increased from 3.2 to 4.6.",
    impact:
      "Business scaled operations efficiently without increasing manpower, resulting in improved service reliability.",
    tech: ["Next.js", "Express.js", "JWT Auth", "MySQL", "Framer Motion", "Redis Cache"],
  },
  
  {
    id: 1,
    title: "Smart Manufacturing & IoT Automation System",
    description:
      "A fully automated manufacturing data platform built to replace traditional excel and paper-based production tracking.",
    problem:
      "Manufacturing supervisors recorded processes manually, causing delays, inaccurate reports, and lack of real-time insights.",
    approach:
      "Conducted requirement analysis, mapped workflow, integrated IoT modules with machine PLC signals, and built a real-time monitoring UI.",
    solution:
      "Designed and developed a MERN-based dashboard with live metrics, automated downtime alerts, and predictive maintenance insights.",
    result:
      "Production efficiency improved by 62%, error rate dropped by 80%, and reporting time reduced from 6 hours to under 15 seconds.",
    impact:
      "Enabled management to make faster decisions, reduced workforce dependency, and increased transparency across the production chain.",
    tech: ["React", "Node.js", "MongoDB", "MQTT", "TailwindCSS", "IoT Sensors", "Chart.js"],
  },
  {
    id: 2,
    title: "Industrial Customer Support Portal & Analytics Engine",
    description:
      "A centralized web portal to manage customer orders, warranty claims, and service logs with real-time analytics dashboard.",
    problem:
      "Client struggled with scattered customer communication and no automated tracking for order lifecycle or service requests.",
    approach:
      "Interviewed end-users, analyzed workflows, designed data models, and created automated notification and tracking pipelines.",
    solution:
      "Built a secure role‑based portal with automated emails, data visualization dashboards, and advanced filtering and audit trail logging.",
    result:
      "Manual workload reduced by 78%, response speed increased by 45%, and customer satisfaction rating increased from 3.2 to 4.6.",
    impact:
      "Business scaled operations efficiently without increasing manpower, resulting in improved service reliability.",
    tech: ["Next.js", "Express.js", "JWT Auth", "MySQL", "Framer Motion", "Redis Cache"],
  },
];

// --- PDF Download Function Placeholder (We will implement action later) ---
const handleDownloadPDF = () => {
  console.log("PDF Download Triggered");
};

export default function CaseStudies() {
  return (
    <section className="px-6 md:px-16 py-20 bg-gradient-to-b from-[#e3e7ec] to-[#cbd3d9]">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-wide uppercase">
          Industrial Case Studies
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
          Real‑world implementations transforming traditional industries through modern software and automation.
        </p>
        <div className="w-32 h-[4px] bg-gray-800 mx-auto mt-6 rounded-full"></div>
      </motion.div>

      {/* Case Study Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {caseStudies.map((study) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/70 backdrop-blur-2xl shadow-xl border border-gray-300 rounded-2xl p-8 transition-all hover:shadow-2xl hover:border-gray-500"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              {study.title}
            </h3>
            <p className="text-gray-700 mb-5 text-[15px] leading-relaxed">
              {study.description}
            </p>

            {/* Breakdown */}
            <div className="space-y-2 mb-6 text-gray-800 text-[15px]">
              <p><span className="font-semibold">Problem:</span> {study.problem}</p>
              <p><span className="font-semibold">Approach:</span> {study.approach}</p>
              <p><span className="font-semibold">Solution:</span> {study.solution}</p>
              <p><span className="font-semibold">Result:</span> {study.result}</p>
              <p><span className="font-semibold">Impact:</span> {study.impact}</p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {study.tech.map((t, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-gray-800 text-white rounded-full text-xs tracking-wide uppercase"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ x: 6 }}
              className="flex items-center gap-2 text-gray-900 font-semibold hover:text-gray-600 transition-all text-[15px]"
            >
              View Full Case Study <FaArrowRight />
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
        