import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch, FaCode, FaFire, FaRocket } from "react-icons/fa";
import { SiPython, SiJavascript, SiTypescript, SiDocker, SiGnubash } from "react-icons/si";

const githubStats = {
  username: "Gowthamhegde",
  totalRepos: 15,
  totalStars: 42,
  totalCommits: 387,
  totalPRs: 23,
  languages: [
    { name: "Python", percentage: 35, color: "#3776ab", icon: SiPython },
    { name: "JavaScript", percentage: 25, color: "#f7df1e", icon: SiJavascript },
    { name: "TypeScript", percentage: 20, color: "#3178c6", icon: SiTypescript },
    { name: "Shell", percentage: 10, color: "#89e051", icon: SiGnubash },
    { name: "Dockerfile", percentage: 10, color: "#2496ed", icon: SiDocker }
  ],
  recentActivity: [
    { action: "Pushed to", repo: "expense-tracker", time: "2 hours ago", type: "push" },
    { action: "Created", repo: "yolo-detection-app", time: "1 day ago", type: "create" },
    { action: "Starred", repo: "terraform-aws-modules", time: "3 days ago", type: "star" },
    { action: "Forked", repo: "kubernetes-examples", time: "1 week ago", type: "fork" }
  ]
};

export default function GitHubStats() {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'push': return <FaRocket className="text-green-400" />;
      case 'create': return <FaFire className="text-orange-400" />;
      case 'star': return <FaStar className="text-yellow-400" />;
      case 'fork': return <FaCodeBranch className="text-blue-400" />;
      default: return <FaGithub className="text-gray-400" />;
    }
  };

  return (
    <section id="github" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
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
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25">
                <FaGithub className="text-4xl text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-slate-900 animate-pulse"></div>
            </div>
            <div className="text-left">
              <h2 className="text-4xl font-bold gradient-text">GitHub Portfolio</h2>
              <p className="text-cyan-400 font-medium">@{githubStats.username}</p>
            </div>
          </motion.div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing my development journey through code, contributions, and collaboration
          </p>
        </motion.div>

        {/* Enhanced GitHub Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { 
              label: "Repositories", 
              value: githubStats.totalRepos, 
              icon: FaGithub, 
              gradient: "from-gray-500 to-gray-700",
              glowColor: "shadow-gray-500/25",
              description: "Public repos"
            },
            { 
              label: "Total Stars", 
              value: githubStats.totalStars, 
              icon: FaStar, 
              gradient: "from-yellow-400 to-orange-500",
              glowColor: "shadow-yellow-500/25",
              description: "Community love"
            },
            { 
              label: "Commits", 
              value: githubStats.totalCommits, 
              icon: FaCode, 
              gradient: "from-green-400 to-emerald-600",
              glowColor: "shadow-green-500/25",
              description: "Lines of code"
            },
            { 
              label: "Pull Requests", 
              value: githubStats.totalPRs, 
              icon: FaCodeBranch, 
              gradient: "from-blue-400 to-purple-600",
              glowColor: "shadow-blue-500/25",
              description: "Contributions"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="relative group cursor-pointer"
            >
              <div className="card p-8 text-center h-full relative overflow-hidden border-2 border-transparent group-hover:border-cyan-400/30 transition-all duration-300">
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-300`}></div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
                
                {/* Icon with Enhanced Glow */}
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl ${stat.glowColor} transition-all duration-300`}
                  >
                    <stat.icon className="text-3xl text-white" />
                  </motion.div>
                  
                  {/* Animated Counter */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + 0.3,
                      type: "spring"
                    }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300"
                  >
                    {stat.value}
                  </motion.div>
                  
                  <div className="text-white font-semibold text-lg mb-2">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Language Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
            
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <FaCode className="text-white" />
              </div>
              Programming Languages
            </h3>
            
            <div className="space-y-6">
              {githubStats.languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <lang.icon 
                        className="text-2xl group-hover:scale-110 transition-transform duration-300" 
                        style={{ color: lang.color }}
                      />
                      <span className="text-white font-semibold text-lg">{lang.name}</span>
                    </div>
                    <span className="text-gray-400 font-medium">{lang.percentage}%</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full rounded-full relative overflow-hidden"
                        style={{ backgroundColor: lang.color }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8 relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
            
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center">
                <FaGithub className="text-white" />
              </div>
              Recent Activity
            </h3>
            
            <div className="space-y-4">
              {githubStats.recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-all duration-300 border border-transparent hover:border-cyan-400/20"
                >
                  <div className="flex-shrink-0">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-gray-300">
                      <span className="text-white font-medium">{activity.action}</span>{" "}
                      <span className="text-cyan-400 font-semibold">{activity.repo}</span>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm whitespace-nowrap">{activity.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href={`https://github.com/${githubStats.username}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 border border-gray-700 hover:border-cyan-400/50"
          >
            <FaGithub className="text-2xl" />
            <span>Explore My GitHub</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-cyan-400"
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}