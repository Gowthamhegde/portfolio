import { motion } from "framer-motion";
import { profile } from "../data/resume";

export default function Hero() {
  return (
    <section id="about" className="min-h-[90vh] flex items-center py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.5,
              delay: 0.2 
            }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg shadow-primary/20">
              <img 
                src={profile.profilePicture} 
                alt={profile.name} 
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"
              />
            </div>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            {profile.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-subtext mb-8">
            {profile.title}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {profile.summary}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-transparent border border-white/20 rounded-lg font-medium"
            >
              Contact Me
            </motion.a>
          </div>
          
          <div className="mt-6 flex justify-center gap-4">
            {profile.socials.map((social, index) => (
              <motion.a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-primary hover:text-accent transition-colors"
              >
                {social.label === "GitHub" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                ) : social.label === "LinkedIn" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                )}
              </motion.a>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <a href="#skills" className="text-3xl opacity-50 hover:opacity-100">
                ↓
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}