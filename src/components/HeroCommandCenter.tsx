import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroCommandCenter() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Initializing cloud infrastructure...\nStarting kubernetes cluster...\nDeploying application pods...\nConnection established.";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 overflow-hidden bg-bg">
      {/* Background Mesh Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aws/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-k8s/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Column: Title & Main Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-aws/30 bg-aws/10 text-aws text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-aws animate-pulse" />
            SYSTEM OPERATIONAL
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 tracking-tight">
            CLOUD <br />
            <span className="gradient-text-aws">ARCHITECT</span> <br />
            <span className="text-4xl md:text-5xl text-subtext">& DevOps Engineer</span>
          </h1>
          
          <p className="text-subtext mb-8 max-w-lg text-lg border-l-2 border-k8s pl-4 font-mono text-sm">
            Gouthama Hegde. Specializing in AWS cloud solutions, modern web technologies, and automated deployment pipelines.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="btn-command">
              VIEW ARCHITECTURE
            </button>
            <button className="btn-k8s">
              ACCESS REPOSITORIES
            </button>
          </div>
        </motion.div>

        {/* Right Column: Terminal & Status Dashboard */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-2xl"
        >
          <div className="glass-panel p-1">
            <div className="terminal-window h-80 flex flex-col">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-subtext text-xs">root@aws-us-east-1:~</span>
              </div>
              <div className="p-4 flex-grow overflow-hidden font-mono text-terminal text-sm opacity-90 leading-relaxed whitespace-pre-wrap">
                <span className="text-k8s">$ </span> ./deploy.sh production
                <br />
                {typedText}
                <span className="animate-pulse inline-block w-2 h-4 bg-terminal ml-1 align-middle" />
              </div>
            </div>
          </div>
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 mt-4">
             <div className="glass-panel p-4 flex flex-col items-center">
                <span className="text-aws text-2xl font-bold">99.9%</span>
                <span className="text-xs text-subtext font-mono uppercase mt-1">Uptime</span>
             </div>
             <div className="glass-panel p-4 flex flex-col items-center">
                <span className="text-k8s text-2xl font-bold">14</span>
                <span className="text-xs text-subtext font-mono uppercase mt-1">Active Pods</span>
             </div>
             <div className="glass-panel p-4 flex flex-col items-center">
                <span className="text-terminal text-2xl font-bold">32ms</span>
                <span className="text-xs text-subtext font-mono uppercase mt-1">Latency</span>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
