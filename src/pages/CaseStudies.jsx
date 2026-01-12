import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaRobot,
  FaChartLine,
  FaTools,
} from "react-icons/fa";
import jsPDF from "jspdf";

/* -------------------- DATA -------------------- */
const caseStudies = [
  {
    id: 1,
    title: "Smart Manufacturing & IoT Automation System",
    description:
      "A fully automated manufacturing data platform replacing excel and paper-based production tracking.",
    problem:
      "Manual data entry caused delays, reporting errors, and no real-time visibility.",
    approach:
      "Analyzed workflows, integrated IoT sensors with PLCs, and designed real-time dashboards.",
    solution:
      "Built a MERN-based system with live metrics, downtime alerts, and predictive insights.",
    result:
      "Efficiency improved by 62%, error rate reduced by 80%, reporting time cut to seconds.",
    impact:
      "Faster decisions, reduced workforce dependency, and full production transparency.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "MQTT",
      "TailwindCSS",
      "IoT Sensors",
      "Chart.js",
    ],
    icon: <FaRobot className="w-12 h-12 sm:w-14 sm:h-14" />,
  },
  {
    id: 2,
    title: "Industrial Customer Support Portal & Analytics Engine",
    description:
      "Centralized portal for managing customer orders, warranties, and service analytics.",
    problem:
      "Scattered communication and no automated tracking of service lifecycle.",
    approach:
      "User interviews, workflow analysis, data modeling, and notification automation.",
    solution:
      "Secure role-based portal with dashboards, alerts, and audit logs.",
    result:
      "78% workload reduction and 45% faster response time.",
    impact:
      "Scalable operations with higher customer satisfaction.",
    tech: [
      "Next.js",
      "Express.js",
      "JWT Auth",
      "MySQL",
      "Framer Motion",
      "Redis",
    ],
    icon: <FaChartLine className="w-12 h-12 sm:w-14 sm:h-14" />,
  },
];

/* -------------------- PDF -------------------- */
const handleDownloadPDF = (study) => {
  const doc = new jsPDF();
  let y = 25;
  const margin = 20;
  const width = doc.internal.pageSize.getWidth() - margin * 2;

  doc.setFontSize(22);
  doc.text(study.title, margin, y);
  y += 15;

  const sections = ["description", "problem", "approach", "solution", "result", "impact"];

  sections.forEach((key) => {
    if (y > 260) {
      doc.addPage();
      y = 25;
    }
    doc.setFontSize(14);
    doc.setTextColor(249, 115, 22);
    doc.text(key.toUpperCase(), margin, y);
    y += 8;

    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    doc.text(doc.splitTextToSize(study[key], width), margin, y);
    y += 15;
  });

  doc.save(`${study.title.replace(/\s+/g, "_")}.pdf`);
};

/* -------------------- MODAL -------------------- */
const Modal = ({ study, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur flex items-center justify-center p-4 z-50 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="bg-white rounded-3xl w-full max-w-5xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 sm:p-12">
          {study.icon}
          <h2 className="text-3xl sm:text-4xl font-black mt-6">
            {study.title}
          </h2>
          <p className="mt-4 opacity-90">{study.description}</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 space-y-8">
          {["Problem", "Approach", "Solution", "Result", "Impact"].map(
            (section) => (
              <div key={section}>
                <h3 className="text-xl font-bold text-orange-600 mb-2">
                  {section}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {study[section.toLowerCase()]}
                </p>
              </div>
            )
          )}

          <div>
            <h3 className="text-xl font-bold mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {study.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t">
            <button
              onClick={() => handleDownloadPDF(study)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-xl font-semibold hover:bg-orange-700"
            >
              <FaDownload /> Download PDF
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-orange-600 text-orange-600 rounded-xl font-semibold hover:bg-orange-50"
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
export default function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState(null);

  return (
    <LayoutGroup>
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-3 text-orange-600 mb-4">
              <FaTools />
              <span className="tracking-widest uppercase text-sm font-semibold">
                Industrial Excellence
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black mb-4">
              Case Studies
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Real-world industrial transformations powered by technology.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveStudy(study)}
                className="bg-white rounded-3xl shadow-xl cursor-pointer overflow-hidden border"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white">
                  {study.icon}
                  <h3 className="text-2xl font-bold mt-4">
                    {study.title}
                  </h3>
                </div>

                <div className="p-8">
                  <p className="text-gray-700 mb-6">
                    {study.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-orange-600 font-semibold">
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
