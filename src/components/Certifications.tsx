import { motion } from "framer-motion";
import { certifications } from "../data/resume";
import { FaCertificate, FaAward, FaStar, FaExternalLinkAlt, FaShieldAlt, FaCode, FaCloud, FaLock } from "react-icons/fa";
import { SiAmazon, SiHtml5, SiCss3 } from "react-icons/si";

const getCertificationIcon = (name: string) => {
  const nameLower = name.toLowerCase();
  if (nameLower.includes('aws') || nameLower.includes('amazon')) return SiAmazon;
  if (nameLower.includes('html')) return SiHtml5;
  if (nameLower.includes('css')) return SiCss3;
  if (nameLower.includes('security') || nameLower.includes('information security')) return FaShieldAlt;
  if (nameLower.includes('web development')) return FaCode;
  return FaCertificate; // default
};

const getCertificationCategory = (name: string) => {
  const nameLower = name.toLowerCase();
  if (nameLower.includes('aws') || nameLower.includes('cloud')) return {
    category: "Cloud Computing",
    gradient: "from-orange-500 to-red-600",
    color: "text-orange-400"
  };
  if (nameLower.includes('security')) return {
    category: "Cybersecurity",
    gradient: "from-red-500 to-pink-600",
    color: "text-red-400"
  };
  if (nameLower.includes('web') || nameLower.includes('html') || nameLower.includes('css')) return {
    category: "Web Development",
    gradient: "from-blue-500 to-purple-600",
    color: "text-blue-400"
  };
  return {
    category: "Professional",
    gradient: "from-green-500 to-teal-600",
    color: "text-green-400"
  };
};

const certificationsData = certifications.map((cert, index) => ({
  ...cert,
  id: index + 1,
  ...getCertificationCategory(cert.name),
  status: "Completed",
  issuer: cert.name.includes('AWS') ? 'Amazon Web Services' : 
          cert.name.includes('TechA') ? 'TechA Academy' : 
          'Professional Institute',
  year: cert.name.includes('2020') ? '2020' : '2023',
  skills: cert.name.includes('AWS') ? ['AWS', 'EC2', 'Cloud Architecture'] :
          cert.name.includes('HTML') ? ['HTML5', 'CSS3', 'Web Design'] :
          cert.name.includes('Security') ? ['Information Security', 'Risk Assessment', 'Compliance'] :
          ['Professional Skills']
}));

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        
        {/* Floating Certificate Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-yellow-400/20 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
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
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-yellow-500/25">
                <FaAward className="text-4xl text-white" />
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-400 rounded-full border-4 border-slate-900 flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">{certificationsData.length}</span>
              </div>
              {/* Orbiting Certificate Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute -top-3 left-1/2 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <FaCertificate className="text-xs text-white" />
                </div>
                <div className="absolute top-1/2 -right-3 w-3 h-3 bg-blue-400 rounded-full flex items-center justify-center">
                  <FaCode className="text-xs text-white" />
                </div>
                <div className="absolute -bottom-3 left-1/2 w-4 h-4 bg-red-400 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="text-xs text-white" />
                </div>
                <div className="absolute top-1/2 -left-3 w-3 h-3 bg-orange-400 rounded-full flex items-center justify-center">
                  <FaCloud className="text-xs text-white" />
                </div>
              </motion.div>
            </div>
            <div className="text-left">
              <h2 className="text-5xl font-bold gradient-text">Certifications</h2>
              <p className="text-yellow-400 font-medium text-lg">Professional Credentials</p>
            </div>
          </motion.div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Validated expertise through industry-recognized certifications in cloud computing, 
            web development, and cybersecurity from leading technology providers
          </p>
        </motion.div>

        {/* Enhanced Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {certificationsData.map((cert, index) => {
            const IconComponent = getCertificationIcon(cert.name);
            
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card p-8 relative overflow-hidden group cursor-pointer"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-300`}></div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-40"
                      style={{
                        left: `${15 + i * 20}%`,
                        top: `${10 + i * 15}%`,
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
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 bg-gradient-to-r ${cert.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <IconComponent className="text-2xl text-white" />
                      </motion.div>
                      <div>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${cert.gradient} text-white text-sm font-semibold mb-2`}>
                          <FaStar className="text-xs" />
                          {cert.category}
                        </div>
                        <div className="text-gray-400 text-sm">{cert.issuer}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold ${cert.color} mb-1`}>
                        {cert.year}
                      </div>
                      <div className="text-green-400 text-sm font-medium">
                        ✓ {cert.status}
                      </div>
                    </div>
                  </div>

                  {/* Certificate Name */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 leading-relaxed">
                    {cert.name}
                  </h3>

                  {/* Skills Gained */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                      Skills Validated
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
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

                  {/* View Certificate Button */}
                  <motion.a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${cert.gradient} text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300`}
                  >
                    <FaExternalLinkAlt />
                    <span>View Certificate</span>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </motion.a>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="card p-8 text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Certification Achievements</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Total Certifications", value: certificationsData.length.toString(), icon: FaCertificate, color: "text-yellow-400" },
              { label: "Cloud Computing", value: "1", icon: FaCloud, color: "text-orange-400" },
              { label: "Security", value: "1", icon: FaShieldAlt, color: "text-red-400" },
              { label: "Web Development", value: "1", icon: FaCode, color: "text-blue-400" }
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

        {/* Future Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="card p-8 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-red-500/5"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Continuous Professional Development</h3>
              <p className="text-gray-300 text-lg mb-6">
                Committed to staying current with industry standards and emerging technologies 
                through continuous learning and professional certification programs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-medium">
                  AWS Solutions Architect
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium">
                  Kubernetes Administrator
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full font-medium">
                  DevOps Professional
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-medium">
                  Security Specialist
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}