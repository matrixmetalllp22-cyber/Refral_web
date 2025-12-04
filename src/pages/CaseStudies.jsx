
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import jsPDF from "jspdf";

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
      "Built a secure role-based portal with automated emails, data visualization dashboards, and advanced filtering and audit trail logging.",
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
      "Built a secure role-based portal with automated emails, data visualization dashboards, and advanced filtering and audit trail logging.",
    result:
      "Manual workload reduced by 78%, response speed increased by 45%, and customer satisfaction rating increased from 3.2 to 4.6.",
    impact:
      "Business scaled operations efficiently without increasing manpower, resulting in improved service reliability.",
    tech: ["Next.js", "Express.js", "JWT Auth", "MySQL", "Framer Motion", "Redis Cache"],
  },
];

// --- PDF Download Function ---
const handleDownloadPDF = (study) => {
  try {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPosition = 20;
    const margin = 15;
    const lineHeight = 7;
    const maxWidth = pageWidth - 2 * margin;

    // Add title
    doc.setFontSize(18);
    doc.setTextColor(31, 41, 55);
    const titleLines = doc.splitTextToSize(study.title, maxWidth);
    titleLines.forEach((line) => {
      doc.text(line, margin, yPosition);
      yPosition += lineHeight + 2;
    });

    yPosition += 5;

    // Add sections
    const sections = [
      { label: "Description", value: study.description },
      { label: "Problem", value: study.problem },
      { label: "Approach", value: study.approach },
      { label: "Solution", value: study.solution },
      { label: "Result", value: study.result },
      { label: "Impact", value: study.impact },
    ];

    doc.setFontSize(11);
    sections.forEach((section) => {
      // Check if we need a new page
      if (yPosition > pageHeight - 30) {
        doc.addPage();
        yPosition = 20;
      }

      doc.setTextColor(249, 115, 22); // Orange color
      doc.setFont(undefined, "bold");
      doc.text(section.label + ":", margin, yPosition);
      yPosition += lineHeight;

      doc.setTextColor(55, 65, 81); // Dark gray
      doc.setFont(undefined, "normal");
      const textLines = doc.splitTextToSize(section.value, maxWidth);
      textLines.forEach((line) => {
        if (yPosition > pageHeight - 20) {
          doc.addPage();
          yPosition = 20;
        }
        doc.text(line, margin, yPosition);
        yPosition += lineHeight;
      });
      yPosition += 3;
    });

    // Add tech stack
    if (yPosition > pageHeight - 30) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setTextColor(249, 115, 22);
    doc.setFont(undefined, "bold");
    doc.text("Technologies:", margin, yPosition);
    yPosition += lineHeight;

    doc.setTextColor(55, 65, 81);
    doc.setFont(undefined, "normal");
    const techText = study.tech.join(", ");
    const techLines = doc.splitTextToSize(techText, maxWidth);
    techLines.forEach((line) => {
      if (yPosition > pageHeight - 20) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(line, margin, yPosition);
      yPosition += lineHeight;
    });

    // Download
    const filename = `${study.title.replace(/\s+/g, "_")}.pdf`;
    doc.save(filename);
  } catch (error) {
    console.error("PDF generation error:", error);
    alert("Failed to generate PDF. Please try again.");
  }
};

// --- MODAL COMPONENT ---
const Modal = ({ study, onClose }) => {
  if (!study) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl p-8 overflow-y-auto max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h2>

        <div className="space-y-3 text-gray-700 text-[15px] leading-relaxed">
          <p><strong>Description:</strong> {study.description}</p>
          <p><strong>Problem:</strong> {study.problem}</p>
          <p><strong>Approach:</strong> {study.approach}</p>
          <p><strong>Solution:</strong> {study.solution}</p>
          <p><strong>Result:</strong> {study.result}</p>
          <p><strong>Impact:</strong> {study.impact}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {study.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs uppercase tracking-wide font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between mt-8 gap-4">
          <button
            onClick={() => handleDownloadPDF(study)}
            className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-semibold transition-colors duration-200"
          >
            <FaDownload className="w-4 h-4" />
            Download PDF
          </button>

          <button
            onClick={onClose}
            className="px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 font-semibold transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
export default function CaseStudies() {
  const [expanded, setExpanded] = useState({});
  const [activeStudy, setActiveStudy] = useState(null);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
          Real-world implementations transforming industries using modern software and automation.
        </p>
        <div className="w-32 h-[4px] bg-gray-800 mx-auto mt-6 rounded-full"></div>
      </motion.div>

      {/* Case Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {caseStudies.map((study) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/70 backdrop-blur-2xl shadow-xl border border-gray-300 rounded-2xl p-8 hover:shadow-2xl hover:border-gray-500 transition-all"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">{study.title}</h3>

            <p className="text-gray-700 mb-3 text-[15px]">{study.description}</p>

            {expanded[study.id] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className="space-y-2 text-gray-800 text-[15px] mb-5"
              >
                <p><strong>Problem:</strong> {study.problem}</p>
                <p><strong>Approach:</strong> {study.approach}</p>
                <p><strong>Solution:</strong> {study.solution}</p>
                <p><strong>Result:</strong> {study.result}</p>
                <p><strong>Impact:</strong> {study.impact}</p>
              </motion.div>
            )}

            <button
              onClick={() => toggleExpand(study.id)}
              className="text-gray-800 font-semibold underline text-sm mb-4"
            >
              {expanded[study.id] ? "Read Less" : "Read More"}
            </button>

            <div className="flex flex-wrap gap-2 mb-6">
              {study.tech.map((t, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-orange-100 text-orange-800 rounded-full text-xs uppercase font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>

            <motion.button
              whileHover={{ x: 6 }}
              className="flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-all text-[15px]"
              onClick={() => setActiveStudy(study)}
            >
              View Full Case Study <FaArrowRight />
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* MODAL RENDER */}
      <AnimatePresence>
        {activeStudy && (
          <Modal study={activeStudy} onClose={() => setActiveStudy(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}


