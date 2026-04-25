import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'CERTS', href: '#certifications' },
  { name: 'CONTACT', href: '#contact' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('HOME');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-8 h-8 rounded border border-terminal/40 bg-terminal/10 flex items-center justify-center">
              <span className="text-terminal font-mono text-xs font-bold">GH</span>
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-terminal animate-pulse" />
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-bold text-sm tracking-wide">GOUTHAMA HEGDE</div>
            <div className="text-subtext font-mono text-[10px] tracking-widest">CLOUD · DEVOPS · ENGINEER</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`px-3 py-1.5 rounded font-mono text-[11px] font-semibold tracking-widest transition-all duration-200 ${
                active === link.name
                  ? 'text-k8s bg-k8s/10 border border-k8s/30'
                  : 'text-subtext hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:flex btn-primary text-xs py-2 px-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-terminal animate-pulse" />
            HIRE ME
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-subtext hover:text-white p-2"
          >
            <div className="space-y-1.5">
              <span className={`block w-5 h-0.5 bg-current transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bg/98 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => { setActive(link.name); setMobileOpen(false); }}
                  className="block px-3 py-2 font-mono text-xs font-semibold tracking-widest text-subtext hover:text-white hover:bg-white/5 rounded transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
