import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * Overview.jsx
 * - Blanking-style industrial theme
 * - Tabs: Vision | Philosophy | Values
 * - Hero banner with subtle overlay + title
 */

export default function Overview() {
  const [tab, setTab] = useState("vision");

  const tabContent = {
    vision:
      <p>Key Factors Influencing Price
Automation Level: Fully automatic machines are significantly more expensive than semi-automatic or manual models due to the integrated technology, which increases efficiency and safety.
Material and Thickness: Machines designed for heavy-duty materials like thick gauge steel coils are substantially more expensive than those for light materials like paper or thin films.
Capacity and Speed: Higher production capacity (tons/day) and machine speed (meters/minute or RPM) directly correlate with a higher price point, as they involve more robust components and powerful drive systems.
Brand and Quality: Reputable manufacturers using high-quality, durable components generally have higher prices, but often offer better longevity, reliability, and support.
Condition (New vs. Used): Prices listed above are for new machines. Used machines can be cheaper initially, but may require additional investment in rebuilding or upgrades.
Additional Features: Features like PLC control, integrated web guides, different cutting systems (razor, crush, shear), and safety interlocks can add to the overall.</p>,
    philosophy:
     <p>We combine Japanese & Indian manufacturing excellence with a focus on continuous improvement, operational discipline, and long-term partnerships.</p>,
    values:
      <p>Quality, Safety, Integrity, Customer Focus, Sustainability — embedded in all processes and decisions.</p>,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 text-gray-900 font-sans">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/overview-hero.jpg"
            alt="Overview hero"
            className="w-full h-[320px] md:h-[420px] object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-800/50" />
        </div>

        <div className="relative container-custom px-6 py-24 md:py-32 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl text-orange-400 font-extrabold tracking-tight mb-2"
          >
            Matrix Metals
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-sm md:text-base text-gray-700 max-w-3xl"
          >
            Matrix Metals Service Center Private Limited is a joint venture of Matrix Metals
          </motion.p>
        </div>
      </header>

      {/* MAIN SECTION */}
      <main className="container-custom px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left column - intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white/60 backdrop-blur-sm rounded-2xl p-10 shadow-md border border-slate-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Matrix Metals Organization</h2>
            <p className="text-gray-600 leading-relaxed max-w-prose">
              Matrix Metals Service Center Private Limited is a joint venture of JSW Steel Limited and Marubeni-Itochu Steel Inc. (MISI), wherein both the organizations have 50% stake. We synergize deep processing knowledge and logistics expertise to deliver world-class steel solutions.
            </p>
          </motion.div>

          {/* Right column - tabs */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-md border border-slate-200"
          >
            {/* Tab buttons */}
            <div className="flex gap-3 mb-4">
              {["vision", "philosophy", "values"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition ${
                    tab === t
                      ? "bg-orange-800 text-white shadow"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {t[0].toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab card */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-5 border border-slate-200">
              <h4 className="text-sm font-semibold text-orange-800 mb-2 capitalize">{tab}</h4>
              <p className="text-sm text-gray-700 leading-relaxed">{tabContent[tab]}</p>
            </div>
          </motion.aside>
        </div>

        {/* Info blocks row (three cards like in screenshot) */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Joint Venture",
              text:
                "JSW MI is the enterprise confluence of JSW Steel of India and Marubeni-Itochu Steel of Japan. The JV synergizes the steel processing expertise of the two giants.",
            },
            {
              title: "Management & Team",
              text:
                "Managed by top-notch Indian & Japanese professionals. Senior, experienced and high performing teams drive JSW MI's operations.",
            },
            {
              title: "Organization",
              text:
                "JSW MI is a professional organization, adapting modern business techniques and systems with a focus on quality and CSR.",
            },
             {
              title: "Management & Team",
              text:
                "Managed by top-notch Indian & Japanese professionals. Senior, experienced and high performing teams drive JSW MI's operations.",
            },
            {
              title: "Organization",
              text:
                "JSW MI is a professional organization, adapting modern business techniques and systems with a focus on quality and CSR.",
            },
             {
              title: "Management & Team",
              text:
                "Managed by top-notch Indian & Japanese professionals. Senior, experienced and high performing teams drive JSW MI's operations.",
            },
            
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-900 text-white rounded-2xl p-6 shadow-lg relative overflow-hidden"
            >
              <h5 className="font-bold mb-3">{b.title}</h5>
              <p className="text-sm text-slate-200 leading-relaxed">{b.text}</p>

              <div className="mt-5 flex gap-3">
                <button className="bg-amber-500 text-white px-4 py-2 rounded-md text-sm font-semibold shadow hover:brightness-95 transition">
                  Read more
                </button>
                <button className="bg-white/10 text-white px-4 py-2 rounded-md text-sm hover:bg-white/20 transition">
                  →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
