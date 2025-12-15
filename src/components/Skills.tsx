import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/resume";
import { FaCode, FaTools, FaCloud, FaUsers, FaPython, FaAws, FaDocker, FaGitAlt, FaCheckCircle, FaArrowRight, FaPlay, FaRocket, FaStar, FaLightbulb, FaDatabase, FaCogs, FaServer } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiJenkins, SiMongodb, SiMysql, SiNumpy, SiPandas, SiOpencv, SiReact, SiJavascript } from "react-icons/si";

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

const cicdPipeline = [
  {
    name: "Code",
    icon: FaGitAlt,
    description: "Version Control",
    color: "from-gray-600 to-gray-800"
  },
  {
    name: "Build",
    icon: SiJenkins,
    description: "CI/CD Pipeline",
    color: "from-blue-500 to-blue-700"
  },
  {
    name: "Test",
    icon: FaCheckCircle,
    description: "Automated Testing",
    color: "from-green-500 to-green-700"
  },
  {
    name: "Package",
    icon: FaDocker,
    description: "Containerization",
    color: "from-cyan-500 to-cyan-700"
  },
  {
    name: "Deploy",
    icon: SiKubernetes,
    description: "Orchestration",
    color: "from-purple-500 to-purple-700"
  },
  {
    name: "Monitor",
    icon: FaAws,
    description: "Cloud Infrastructure",
    color: "from-orange-500 to-orange-700"
  }
];

