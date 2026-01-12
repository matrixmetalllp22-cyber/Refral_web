import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  FaArrowRight,
  FaStethoscope,
  FaChartBar,
  FaSyringe,
  FaHeartbeat,
  FaTools,
} from "react-icons/fa";

/* -------------------- DATA -------------------- */
const caseStudies = [
  {
    id: 1,
    title: "AI-Powered GI Endoscopy Diagnostic System",
    description:
      "An intelligent platform using machine learning to detect gastrointestinal abnormalities in real-time during endoscopic procedures.",
    problem:
      "Traditional endoscopy relies heavily on manual interpretation, leading to missed detections and diagnostic delays.",
    approach:
      "Conducted extensive data analysis on endoscopic images, trained ML models on labeled datasets, and integrated with live video feeds.",
    solution:
      "Developed a React-based dashboard with real-time AI overlays, anomaly detection, and automated reporting.",
    result:
      "Detection accuracy improved by 75%, procedure time reduced by 40%, and false negatives dropped by 85%.",
    impact:
      "Enhanced early diagnosis of GI conditions like polyps and cancers, improving patient outcomes and reducing healthcare costs.",
    tech: [
      "React",
      "TensorFlow.js",
      "Node.js",
      "MongoDB",
      "WebRTC",
      "TailwindCSS",
      "Chart.js",
    ],
    icon: <FaStethoscope className="w-12 h-12 sm:w-14 sm:h-14" />,
    color: "from-orange-300 to-blue-600",
  },
  {
    id: 2,
    title: "Patient Management Portal for GI Disorders",
    description:
      "A comprehensive portal for tracking symptoms, treatments, and analytics for patients with chronic GI conditions like IBS and Crohn's disease.",
    problem:
      "Fragmented patient records and lack of personalized tracking led to poor adherence and delayed interventions.",
    approach:
      "User-centric design with patient interviews, secure data modeling, and integration with wearable health devices.",
    solution:
      "Built a secure, role-based Next.js application with symptom trackers, medication reminders, and predictive health insights.",
    result:
      "Patient adherence increased by 68%, flare-up predictions accurate to 82%, and doctor visit efficiency up by 55%.",
    impact:
      "Empowered patients with self-management tools, reduced hospital readmissions, and enabled proactive care.",
    tech: [
      "Next.js",
      "Express.js",
      "JWT Auth",
      "PostgreSQL",
      "Framer Motion",
      "Redis",
      "Firebase",
    ],
    icon: <FaHeartbeat className="w-12 h-12 sm:w-14 sm:h-14" />,
    color: "from-orange-300 to-green-600",
  },
  {
    id: 3,
    title: "Predictive Analytics Engine for GI Cancer Screening",
    description:
      "A data-driven system analyzing genetic, lifestyle, and clinical data to predict GI cancer risks and recommend screenings.",
    problem:
      "Late-stage diagnoses due to insufficient risk assessment tools and manual data processing.",
    approach:
      "Aggregated multi-source data, applied advanced ML algorithms for risk modeling, and created intuitive visualization tools.",
    solution:
      "Implemented a full-stack app with interactive risk dashboards, automated alerts, and integration with EHR systems.",
    result:
      "Risk prediction accuracy reached 89%, early screenings increased by 60%, and overall survival rates improved by 35%.",
    impact:
      "Revolutionized preventive care in gastroenterology, saving lives through timely interventions and personalized medicine.",
    tech: [
      "Vue.js",
      "Python (Flask)",
      "Scikit-learn",
      "MySQL",
      "D3.js",
      "TailwindCSS",
      "AWS S3",
    ],
    icon: <FaChartBar className="w-12 h-12 sm:w-14 sm:h-14" />,
    color: "from-orange-300 to-purple-600",
  },
];

/* -------------------- MODAL -------------------- */
const Modal = ({ study, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.8 }}
        className="bg-black rounded-3xl w-full max-w-5xl overflow-hidden border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`bg-linear-to-br ${study.color} text-white p-8 sm:p-12`}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {study.icon}
            <h2 className="text-3xl sm:text-4xl font-black mt-6 leading-tight">
              {study.title}
            </h2>
            <p className="mt-4 text-lg opacity-90">{study.description}</p>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 space-y-8 text-gray-300">
          {["Problem", "Approach", "Solution", "Result", "Impact"].map(
            (section, index) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-white mb-2 border-b border-gray-600 pb-1">
                  {section}
                </h3>
                <p className="leading-relaxed">
                  {study[section.toLowerCase()]}
                </p>
              </motion.div>
            )
          )}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-3 border-b border-gray-600 pb-1">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {study.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="flex justify-end pt-6 border-t border-gray-700">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* -------------------- MAIN -------------------- */
export default function GICaseStudies() {
  const [activeStudy, setActiveStudy] = useState(null);

  return (
    <LayoutGroup>
      <section className="py-16 sm:py-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-3 text-orange-500 mb-4">
              <FaTools />
              <span className="tracking-widest uppercase text-sm font-semibold">
                Medical Innovation
              </span>
            </div>
            <h1 className="text-4xl text-black sm:text-6xl font-black mb-4">
               Case Studies
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Transformative solutions in Gastroenterology powered by cutting-edge technology.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                layoutId={`card-${study.id}`}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveStudy(study)}
                className="bg-gray-900 rounded-3xl shadow-xl cursor-pointer overflow-hidden border border-gray-700"
              >
                <div className={`bg-gradient-to-br ${study.color} p-8 text-white`}>
                  {study.icon}
                  <h3 className="text-2xl font-bold mt-4 leading-tight">
                    {study.title}
                  </h3>
                </div>

                <div className="p-8">
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-white font-semibold">
                    View Case Study <FaArrowRight />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {activeStudy && (
            <Modal study={activeStudy} onClose={() => setActiveStudy(null)} />
          )}
        </AnimatePresence>
      </section>
    </LayoutGroup>
  );
}