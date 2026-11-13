import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ZENITH AI',
    category: 'SaaS Platform',
    tags: ['Next.js', 'Tailwind', 'Themes'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=800&auto=format&fit=crop',
    color: '#00f0ff'
  },
  {
    title: 'NEO MARKET',
    category: 'E-commerce',
    tags: ['E-commerce', 'Violet'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    color: '#bf00ff'
  },
  {
    title: 'CYBERFLOW',
    category: 'Web App',
    tags: ['Web App', 'Blue'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    color: '#3B82F6'
  },
  {
    title: 'PIXEL PULSE',
    category: 'UI Library',
    tags: ['UI Library', 'TypeScript', 'Cyan'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
    color: '#10B981'
  }
];

export default function ProjectsHIFI() {
  return (
    <section id="portfolio" className="py-24 relative">
      {/* Background grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-primary font-mono tracking-widest mb-2 uppercase text-sm font-semibold">
            Selected Works
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold">PROJECT WORKS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel overflow-hidden group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-bg/50 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-card to-transparent z-20" />
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-1 group-hover:text-glow transition-all duration-300" style={{ '--tw-shadow-color': project.color } as React.CSSProperties}>
                  {project.title}
                </h3>
                <p className="text-primary text-sm font-mono mb-4">{project.category}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full border border-border bg-bg/50 text-subtext">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-subtext text-sm mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex gap-3 mt-auto">
                  <button className="flex-1 py-2 text-sm font-bold rounded-full transition-all duration-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20">
                    LIVE DEMO
                  </button>
                  <button className="flex-1 py-2 text-sm font-bold rounded-full transition-all duration-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20">
                    GITHUB
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
