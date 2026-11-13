import { motion } from 'framer-motion';

const skillGroups = [
  {
    label: 'CLOUD INFRASTRUCTURE',
    icon: '☁️',
    skills: ['AWS EC2', 'S3 / RDS', 'VPC & Networking', 'IAM & Security', 'CloudWatch', 'Auto Scaling', 'Lambda', 'EKS', 'ECR'],
  },
  {
    label: 'DEVOPS & AUTOMATION',
    icon: '⚙️',
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible', 'AWS'],
  },
  {
    label: 'DEVELOPMENT',
    icon: '💻',
    skills: ['Python', 'React / TypeScript', 'Node.js', 'PHP', 'MySQL', 'MongoDB', 'Bash'],
  },
  {
    label: 'SECURITY & MONITORING',
    icon: '🛡️',
    skills: ['Linux Admin', 'Network Security', 'Prometheus', 'Grafana', 'Bash Scripting', 'Nginx'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-bg">
      {/* Yellow top border */}
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
            <div className="section-tag mb-1">02 / CAPABILITIES</div>
            <h2 className="font-comic text-4xl text-white tracking-wide">
              TECHNICAL <span className="text-yellow">STACK</span>
            </h2>
          </div>
          <div className="ml-auto hidden md:flex items-center gap-2 text-xs font-mono text-gray-500">
            <span className="w-2 h-2 rounded-full bg-yellow animate-pulse" />
            ALL SYSTEMS NOMINAL
          </div>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
              className="panel p-6 border-l-4 border-yellow"
            >
              {/* Group header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-yellow flex items-center justify-center text-lg shadow-[2px_2px_0px_#000]">
                    {group.icon}
                  </div>
                  <span className="font-comic text-white text-base tracking-widest">{group.label}</span>
                </div>
                <span className="badge badge-success">ACTIVE</span>
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
                    className="flex items-center gap-2 px-3 py-2 bg-black/30 border border-border hover:border-yellow hover:text-yellow transition-all duration-200 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