export default function Skills() {
  const [pipelineRunning, setPipelineRunning] = useState(false);
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const runPipeline = async () => {
    setPipelineRunning(true);
    setCompletedStages([]);

    for (let i = 0; i < cicdPipeline.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setCompletedStages(prev => [...prev, i]);
    }

    setTimeout(() => {
      setPipelineRunning(false);
    }, 1000);
  };

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
          className="text-center mb-16 relative"
        >
          {/* Floating Tech Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[
              { icon: FaPython, position: { top: '10%', left: '15%' }, delay: 0, color: 'text-yellow-400' },
              { icon: SiReact, position: { top: '20%', right: '20%' }, delay: 0.5, color: 'text-blue-400' },
              { icon: FaAws, position: { bottom: '30%', left: '10%' }, delay: 1, color: 'text-orange-400' },
              { icon: SiKubernetes, position: { bottom: '20%', right: '15%' }, delay: 1.5, color: 'text-blue-500' },
              { icon: FaDocker, position: { top: '40%', left: '5%' }, delay: 2, color: 'text-cyan-400' },
              { icon: SiJavascript, position: { top: '50%', right: '8%' }, delay: 2.5, color: 'text-yellow-500' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`absolute ${item.color} opacity-20`}
                style={item.position}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 0.2, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 10, -10, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay
                }}
              >
                <item.icon className="text-3xl" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-6 relative z-10"
          >
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/25">
                <FaCode className="text-4xl text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-slate-900 animate-pulse"></div>
              
              {/* Orbiting Icons */}
              <div className="absolute inset-0">
                {[FaDatabase, FaCogs, FaServer].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-8 h-8 bg-slate-800/80 rounded-full flex items-center justify-center"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8 + index * 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: `${30 + index * 10}px 0px`,
                      transform: `translate(-50%, -50%) rotate(${index * 120}deg)`,
                    }}
                  >
                    <Icon className="text-cyan-400 text-sm" />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="text-left">
              <h2 className="text-4xl font-bold gradient-text">Skills & Expertise</h2>
              <motion.p 
                className="text-cyan-400 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.span
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%]"
                >
                  Technical Proficiencies
                </motion.span>
              </motion.p>
            </div>
          </motion.div>

          {/* Skill Tags Cloud */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-8 max-w-4xl mx-auto"
          >
            {['Full-Stack', 'DevOps', 'Cloud Native', 'AI/ML', 'Microservices', 'Automation'].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-full text-sm text-gray-300 border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
          
          {/* Interactive Stats */}
          <div className="flex justify-center gap-8 mb-8">
            {[
              { icon: FaRocket, label: "Years Experience", value: "3+", color: "text-blue-400" },
              { icon: FaStar, label: "Technologies", value: "20+", color: "text-yellow-400" },
              { icon: FaLightbulb, label: "Projects Built", value: "15+", color: "text-green-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-2 mx-auto hover:bg-slate-700/50 transition-all duration-300">
                  <stat.icon className={`text-2xl ${stat.color}`} />
                </div>
                <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

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
              className="card p-6 relative overflow-hidden group"
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
              <div className="relative z-10 mb-6">
                <div className="flex items-center gap-4 mb-3">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <category.icon className="text-xl text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-xs">{category.description}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                      {category.skills.length}
                    </div>
                    <div className="text-gray-500 text-xs">Skills</div>
                  </div>
                </div>
              </div>

              {/* Skills Grid - Optimized Layout */}
              <div className="relative z-10 grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = getSkillIcon(skill);
                  
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.03 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group/skill"
                    >
                      <div className="flex items-center gap-2 p-2.5 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300 border border-transparent hover:border-cyan-400/20">
                        <IconComponent className="text-lg text-cyan-400 group-hover/skill:scale-110 transition-transform duration-300 flex-shrink-0" />
                        <span className="text-white font-medium text-sm truncate">{skill}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Skill Category Stats */}
              <div className="relative z-10 mt-6 pt-4 border-t border-slate-700/50">
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                    <span className="text-gray-400">Proficiency Level</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: categoryIndex * 0.1 + i * 0.05 }}
                        viewport={{ once: true }}
                        className={`w-2 h-2 rounded-full ${
                          i < 4 ? `bg-gradient-to-r ${category.gradient}` : 'bg-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CI/CD Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="card p-8"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">CI/CD Pipeline Workflow</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Automated development workflow from code commit to production deployment
            </p>
            
            {/* Start Pipeline Button */}
            <motion.button
              onClick={runPipeline}
              disabled={pipelineRunning}
              whileHover={{ scale: pipelineRunning ? 1 : 1.05 }}
              whileTap={{ scale: pipelineRunning ? 1 : 0.95 }}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                pipelineRunning 
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-green-500 to-teal-600 text-white hover:shadow-lg hover:shadow-green-500/25'
              }`}
            >
              <div className="flex items-center gap-3">
                <FaPlay className={`${pipelineRunning ? 'animate-spin' : ''}`} />
                {pipelineRunning ? 'Pipeline Running...' : 'Start Pipeline Demo'}
              </div>
            </motion.button>
          </div>

          <div className="relative">
            {/* Pipeline Flow */}
            <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8">
              {cicdPipeline.map((stage, index) => {
                const isCompleted = completedStages.includes(index);
                const isActive = pipelineRunning && completedStages.length === index;
                
                return (
                  <div key={index} className="flex flex-col items-center relative">
                    {/* Stage Icon */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-r ${stage.color} flex items-center justify-center mb-4 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                        isActive ? 'ring-4 ring-cyan-400 ring-opacity-50 animate-pulse' : ''
                      }`}
                    >
                      <stage.icon className="text-xl lg:text-2xl text-white" />
                      
                      {/* Completion Check */}
                      {isCompleted && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-slate-900"
                        >
                          <FaCheckCircle className="text-white text-sm" />
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Stage Info */}
                    <div className="text-center max-w-24 lg:max-w-32">
                      <h4 className={`font-semibold text-sm lg:text-base mb-1 transition-colors duration-300 ${
                        isCompleted ? 'text-green-400' : isActive ? 'text-cyan-400' : 'text-white'
                      }`}>
                        {stage.name}
                      </h4>
                      <p className="text-gray-400 text-xs">{stage.description}</p>
                    </div>

                    {/* Arrow */}
                    {index < cicdPipeline.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                        viewport={{ once: true }}
                        className="hidden lg:block absolute top-8 left-full ml-4"
                      >
                        <FaArrowRight className={`text-xl transition-colors duration-300 ${
                          isCompleted ? 'text-green-400' : 'text-cyan-400'
                        }`} />
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Pipeline Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {[
                {
                  title: "Automated Testing",
                  description: "Unit tests, integration tests, and security scans",
                  icon: FaCheckCircle,
                  color: "text-green-400"
                },
                {
                  title: "Infrastructure as Code",
                  description: "Terraform manages all infrastructure with version control",
                  icon: SiTerraform,
                  color: "text-purple-400"
                },
                {
                  title: "Container Orchestration",
                  description: "Kubernetes for scalable and reliable deployments",
                  icon: SiKubernetes,
                  color: "text-blue-400"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-slate-800/30 p-6 rounded-lg text-center hover:bg-slate-800/50 transition-all duration-300"
                >
                  <benefit.icon className={`text-3xl ${benefit.color} mx-auto mb-4`} />
                  <h4 className="text-lg font-semibold text-white mb-3">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}