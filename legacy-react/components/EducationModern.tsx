import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBook } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Engineering in Information Science",
    institution: "Global Academy of Technology",
    period: "Expected 2026",
    location: "Bengaluru",
    status: "In Progress",
    coursework: [
      "Python Programming",
      "Data Structures & Algorithms", 
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Software Engineering",
      "Computer Networks"
    ],
    gradient: "from-blue-500 to-purple-600",
    icon: "🎓"
  },
  {
    degree: "Diploma in Computer Science and Engineering",
    institution: "Govt Polytechnic College Siddapura",
    period: "2020-2023",
    location: "Siddapura",
    status: "Completed",
    coursework: [
      "Java Programming",
      "Database Management Systems",
      "Computer Networks", 
      "Cloud Computing (AWS)",
      "Web Development",
      "Software Engineering Principles"
    ],
    gradient: "from-green-500 to-teal-600",
    icon: "📚"
  }
];

export default function EducationModern() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text mb-6">Education</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey in computer science and information technology, 
            building a strong foundation in both theoretical concepts and practical applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card p-8 hover:scale-105 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${edu.gradient} rounded-full flex items-center justify-center text-2xl`}>
                      {edu.icon}
                    </div>
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${edu.gradient} text-white text-sm font-medium`}>
                      {edu.status}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center text-cyan-400 text-lg mb-2">
                    <FaGraduationCap className="mr-2" />
                    {edu.institution}
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-400">
                  <FaCalendarAlt className="mr-2" />
                  {edu.period}
                </div>
                <div className="flex items-center text-gray-400">
                  <FaMapMarkerAlt className="mr-2" />
                  {edu.location}
                </div>
              </div>

              {/* Coursework */}
              <div>
                <div className="flex items-center text-white font-semibold mb-3">
                  <FaBook className="mr-2" />
                  Relevant Coursework
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <motion.div
                      key={courseIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (courseIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2 text-gray-300 text-sm"
                    >
                      <span className="text-cyan-400">•</span>
                      <span>{course}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Academic Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 card p-8"
        >
          <h3 className="text-2xl font-bold text-center gradient-text mb-8">Academic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Strong Foundation</h4>
              <p className="text-gray-400">
                Solid grounding in computer science fundamentals from government institution
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBook className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Practical Learning</h4>
              <p className="text-gray-400">
                Hands-on experience with cloud computing and modern development practices
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Continuous Growth</h4>
              <p className="text-gray-400">
                Committed to learning emerging technologies and industry best practices
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}