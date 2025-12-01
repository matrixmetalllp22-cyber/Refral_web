// import React, { useState } from 'react';
// import axios from 'axios';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [status, setStatus] = useState({ type: '', message: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setStatus({ type: '', message: '' });

//     try {
//       const response = await axios.post('http://localhost:5000/api/contacts', formData);
//       if (response.data.success) {
//         setStatus({
//           type: 'success',
//           message: 'Thank you for your message. We will get back to you soon!'
//         });
//         setFormData({ name: '', email: '', phone: '', message: '' });
//       }
//     } catch (error) {
//       setStatus({
//         type: 'error',
//         message: error.response?.data?.message || 'Something went wrong. Please try again.'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {status.message && (
//           <div
//             className={`p-4 rounded-lg ${
//               status.type === 'success' 
//                 ? 'bg-teal-50 text-teal-700 border border-teal-200' 
//                 : 'bg-rose-50 text-rose-700 border border-rose-200'
//             }`}
//           >
//             {status.message}
//           </div>
//         )}

//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-slate-700">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full rounded-lg border-slate-200 bg-white/50 shadow-sm 
//             focus:border-blue-500 focus:ring-blue-500 focus:bg-white"
//           />
//         </div>

//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-slate-700">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full rounded-lg border-slate-200 bg-white/50 shadow-sm 
//             focus:border-blue-500 focus:ring-blue-500 focus:bg-white"
//           />
//         </div>

//         <div>
//           <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
//             Phone
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full rounded-lg border-slate-200 bg-white/50 shadow-sm 
//             focus:border-blue-500 focus:ring-blue-500 focus:bg-white"
//           />
//         </div>

