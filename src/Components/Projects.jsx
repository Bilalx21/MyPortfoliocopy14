import React from "react";
import { motion } from "framer-motion";

// Projects data stays the same
const projectsData = [
  {
    image: "/MyPortfoliocopy14/images/Internal-Auditing.jpg",
    title: "Internal Audit – Cyber Risk Compliance",
    description: "Designed an internal audit framework addressing GDPR, SOX, and ISO 27001 standards. Assessed compliance readiness and identified key cyber risk exposures in financial systems.",
    technologies: ["ISO 27001", "SOX", "GDPR", "Python", "Excel"],
  },
  {
    image: "/MyPortfoliocopy14/images/The-5-Biggest-Problems-With-Blockchain-Technology-Everyone-Must-Know-About-1.webp",
    title: "Blockchain Assurance Research",
    description: "Studied the intersection of blockchain transparency, smart contract auditability, and regulatory compliance gaps. Proposed a conceptual framework for blockchain risk assurance.",
    technologies: ["Blockchain", "Smart Contracts", "Compliance", "GRC"],
  },
  {
    image: "/MyPortfoliocopy14/images/shutterstock_2460260159.webp",
    title: "Green Energy Project Valuation",
    description: "Valued a solar energy infrastructure project using DCF and Monte Carlo simulation. Integrated ESG risk factors and climate considerations using real-world data from MSCI.",
    technologies: ["DCF", "Monte Carlo", "MSCI ESG", "Excel", "Python"],
  },
  {
    image: "/MyPortfoliocopy14/images/augmenter-montant-credit-092357.jpg",
    title: "Private Credit Deal Structuring",
    description: "Modeled a senior secured private credit loan, assessing borrower risk, covenant strength, downside protection, and collateral recovery scenarios.",
    technologies: ["Excel", "Credit Analysis", "Loan Structuring", "Risk Modeling"],
  },
  {
    image: "/MyPortfoliocopy14/images/1707377776586.jpeg",
    title: "Corporate Financial Restructuring",
    description: "Optimized the capital structure of a mid-sized company by modeling debt refinancing strategies aimed at improving financial performance and shareholder value.",
    technologies: ["Capital Structure", "Excel", "Valuation", "Debt Refinancing"],
  },
  {
    image: "/MyPortfoliocopy14/images/recycled-materials_recycling-technology.jpg",
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