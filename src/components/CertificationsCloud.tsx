import { motion } from "framer-motion";
import { FaAws, FaCertificate, FaCloud, FaShieldAlt, FaCode, FaDatabase } from "react-icons/fa";
import { SiKubernetes, SiDocker, SiTerraform } from "react-icons/si";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    status: "In Progress",
    description: "Comprehensive certification covering AWS cloud architecture, security, and best practices.",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"],
    icon: FaAws,
    gradient: "from-orange-500 to-red-600",
    progress: 75
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    status: "Planned",
    description: "Hands-on certification for Kubernetes cluster administration and orchestration.",
    skills: ["Kubernetes", "Container Orchestration", "Cluster Management", "Troubleshooting"],
    icon: SiKubernetes,
    gradient: "from-blue-500 to-purple-600",
    progress: 30
  },
  {
    title: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    status: "Planned",
    description: "Infrastructure as Code certification focusing on Terraform fundamentals and best practices.",
    skills: ["Infrastructure as Code", "Terraform", "Cloud Provisioning", "Automation"],
    icon: SiTerraform,
    gradient: "from-purple-500 to-pink-600",
    progress: 20
  }
];

const skillAreas = [
  {
    title: "Cloud Platforms",
    icon: FaCloud,
    skills: ["AWS", "Azure Fundamentals", "Google Cloud Basics"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "DevOps Tools",
    icon: FaCode,
    skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible"],
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Security",
    icon: FaShieldAlt,
    skills: ["Cloud Security", "IAM", "Network Security", "Penetration Testing"],
    gradient: "from-red-500 to-orange-500"
  },
  {
    title: "Databases",
    icon: FaDatabase,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "AWS RDS"],
    gradient: "from-purple-500 to-indigo-500"
  }
];

export default function CertificationsCloud() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text mb-6">Certifications & Learning Path</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My commitment to continuous learning and professional development in cloud computing, 
            DevOps, and modern software engineering practices.
          </p>
        </motion.div>

        {/* Certifications Progress */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:scale-105 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${cert.gradient} rounded-full flex items-center justify-center`}>
                  <cert.icon className="text-2xl text-white" />
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  cert.status === 'In Progress' 
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                    : cert.status === 'Completed'
                    ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                }`}>
                  {cert.status}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-cyan-400 text-sm mb-3">{cert.issuer}</p>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Progress</span>
                  <span>{cert.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${cert.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className={`h-full bg-gradient-to-r ${cert.gradient} rounded-full`}
                  />
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Key Skills</h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-slate-800 text-cyan-400 rounded text-xs border border-cyan-400/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Areas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="card p-8"
        >
          <h3 className="text-2xl font-bold text-center gradient-text mb-8">Core Competency Areas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${area.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="text-2xl text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{area.title}</h4>
                <div className="space-y-1">
                  {area.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-gray-400 text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Goals */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card p-8">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCertificate className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning Journey</h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              I'm committed to staying current with the latest technologies and industry best practices. 
              My learning path focuses on cloud-native technologies, DevOps automation, and security.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full text-sm">
                AWS Certifications
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm">
                Kubernetes
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full text-sm">
                DevOps Tools
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full text-sm">
                Security
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}