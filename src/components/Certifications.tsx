import { motion } from "framer-motion";
import { certifications } from "../data/resume";

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
  show: { opacity: 1, y: 0 }
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-bg to-bg/90">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Certifications
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6"
        >
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CertificationCard({ certification }: { certification: typeof certifications[0] }) {
  return (
    <motion.div 
      variants={item}
      className="card p-5 flex items-center gap-4"
    >
      <div className="text-3xl text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      </div>
      <div>
        <motion.a 
          href={certification.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.01 }}
          className="link font-medium"
        >
          {certification.name}
        </motion.a>
      </div>
    </motion.div>
  );
}