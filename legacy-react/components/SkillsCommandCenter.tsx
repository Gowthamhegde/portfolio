import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "CLOUD INFRASTRUCTURE",
    color: "aws",
    skills: [
      { name: 'AWS EC2 / S3', level: 90, status: 'Healthy' },
      { name: 'VPC & Networking', level: 85, status: 'Optimal' },
      { name: 'CloudWatch / RDS', level: 80, status: 'Healthy' }
    ]
  },
  {
    title: "CONTAINERIZATION",
    color: "k8s",
    skills: [
      { name: 'Docker', level: 88, status: 'Active' },
      { name: 'Kubernetes (K8s)', level: 82, status: 'Scaling' },
      { name: 'Microservices', level: 85, status: 'Healthy' }
    ]
  },
  {
    title: "AUTOMATION & IAC",
    color: "terminal",
    skills: [
      { name: 'Terraform', level: 75, status: 'Provisioned' },
      { name: 'Ansible', level: 70, status: 'Configured' },
      { name: 'CI/CD (Jenkins/Actions)', level: 85, status: 'Deployed' }
    ]
  },
  {
    title: "FULL STACK / DB",
    color: "subtext",
    skills: [
      { name: 'React / Next.js', level: 90, status: 'Optimized' },
      { name: 'Node.js / Python', level: 85, status: 'Running' },
      { name: 'MySQL / MongoDB', level: 80, status: 'Connected' }
    ]
  }
];

export default function SkillsCommandCenter() {
  return (
    <section id="skills" className="py-24 relative bg-bg border-t border-border">
      <div className="container mx-auto px-6">
        
        <div className="mb-12 flex items-center justify-between border-b border-border pb-4">
          <div>
            <h2 className="text-2xl font-mono font-bold text-white uppercase tracking-widest">
              RESOURCE_ALLOCATION
            </h2>
            <p className="text-subtext text-sm font-mono mt-1">System capabilities & technical proficiencies</p>
          </div>
          <div className="hidden md:flex gap-2">
            <span className="w-3 h-3 bg-aws rounded-sm" />
            <span className="w-3 h-3 bg-k8s rounded-sm" />
            <span className="w-3 h-3 bg-terminal rounded-sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 border-l-4"
              style={{ borderLeftColor: `var(--tw-colors-${category.color})` }}
            >
              <h3 className="text-sm font-bold text-white mb-6 tracking-wider font-mono uppercase flex items-center justify-between">
                {category.title}
                <span className={`text-${category.color} text-xs`}>[ACTIVE]</span>
              </h3>
              
              <div className="space-y-6">
                {category.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-subtext">{skill.name}</span>
                      <span className={`text-${category.color}`}>{skill.status}</span>
                    </div>
                    <div className="w-full bg-black/50 h-1.5 rounded overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full bg-${category.color} shadow-glow-${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
