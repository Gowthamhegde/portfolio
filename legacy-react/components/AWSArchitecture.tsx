import { motion } from "framer-motion";
import { FaAws, FaDatabase, FaServer, FaShieldAlt, FaCloud, FaNetworkWired } from "react-icons/fa";
import { SiAmazonec2, SiAmazons3, SiAwslambda } from "react-icons/si";

const architectureComponents = [
  {
    name: "Load Balancer",
    icon: FaNetworkWired,
    position: { x: 10, y: 20 },
    description: "Application Load Balancer for high availability",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "EC2 Instances",
    icon: SiAmazonec2,
    position: { x: 30, y: 40 },
    description: "Auto-scaling web servers",
    color: "from-blue-500 to-purple-500"
  },
  {
    name: "RDS Database",
    icon: FaDatabase,
    position: { x: 70, y: 60 },
    description: "MySQL RDS with Multi-AZ deployment",
    color: "from-green-500 to-teal-500"
  },
  {
    name: "S3 Storage",
    icon: SiAmazons3,
    position: { x: 80, y: 20 },
    description: "Static assets and backups",
    color: "from-yellow-500 to-orange-500"
  },
  {
    name: "Lambda Functions",
    icon: SiAwslambda,
    position: { x: 50, y: 70 },
    description: "Serverless processing",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "CloudFront CDN",
    icon: FaCloud,
    position: { x: 10, y: 60 },
    description: "Global content delivery",
    color: "from-cyan-500 to-blue-500"
  }
];

const connections = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 1, to: 4 },
  { from: 3, to: 5 },
  { from: 4, to: 2 }
];

export default function AWSArchitecture() {
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
          <h2 className="section-title gradient-text mb-6">AWS Cloud Architecture</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interactive visualization of scalable, secure cloud infrastructure designs
          </p>
        </motion.div>

        <div className="card p-8 mb-12">
          <div className="relative h-96 bg-slate-900 rounded-lg overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-10 grid-rows-8 h-full">
                {Array.from({ length: 80 }).map((_, i) => (
                  <div key={i} className="border border-gray-700"></div>
                ))}
              </div>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full">
              {connections.map((connection, index) => {
                const from = architectureComponents[connection.from];
                const to = architectureComponents[connection.to];
                return (
                  <motion.line
                    key={index}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    x1={`${from.position.x}%`}
                    y1={`${from.position.y}%`}
                    x2={`${to.position.x}%`}
                    y2={`${to.position.y}%`}
                    stroke="#06b6d4"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                );
              })}
            </svg>

            {/* Architecture Components */}
            {architectureComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="absolute group cursor-pointer"
                style={{
                  left: `${component.position.x}%`,
                  top: `${component.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                whileHover={{ scale: 1.2 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${component.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <component.icon className="text-2xl text-white" />
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-slate-800 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap border border-cyan-400/30">
                    <div className="font-semibold">{component.name}</div>
                    <div className="text-gray-300">{component.description}</div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* AWS Logo */}
            <div className="absolute top-4 right-4">
              <FaAws className="text-4xl text-orange-500" />
            </div>
          </div>
        </div>

        {/* Architecture Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: "Availability", value: "99.9%", icon: FaShieldAlt, color: "text-green-400" },
            { label: "Auto Scaling", value: "2-10 instances", icon: FaServer, color: "text-blue-400" },
            { label: "Data Backup", value: "Daily", icon: FaDatabase, color: "text-purple-400" },
            { label: "Global CDN", value: "15+ regions", icon: FaCloud, color: "text-cyan-400" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center hover:scale-105 transition-all duration-300"
            >
              <stat.icon className={`text-3xl ${stat.color} mx-auto mb-3`} />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}