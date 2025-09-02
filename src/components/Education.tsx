import { motion } from "framer-motion";
import { education } from "../data/resume";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Education
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function EducationCard({ education }: { education: typeof education[0] }) {
  return (
    <motion.div 
      variants={item}
      className="card p-6"
    >
      <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
        <div>
          <h3 className="text-xl font-semibold">{education.degree}</h3>
          <p className="text-subtext">{education.school}</p>
        </div>
        <span className="tag">{education.period}</span>
      </div>
      <div>
        <h4 className="text-sm uppercase tracking-wider text-subtext mb-2">Relevant Coursework</h4>
        <div className="flex flex-wrap gap-2">
          {education.coursework.map((course, index) => (
            <span key={index} className="tag">{course}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}