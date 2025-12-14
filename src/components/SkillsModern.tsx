import { motion } from "framer-motion";
import { skills } from "../data/resume";
import GlassCard from "./GlassCard";
import { Suspense, lazy } from "react";

const Skills3DVisualization = lazy(() => import("./Skills3DVisualization"));

export default function SkillsModern() {
  const skillCategories = [
    { title: "Programming", items: skills.programming, color: "#8b5cf6" },
    { title: "Libraries & Frameworks", items: skills.libraries, color: "#a78bfa" },
    { title: "Tools & Platforms", items: skills.tools, color: "#c4b5fd" },
    { title: "Soft Skills", items: skills.soft, color: "#e9d5ff" },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </motion.div>

        {/* 3D Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl overflow-hidden"
        >
          <Suspense fallback={<div className="h-48 flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-purple-500"></div></div>}>
            <Skills3DVisualization />
          </Suspense>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${category.color}, ${category.color}80)`,
                    boxShadow: `0 0 30px ${category.color}50`
                  }}
                >
                  <span className="text-2xl">💎</span>
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: category.color,
                        boxShadow: `0 0 15px ${category.color}`
                      }}
                      className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300 border border-white/20 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
