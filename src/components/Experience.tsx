import { motion } from "framer-motion";
import { experience } from "../data/resume";
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaAws, FaCloud, FaUsers, FaRocket, FaStar, FaChartLine } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiDocker } from "react-icons/si";

const experienceData = [
  {
    ...experience[0],
    id: 1,
    location: "Hubli-Karnataka",
    duration: "4 months",
    type: "Internship",
    gradient: "from-blue-500 to-purple-600",
    glowColor: "shadow-blue-500/25",
    primaryColor: "text-blue-400",
    icon: FaCloud,
    description: "Gained comprehensive hands-on experience in cloud architecture design and implementation using AWS services, focusing on scalable and secure infrastructure solutions.",
    achievements: [
      "Designed and implemented cloud infrastructure using AWS services including EC2, S3, and VPC",
      "Collaborated with senior architects on scalable cloud solutions for enterprise applications",
      "Gained expertise in cloud security best practices and cost optimization strategies",
      "Supported deployment and configuration of cloud-based applications and virtual environments",
      "Participated in architecture reviews and technical documentation processes"
    ],
    technologies: ["AWS", "EC2", "S3", "VPC", "Cloud Architecture", "Infrastructure Design"],
    skills: [
      "Cloud Infrastructure Design",
      "AWS Services Implementation", 
      "Security Best Practices",
      "Cost Optimization",
      "Virtual Environment Management",
      "Technical Documentation"
    ],
    impact: {
      projects: "5+",
      infrastructure: "Scalable",
      security: "Enhanced"
    }
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        
        {/* Floating Professional Elements */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${5 + i * 10}%`,
              top: `${10 + (i % 5) * 20}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Spectacular Header */}
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
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/25">
                <FaBriefcase className="text-4xl text-white" />
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-400 rounded-full border-4 border-slate-900 flex items-center justify-center">
                <FaStar className="text-slate-900 text-sm" />
              </div>
              {/* Orbiting Professional Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute -top-3 left-1/2 w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center">
                  <FaAws className="text-xs text-white" />
                </div>
                <div className="absolute top-1/2 -right-3 w-3 h-3 bg-purple-400 rounded-full flex items-center justify-center">
                  <SiKubernetes className="text-xs text-white" />
                </div>
                <div className="absolute -bottom-3 left-1/2 w-4 h-4 bg-cyan-400 rounded-full flex items-center justify-center">
                  <FaCloud className="text-xs text-white" />
                </div>
                <div className="absolute top-1/2 -left-3 w-3 h-3 bg-green-400 rounded-full flex items-center justify-center">
                  <SiDocker className="text-xs text-white" />
                </div>
              </motion.div>
            </div>
            <div className="text-left">
              <h2 className="text-5xl font-bold gradient-text">Professional Experience</h2>
              <p className="text-blue-400 font-medium text-lg">Career Journey</p>
            </div>
          </motion.div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Hands-on experience in cloud architecture and infrastructure design, 
            working with enterprise-level AWS services and modern DevOps practices
          </p>
        </motion.div>

        {/* Enhanced Experience Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-cyan-400 rounded-full"></div>

          <div className="space-y-16">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.3 + 0.2, type: "spring" }}
                  viewport={{ once: true }}
                  className="absolute left-6 top-8 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full border-4 border-slate-900 shadow-lg"
                />

                {/* Experience Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="card p-8 relative overflow-hidden group"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-300`}></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-40"
                        style={{
                          left: `${15 + i * 15}%`,
                          top: `${10 + i * 12}%`,
                        }}
                        animate={{
                          y: [-10, -25, -10],
                          opacity: [0, 0.4, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10">
                    {/* Header Section */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`w-16 h-16 bg-gradient-to-r ${exp.gradient} rounded-2xl flex items-center justify-center shadow-lg ${exp.glowColor} group-hover:shadow-xl transition-all duration-300`}
                        >
                          <exp.icon className="text-2xl text-white" />
                        </motion.div>
                        <div>
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${exp.gradient} text-white text-sm font-semibold mb-2`}>
                            <FaRocket className="text-xs" />
                            {exp.type}
                          </div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 text-cyan-400 font-semibold text-lg">
                            <FaBuilding />
                            {exp.company}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                          <FaCalendarAlt />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                          <FaMapMarkerAlt />
                          <span>{exp.location}</span>
                        </div>
                        <div className={`text-lg font-bold ${exp.primaryColor}`}>
                          {exp.duration}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <FaChartLine className={exp.primaryColor} />
                        Key Achievements & Responsibilities
                      </h4>
                      <div className="grid gap-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5, scale: 1.02 }}
                            className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${exp.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-300">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <FaAws className={exp.primaryColor} />
                        Technologies & Tools
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 hover:bg-slate-800 transition-all duration-300"
                          >
                            <FaAws className="text-lg text-cyan-400" />
                            <span className="text-white font-medium text-sm">{tech}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Skills Developed */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <FaUsers className={exp.primaryColor} />
                        Skills Developed
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-slate-800/50 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/30 hover:border-cyan-400 hover:bg-slate-800 transition-all duration-300"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Impact Metrics */}
                    <div className="grid md:grid-cols-3 gap-4">
                      {Object.entries(exp.impact).map(([key, value], metricIndex) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: metricIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="text-center p-4 bg-slate-800/30 rounded-lg"
                        >
                          <div className={`text-2xl font-bold ${exp.primaryColor} mb-1`}>{value}</div>
                          <div className="text-gray-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Status & Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="card p-8 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">Ready for New Challenges</h3>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Seeking opportunities to apply my cloud architecture expertise and contribute to 
                innovative projects in DevOps, Cloud Engineering, or Software Development roles.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaCloud className="text-2xl text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Cloud Engineer</h4>
                  <p className="text-gray-400">AWS, Azure, GCP</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaRocket className="text-2xl text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">DevOps Engineer</h4>
                  <p className="text-gray-400">CI/CD, Automation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaBriefcase className="text-2xl text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Software Developer</h4>
                  <p className="text-gray-400">Full-Stack Development</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}