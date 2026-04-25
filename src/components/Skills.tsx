import { motion } from 'framer-motion';

const skillGroups = [
  {
    label: 'CLOUD INFRASTRUCTURE',
    accent: 'aws',
    skills: ['AWS EC2', 'S3 / RDS', 'VPC & Networking', 'IAM & Security', 'CloudWatch', 'Auto Scaling'],
  },
  {
    label: 'DEVOPS & AUTOMATION',
    accent: 'k8s',
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible'],
  },
  {
    label: 'DEVELOPMENT',
    accent: 'terminal',
    skills: ['Python', 'React / TypeScript', 'Node.js', 'PHP', 'MySQL', 'MongoDB'],
  },
  {
    label: 'SECURITY & MONITORING',
    accent: 'purple',
    skills: ['Linux Admin', 'Network Security', 'Prometheus', 'Grafana', 'Bash Scripting', 'Nginx'],
  },
];

const accentMap: Record<string, { text: string; border: string; bg: string; dot: string }> = {
  aws:      { text: 'text-aws',        border: 'border-aws/30',        bg: 'bg-aws/10',        dot: 'bg-aws' },
  k8s:      { text: 'text-k8s',        border: 'border-k8s/30',        bg: 'bg-k8s/10',        dot: 'bg-k8s' },
  terminal: { text: 'text-terminal',   border: 'border-terminal/30',   bg: 'bg-terminal/10',   dot: 'bg-terminal' },
  purple:   { text: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/10', dot: 'bg-purple-400' },
};

const icons: Record<string, string> = {
  aws: 'CLOUD INFRASTRUCTURE',
  k8s: 'DEVOPS & AUTOMATION',
  terminal: 'DEVELOPMENT',
  purple: 'SECURITY & MONITORING',
};

const groupIcons = [
  <svg key="cloud" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
  <svg key="devops" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
  <svg key="dev" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  <svg key="sec" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div>
            <div className="section-tag mb-1">02 / CAPABILITIES</div>
            <h2 className="text-3xl font-black text-white tracking-tight">
              TECHNICAL <span className="text-k8s-gradient">STACK</span>
            </h2>
          </div>
          <div className="ml-auto hidden md:flex items-center gap-2 text-xs font-mono text-subtext">
            <span className="w-2 h-2 rounded-full bg-terminal animate-pulse" />
            ALL SYSTEMS NOMINAL
          </div>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((group, gi) => {
            const c = accentMap[group.accent];
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.08 }}
                className={`panel p-6 border-l-2 ${c.border}`}
              >
                {/* Group header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center ${c.text}`}>
                      {groupIcons[gi]}
                    </div>
                    <span className="font-mono text-xs font-bold text-white tracking-widest">{group.label}</span>
                  </div>
                  <span className={`badge ${group.accent === 'aws' ? 'badge-aws' : group.accent === 'k8s' ? 'badge-k8s' : 'badge-success'}`}>
                    ACTIVE
                  </span>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.08 + si * 0.04 }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border ${c.border} hover:${c.bg} transition-all duration-200 cursor-default`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
                      <span className={`text-sm font-medium ${c.text}`}>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
