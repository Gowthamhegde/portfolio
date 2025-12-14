import { motion } from "framer-motion";
import { projects } from "../data/resume";
import { FaGithub, FaExternalLinkAlt, FaAws, FaPython, FaReact, FaDocker, FaRocket, FaEye, FaStar, FaCode } from "react-icons/fa";
import { SiPhp, SiJavascript, SiCss3, SiMysql } from "react-icons/si";

const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();
  if (techLower.includes('aws')) return FaAws;
  if (techLower.includes('python')) return FaPython;
  if (techLower.includes('react')) return FaReact;
  if (techLower.includes('docker')) return FaDocker;
  if (techLower.includes('php')) return SiPhp;
  if (techLower.includes('javascript')) return SiJavascript;
  if (techLower.includes('css')) return SiCss3;
  if (techLower.includes('mysql')) return SiMysql;
  return FaCode; // default
};

const projectsData = [
  {
    ...projects[0],
    id: 1,
    category: "Cloud Application",
    gradient: "from-orange-500 to-red-600",
    glowColor: "shadow-orange-500/25",
    primaryColor: "text-orange-400",
    features: [
      "AWS EC2 deployment for high availability",
      "PHP backend with MySQL database",
      "Interactive JavaScript frontend",
      "Category-based expense tracking",
      "Secure user authentication system",
      "Real-time expense analytics"
    ],
    metrics: {
      users: "500+",
      uptime: "99.9%",
      performance: "Fast"
    }
  },
  {
    ...projects[1],
    id: 2,
    category: "AI/ML Application", 
    gradient: "from-green-500 to-teal-600",
    glowColor: "shadow-green-500/25",
    primaryColor: "text-green-400",
    features: [
      "Real-time object detection with YOLOv8",
      "Advanced computer vision algorithms",
      "Gradio web interface for easy interaction",
      "Video and image processing capabilities",
      "Multiple YOLO model support",
      "Custom training pipeline"
    ],
    metrics: {
      accuracy: "95%+",
      speed: "30 FPS",
      models: "5+"
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        
        {/* Floating Code Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-8"
          >
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-500/25">
                <FaRocket className="text-4xl text-white" />
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-400 rounded-full border-4 border-slate-900 flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">2</span>
              </div>
              {/* Orbiting Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute -top-2 left-1/2 w-3 h-3 bg-cyan-400 rounded-full"></div>
                <div className="absolute top-1/2 -right-2 w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="absolute -bottom-2 left-1/2 w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                <div className="absolute top-1/2 -left-2 w-2 h-2 bg-yellow-400 rounded-full"></div>
              </motion.div>
            </div>
            <div className="text-left">
              <h2 className="text-5xl font-bold gradient-text">Featured Projects</h2>
              <p className="text-cyan-400 font-medium text-lg">Real-World Applications</p>
            </div>
          </motion.div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Showcasing production-ready applications built with modern technologies, 
            deployed on cloud infrastructure, and designed for real-world impact
          </p>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <div className="space-y-32">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Enhanced Project Showcase */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 5, rotateX: 2 }}
                  transition={{ duration: 0.4 }}
                  className="relative group perspective-1000"
                >
                  {/* Main Project Card */}
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-cyan-400/20 shadow-2xl group-hover:shadow-3xl group-hover:border-cyan-400/40 transition-all duration-500">
                    {/* Project Preview Area */}
                    <div className="aspect-video relative overflow-hidden">
                      {/* Animated Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                      
                      {/* Project Icon & Category */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className={`w-32 h-32 bg-gradient-to-r ${project.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl ${project.glowColor} group-hover:shadow-3xl transition-all duration-300`}
                          >
                            {project.category === "Cloud Application" && <FaAws className="text-5xl text-white" />}
                            {project.category === "AI/ML Application" && <FaEye className="text-5xl text-white" />}
                          </motion.div>
                          <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${project.gradient} text-white font-bold text-lg shadow-lg`}>
                            {project.category}
                          </div>
                        </div>
                      </div>

                      {/* Interactive Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                        <div className="flex gap-4">
                          <motion.button
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300 border border-white/20"
                          >
                            <FaExternalLinkAlt />
                            Live Demo
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300 border border-white/20"
                          >
                            <FaGithub />
                            Source
                          </motion.button>
                        </div>
                      </div>

                      {/* Floating Metrics */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: metricIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20"
                          >
                            {key}: <span className={project.primaryColor}>{value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Indicators */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                      {project.tech.slice(0, 4).map((tech, techIndex) => {
                        const IconComponent = getTechIcon(tech);
                        return (
                          <motion.div
                            key={tech}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ delay: techIndex * 0.1, type: "spring" }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.2, y: -5 }}
                            className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center border-2 border-cyan-400/30 shadow-lg hover:border-cyan-400 hover:shadow-xl transition-all duration-300"
                          >
                            <IconComponent className="text-xl text-cyan-400" />
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <FaStar className="text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Project Details */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                {/* Project Header */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white font-semibold mb-6 shadow-lg`}
                  >
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    {project.category}
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-5xl font-bold text-white mb-6 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {project.name}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-gray-300 text-xl leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                </div>

                {/* Enhanced Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className={`w-3 h-3 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
                    Technology Stack
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.tech.map((tech, techIndex) => {
                      const IconComponent = getTechIcon(tech);
                      return (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, x: 5 }}
                          className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 hover:bg-slate-800 transition-all duration-300"
                        >
                          <IconComponent className="text-xl text-cyan-400" />
                          <span className="text-white font-medium">{tech}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Enhanced Features */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className={`w-3 h-3 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
                    Key Features & Capabilities
                  </h4>
                  <div className="grid gap-4">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5, scale: 1.02 }}
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-300 leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Enhanced Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${project.gradient} text-white font-bold rounded-2xl hover:shadow-2xl ${project.glowColor} transition-all duration-300 border border-transparent hover:border-white/20`}
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span>Live Demo</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </motion.a>
                  <motion.a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-8 py-4 border-2 border-gray-600 text-gray-300 font-bold rounded-2xl hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
                  >
                    <FaGithub className="text-lg" />
                    <span>Source Code</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <div className="card p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5"></div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-4 right-4 w-16 h-16 border-2 border-dashed border-cyan-400/30 rounded-full"
            />
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-6">Ready to Build Something Amazing?</h3>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                These projects represent just the beginning of my journey in cloud computing and modern development. 
                I'm constantly exploring new technologies and building innovative solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <motion.a
                  href="https://github.com/Gowthamhegde"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <FaGithub className="text-2xl" />
                  <span>Explore All Projects</span>
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-bold text-lg rounded-2xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <FaRocket className="text-xl" />
                  <span>Let's Collaborate</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}