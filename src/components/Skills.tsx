import { motion } from "framer-motion";
import { skills } from "../data/resume";
import { FaCode, FaTools, FaCloud, FaUsers, FaPython, FaAws, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiJenkins, SiMongodb, SiMysql, SiNumpy, SiPandas, SiOpencv } from "react-icons/si";

const getSkillIcon = (skill: string) => {
  const skillLower = skill.toLowerCase();
  if (skillLower.includes('python')) return FaPython;
  if (skillLower.includes('aws')) return FaAws;
  if (skillLower.includes('docker')) return FaDocker;
  if (skillLower.includes('kubernetes')) return SiKubernetes;
  if (skillLower.includes('terraform')) return SiTerraform;
  if (skillLower.includes('jenkins')) return SiJenkins;
  if (skillLower.includes('github')) return FaGitAlt;
  if (skillLower.includes('mongodb')) return SiMongodb;
  if (skillLower.includes('mysql')) return SiMysql;
  if (skillLower.includes('numpy')) return SiNumpy;
  if (skillLower.includes('pandas')) return SiPandas;
  if (skillLower.includes('opencv')) return SiOpencv;
  return FaCode; // default
};

const skillCategories = [
  {
    title: "Programming Languages",
    icon: FaCode,
    skills: skills.programming,
    gradient: "from-blue-500 to-purple-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    description: "Core programming languages I use daily"
  },
  {
    title: "Libraries & Frameworks", 
    icon: FaTools,
    skills: skills.libraries,
    gradient: "from-green-500 to-teal-600",
    bgColor: "bg-green-500/10", 
    borderColor: "border-green-500/30",
    description: "Powerful tools for rapid development"
  },
  {
    title: "DevOps & Cloud Tools",
    icon: FaCloud,
    skills: skills.tools,
    gradient: "from-orange-500 to-red-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30", 
    description: "Infrastructure and deployment technologies"
  },
  {
    title: "Professional Skills",
    icon: FaUsers,
    skills: skills.soft,
    gradient: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    description: "Essential soft skills for collaboration"
  }
];

const skillLevels = {
  "Python": 90,
  "Java": 85,
  "SQL": 80,
  "C": 75,
  "AWS": 85,
  "Linux": 80,
  "GitHub": 90,
  "Docker": 75,
  "Kubernetes": 70,
  "Terraform": 65,
  "Jenkins": 70,
  "Ansible": 60,
  "NumPy": 85,
  "Pandas": 80,
  "YOLO": 75,
  "Ultralytics": 70,
  "OpenCV": 75
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-6"
          >
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/25">
                <FaCode className="text-4xl text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-slate-900 animate-pulse"></div>
            </div>
            <div className="text-left">
              <h2 className="text-4xl font-bold gradient-text">Skills & Expertise</h2>
              <p className="text-cyan-400 font-medium">Technical Proficiencies</p>
            </div>
          </motion.div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies I work with daily
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: categoryIndex * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card p-8 relative overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-60"
                    style={{
                      left: `${10 + i * 20}%`,
                      top: `${10 + i * 15}%`,
                    }}
                    animate={{
                      y: [-10, -30, -10],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>

              {/* Header */}
              <div className="relative z-10 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <category.icon className="text-2xl text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="relative z-10 grid grid-cols-1 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = getSkillIcon(skill);
                  const level = skillLevels[skill as keyof typeof skillLevels] || 70;
                  
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <IconComponent className="text-xl text-cyan-400 group-hover/skill:scale-110 transition-transform duration-300" />
                          <span className="text-white font-medium">{skill}</span>
                        </div>
                        <span className="text-gray-400 text-sm font-medium">{level}%</span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${level}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full relative overflow-hidden`}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                            <motion.div
                              animate={{ x: [-20, 100, -20] }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                ease: "linear" 
                              }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-8"
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="card p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Technical Proficiency Overview</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Programming", level: "Expert", percentage: 85, color: "text-blue-400" },
              { label: "Cloud & DevOps", level: "Advanced", percentage: 75, color: "text-orange-400" },
              { label: "Frameworks", level: "Proficient", percentage: 80, color: "text-green-400" },
              { label: "Collaboration", level: "Expert", percentage: 90, color: "text-purple-400" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-slate-700"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeLinecap="round"
                      className={skill.color}
                      initial={{ strokeDasharray: "0 251.2" }}
                      whileInView={{ 
                        strokeDasharray: `${(skill.percentage / 100) * 251.2} 251.2` 
                      }}
                      transition={{ duration: 2, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-xl font-bold ${skill.color}`}>
                      {skill.percentage}%
                    </span>
                  </div>
                </div>
                <div className="text-white font-semibold mb-1">{skill.label}</div>
                <div className="text-gray-400 text-sm">{skill.level}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}