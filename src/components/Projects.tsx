import { motion } from 'framer-motion';
import { projects } from '../data/resume';

const statusColors: Record<string, string> = {
  SUCCESS: 'badge-success',
  RUNNING: 'badge-k8s',
  DEPLOYED: 'badge-aws',
};

const projectMeta = [
  { status: 'DEPLOYED', arch: 'AWS EC2 + MySQL', highlight: 'aws' },
  { status: 'RUNNING',  arch: 'Python + Gradio + OpenCV', highlight: 'k8s' },
  { status: 'DEPLOYED', arch: 'PHP + MySQL + Bootstrap', highlight: 'terminal' },
  { status: 'SUCCESS',  arch: 'React + Vite + Chakra UI', highlight: 'aws' },
  { status: 'RUNNING',  arch: 'React + TypeScript + Vite', highlight: 'k8s' },
];

const highlightColors: Record<string, { border: string; glow: string }> = {
  aws:      { border: 'hover:border-aws/40',      glow: 'hover:shadow-[0_0_30px_rgba(255,153,0,0.08)]' },
  k8s:      { border: 'hover:border-k8s/40',      glow: 'hover:shadow-[0_0_30px_rgba(50,108,229,0.08)]' },
  terminal: { border: 'hover:border-terminal/40', glow: 'hover:shadow-[0_0_30px_rgba(0,208,132,0.08)]' },
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
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
            <h2 className="text-3xl font-black text-white tracking-tight">
              PROJECT <span className="text-aws-gradient">REGISTRY</span>
            </h2>
          </div>
          <div className="ml-auto hidden md:flex items-center gap-2 text-xs font-mono text-subtext">
            <span className="font-mono text-terminal">{projects.length}</span> deployments active
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const meta = projectMeta[i] || { status: 'SUCCESS', arch: '', highlight: 'k8s' };
            const hc = highlightColors[meta.highlight];
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
                className={`panel p-6 flex flex-col gap-4 cursor-pointer no-underline transition-all duration-300 ${hc.border} ${hc.glow}`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-white/5 border border-white/08 flex items-center justify-center">
                      <svg className="w-4 h-4 text-subtext" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                    </div>
                    <span className="font-mono text-[10px] text-subtext tracking-widest">DEP-{800 + i + 1}</span>
                  </div>
                  <span className={`badge ${statusColors[meta.status] || 'badge-success'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {meta.status}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight mb-1 group-hover:text-aws transition-colors">
                    {project.name}
                  </h3>
                  <div className="font-mono text-[11px] text-subtext">{meta.arch}</div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-white/[0.05]">
                  <span className="font-mono text-[10px] text-subtext">VIEW SOURCE</span>
                  <svg className="w-4 h-4 text-subtext" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
