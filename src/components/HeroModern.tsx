import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { profile } from "../data/resume";
import { Suspense, lazy } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero3DSimple = lazy(() => import("./Hero3DSimple"));

export default function HeroModern() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* 3D Model Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <Suspense fallback={
              <div className="w-full h-[400px] flex items-center justify-center">
                <div className="w-32 h-32 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            }>
              <Hero3DSimple />
            </Suspense>
          </motion.div>
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 flex justify-center lg:justify-start"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform duration-300">
                <img 
                  src={profile.profilePicture} 
                  alt={profile.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-transparent" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4"
            >
              <h2 className="text-2xl md:text-3xl text-purple-300 mb-2">Hi, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {profile.name}
              </h1>
            </motion.div>
            
            <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-20">
              <TypeAnimation
                sequence={[
                  'Cloud Engineer',
                  2000,
                  'Web Developer',
                  2000,
                  'Cybersecurity Enthusiast',
                  2000,
                  'AI/ML Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold"
              />
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {profile.summary}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-lg"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-300 rounded-full font-semibold backdrop-blur-sm"
              >
                Contact Me
              </motion.a>
            </motion.div>
            
            {/* Floating Social Icons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-6"
            >
              {profile.socials.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-purple-500/20 transition-colors"
                >
                  {social.label === "GitHub" ? (
                    <FaGithub className="w-6 h-6 text-purple-300" />
                  ) : social.label === "LinkedIn" ? (
                    <FaLinkedin className="w-6 h-6 text-purple-300" />
                  ) : (
                    <FaEnvelope className="w-6 h-6 text-purple-300" />
                  )}
                </motion.a>
              ))}
            </motion.div>
            
            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16 flex justify-center lg:justify-start"
            >
              <motion.a
                href="#skills"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="flex flex-col items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span className="text-sm">Scroll Down</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