//         <div>
//           <label htmlFor="message" className="block text-sm font-medium text-slate-700">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             rows="4"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full rounded-lg border-slate-200 bg-white/50 shadow-sm 
//             focus:border-blue-500 focus:ring-blue-500 focus:bg-white"
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className={`w-full flex justify-center py-3 px-6 rounded-lg text-sm font-medium text-white
//           bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800
//           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
//           transform transition hover:scale-[1.02] active:scale-[0.98]
//           ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
//         >
//           {isSubmitting ? 'Sending...' : 'Send Message'}
//         </button>
//       </form>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Send } from "lucide-react";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [status, setStatus] = useState({ type: "", message: "" });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setStatus({ type: "", message: "" });

//     try {
//       const res = await axios.post("http://localhost:5000/api/contacts", formData);
//       if (res.data.success) {
//         setStatus({ type: "success", message: "✔️ Thank you! We’ll reach out soon." });
//         setFormData({ name: "", email: "", phone: "", message: "" });
//       }
//     } catch (err) {
//       setStatus({
//         type: "error",
//         message:
//           err.response?.data?.message || "⚠️ Something went wrong. Please try again.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <motion.form
//       onSubmit={handleSubmit}
//       initial={{ opacity: 0, y: 25 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//       className="space-y-6"
//     >
//       {/* Status Message */}
//       {status.message && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className={`p-4 rounded-xl text-sm font-medium shadow-sm ${
//             status.type === "success"
//               ? "bg-green-100 text-green-800 border border-green-300/60"
//               : "bg-rose-100 text-rose-800 border border-rose-300/60"
//           }`}
//         >
//           {status.message}
//         </motion.div>
//       )}

//       {/* Inputs */}
//       {[
//         { id: "name", label: "Full Name", type: "text" },
//         { id: "email", label: "Email Address", type: "email" },
//         { id: "phone", label: "Phone Number", type: "tel" },
//       ].map((field) => (
//         <div key={field.id}>
//           <label
//             htmlFor={field.id}
//             className="block text-sm font-semibold text-gray-700 mb-1"
//           >
//             {field.label}
//           </label>
//           <input
//             type={field.type}
//             id={field.id}
//             name={field.id}
//             value={formData[field.id]}
//             onChange={handleChange}
//             required
//             className="w-full rounded-2xl border border-gray-300 bg-white/50 
//             backdrop-blur-sm text-gray-900 px-4 py-3 
//             shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-gray-500
//             hover:bg-white/80 transition-all duration-300"
//           />
//         </div>
//       ))}

//       {/* Message */}
//       <div>
//         <label
//           htmlFor="message"
//           className="block text-sm font-semibold text-gray-700 mb-1"
//         >
//           Message
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           rows="4"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           className="w-full rounded-2xl border border-gray-300 bg-white/50 
//           backdrop-blur-sm text-gray-900 px-4 py-3 shadow-sm
//           focus:ring-2 focus:ring-gray-400 focus:border-gray-500
//           hover:bg-white/80 transition-all duration-300"
//         ></textarea>
//       </div>

//       {/* Submit Button — Metallic Gradient */}
//       <motion.button
//         type="submit"
//         whileHover={{ scale: 1.03 }}
//         whileTap={{ scale: 0.97 }}
//         disabled={isSubmitting}
//         className={`w-full py-3 rounded-2xl flex items-center justify-center gap-3 
//         font-semibold text-gray-900 
//         bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 
//         hover:from-gray-300 hover:to-gray-500
//         shadow-lg shadow-gray-400/40 border border-gray-300
//         transition-all duration-300 ${
//           isSubmitting ? "opacity-70 cursor-not-allowed" : ""
//         }`}
//       >
//         {isSubmitting ? (
//           "Sending..."
//         ) : (
//           <>
//             Send Message <Send className="w-5 h-5" />
//           </>
//         )}
//       </motion.button>
//     </motion.form>
//   );
// }














  // import React, { useState } from "react";
  // import axios from "axios";
  // import { motion } from "framer-motion";
  // import { Send, Mail, Phone, User, MessageSquare, MapPin, Clock } from "lucide-react";



  // // popup component — paste above your ContactForm component in the same file
  // const PopupMessage = ({ type, message, onClose }) => {
  //   return (
  //     <motion.div
  //       initial={{ opacity: 0 }}
  //       animate={{ opacity: 1 }}
  //       exit={{ opacity: 0 }}
  //       className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]"
  //       onClick={onClose} // click outside to close
  //     >
  //       <motion.div
  //         initial={{ scale: 0.85, opacity: 0, y: 20 }}
  //         animate={{ scale: 1, opacity: 1, y: 0 }}
  //         exit={{ scale: 0.85, opacity: 0, y: 10 }}
  //         transition={{ duration: 0.36, ease: "easeOut" }}
  //         className={`relative w-[90%] max-w-md rounded-2xl p-6 md:p-8 shadow-2xl
  //           backdrop-blur-xl border ${
  //             type === "success" ? "bg-white/70 border-green-300" : "bg-white/70 border-rose-300"
  //           }`}
  //         onClick={(e) => e.stopPropagation()} // prevent outside click from closing when clicking inside
  //       >
  //         <div className="flex flex-col items-center gap-4">
  //           {/* Icon */}
  //           <div className={`w-16 h-16 rounded-full flex items-center justify-center
  //             ${type === "success" ? "bg-green-50" : "bg-rose-50"}`}>
  //             {type === "success" ? (
  //               <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  //                 <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  //               </svg>
  //             ) : (
  //               <svg className="w-8 h-8 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  //                 <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
  //               </svg>
  //             )}
  //           </div>

  //           {/* Message */}
  //           <div className="text-center">
  //             <h3 className="text-lg md:text-xl font-semibold text-gray-800">
  //               {type === "success" ? "Success" : "Error"}
  //             </h3>
  //             <p className="mt-2 text-gray-600 max-w-[22rem]">{message}</p>
  //           </div>

  //           {/* Actions */}
  //           <div className="w-full mt-4">
  //             <button
  //               onClick={onClose}
  //               className="w-full py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition"
  //             >
  //               Close
  //             </button>
  //           </div>
  //         </div>
  //       </motion.div>
  //     </motion.div>
  //   );
  // };




  // export default function ContactForm() {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //   });

  //   const [status, setStatus] = useState({ type: "", message: "" });
  //   const [isSubmitting, setIsSubmitting] = useState(false);

  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setIsSubmitting(true);
  //     setStatus({ type: "", message: "" });

  //     try {
  //       const res = await axios.post("http://localhost:5000/api/contacts", formData);
  //       if (res.data.success) {
  //         setStatus({ type: "success", message: "✔️ Thank you! We'll contact you shortly." });
  //         setFormData({ name: "", email: "", phone: "", message: "" });
  //       }
  //     } catch (err) {
  //       setStatus({
  //         type: "error",
  //         message:
  //           err.response?.data?.message || "⚠ Something went wrong. Please try again.",
  //       });
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   };

  //   return (
  //     <motion.div
  //       initial={{ opacity: 0, y: 25 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       transition={{ duration: 0.7 }}
  //       className="grid md:grid-cols-2 gap-10"
  //     >
  //       {/* LEFT INFO PANEL */}
  //       <motion.div
  //         initial={{ opacity: 0, x: -25 }}
  //         whileInView={{ opacity: 1, x: 0 }}
  //         transition={{ duration: 0.7 }}
  //         className="bg-white/60 backdrop-blur-xl border border-gray-300/40 shadow-xl
  //         rounded-2xl p-8 flex flex-col gap-8"
  //       >
  //         <div>
  //           <h3 className="text-3xl font-bold text-gray-800">Contact Details</h3>
  //           <p className="text-gray-600 mt-2">
  //             We’re here to help. Reach out anytime.
  //           </p>
  //         </div>

  //         <div className="space-y-6">
  //           <div className="flex items-start gap-4">
  //             <MapPin className="w-6 h-6 text-gray-700" />
  //             <div>
  //               <p className="font-semibold text-gray-800">Address</p>
  //               <p className="text-gray-600">Your Company Address Here</p>
  //             </div>
  //           </div>

  //           <div className="flex items-start gap-4">
  //             <Phone className="w-6 h-6 text-gray-700" />
  //             <div>
  //               <p className="font-semibold text-gray-800">Phone</p>
  //               <p className="text-gray-600">+91 99999 99999</p>
  //             </div>
  //           </div>

  //           <div className="flex items-start gap-4">
  //             <Mail className="w-6 h-6 text-gray-700" />
  //             <div>
  //               <p className="font-semibold text-gray-800">Email</p>
  //               <p className="text-gray-600">info@yourcompany.com</p>
  //             </div>
  //           </div>

  //           <div className="flex items-start gap-4">
  //             <Clock className="w-6 h-6 text-gray-700" />
  //             <div>
  //               <p className="font-semibold text-gray-800">Working Hours</p>
  //               <p className="text-gray-600">Mon - Sat: 9am - 6pm</p>
  //             </div>
  //           </div>
  //         </div>
  //       </motion.div>

  //       {/* RIGHT FORM */}
  //       <motion.form
  //         onSubmit={handleSubmit}
  //         initial={{ opacity: 0, x: 25 }}
  //         whileInView={{ opacity: 1, x: 0 }}
  //         transition={{ duration: 0.7 }}
  //         className="space-y-6 bg-white/60 backdrop-blur-xl border border-gray-300/40 
  //         shadow-xl rounded-2xl p-8"
  //       >
  //         {/* Animated Status Message */}
  //         {status.message && (
  //           <motion.div
  //             initial={{ scale: 0.8, opacity: 0 }}
  //             animate={{ scale: 1, opacity: 1 }}
  //             className={`p-4 rounded-xl text-sm font-medium shadow-sm ${
  //               status.type === "success"
  //                 ? "bg-green-100 text-green-800 border border-green-300/60"
  //                 : "bg-rose-100 text-rose-800 border border-rose-300/60"
  //             }`}
  //           >
  //             {status.message}
  //           </motion.div>
  //         )}

  //         {/* Floating Label Input */}
  //         {[
  //           { id: "name", label: "Full Name", icon: <User className="w-5 h-5" /> },
  //           { id: "email", label: "Email Address", icon: <Mail className="w-5 h-5" /> },
  //           { id: "phone", label: "Phone Number", icon: <Phone className="w-5 h-5" /> },
  //         ].map((field) => (
  //           <div className="relative" key={field.id}>
  //             <div className="absolute left-3 top-3 text-gray-600">{field.icon}</div>

  //             <input
  //               type="text"
  //               name={field.id}
  //               id={field.id}
  //               value={formData[field.id]}
  //               onChange={handleChange}
  //               required
  //               className="w-full rounded-xl border border-gray-300 bg-white/50 
  //               backdrop-blur-sm text-gray-900 px-10 py-3 shadow-sm
  //               peer focus:ring-2 focus:ring-gray-400 focus:border-gray-600
  //               hover:bg-white/80 transition-all duration-300"
  //             />

  //             <label
  //               htmlFor={field.id}
  //               className="absolute left-10 top-3 text-gray-500 transition-all 
  //               pointer-events-none peer-focus:-top-3 peer-focus:text-xs peer-focus:text-gray-700
  //               peer-valid:-top-3 peer-valid:text-xs peer-valid:text-gray-700"
  //             >
  //               {field.label}
  //             </label>
  //           </div>
  //         ))}

  //         {/* Message */}
  //         <div className="relative">
  //           <div className="absolute left-3 top-3 text-gray-600">
  //             <MessageSquare className="w-5 h-5" />
  //           </div>

  //           <textarea
  //             id="message"
  //             name="message"
  //             value={formData.message}
  //             onChange={handleChange}
  //             required
  //             rows="4"
  //             className="w-full rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm 
  //             text-gray-900 px-10 py-3 shadow-sm peer focus:ring-2 focus:ring-gray-400 
  //             focus:border-gray-600 hover:bg-white/80 transition-all duration-300"
  //           ></textarea>

  //           <label
  //             htmlFor="message"
  //             className="absolute left-10 top-3 text-gray-500 transition-all 
  //             pointer-events-none peer-focus:-top-3 peer-focus:text-xs peer-focus:text-gray-700
  //             peer-valid:-top-3 peer-valid:text-xs peer-valid:text-gray-700"
  //           >
  //             Message
  //           </label>
  //         </div>

  //         {/* Metallic Silver Submit Button */}
  //         <motion.button
  //           whileHover={{ scale: 1.03 }}
  //           whileTap={{ scale: 0.97 }}
  //           type="submit"
  //           disabled={isSubmitting}
  //           className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 font-semibold 
  //           text-gray-900 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 
  //           hover:from-gray-300 hover:to-gray-500 shadow-lg shadow-gray-400/40 
  //           border border-gray-300 transition-all duration-300 ${
  //             isSubmitting && "opacity-60 cursor-not-allowed"
  //           }`}
  //         >
  //           {isSubmitting ? "Sending..." : <>Send Message <Send className="w-5 h-5" /></>}
  //         </motion.button>
  //       </motion.form>
  //     </motion.div>
  //   );
  // }






// import React, { useState } from "react";

// export default function ContactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = { name, email, phone, message };

//     try {
//       await fetch(
//         "https://script.google.com/macros/s/AKfycbx4igNIL8RPzwel3naVQpqak7zjn_FvmMMVTWiWDRjmK-Imn3nUJblk02q8hCpm_dTM/exec",
//         {
//           method: "POST",
//           mode: "no-cors",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         }
//       );

//       alert("Message sent successfully!");

//       setName("");
//       setEmail("");
//       setPhone("");
//       setMessage("");

//     } catch (error) {
//       console.error("Error:", error);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>

//       <input
//         type="text"
//         placeholder="Your Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />

//       <input
//         type="email"
//         placeholder="Your Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />

//       <input
//         type="text"
//         placeholder="Your Phone"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//         required
//       />

//       <textarea
//         placeholder="Your Message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         required
//       />

//       <button type="submit">Send</button>

//     </form>
//   );
// }



// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import toast, { Toaster } from "react-hot-toast";

// // Reusable Input Component
// const InputField = ({ label, name, type = "text", value, onChange }) => (
//   <div className="relative w-full">
//     <input
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       required
//       className="peer w-full p-4 pt-6 rounded-xl bg-white shadow-md border border-gray-200 text-gray-700 outline-none focus:ring-2 focus:ring-yellow-400 transition"
//     />
//     <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-yellow-500">
//       {label}
//     </label>
//   </div>
// );

// // Reusable Textarea Component
// const TextArea = ({ label, name, value, onChange }) => (
//   <div className="relative w-full">
//     <textarea
//       name={name}
//       value={value}
//       onChange={onChange}
//       rows={4}
//       required
//       className="peer w-full p-4 pt-6 rounded-xl bg-white shadow-md border border-gray-200 text-gray-700 outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none"
//     />
//     <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-yellow-500">
//       {label}
//     </label>
//   </div>
// );

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) =>
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const validateForm = () => {
//     if (formData.name.length < 3) {
//       toast.error("Name must be at least 3 characters");
//       return false;
//     }
//     if (!formData.email.includes("@")) {
//       toast.error("Enter a valid email");
//       return false;
//     }
//     if (formData.phone.length < 10) {
//       toast.error("Phone number must be at least 10 digits");
//       return false;
//     }
//     if (formData.message.length < 5) {
//       toast.error("Message must be at least 5 characters");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (loading) return;
//     if (!validateForm()) return;

//     setLoading(true);

//     try {
//       await fetch(
//         "https://script.google.com/macros/s/AKfycbx4igNIL8RPzwel3naVQpqak7zjn_FvmMMVTWiWDRjmK-Imn3nUJblk02q8hCpm_dTM/exec",
//         {
//           method: "POST",
//           mode: "no-cors",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       toast.success("Message sent successfully!");
//       setFormData({ name: "", email: "", phone: "", message: "" });
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong!");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//       <Toaster position="top-center" />
//       <motion.form
//         onSubmit={handleSubmit}
//         className="w-full max-w-lg p-8 bg-white rounded-3xl shadow-xl flex flex-col gap-6"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <motion.h2
//           className="text-3xl font-bold text-gray-800 text-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           Contact Us
//         </motion.h2>

//         <InputField label="Your Name" name="name" value={formData.name} onChange={handleChange} />
//         <InputField label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} />
//         <InputField label="Your Phone" name="phone" value={formData.phone} onChange={handleChange} />
//         <TextArea label="Your Message" name="message" value={formData.message} onChange={handleChange} />

//         <motion.button
//           type="submit"
//           disabled={loading}
//           className="py-3 rounded-xl bg-yellow-400 text-white font-semibold text-lg hover:scale-105 transition flex justify-center items-center gap-3 disabled:opacity-50 shadow-md"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           {loading ? (
//             <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Send Message"
//           )}
//         </motion.button>
//       </motion.form>
//     </div>
//   );
// }









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
      className="peer w-full p-4 pt-6 rounded-xl bg-white shadow-md border border-gray-200 text-gray-700 outline-none focus:ring-2 focus:ring-yellow-400 transition"
    />
    <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-focus:top-1 peer-focus:text-sm peer-focus:text-yellow-500">
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
      className="peer w-full p-4 pt-6 rounded-xl bg-white shadow-md border border-gray-200 text-gray-700 outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none"
    />
    <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-focus:top-1 peer-focus:text-sm peer-focus:text-yellow-500">
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
        className="w-full max-w-lg p-8 bg-white rounded-3xl shadow-xl flex flex-col gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">Contact Us</h2>

        <InputField label="Your Name" name="name" value={formData.name} onChange={handleChange} />
        <InputField label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} />
        <InputField label="Your Phone" name="phone" value={formData.phone} onChange={handleChange} />
        <TextArea label="Your Message" name="message" value={formData.message} onChange={handleChange} />

        <motion.button
          type="submit"
          disabled={loading}
          className="py-3 rounded-xl bg-yellow-400 text-white font-semibold text-lg hover:scale-105 transition disabled:opacity-50 shadow-md"
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
    className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl backdrop-blur-lg hover:shadow-2xl"
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
      className="p-5 rounded-2xl bg-white/50 border border-gray-200 shadow-md backdrop-blur-md hover:shadow-lg cursor-pointer transition-all"
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
          className="text-yellow-600"
        >
          <MdLocationPin className="text-3xl" />
        </motion.div>

        <h3 className="text-xl font-semibold text-gray-700">Location</h3>
      </div>

      <p className="text-gray-600 leading-relaxed mt-3">
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
      className="p-5 rounded-2xl bg-white/50 border border-gray-200 shadow-md backdrop-blur-md hover:shadow-lg cursor-pointer transition-all"
    >
      <div className="flex items-center gap-3">
        <MdPhone className="text-yellow-600 text-3xl" />
        <h3 className="text-xl font-semibold text-gray-700">Phone</h3>
      </div>

      <a
        href="tel:+91951440912"
        className="block text-gray-700 text-lg font-medium mt-3 hover:text-yellow-600"
      >
        +91 95144 40912
      </a>
    </motion.div>

  </div>
</motion.div>

    </div>
  );
}
