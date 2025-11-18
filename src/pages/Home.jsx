import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import IndustriesSection from "../components/IndustriesSection";
import KeyProducts from "../components/KeyProducts";
import { motion } from "framer-motion";
import LeadershipAndClients from "../components/LeadershipAndClients";

export default function Home() {
  const industries = [
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Mining', icon: '⛏️' },
    { name: 'Steel', icon: '⚙️' },
    { name: 'Power', icon: '⚡' },
    { name: 'Infrastructure', icon: '🏗️' },
    { name: 'Cement', icon: '🏢' },
  ];

  return (
    <div className="min-h-screen">

      {  /* Image Slider Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* <h2 className="heading-secondary text-center mb-8">Our Projects</h2> */}
          <ImageSlider />
        </div>
      </section>

      { /*       Latest News Section   */}
      
      
       <div className="bg-gray-100 p-8 rounded-2xl shadow-md max-w mx-auto mt-10 h-[300px] flex flex-col justify-center text-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        News Updates 
      </h2>

      <p className="text-gray-600 max-w-md mx-auto mb-6">
        Stay informed with the latest news and updates from Matrix Metals. Discover our recent projects, industry insights, and company announcements.
      </p>

      {/* Button aligned right */}
      <div className="flex justify-end mt-6">
        <button className="bg-blue-300 hover:bg-blue-400 text-white font-medium px-6 py-3 rounded-lg shadow transition duration-300">
          Read More
        </button>
      </div>
    </div>
      {/* <section>
         <div className="bg-gray-100 p-8 rounded-2xl shadow-md max-w mx-auto mt-10 h-[300px] ">
      <h1 className="text-4xl font-semibold mb-4 text-gray-800">
        Latest Updates 
      </h1>
      <p className="text-gray-600 text-center max-w-md">
        We are passionate about building innovative digital experiences that help
        businesses grow. Explore our services, projects, and values to learn more
        about what we do.
      </p>
      <p> 
        
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow transition duration-300">
        Learn More
      </button>
      </p>
    </div>
         </section> */}
      {/* Hero Section */}
      {/* <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/industrial-hero.jpg')" }}
        />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/industrial-hero.jpg')" }}
        />
        <div className="container-custom relative z-20 text-white">
          <h1 className="heading-primary mb-6">
            Leading Industrial Solutions Provider
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Delivering excellence through innovation and sustainable practices
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md transition-colors"
            >
              Our Solutions
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-orange-600 text-black px-8 py-3 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section> */}

      {/* About Section */}
     <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 relative overflow-hidden">

  {/* Subtle metallic noise overlay */}
  <div className="absolute inset-0 opacity-10 bg-[url('/textures/noise.png')] pointer-events-none"></div>

  <div className="container-custom relative">
    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}
      <div className="space-y-6">
        <h2 className="p-10 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Engineering Tomorrow’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Solutions</span>
        </h2>

        <p className="p-10 text-gray-700 text-lg leading-relaxed max-w-lg">
          Backed by decades of precision engineering, we deliver cutting-edge industrial solutions that enhance 
          productivity, reliability, and sustainability across global markets.
        </p>

        {/* <div className="w-40 p-10 h-0 rounded-full bg-gradient-to-r from-blue-500 to-gray-700"></div> */}
      </div>

      {/* RIGHT SIDE - Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { number: "50+", label: "Years of Engineering" },
          { number: "1000+", label: "Industrial Projects" },
          { number: "20+", label: "Countries Served" },
          { number: "500+", label: "Skilled Experts" },
        ].map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-white/70 backdrop-blur-md border border-gray-300
                       shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                       hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)]
                       transition-all duration-500 hover:-translate-y-1"
          >
            <h3 className="text-4xl font-extrabold text-blue-600">{item.number}</h3>
            <p className="mt-2 text-gray-700 font-medium text-sm tracking-wide uppercase">
              {item.label}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>


      {/* Industries Section */}


      <section className="section-padding py-10">
  <div>
      {/* Other sections */}
      <IndustriesSection />
    </div>
</section>

<section>
   <div>
      {/* Other sections */}
      <KeyProducts />
    </div>
</section>

<section>
   <div>
      <LeadershipAndClients />
    </div>
</section>

      
    </div>
  );
}


