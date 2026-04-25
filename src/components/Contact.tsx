import { motion } from 'framer-motion';
import { profile } from '../data/resume';

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div>
            <div className="section-tag mb-1">07 / CONNECT</div>
            <h2 className="text-3xl font-black text-white tracking-tight">
              INIT <span className="text-terminal-gradient">CONNECTION</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="panel p-6">
              <div className="text-xs font-mono text-subtext tracking-widest mb-4">CONTACT ENDPOINTS</div>
              <div className="space-y-4">
                {[
                  { label: 'EMAIL', value: profile.email, href: `mailto:${profile.email}`, icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  ), color: 'aws' },
                  { label: 'PHONE', value: profile.phone, href: `tel:${profile.phone}`, icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  ), color: 'k8s' },
                  { label: 'LOCATION', value: profile.location, href: '#', icon: (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  ), color: 'terminal' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/10 transition-all group"
                  >
                    <div className={`w-9 h-9 rounded-lg bg-${item.color}/10 border border-${item.color}/30 flex items-center justify-center text-${item.color} flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-subtext tracking-widest">{item.label}</div>
                      <div className="text-white text-sm font-medium group-hover:text-aws transition-colors">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="panel p-6">
              <div className="text-xs font-mono text-subtext tracking-widest mb-4">SOCIAL LINKS</div>
              <div className="flex gap-3">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-k8s/30 hover:bg-k8s/5 transition-all text-subtext hover:text-white"
                  >
                    {social.label === 'GitHub' ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    )}
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="panel p-7">
              <div className="terminal-bar -mx-7 -mt-7 mb-6 rounded-t-xl">
                <div className="dot bg-red-500/80" />
                <div className="dot bg-yellow-500/80" />
                <div className="dot bg-terminal/80" />
                <span className="ml-3 text-subtext text-xs font-mono">new_message.sh</span>
              </div>

              <form action="https://formspree.io/f/mykkjnza" method="POST" className="space-y-4">
                {[
                  { id: 'name', label: 'NAME', type: 'text', placeholder: 'John Doe' },
                  { id: 'email', label: 'EMAIL', type: 'email', placeholder: 'john@company.com', name: '_replyto' },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="block font-mono text-[10px] text-subtext tracking-widest mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.name || field.id}
                      required
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white text-sm placeholder-subtext focus:outline-none focus:border-k8s/50 focus:bg-k8s/5 transition-all font-mono"
                    />
                  </div>
                ))}
                <div>
                  <label className="block font-mono text-[10px] text-subtext tracking-widest mb-2">MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Hello Gouthama, I'd like to discuss..."
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white text-sm placeholder-subtext focus:outline-none focus:border-k8s/50 focus:bg-k8s/5 transition-all resize-none font-mono"
                  />
                </div>
                <input type="hidden" name="_subject" value="New Portfolio Contact" />
                <button
                  type="submit"
                  className="w-full btn-primary justify-center py-3"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
