import { motion } from 'framer-motion';

const deployments = [
  {
    id: "DEP-801",
    name: "Expense Tracker Architecture",
    status: "SUCCESS",
    tech: ["AWS EC2", "PHP", "MySQL"],
    logs: "Deployed to production. Database migrations completed. Load balancer attached."
  },
  {
    id: "DEP-802",
    name: "YOLO Object Detection Pipeline",
    status: "SUCCESS",
    tech: ["Python", "YOLOv8", "OpenCV"],
    logs: "Model weights loaded. Gradio interface running on port 7860. Inference ready."
  },
  {
    id: "DEP-803",
    name: "Fashion Hub E-commerce Frontend",
    status: "SUCCESS",
    tech: ["React", "Chakra UI", "Vite"],
    logs: "Static assets optimized. CDN cache invalidated. React hydration successful."
  }
];

export default function PipelineCommandCenter() {
  return (
    <section id="pipeline" className="py-24 relative bg-bg border-t border-border">
      {/* Background topology dots */}
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 flex items-center justify-between border-b border-border pb-4">
          <div>
            <h2 className="text-2xl font-mono font-bold text-white uppercase tracking-widest">
              DEPLOYMENT_HISTORY
            </h2>
            <p className="text-subtext text-sm font-mono mt-1">Recent successful builds & infrastructure deployments</p>
          </div>
        </div>

        <div className="space-y-4 relative">
          {/* Vertical Pipeline Line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-border z-0" />

          {deployments.map((dep, index) => (
            <motion.div 
              key={dep.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex gap-6"
            >
              {/* Pipeline Node */}
              <div className="w-14 flex flex-col items-center pt-4">
                <div className="w-4 h-4 rounded-full bg-terminal shadow-glow-terminal z-10" />
              </div>

              {/* Deployment Card */}
              <div className="glass-panel p-5 flex-1 border border-borderHover hover:border-terminal/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono text-terminal px-2 py-0.5 bg-terminal/10 border border-terminal/30 rounded">
                        {dep.status}
                      </span>
                      <span className="text-subtext text-xs font-mono">{dep.id}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{dep.name}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {dep.tech.map(t => (
                      <span key={t} className="text-xs font-mono bg-cardHover border border-border px-2 py-1 rounded text-k8s">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-black/50 border border-border rounded p-3 font-mono text-xs text-subtext flex items-start gap-2">
                  <span className="text-terminal">❯</span>
                  <p>{dep.logs}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
