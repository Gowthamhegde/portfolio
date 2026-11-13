import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaAws, FaDocker, FaPython, FaReact, FaLinux } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiJenkins } from "react-icons/si";

const techIcons = [
  { Icon: FaAws, name: "AWS", delay: 0 },
  { Icon: FaDocker, name: "Docker", delay: 0.1 },
  { Icon: SiKubernetes, name: "Kubernetes", delay: 0.2 },
  { Icon: SiTerraform, name: "Terraform", delay: 0.3 },
  { Icon: SiJenkins, name: "Jenkins", delay: 0.4 },
  { Icon: FaPython, name: "Python", delay: 0.5 },
  { Icon: FaReact, name: "React", delay: 0.6 },
  { Icon: FaLinux, name: "Linux", delay: 0.7 },
];

export default function HeroAdvanced() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
                <span className="block">GOWTHAMA</span>
                <span className="block gradient-text">HEGDE</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl lg:text-2xl text-cyan-300 font-medium h-16"
            >
              <TypeAnimation
                sequence={[
                  'DevOps Engineer',
                  2000,
                  'Cloud Architect',
                  2000,
                  'AWS Specialist',
                  2000,
                  'Infrastructure Automation Expert',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-gray-300 leading-relaxed max-w-2xl"
            >
              Information Science student passionate about cloud computing, DevOps, and cybersecurity. 
              Experienced in designing scalable cloud infrastructure using AWS services and automation tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 text-gray-400"
            >
              <span>📧 gowthamhegde606@gmail.com</span>
              <span>📱 +91 7760190064</span>
              <span>📍 Bengaluru</span>
            </motion.div>
          </motion.div>

          {/* Right side - Tech stack visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Central profile image */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 p-1 z-10"
              >
                <img
                  src="/profilepic.jpg"
                  alt="Gowthama Hegde"
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>

              {/* Orbiting tech icons */}
              {techIcons.map(({ Icon, name, delay }, index) => {
                const angle = (index * 360) / techIcons.length;
                const radius = 120;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: delay + 0.8, duration: 0.5 }}
                    className="absolute w-16 h-16 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 group cursor-pointer"
                    style={{
                      left: `calc(50% + ${x}px - 32px)`,
                      top: `calc(50% + ${y}px - 32px)`,
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    <Icon className="text-2xl text-cyan-400 group-hover:text-white transition-colors" />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {name}
                    </span>
                  </motion.div>
                );
              })}

              {/* Rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-cyan-400/20 rounded-full"
                style={{ width: "280px", height: "280px", left: "calc(50% - 140px)", top: "calc(50% - 140px)" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-blue-400/20 rounded-full"
                style={{ width: "320px", height: "320px", left: "calc(50% - 160px)", top: "calc(50% - 160px)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}