import { motion } from "framer-motion";
import { projects } from "../data/resume";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {/* Simple Header */}
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4">
            A collection of projects showcasing my skills in web development, cloud computing, and software engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              {/* Project Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <FaCode className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-400 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
                >
                  <FaGithub className="text-sm" />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  <span className="text-sm">Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Want to see more?</h3>
            <p className="text-gray-300 mb-6">
              Check out my GitHub for more projects and contributions to open source.
            </p>
            <a
              href="https://github.com/Gowthamhegde"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaGithub />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}