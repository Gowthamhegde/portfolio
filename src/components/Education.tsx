import { motion } from 'framer-motion';
import { education } from '../data/resume';

const statuses = ['IN PROGRESS', 'COMPLETED'];

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-bg">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div>
            <div className="section-tag mb-1">05 / BACKGROUND</div>
            <h2 className="font-comic text-4xl text-white tracking-wide">
              EDUCATION <span className="text-yellow">HISTORY</span>
            </h2>
          </div>
        </motion.div>

        <div className="space-y-5">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="panel p-7 border-l-4 border-yellow"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_#000]">
                    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                  </div>
                  <div>
                    <h3 className="font-comic text-xl text-white tracking-wide mb-0.5">{edu.degree}</h3>
                    <div className="text-yellow font-semibold">{edu.school}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-sm text-gray-500 mb-2">{edu.period}</div>
                  <span className="badge badge-success">{statuses[i] || 'COMPLETED'}</span>
                </div>
              </div>

              <div>
                <div className="font-comic text-yellow text-sm tracking-widest mb-3">RELEVANT COURSEWORK</div>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span key={course} className="tech-tag">{course}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
