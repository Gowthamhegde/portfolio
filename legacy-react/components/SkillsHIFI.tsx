import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js', icon: '⚛️', progress: 95, color: '#00d8ff' },
  { name: 'Next.js', icon: 'N', progress: 90, color: '#ffffff' },
  { name: 'Node.js', icon: '🟢', progress: 85, color: '#339933' },
  { name: 'UI/UX Design', icon: '🎨', progress: 80, color: '#ff007f' },
  { name: 'TypeScript', icon: 'TS', progress: 92, color: '#3178c6' },
  { name: 'AWS', icon: '☁️', progress: 75, color: '#ff9900' },
];

export default function SkillsHIFI() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-primary font-mono tracking-widest mb-2 uppercase text-sm font-semibold">
            Hero Section (Continued)
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold">TECHNICAL SKILLS</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-panel p-6 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)` }}
              />
              
              <div className="text-4xl mb-4 z-10" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h4 className="text-lg font-bold mb-4 z-10">{skill.name}</h4>
              
              <div className="w-full bg-bg rounded-full h-1.5 mb-1 z-10 overflow-hidden relative">
                <div 
                  className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${skill.progress}%`,
                    backgroundColor: skill.color,
                    boxShadow: `0 0 10px ${skill.color}`
                  }}
                />
              </div>
              <div className="w-full flex justify-between text-xs text-subtext font-mono z-10">
                <span>PROGRESS</span>
                <span>{skill.progress}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
