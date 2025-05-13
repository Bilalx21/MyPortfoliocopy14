import React from "react";
import { motion } from "framer-motion";

// Projects data stays the same
const projectsData = [
  {
    image: "iStock-506443992.jpg",
    title: "Tax Optimization Case Study",
    description: "Analyzed a company's financial statements and designed tax optimization strategies that comply with regulations.",
    technologies: ["Excel", "PowerBI", "QuickBooks", "TurboTax API"],
  },
  {
    image: "/image-blog-time-series-analysis.avif",
    title: "Cash Flow Forecasting and Budget Variance Analysis Using Time Series Models",
    description: "Used historical stock price data to predict future price movements and analyzed market volatility with algorithmic trading.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Prophet"],
  },
  {
    image: "/201809-business-valuation.jpg",
    title: "Valuation Project",
    description: "Performed a detailed valuation of a publicly traded company using methods like DCF, comparable company analysis, and precedent transactions.",
    technologies: ["Excel", "Bloomberg Terminal", "Capital IQ", "VBA"],
  },
  {
    image: "/US59LM3GUoq7EowEWQtMCd.jpg",
    title: "Sustainable Investment Portfolio",
    description: "Designed a portfolio focused on ESG-compliant companies, showcasing sustainable finance practices.",
    technologies: ["R", "ESG Analytics API", "FactSet", "Tableau"],
  },
  {
    image: "/advanced-authentication-blog-image.jpg.optimal.jpg",
    title: "Modern Authentication Methods",
    description: "Worked on a comprehensive research project focusing on modern authentication techniques, including Single Factor Authentication (SFA), Two-Factor Authentication (2FA), and Multi-Factor Authentication (MFA).",
    technologies: ["Honeytoken", "Firebase Auth", "Cryptography", "OAuth 2.0"],
  },
  {
    image: "/DALL·E 2025-01-13 20.31.45 - A sleek and modern user interface (UI) design for a recyclable material exchange platform called 'Renewatrade'. The UI features a clean dashboard layo.webp",
    title: "AI-Powered Recyclable Materials Exchange Platform",
    description: "An app leveraging deep learning and AI technologies, including computer vision for material categorization and an AI-powered chatbot for customer support.",
    technologies: ["Jupyter Notebook", "AWS", "React", "SQL"],
  },
];

// Updated ScrollReveal component
const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      {/* Image container with bounce animation */}
      <motion.div 
        className="w-full md:w-[400px] h-[200px] rounded-2xl overflow-hidden"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </motion.div>
      {/* Project Details */}
      <div className="flex flex-col gap-5 flex-1">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-lg bg-black p-2 text-sm text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ScrollReveal key={index}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Projects;