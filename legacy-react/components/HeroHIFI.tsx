import { motion } from 'framer-motion';

export default function HeroHIFI() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Profile Image Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-end order-2 md:order-1"
        >
          <div className="relative">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full border-4 border-primary/50 shadow-glow-cyan animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full border-4 border-accent/50 shadow-glow-purple animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Image Placeholder */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-card overflow-hidden border-2 border-border relative z-10 p-2">
               <div className="w-full h-full rounded-full bg-bg flex items-center justify-center text-6xl">
                  👨‍💻
               </div>
            </div>
            
            {/* Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full whitespace-nowrap z-20 text-center"
            >
              <h2 className="text-xl font-bold text-white tracking-wider">ALEX RIVERA</h2>
              <p className="text-xs text-primary tracking-widest font-mono mt-1">FRONTEND & UI DEVELOPER</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content Column */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 order-1 md:order-2 text-center md:text-left pt-10 md:pt-0"
        >
          <h3 className="text-primary font-mono tracking-widest mb-4 uppercase text-sm font-semibold">
            Crafting Digital Experiences
          </h3>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            BUILDING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-subtext to-white text-glow">
              TOMORROW'S
            </span> <br />
            <span className="gradient-text">WEB</span>
          </h1>
          <p className="text-subtext mb-8 max-w-lg mx-auto md:mx-0 text-lg">
            I transform complex problems into elegant, modern, and highly performant web applications using cutting-edge technologies.
          </p>
          
          <div className="flex items-center justify-center md:justify-start gap-4">
            <button className="btn-hifi">
              VIEW PROJECTS
            </button>
            <button className="btn-hifi-outline flex items-center gap-2">
              <span className="text-xl">📄</span> RESUME
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
