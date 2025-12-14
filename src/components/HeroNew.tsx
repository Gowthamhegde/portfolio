import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { profile } from "../data/resume";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function HeroNew() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg shadow-cyan-500/50 hover:scale-110 transition-transform duration-300">
              <img 
                src={profile.profilePicture} 
                alt={profile.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-transparent" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <h2 className="text-2xl md:text-3xl text-cyan-300 mb-2">Hi, I'm</h2>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              {profile.name}
            </h1>
          </motion.div>
          
          <div className="text-3xl md:text-4xl text-gray-300 mb-8 h-24">
            <TypeAnimation
              sequence={[
                'Cloud Engineer',
                2000,
                'Web Developer',
                2000,
                'Cybersecurity Expert',
                2000,
                'AI/ML Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold"
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {profile.summary}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold text-lg shadow-lg shadow-cyan-500/50"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-transparent border-2 border-cyan-500 text-cyan-300 rounded-full font-semibold text-lg backdrop-blur-sm"
            >
              Contact Me
            </motion.a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-8"
          >
            {profile.socials.map((social, index) => (
              <motion.a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.3, 
                  rotate: 360,
                  boxShadow: "0 0 25px rgba(6, 182, 212, 0.8)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-cyan-500/20 transition-colors"
              >
                {social.label === "GitHub" ? (
                  <FaGithub className="w-8 h-8 text-cyan-300" />
                ) : social.label === "LinkedIn" ? (
                  <FaLinkedin className="w-8 h-8 text-cyan-300" />
                ) : (
                  <FaEnvelope className="w-8 h-8 text-cyan-300" />
                )}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20"
          >
            <motion.a
              href="#skills"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span className="text-sm font-semibold tracking-wider">SCROLL DOWN</span>
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
