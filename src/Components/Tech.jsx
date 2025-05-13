import React from 'react';
import { BiLogoNodejs, BiLogoPostgresql, BiLogoPython, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { FaReact, FaJs } from 'react-icons/fa';
import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 } 
  };

  // Define logos data array for better organization
  const logos = [
    { src: "Python-logo-notext.svg.png", alt: "Python Logo" },
    { src: "R_logo.svg.png", alt: "R Logo" },
    { src: "microsoft-excel-icon-logo-symbol-free-png.webp", alt: "Excel" },
    { src: "e977652eecf8e0c9d27a26ce82f984b7.png", alt: "Power BI" },
    //{ src: "microsoft-power-apps-2020.png", alt: "Power Apps" },
    { src: "Bloomberg-Emblem.png", alt: "Bloomberg" },
    { src: "quickbooks-2.svg", alt: "Quickbooks" },
  ];

  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      {/* Animated Heading */}
      <motion.h1 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>
      
      {/* Icons Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 p-5 w-full max-w-7xl mx-auto">
        {/* Map through logos array */}
        {logos.map((logo, index) => (
          <motion.div
            key={logo.alt}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="cursor-pointer transition-all duration-300 hover:-translate-y-5 sm:w-[80px] md:w-[100px] lg:w-[120px]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;