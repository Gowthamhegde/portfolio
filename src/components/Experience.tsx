import { motion } from 'framer-motion';
import { experience } from '../data/resume';

const achievements = [
  'Designed and implemented AWS cloud architecture solutions for scalable applications',
  'Worked extensively with EC2 instances, VPC configuration, and security groups',
  'Collaborated on secure, cost-effective cloud infrastructure designs',
  'Gained hands-on experience with AWS services including S3, RDS, and CloudWatch',
  'Participated in cloud migration projects and best practices implementation',
];

const techUsed = ['AWS EC2', 'S3', 'VPC', 'RDS', 'CloudWatch', 'IAM', 'Security Groups', 'Cloud Architecture'];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div>
            <div className="section-tag mb-1">04 / WORK HISTORY</div>
            <h2 className="text-3xl font-black text-white tracking-tight">
              PROFESSIONAL <span className="text-terminal-gradient">EXPERIENCE</span>
            </h2>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-aws/60 via-k8s/40 to-transparent" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-16 pb-12"
            >
              {/* Node */}
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-bg border-2 border-aws flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-aws" />
              </div>

              <div className="panel p-7">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="badge badge-aws mb-3">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      INTERNSHIP
                    </div>
                    <h3 className="text-2xl font-black text-white mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-aws font-semibold">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-sm text-subtext mb-1">{exp.period}</div>
                    <div className="font-mono text-xs text-subtext">Hubli, Karnataka</div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <div className="text-xs font-mono text-subtext tracking-widest mb-3">KEY RESPONSIBILITIES</div>
                  <div className="space-y-2">
                    {(exp.details || achievements).map((detail, di) => (
                      <div key={di} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-aws/20 transition-colors">
                        <span className="text-aws mt-0.5 flex-shrink-0">▸</span>
                        <span className="text-slate-300 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech */}
                <div>
                  <div className="text-xs font-mono text-subtext tracking-widest mb-3">TECHNOLOGIES USED</div>
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

        {/* Open to work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel p-8 border-terminal/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-terminal/10 border border-terminal/30 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-terminal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-1">Open to New Opportunities</h3>
              <p className="text-slate-400 text-sm">Seeking Cloud Engineer, DevOps Engineer, or Software Developer roles. Ready to contribute to innovative infrastructure projects.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a href="#contact" className="btn-primary">CONTACT ME</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
