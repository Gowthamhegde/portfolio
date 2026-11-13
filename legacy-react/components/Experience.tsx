import { motion } from 'framer-motion';
import { experience } from '../data/resume';

const techUsed = ['AWS EC2', 'S3', 'VPC', 'RDS', 'CloudWatch', 'IAM', 'Security Groups', 'Cloud Architecture'];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-bg">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div>
            <div className="section-tag mb-1">04 / WORK HISTORY</div>
            <h2 className="font-comic text-4xl text-white tracking-wide">
              PROFESSIONAL <span className="text-yellow">EXPERIENCE</span>
            </h2>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-yellow/30" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-16 pb-12"
            >
              <div className="absolute left-0 top-1 w-10 h-10 bg-yellow flex items-center justify-center shadow-[2px_2px_0px_#000]">
                <div className="w-3 h-3 bg-black" />
              </div>

              <div className="panel p-7 border-l-4 border-yellow">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="badge badge-success mb-3 inline-flex">INTERNSHIP</span>
                    <h3 className="font-comic text-2xl text-white tracking-wide mb-1">{exp.role}</h3>
                    <div className="text-yellow font-semibold">{exp.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-sm text-gray-500 mb-1">{exp.period}</div>
                    <div className="font-mono text-xs text-gray-500">Hubli, Karnataka</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="font-comic text-yellow text-sm tracking-widest mb-3">KEY RESPONSIBILITIES</div>
                  <div className="space-y-2">
                    {(exp.details).map((detail, di) => (
                      <div key={di} className="flex items-start gap-3 p-3 border border-border hover:border-yellow/40 transition-colors">
                        <span className="text-yellow mt-0.5 flex-shrink-0">▸</span>
                        <span className="text-gray-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-comic text-yellow text-sm tracking-widest mb-3">TECHNOLOGIES USED</div>
                  <div className="flex flex-wrap gap-2">
                    {techUsed.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel p-8 border-2 border-yellow shadow-[4px_4px_0px_#f5c518]"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 bg-yellow flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_#000]">
              <svg className="w-7 h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-comic text-xl text-white tracking-wide mb-1">Open to New Opportunities</h3>
              <p className="text-gray-400 text-sm">Seeking Cloud Engineer, DevOps Engineer, or Software Developer roles.</p>
            </div>
            <a href="#contact" className="btn-primary flex-shrink-0">CONTACT ME</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
