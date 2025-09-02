import { motion, useAnimation } from "framer-motion";
import { projects } from "../data/resume";
import { useEffect } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const controls = useAnimation();
  
  // Random color for the project card accent
  const colors = ["#4158D0", "#C850C0", "#FFCC70", "#3EECAC", "#EE74E1"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  return (
    <motion.div 
      variants={item}
      whileHover={{ 
        y: -3,
        boxShadow: `0 8px 15px -5px ${randomColor}30`
      }}
      className="card overflow-hidden flex flex-col h-full relative"
      style={{
        borderTop: `3px solid ${randomColor}`,
        transition: "box-shadow 0.3s ease"
      }}
    >
      {/* Simple gradient line */}
      <div 
        className="absolute top-0 left-0 w-full h-1 opacity-50"
        style={{ background: randomColor }}
      />
      
      <div className="p-6 flex-1">
        <h3 className="text-2xl font-semibold mb-2 flex items-center">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {project.name}
          </motion.span>
        </h3>
        <p className="text-subtext mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <motion.span 
              key={index} 
              className="tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.1, backgroundColor: randomColor }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 p-4 flex justify-end">
        <motion.a 
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ 
            scale: 1.05,
            color: randomColor
          }}
          className="link flex items-center gap-1"
        >
          View Project
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </motion.svg>
        </motion.a>
      </div>
    </motion.div>
  );
}