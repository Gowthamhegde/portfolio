import { motion } from "framer-motion";
import { education } from "../data/resume";
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaBook, FaStar, FaAward, FaCode, FaDatabase, FaCloud } from "react-icons/fa";
import { SiPython, SiMysql, SiAmazon } from "react-icons/si";

const getCourseIcon = (course: string) => {
  const courseLower = course.toLowerCase();
  if (courseLower.includes('python')) return SiPython;
  if (courseLower.includes('java')) return FaCode;
  if (courseLower.includes('dbms') || courseLower.includes('database')) return SiMysql;
  if (courseLower.includes('aws') || courseLower.includes('cloud')) return SiAmazon;
  if (courseLower.includes('data structures')) return FaDatabase;
  if (courseLower.includes('software')) return FaCode;
  if (courseLower.includes('operating')) return FaCode;
  if (courseLower.includes('networks')) return FaCloud;
  return FaBook; // default
};

const educationData = [
  {
    ...education[0],
    id: 1,
    status: "In Progress",
    gradient: "from-blue-500 to-purple-600",
    glowColor: "shadow-blue-500/25",
    primaryColor: "text-blue-400",
    icon: FaUniversity,
    description: "Pursuing comprehensive computer science education with focus on modern software development and cloud technologies.",
    achievements: [
      "Strong foundation in programming fundamentals",
      "Advanced coursework in data structures and algorithms",
      "Hands-on experience with database management",
      "Software engineering best practices"
    ],
    gpa: "8.5/10",
    expectedGraduation: "2026"
  },
  {
    ...education[1],
    id: 2,
    status: "Completed",
    gradient: "from-green-500 to-teal-600",
    glowColor: "shadow-green-500/25",
    primaryColor: "text-green-400",
    icon: FaGraduationCap,
    description: "Comprehensive diploma program focusing on computer science fundamentals and practical application development.",
    achievements: [
      "Solid foundation in programming languages",
      "Database design and management expertise",
      "Network administration and security",
      "Cloud computing with AWS specialization"
    ],
    gpa: "First Class",
    expectedGraduation: "2023"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        
        {/* Floating Academic Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-cyan-400/20 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 4) * 25}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
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
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/25">
                <FaGraduationCap className="text-4xl text-white" />
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full border-4 border-slate-900 flex items-center justify-center">
                <FaStar className="text-slate-900 text-sm" />
              </div>
              {/* Orbiting Academic Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute -top-3 left-1/2 w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center">
                  <FaBook className="text-xs text-white" />
                </div>
                <div className="absolute top-1/2 -right-3 w-3 h-3 bg-green-400 rounded-full flex items-center justify-center">
                  <FaCode className="text-xs text-white" />
                </div>
                <div className="absolute -bottom-3 left-1/2 w-4 h-4 bg-purple-400 rounded-full flex items-center justify-center">
                  <FaDatabase className="text-xs text-white" />
                </div>
                <div className="absolute top-1/2 -left-3 w-3 h-3 bg-orange-400 rounded-full flex items-center justify-center">
                  <FaCloud className="text-xs text-white" />
                </div>
              </motion.div>
            </div>
            <div className="text-left">
              <h2 className="text-5xl font-bold gradient-text">Education</h2>
              <p className="text-cyan-400 font-medium text-lg">Academic Journey</p>
            </div>
          </motion.div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Building a strong foundation in computer science through comprehensive academic programs 
            and hands-on learning experiences in modern technologies
          </p>
        </motion.div>

        {/* Enhanced Education Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-green-400 rounded-full"></div>

          <div className="space-y-16">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
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
                  className="absolute left-6 top-8 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full border-4 border-slate-900 shadow-lg"
                />

                {/* Education Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="card p-8 relative overflow-hidden group"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-40"
                        style={{
                          left: `${20 + i * 25}%`,
                          top: `${15 + i * 20}%`,
                        }}
                        animate={{
                          y: [-10, -25, -10],
                          opacity: [0, 0.4, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.4,
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
                          className={`w-16 h-16 bg-gradient-to-r ${edu.gradient} rounded-2xl flex items-center justify-center shadow-lg ${edu.glowColor} group-hover:shadow-xl transition-all duration-300`}
                        >
                          <edu.icon className="text-2xl text-white" />
                        </motion.div>
                        <div>
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${edu.gradient} text-white text-sm font-semibold mb-2`}>
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            {edu.status}
                          </div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {edu.degree}
                          </h3>
                          <p className="text-cyan-400 font-semibold text-lg">{edu.school}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                          <FaCalendarAlt />
                          <span>{edu.period}</span>
                        </div>
                        <div className={`text-lg font-bold ${edu.primaryColor}`}>
                          {edu.gpa}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <FaAward className={edu.primaryColor} />
                        Key Achievements
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5, scale: 1.02 }}
                            className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${edu.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-300">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Coursework */}
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <FaBook className={edu.primaryColor} />
                        Relevant Coursework
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {edu.coursework.map((course, courseIndex) => {
                          const IconComponent = getCourseIcon(course);
                          return (
                            <motion.div
                              key={courseIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: courseIndex * 0.05 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 hover:bg-slate-800 transition-all duration-300"
                            >
                              <IconComponent className="text-lg text-cyan-400" />
                              <span className="text-white font-medium text-sm">{course}</span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Excellence Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 card p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Academic Excellence</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Years of Study", value: "6+", icon: FaCalendarAlt, color: "text-blue-400" },
              { label: "Programming Languages", value: "5+", icon: FaCode, color: "text-green-400" },
              { label: "Core Subjects", value: "15+", icon: FaBook, color: "text-purple-400" },
              { label: "Academic Performance", value: "Excellent", icon: FaStar, color: "text-yellow-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className={`w-20 h-20 bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                    <stat.icon className={`text-2xl ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Learning Goals */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card p-8 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning Journey</h3>
              <p className="text-gray-300 text-lg mb-6">
                Currently pursuing advanced studies while staying updated with the latest technologies 
                and industry best practices in cloud computing and software development.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium">
                  Advanced Algorithms
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full font-medium">
                  Cloud Architecture
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-medium">
                  DevOps Practices
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-medium">
                  System Design
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}