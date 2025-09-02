import { motion } from "framer-motion";
import { skills } from "../data/resume";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

// Colors for skill categories
const categoryColors = {
  "Programming": "#4158D0",
  "Libraries & Frameworks": "#C850C0",
  "Tools & Platforms": "#FFCC70",
  "Soft Skills": "#3EECAC"
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-bg to-bg/90">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <SkillCategory title="Programming" skills={skills.programming} />
          <SkillCategory title="Libraries & Frameworks" skills={skills.libraries} />
          <SkillCategory title="Tools & Platforms" skills={skills.tools} />
          <SkillCategory title="Soft Skills" skills={skills.soft} />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  const color = categoryColors[title as keyof typeof categoryColors] || "#4158D0";
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -3, boxShadow: `0 8px 15px -5px ${color}30` }}
      className="card p-6 relative overflow-hidden"
      style={{ borderLeft: `3px solid ${color}` }}
    >
      {/* Simple gradient line */}
      <div 
        className="absolute top-0 left-0 w-full h-1 opacity-50"
        style={{ background: color }}
      />
      
      <motion.h3 
        className="text-xl font-semibold mb-4"
        style={{ color }}
        whileHover={{ x: 3 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>
      
      <motion.ul 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-3"
      >
        {skills.map((skill, index) => (
          <motion.li 
            key={index} 
            variants={item}
            className="flex items-center gap-2 p-2 rounded-md transition-all"
            whileHover={{ 
              backgroundColor: `${color}20`, 
              x: 5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <motion.span 
              className="text-lg"
              style={{ color }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2 + index * 0.2,
                ease: "easeInOut" 
              }}
            >
              •
            </motion.span> 
            <span>{skill}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}