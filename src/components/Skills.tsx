import { useState } from "react";
import { skills } from "../data/resume";
import { FaCode, FaTools, FaCloud, FaUsers, FaPython, FaAws, FaDocker, FaGitAlt, FaCheckCircle, FaArrowRight, FaPlay } from "react-icons/fa";
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
  if (skillLower.includes('react')) return SiReact;
  if (skillLower.includes('javascript')) return SiJavascript;
  return FaCode; // default
};

const skillCategories = [
  {
    title: "Programming Languages",
    icon: FaCode,
    skills: skills.programming,
    gradient: "from-blue-500 to-purple-600",
    description: "Core programming languages I use daily"
  },
  {
    title: "Libraries & Frameworks", 
    icon: FaTools,
    skills: skills.libraries,
    gradient: "from-green-500 to-teal-600",
    description: "Powerful tools for rapid development"
  },
  {
    title: "DevOps & Cloud Tools",
    icon: FaCloud,
    skills: skills.tools,
    gradient: "from-orange-500 to-red-600",
    description: "Infrastructure and deployment technologies"
  },
  {
    title: "Professional Skills",
    icon: FaUsers,
    skills: skills.soft,
    gradient: "from-purple-500 to-pink-600",
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <FaCode className="text-2xl text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-4xl font-bold gradient-text">Skills & Expertise</h2>
              <p className="text-cyan-400 font-medium">Technical Proficiencies</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies I work with daily
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="card group"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center`}>
                    <category.icon className="text-xl text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => {
                  const IconComponent = getSkillIcon(skill);
                  
                  return (
                    <div
                      key={skill}
                      className="group/skill"
                    >
                      <div className="flex items-center gap-2 p-2.5 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300 border border-transparent hover:border-cyan-400/20">
                        <IconComponent className="text-lg text-cyan-400 flex-shrink-0" />
                        <span className="text-white font-medium text-sm truncate">{skill}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CI/CD Pipeline */}
        <div className="card p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">CI/CD Pipeline Workflow</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Automated development workflow from code commit to production deployment
            </p>
            
            {/* Start Pipeline Button */}
            <button
              onClick={runPipeline}
              disabled={pipelineRunning}
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
            </button>
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
                    <div
                      className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-r ${stage.color} flex items-center justify-center mb-4 shadow-lg transition-all duration-300 relative ${
                        isActive ? 'ring-4 ring-cyan-400 ring-opacity-50' : ''
                      }`}
                    >
                      <stage.icon className="text-xl lg:text-2xl text-white" />
                      
                      {/* Completion Check */}
                      {isCompleted && (
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-slate-900">
                          <FaCheckCircle className="text-white text-sm" />
                        </div>
                      )}
                    </div>

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
                      <div className="hidden lg:block absolute top-8 left-full ml-4">
                        <FaArrowRight className={`text-xl transition-colors duration-300 ${
                          isCompleted ? 'text-green-400' : 'text-cyan-400'
                        }`} />
                      </div>
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
                <div
                  key={index}
                  className="bg-slate-800/30 p-6 rounded-lg text-center hover:bg-slate-800/50 transition-all duration-300"
                >
                  <benefit.icon className={`text-3xl ${benefit.color} mx-auto mb-4`} />
                  <h4 className="text-lg font-semibold text-white mb-3">{benefit.title}</h4>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}