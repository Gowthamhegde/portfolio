import { motion } from "framer-motion";
import { experience } from "../data/resume";

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

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-bg/90 to-bg">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Professional Experience
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {experience.map((job, index) => (
            <ExperienceCard key={index} job={job} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceCard({ job }: { job: typeof experience[0] }) {
  return (
    <motion.div 
      variants={item}
      className="card p-6"
    >
      <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
        <div>
          <h3 className="text-xl font-semibold">{job.role}</h3>
          <p className="text-subtext">{job.company}</p>
        </div>
        <span className="tag">{job.period}</span>
      </div>
      <ul className="space-y-2">
        {job.details.map((detail, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-accent mt-1">•</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}