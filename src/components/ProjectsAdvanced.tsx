import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaAws, FaDocker, FaPython, FaReact } from "react-icons/fa";
import { SiGradio, SiYolo } from "react-icons/si";

const projects = [
  {
    title: "Expense Tracker - Cloud Native",
    description: "Full-stack expense tracking application with PHP backend, hosted on AWS EC2 for scalability and performance. Features interactive JavaScript frontend with comprehensive expense management capabilities.",
    image: "/api/placeholder/600/400",
    technologies: ["PHP", "JavaScript", "CSS", "AWS EC2", "MySQL"],
    features: [
      "Add, edit, and delete expenses",
      "Categorize expenses with filtering",
      "View spending reports and summaries",
      "AWS EC2 deployment for reliability",
      "Responsive design for all devices"
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Cloud Application",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "YOLO Object Detection App",
    description: "Real-time object detection application using YOLOv8 and Gradio for both images and videos. Integrated support for multiple YOLO models with customizable performance settings.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "YOLOv8", "Gradio", "OpenCV", "PyTorch"],
    features: [
      "Real-time object detection for images and videos",
      "Multiple YOLO model support (yolov8n, s, m, l, x)",
      "Clean and intuitive Gradio interface",
      "OpenCV integration for video processing",
      "Customizable detection parameters"
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "AI/ML Application",
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "DevOps Pipeline Automation",
    description: "Complete CI/CD pipeline setup using Jenkins, Docker, and AWS services. Automated deployment workflow with infrastructure as code using Terraform.",
    image: "/api/placeholder/600/400",
    technologies: ["Jenkins", "Docker", "Terraform", "AWS", "Ansible"],
    features: [
      "Automated CI/CD pipeline with Jenkins",
      "Infrastructure provisioning with Terraform",
      "Container orchestration with Docker",
      "AWS services integration",
      "Configuration management with Ansible"
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "DevOps Infrastructure",
    gradient: "from-orange-500 to-red-600"
  }
];

export default function ProjectsAdvanced() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my work in cloud computing, DevOps automation, and modern web development. 
            Each project demonstrates practical application of cutting-edge technologies.
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative group overflow-hidden rounded-2xl"
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-cyan-400/20">
                    <div className="text-center">
                      <div className={`w-20 h-20 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        {project.category === "Cloud Application" && <FaAws className="text-3xl text-white" />}
                        {project.category === "AI/ML Application" && <SiYolo className="text-3xl text-white" />}
                        {project.category === "DevOps Infrastructure" && <FaDocker className="text-3xl text-white" />}
                      </div>
                      <p className="text-gray-400">{project.category}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-medium mb-4`}>
                    {project.category}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-800 text-cyan-400 rounded-full text-sm border border-cyan-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                  >
                    <FaGithub />
                    <span>Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in My Work?</h3>
            <p className="text-gray-300 mb-6">
              I'm always working on new projects and exploring emerging technologies. 
              Let's connect and discuss potential collaborations!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}