import { motion } from "framer-motion";
import { projects } from "../data/resume";
import { useState } from "react";
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectsModern() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">Showcasing my best work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard3D key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard3D({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const colors = ["#8b5cf6", "#a78bfa", "#c4b5fd", "#e9d5ff"];
  const color = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -10,
        rotateY: 5,
        rotateX: 5,
        scale: 1.02,
      }}
      className="relative group"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-500">
        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${color}, transparent)`,
            opacity: isHovered ? 0.3 : 0.1,
          }}
          animate={{
            opacity: isHovered ? 0.3 : 0.1,
          }}
        />
        
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-1 rounded-2xl blur-xl"
          style={{ background: color }}
          animate={{
            opacity: isHovered ? 0.3 : 0,
          }}
        />

        <div className="relative z-10 p-8">
          {/* Project Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
            className="w-16 h-16 mb-6 rounded-xl flex items-center justify-center"
            style={{ 
              background: `linear-gradient(135deg, ${color}, ${color}80)`,
              boxShadow: `0 0 30px ${color}50`
            }}
          >
            <span className="text-3xl">🚀</span>
          </motion.div>

          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
            {project.name}
          </h3>
          
          <p className="text-gray-400 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: color,
                  boxShadow: `0 0 15px ${color}`
                }}
                className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300 border border-white/20"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <motion.a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              <span>View Project</span>
              <FaExternalLinkAlt className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Floating particles effect */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 rounded-full"
          style={{ background: `radial-gradient(circle, ${color}40, transparent)` }}
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
            opacity: isHovered ? [0.5, 0.8, 0.5] : 0.3,
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}
