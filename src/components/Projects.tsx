import { motion } from 'framer-motion';
import { projects } from '../data/resume';

const projectMeta = [
  { status: 'DEPLOYED', arch: 'AWS EC2 + MySQL' },
  { status: 'RUNNING',  arch: 'Python + Gradio + OpenCV' },
  { status: 'DEPLOYED', arch: 'PHP + MySQL + Bootstrap' },
  { status: 'LIVE',     arch: 'React + Vite + Chakra UI' },
  { status: 'RUNNING',  arch: 'React + TypeScript + Vite' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-bg">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div>
            <div className="section-tag mb-1">03 / DEPLOYMENTS</div>
            <h2 className="font-comic text-4xl text-white tracking-wide">
              PROJECT <span className="text-yellow">REGISTRY</span>
            </h2>
          </div>
          <div className="ml-auto hidden md:flex items-center gap-2 text-xs font-mono text-gray-500">
            <span className="font-comic text-yellow text-lg">{projects.length}</span>&nbsp;deployments active
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const meta = projectMeta[i] || { status: 'LIVE', arch: '' };
            return (
              <motion.a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="panel p-6 flex flex-col gap-4 cursor-pointer no-underline border-2 border-border hover:border-yellow hover:shadow-[4px_4px_0px_#f5c518] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-yellow flex items-center justify-center shadow-[2px_2px_0px_#000]">
                      <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                    </div>
                    <span className="font-mono text-[10px] text-gray-500 tracking-widest">DEP-{800 + i + 1}</span>
                  </div>
                  <span className="badge badge-success">{meta.status}</span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-comic text-white text-xl tracking-wide leading-tight mb-1">
                    {project.name}
                  </h3>
                  <div className="font-mono text-[11px] text-gray-500">{meta.arch}</div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="font-mono text-[10px] text-gray-500">VIEW SOURCE</span>
                  <svg className="w-4 h-4 text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
