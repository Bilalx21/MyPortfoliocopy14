import React from 'react';
import { motion } from "framer-motion";
// Import the image or provide a URL
const image = "https://via.placeholder.com/300";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay:0.2}}

        >

          {/*<img
            src="/Untitled design (2) (1).png" alt="Profile"
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />*/}
        </motion.div>

        <motion.div 
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay:0.2}}

        className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-red-600 via-green-400 to-teal-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
            Bilal Kirmani
          </h1>

          <h3 className="bg-gradient-to-r from-teal-500 to-red-600 via green-400 bg-clip-text text-transparent text-2xl md:text-3xl">
            MSc Finance Student
          </h3>

          <p className="text-sm text-gray-400 md:text-base">
          I'm an MSc Finance student at Montpellier Business School with a Bachelor's in Cybersecurity from the University of Wollongong, combining technical expertise with financial acumen. Driven by a passion for Financial Advisory, Compliance, Corporate Finance, Quantitative Analysis, Sustainable Finance, Financial Controlling, Accounting and Internal Audit. I bring a unique perspective to problem-solving. With experience at Apple as a Sales Specialist. I'm deeply interested in fintech, economics, and sustainability, aiming to bridge innovation with impact in every role I take on.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
