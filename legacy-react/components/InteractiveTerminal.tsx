import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const commands = {
  help: "Available commands: aws, docker, kubectl, terraform, git, clear, whoami",
  whoami: "gowthama@devops-engineer",
  aws: "AWS CLI v2.0 - Services: EC2, S3, Lambda, RDS, VPC configured ✅",
  docker: "Docker version 20.10.8 - Containers: 3 running, 5 stopped",
  kubectl: "Kubernetes v1.21 - Cluster: production (3 nodes ready)",
  terraform: "Terraform v1.0.0 - Infrastructure: AWS (12 resources managed)",
  git: "Git version 2.34.1 - Repository: portfolio-infrastructure.git",
  clear: "CLEAR_TERMINAL",
  "ls -la": `
drwxr-xr-x  8 gowthama staff   256 Dec 14 21:30 .
drwxr-xr-x  3 gowthama staff    96 Dec 14 21:30 ..
-rw-r--r--  1 gowthama staff  1024 Dec 14 21:30 docker-compose.yml
-rw-r--r--  1 gowthama staff   512 Dec 14 21:30 Dockerfile
-rw-r--r--  1 gowthama staff  2048 Dec 14 21:30 main.tf
-rw-r--r--  1 gowthama staff   256 Dec 14 21:30 README.md`,
  "cat docker-compose.yml": `
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
  redis:
    image: redis:alpine
    ports:
      - "6379:6379"`,
  "terraform plan": "Plan: 3 to add, 1 to change, 0 to destroy.",
  "aws s3 ls": `
2023-12-14 21:30:45 my-portfolio-bucket
2023-12-14 21:30:45 my-terraform-state-bucket
2023-12-14 21:30:45 my-logs-bucket`
};

export default function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{type: 'command' | 'output', content: string}>>([
    { type: 'output', content: 'Welcome to Gowthama\'s DevOps Terminal! Type "help" for available commands.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    setHistory(prev => [...prev, { type: 'command', content: `$ ${cmd}` }]);
    
    if (trimmedCmd === 'clear') {
      setHistory([{ type: 'output', content: 'Terminal cleared. Type "help" for available commands.' }]);
      return;
    }

    const output = commands[trimmedCmd as keyof typeof commands] || `Command not found: ${cmd}. Type "help" for available commands.`;
    
    setIsTyping(true);
    setTimeout(() => {
      setHistory(prev => [...prev, { type: 'output', content: output }]);
      setIsTyping(false);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="card p-6 max-w-4xl mx-auto"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-400 text-sm ml-4">gowthama@devops-terminal</span>
      </div>
      
      <div 
        ref={terminalRef}
        className="bg-black rounded-lg p-4 h-80 overflow-y-auto font-mono text-sm"
      >
        {history.map((item, index) => (
          <div key={index} className={`mb-2 ${item.type === 'command' ? 'text-green-400' : 'text-gray-300'}`}>
            <pre className="whitespace-pre-wrap">{item.content}</pre>
          </div>
        ))}
        
        {isTyping && (
          <div className="text-gray-400 flex items-center gap-2">
            <span>Processing...</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-200"></div>
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-400"></div>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
          <span className="text-green-400">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-white outline-none"
            placeholder="Type a command..."
            autoFocus
          />
        </form>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-gray-400 text-sm">
          Try commands: <span className="text-cyan-400">aws</span>, <span className="text-cyan-400">docker</span>, <span className="text-cyan-400">kubectl</span>, <span className="text-cyan-400">terraform</span>
        </p>
      </div>
    </motion.div>
  );
}