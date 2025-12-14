import { motion } from "framer-motion";
import { FaGraduationCap, FaCloud, FaShieldAlt, FaCode } from "react-icons/fa";

const highlights = [
  {
    icon: FaGraduationCap,
    title: "Information Science Student",
    description: "Pursuing Bachelor's at Global Academy of Technology with strong foundation in computer science fundamentals."
  },
  {
    icon: FaCloud,
    title: "Cloud Computing Expertise",
    description: "Hands-on experience with AWS services, cloud architecture design, and infrastructure automation."
  },
  {
    icon: FaShieldAlt,
    title: "Cybersecurity Focus",
    description: "Passionate about developing secure, scalable applications and implementing security best practices."
  },
  {
    icon: FaCode,
    title: "Full-Stack Development",
    description: "Proficient in modern web technologies with experience in both frontend and backend development."
  }
];

export default function AboutMe() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Information Science student at Global Academy of Technology with a diploma in Computer Science 
            from a government institution. I have a solid foundation in cloud computing (AWS), web development, 
            and cybersecurity, with hands-on experience in penetration testing. I'm passionate about developing 
            secure, scalable applications and committed to continuously learning emerging technologies to solve complex problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                <item.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "2+", label: "Years Experience" },
            { number: "10+", label: "Projects Completed" },
            { number: "5+", label: "AWS Services" },
            { number: "100%", label: "Commitment" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}