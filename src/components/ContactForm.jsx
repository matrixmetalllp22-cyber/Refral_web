
import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { MdLocationPin, MdPhone } from "react-icons/md";

// ------------ Reusable Input Component ------------
const InputField = ({ label, name, type = "text", value, onChange }) => (
  <div className="relative w-full">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="peer w-full p-4 pt-6 rounded-xl bg-white dark:bg-slate-800 shadow-md border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-100 outline-none focus:ring-2 focus:ring-orange-500 transition"
    />
    <label className="absolute left-4 top-4 text-gray-400 dark:text-gray-500 text-sm transition-all peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-600 dark:peer-focus:text-orange-400">
      {label}
    </label>
  </div>
);

// ------------ Textarea Component ------------
const TextArea = ({ label, name, value, onChange }) => (
  <div className="relative w-full">
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={4}
      required
      className="peer w-full p-4 pt-6 rounded-xl bg-white dark:bg-slate-800 shadow-md border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-100 outline-none focus:ring-2 focus:ring-orange-500 transition resize-none"
    />
    <label className="absolute left-4 top-4 text-gray-400 dark:text-gray-500 text-sm transition-all peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-600 dark:peer-focus:text-orange-400">
      {label}
    </label>
  </div>
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ------------ Validation ------------
  const validateForm = () => {
    if (formData.name.length < 3) return toast.error("Name must be at least 3 characters");
    if (!formData.email.includes("@")) return toast.error("Enter a valid email");
    if (formData.phone.length < 10) return toast.error("Phone must be at least 10 digits");
    if (formData.message.length < 5) return toast.error("Message too short");
    return true;
  };

  // ------------ Submit Form ------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx4igNIL8RPzwel3naVQpqak7zjn_FvmMMVTWiWDRjmK-Imn3nUJblk02q8hCpm_dTM/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 flex flex-col items-center">
      <Toaster position="top-center" />

      {/* ---------- FORM ---------- */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl flex flex-col gap-6 transition-colors duration-300"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">Contact Us</h2>

        <InputField label="Your Name" name="name" value={formData.name} onChange={handleChange} />
        <InputField label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} />
        <InputField label="Your Phone" name="phone" value={formData.phone} onChange={handleChange} />
        <TextArea label="Your Message" name="message" value={formData.message} onChange={handleChange} />

        <motion.button
          type="submit"
          disabled={loading}
          className="py-3 rounded-xl bg-orange-600 dark:bg-orange-700 text-white font-semibold text-lg hover:bg-orange-700 dark:hover:bg-orange-600 active:scale-95 transition disabled:opacity-50 shadow-md"
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>

      {/* ---------- LOCATION SECTION ---------- */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
  className="w-full max-w-4xl mt-16 grid grid-cols-1 md:grid-cols-2 gap-10"
>
  {/* Map - Scroll reveal */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
    whileHover={{ scale: 1.03 }}
    className="rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 shadow-xl backdrop-blur-lg hover:shadow-2xl transition-shadow duration-300"
  >
    <iframe
      className="w-full h-64"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.462445360588!2d77.52000387457595!3d13.023073087297223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3db890cace25%3A0x2caf2640275a9133!2sMATRIX%20METALS%20LLP!5e0!3m2!1sen!2sin!4v1732617180552!5m2!1sen!2sin"
      loading="lazy"
      allowFullScreen=""
    ></iframe>
  </motion.div>

  {/* Details Section */}
  <div className="flex flex-col gap-10">

    {/* Location Block with Pulse Icon */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      className="p-5 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 shadow-md backdrop-blur-md hover:shadow-lg cursor-pointer transition-all"
    >
      <div className="flex items-center gap-3">
        
        {/* PULSE ANIMATION */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="text-orange-600"
        >
          <MdLocationPin className="text-3xl" />
        </motion.div>

        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-100">Location</h3>
      </div>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
        MATRIX METALS LLP<br />
        Bengaluru, Karnataka, India.
      </p>
    </motion.div>

    {/* Phone Block */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      className="p-5 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 shadow-md backdrop-blur-md hover:shadow-lg cursor-pointer transition-all"
    >
      <div className="flex items-center gap-3">
        <MdPhone className="text-orange-600 text-3xl" />
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-100">Phone</h3>
      </div>

      <a
        href="tel:+91951440912"
        className="block text-gray-700 text-lg font-medium mt-3 hover:text-orange-600"
      >
        +91 95144 40912
      </a>
    </motion.div>

  </div>
</motion.div>

    </div>
  );
}
