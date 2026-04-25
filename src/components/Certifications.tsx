import { motion } from 'framer-motion';
import { certifications } from '../data/resume';

const certMeta = [
  { category: 'CLOUD', color: 'aws', year: '2020', issuer: 'Amazon Web Services' },
  { category: 'CLOUD', color: 'k8s', year: '2023', issuer: 'Professional Institute' },
  { category: 'WEB DEV', color: 'terminal', year: '2023', issuer: 'TechA Academy' },
  { category: 'SECURITY', color: 'purple', year: '2023', issuer: 'Professional Institute' },
];

const colorMap: Record<string, { badge: string; text: string; border: string; bg: string }> = {
  aws:      { badge: 'badge-aws',     text: 'text-aws',      border: 'border-aws/30',      bg: 'bg-aws/10' },
  k8s:      { badge: 'badge-k8s',     text: 'text-k8s',      border: 'border-k8s/30',      bg: 'bg-k8s/10' },
  terminal: { badge: 'badge-success', text: 'text-terminal', border: 'border-terminal/30', bg: 'bg-terminal/10' },
  purple:   { badge: 'badge-k8s',     text: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/10' },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div>
            <div className="section-tag mb-1">06 / CREDENTIALS</div>
            <h2 className="text-3xl font-black text-white tracking-tight">
              CERTIFICATIONS <span className="text-aws-gradient">& BADGES</span>
            </h2>
          </div>
          <div className="ml-auto hidden md:flex items-center gap-2 text-xs font-mono text-subtext">
            <span className="text-terminal font-mono">{certifications.length}</span> credentials verified
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {certifications.map((cert, i) => {
            const meta = certMeta[i] || certMeta[3];
            const c = colorMap[meta.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`panel p-6 border-l-2 ${c.border}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                    <svg className={`w-6 h-6 ${c.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`badge ${c.badge}`}>{meta.category}</span>
                      <span className="font-mono text-xs text-subtext">{meta.year}</span>
                    </div>
                    <h3 className="text-white font-bold text-base leading-snug mb-1">{cert.name}</h3>
                    <div className="text-subtext text-xs font-mono mb-4">{meta.issuer}</div>
                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-subtext hover:text-white transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      VIEW CERTIFICATE
                    </a>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="badge badge-success">
                      <span className="w-1.5 h-1.5 rounded-full bg-terminal" />
                      VERIFIED
                    </div>
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
