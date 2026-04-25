import { motion } from 'framer-motion';
import { education } from '../data/resume';

const degreeColors = [
  { accent: 'k8s', border: 'border-k8s/30', bg: 'bg-k8s/10', text: 'text-k8s', status: 'IN PROGRESS', statusClass: 'badge-k8s' },
  { accent: 'terminal', border: 'border-terminal/30', bg: 'bg-terminal/10', text: 'text-terminal', status: 'COMPLETED', statusClass: 'badge-success' },
];

export default function Education() {
  return (
    <section id="education" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div>
            <div className="section-tag mb-1">05 / BACKGROUND</div>
            <h2 className="text-3xl font-black text-white tracking-tight">
              EDUCATION <span className="text-k8s-gradient">HISTORY</span>
            </h2>
          </div>
        </motion.div>

        <div className="space-y-5">
          {education.map((edu, i) => {
            const c = degreeColors[i] || degreeColors[1];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`panel p-7 border-l-2 ${c.border}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                      <svg className={`w-6 h-6 ${c.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-0.5">{edu.degree}</h3>
                      <div className={`font-semibold ${c.text}`}>{edu.school}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-sm text-subtext mb-2">{edu.period}</div>
                    <span className={`badge ${c.statusClass}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {c.status}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-subtext tracking-widest mb-3">RELEVANT COURSEWORK</div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span key={course} className="tech-tag">{course}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
