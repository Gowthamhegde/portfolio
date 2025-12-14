import { motion } from "framer-motion";
import { FaAws, FaDocker, FaPython, FaReact, FaGitAlt, FaLinux, FaJs, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiJenkins, SiAnsible, SiMongodb, SiMysql, SiPostgresql, SiGradio } from "react-icons/si";

const skillCategories = [
  {
    title: "Cloud & DevOps",
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "AWS", icon: FaAws, level: 85 },
      { name: "Docker", icon: FaDocker, level: 80 },
      { name: "Kubernetes", icon: SiKubernetes, level: 75 },
      { name: "Terraform", icon: SiTerraform, level: 70 },
      { name: "Jenkins", icon: SiJenkins, level: 75 },
      { name: "Ansible", icon: SiAnsible, level: 65 }
    ]
  },
  {
    title: "Programming Languages",
    color: "from-blue-500 to-purple-600",
    skills: [
      { name: "Python", icon: FaPython, level: 90 },
      { name: "JavaScript", icon: FaJs, level: 85 },
      { name: "Java", icon: FaJava, level: 80 },
      { name: "HTML5", icon: FaHtml5, level: 95 },
      { name: "CSS3", icon: FaCss3Alt, level: 90 }
    ]
  },
  {
    title: "Frameworks & Tools",
    color: "from-green-500 to-teal-600",
    skills: [
      { name: "React", icon: FaReact, level: 85 },
      { name: "Git", icon: FaGitAlt, level: 90 },
      { name: "Linux", icon: FaLinux, level: 80 },
      { name: "Gradio", icon: SiGradio, level: 75 }
    ]
  },
  {
    title: "Databases",
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: 75 },
      { name: "MySQL", icon: SiMysql, level: 80 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 70 }
    ]
  }
];

export default function SkillsCloud() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text mb-6">Technical Skills</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across cloud platforms, 
            programming languages, and modern development tools.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold mb-6`}>
                {category.title}
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="text-2xl text-cyan-400 group-hover:text-white transition-colors" />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cloud Architecture Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 card p-8"
        >
          <h3 className="text-2xl font-bold text-center gradient-text mb-8">Cloud Architecture Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto">
                <FaAws className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white">AWS Services</h4>
              <p className="text-gray-400">EC2, S3, Lambda, RDS, VPC, IAM, CloudFormation</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <FaDocker className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white">Containerization</h4>
              <p className="text-gray-400">Docker, Kubernetes, Container Orchestration</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto">
                <SiTerraform className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white">Infrastructure as Code</h4>
              <p className="text-gray-400">Terraform, Ansible, CloudFormation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}