import { motion } from "framer-motion";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    title: "Cloud Architecture Intern",
    company: "Government Tool Room & Training Centre (GTTC)",
    location: "Hubli-Karnataka",
    period: "13 February 2023 – 31 May 2023",
    type: "Internship",
    description: "Gained hands-on experience with cloud architecture best practices and AWS services implementation.",
    achievements: [
      "Assisted in designing and implementing cloud infrastructure using AWS services",
      "Gained hands-on experience with cloud architecture best practices, including scalability, security, and cost optimization",
      "Supported the deployment and configuration of cloud-based applications and virtual environments"
    ],
    technologies: ["AWS", "Cloud Architecture", "Infrastructure Design", "Virtual Environments"],
    gradient: "from-blue-500 to-purple-600"
  }
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text mb-6">Professional Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey in cloud computing and DevOps, gaining practical experience 
            in enterprise-level infrastructure and modern development practices.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-600"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-20 pb-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full border-4 border-slate-900"></div>

              {/* Experience card */}
              <div className="card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${experience.gradient} text-white text-sm font-medium`}>
                    {experience.type}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <FaCalendarAlt className="mr-2" />
                    {experience.period}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <FaMapMarkerAlt className="mr-2" />
                    {experience.location}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                  <div className="flex items-center text-cyan-400 text-lg mb-4">
                    <FaBuilding className="mr-2" />
                    {experience.company}
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{experience.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-2 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-800 text-cyan-400 rounded-full text-sm border border-cyan-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="card p-8 text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaBuilding className="text-2xl text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Currently Seeking Opportunities</h3>
          <p className="text-gray-300 text-lg mb-6">
            I'm actively looking for DevOps Engineer, Cloud Architect, or Software Developer roles 
            where I can apply my skills in cloud computing, automation, and modern development practices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
              DevOps Engineer
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full">
              Cloud Architect
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full">
              Software Developer
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}