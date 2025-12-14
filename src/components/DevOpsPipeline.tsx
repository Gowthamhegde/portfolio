import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaDocker, FaAws, FaCheckCircle, FaSpinner, FaTimesCircle } from "react-icons/fa";
import { SiJenkins, SiTerraform, SiKubernetes } from "react-icons/si";

type PipelineStatus = 'idle' | 'running' | 'success' | 'failed';

const pipelineStages = [
  {
    name: "Source Code",
    icon: FaGithub,
    description: "Git repository with latest changes",
    duration: 1000,
    color: "from-gray-600 to-gray-800"
  },
  {
    name: "Build & Test",
    icon: SiJenkins,
    description: "Jenkins CI/CD pipeline execution",
    duration: 3000,
    color: "from-blue-500 to-blue-700"
  },
  {
    name: "Containerize",
    icon: FaDocker,
    description: "Docker image build and push",
    duration: 2000,
    color: "from-cyan-500 to-cyan-700"
  },
  {
    name: "Infrastructure",
    icon: SiTerraform,
    description: "Terraform infrastructure provisioning",
    duration: 2500,
    color: "from-purple-500 to-purple-700"
  },
  {
    name: "Deploy",
    icon: SiKubernetes,
    description: "Kubernetes deployment",
    duration: 1500,
    color: "from-green-500 to-green-700"
  },
  {
    name: "Production",
    icon: FaAws,
    description: "Live on AWS infrastructure",
    duration: 1000,
    color: "from-orange-500 to-orange-700"
  }
];

export default function DevOpsPipeline() {
  const [currentStage, setCurrentStage] = useState(-1);
  const [stageStatuses, setStageStatuses] = useState<PipelineStatus[]>(
    new Array(pipelineStages.length).fill('idle')
  );
  const [isRunning, setIsRunning] = useState(false);

  const runPipeline = async () => {
    setIsRunning(true);
    setCurrentStage(0);
    setStageStatuses(new Array(pipelineStages.length).fill('idle'));

    for (let i = 0; i < pipelineStages.length; i++) {
      setCurrentStage(i);
      setStageStatuses(prev => {
        const newStatuses = [...prev];
        newStatuses[i] = 'running';
        return newStatuses;
      });

      // Simulate stage execution
      await new Promise(resolve => setTimeout(resolve, pipelineStages[i].duration));

      // Random success/failure (90% success rate)
      const success = Math.random() > 0.1;
      
      setStageStatuses(prev => {
        const newStatuses = [...prev];
        newStatuses[i] = success ? 'success' : 'failed';
        return newStatuses;
      });

      if (!success) {
        setIsRunning(false);
        setCurrentStage(-1);
        return;
      }
    }

    setIsRunning(false);
    setCurrentStage(-1);
  };

  const getStatusIcon = (status: PipelineStatus) => {
    switch (status) {
      case 'running':
        return <FaSpinner className="animate-spin text-blue-400" />;
      case 'success':
        return <FaCheckCircle className="text-green-400" />;
      case 'failed':
        return <FaTimesCircle className="text-red-400" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text mb-6">DevOps CI/CD Pipeline</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Automated deployment pipeline from code commit to production
          </p>
          
          <motion.button
            onClick={runPipeline}
            disabled={isRunning}
            whileHover={{ scale: isRunning ? 1 : 1.05 }}
            whileTap={{ scale: isRunning ? 1 : 0.95 }}
            className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
              isRunning 
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-green-500 to-teal-600 text-white hover:shadow-lg hover:shadow-green-500/25'
            }`}
          >
            {isRunning ? 'Pipeline Running...' : 'Run Pipeline'}
          </motion.button>
        </motion.div>

        <div className="card p-8">
          <div className="relative">
            {/* Pipeline Flow */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              {pipelineStages.map((stage, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Stage Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${stage.color} flex items-center justify-center mb-4 ${
                      currentStage === index ? 'ring-4 ring-cyan-400 ring-opacity-50' : ''
                    }`}
                  >
                    <stage.icon className="text-2xl text-white" />
                    
                    {/* Status Indicator */}
                    <div className="absolute -top-2 -right-2">
                      {getStatusIcon(stageStatuses[index])}
                    </div>
                  </motion.div>

                  {/* Stage Info */}
                  <div className="text-center max-w-32">
                    <h3 className="text-white font-semibold mb-1">{stage.name}</h3>
                    <p className="text-gray-400 text-xs">{stage.description}</p>
                  </div>

                  {/* Arrow */}
                  {index < pipelineStages.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-8">
                      <svg className="w-full h-4" viewBox="0 0 32 16" fill="none">
                        <path
                          d="M24 8L32 8M32 8L28 4M32 8L28 12"
                          stroke="#06b6d4"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <line
                          x1="0"
                          y1="8"
                          x2="24"
                          y2="8"
                          stroke="#06b6d4"
                          strokeWidth="2"
                          strokeDasharray="4,4"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Pipeline Metrics */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {[
                { label: "Success Rate", value: "94.2%", color: "text-green-400" },
                { label: "Avg Deploy Time", value: "8.5 min", color: "text-blue-400" },
                { label: "Daily Deployments", value: "12", color: "text-purple-400" },
                { label: "Rollback Time", value: "< 2 min", color: "text-cyan-400" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-slate-800/50 rounded-lg"
                >
                  <div className={`text-2xl font-bold ${metric.color} mb-1`}>{metric.value}</div>
                  <div className="text-gray-400 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Pipeline Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Automated Testing",
              description: "Unit tests, integration tests, and security scans run automatically",
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
              title: "Zero Downtime",
              description: "Blue-green deployments ensure continuous availability",
              icon: FaAws,
              color: "text-orange-400"
            }
          ].map((benefit, index) => (
            <div key={index} className="card p-6 text-center hover:scale-105 transition-all duration-300">
              <benefit.icon className={`text-4xl ${benefit.color} mx-auto mb-4`} />
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}