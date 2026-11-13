import { motion } from 'framer-motion';
import { certifications } from '../data/resume';

const certMeta = [
  { category: 'CLOUD', year: '2020', issuer: 'Amazon Web Services' },
  { category: 'CLOUD', year: '2023', issuer: 'Professional Institute' },
  { category: 'WEB DEV', year: '2023', issuer: 'TechA Academy' },
  { category: 'SECURITY', year: '2023', issuer: 'Professional Institute' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-bg">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div>
            <div className="section-tag mb-1">06 / CREDENTIALS</div>
            <h2 className="font-comic text-4xl text-white tracking-wide">
              CERTIFICATIONS <span className="text-yellow">& BADGES</span>
            </h2>
          </div>
          <div className="ml-auto hidden md:flex items-center gap-2 text-xs font-mono text-gray-500">
            <span className="font-comic text-yellow text-lg">{certifications.length}</span>&nbsp;credentials verified
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {certifications.map((cert, i) => {
            const meta = certMeta[i] || certMeta[3];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="panel p-6 border-l-4 border-yellow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_#000]">
                    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="badge badge-success">{meta.category}</span>
                      <span className="font-mono text-xs text-gray-500">{meta.year}</span>
                    </div>
                    <h3 className="text-white font-bold text-base leading-snug mb-1">{cert.name}</h3>
                    <div className="text-gray-500 text-xs font-mono mb-4">{meta.issuer}</div>
                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-yellow transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      VIEW CERTIFICATE
                    </a>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="badge badge-success">VERIFIED</span>
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
