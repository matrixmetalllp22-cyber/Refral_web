import React from "react";
import { motion } from "framer-motion";


const leaders = [
  {
    name: "Jeeten",
    role: "Chairman",
    image: "/images/miki-yusuke.jpg",
    quote: `"We, Marubeni-Itochu Steel of Japan, are privileged to offer our business intelligence and join hands with JSW Steel of India in creating an entity in the field of value steel processing..."`,
  },
  {
    name: "Rakesh Chauhan",
    role: "JMD",
    image: "/images/rakesh-chauhan.jpg",
    quote: `"At JSW MI, we are motivated and geared up to move in conjunction with the ever-increasing capacities of JSW Steel as well as all-India demand. We look forward to creating a better tomorrow for all stakeholders."`,
  },
];

const clients = [
  { name: "Tata Motors", logo: "/public/logos/TVS-Motor-Company.png" },
  { name: "Bosch", logo: "/public/logos/Ola-Cabs-Logo.png" },
  { name: "Bajaj", logo: "/public/logos/Wave_mec.png" },
  { name: "Maruti Suzuki", logo: "/public/logos/Taal.png" },
  { name: "Mahindra", logo: "/public/logos/Boeing.png" },
  { name: "Hyundai", logo: "/public/logos/BEML.png" },
  { name: "Hero MotoCorp", logo: "/public/logos/DRDO.png" },
  { name: "TVS", logo: "/public/logos/mg.png" },
  { name: "Ashok Leyland", logo: "/public/logos/indian_railways.png" },
  { name: "Volvo Eicher", logo: "/public/logos/General_Electric.png" },
  { name: "TVS", logo: "/public/logos/Siemens.png" },
  { name: "Ashok Leyland", logo: "/public/logos/Hitachi.png" },
  { name: "Volvo Eicher", logo: "/public/logos/AEQUS.png" },
  { name: "Ashok Leyland", logo: "/public/logos/garuda.png" },
  { name: "Volvo Eicher", logo: "/public/logos/AEQUS.png" },
];

const LeadershipAndClients  = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-20">

        {leaders.map((leader, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 
            bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]
            border border-gray-200 overflow-hidden`}
          >
            {/* IMAGE SIDE */}
            <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-96 object-cover rounded-xl md:rounded-none"
              />
            </div>

            {/* TEXT SIDE */}
            <div
              className="p-10 bg-gradient-to-br from-gray-100 to-gray-50 
                border-l border-gray-200"
            >
              <h2 className="text-4xl font-semibold text-gray-800 mb-2">
                {leader.name}
              </h2>
              <p className="text-xl text-gray-600 mb-6">{leader.role}</p>

              <p className="text-gray-700 leading-relaxed text-base border-l-4 pl-4 border-blue-500">
                {leader.quote}
              </p>
            </div>
          </motion.div>
        ))}

      </div>
      {/* Clients Section */}
      <div className="py-16 bg-white text-center overflow-hidden relative">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Our Esteemed Customers
        </h2>

        {/* Scrolling Logos */}
        {/* <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-12 justify-center items-center"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-32 h-16 object-contain mx-auto transition-all duration-300 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div> */}

      <div className="w-full overflow-hidden">
  <motion.div
    className="flex gap-12 justify-start items-center"
    animate={{ x: ["0%", "-100%"] }}
    transition={{
      repeat: Infinity,
      duration: 30,
      ease: "linear",
    }}
  >
    {[...clients, ...clients].map((client, index) => (
      <div
        key={index}
        className="flex-shrink-0 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <img
          src={client.logo}
          alt={client.name}
          className="w-36 h-20 object-contain mx-auto transition-all duration-300 hover:scale-105"
        />
      </div>
    ))}
  </motion.div>
</div>


        {/* Soft gradient fade on sides */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default LeadershipAndClients;



