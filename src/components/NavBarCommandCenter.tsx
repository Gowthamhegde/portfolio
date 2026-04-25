import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function NavBarCommandCenter() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'SYSTEM', href: '#home' },
    { name: 'RESOURCES', href: '#skills' },
    { name: 'PIPELINES', href: '#pipeline' },
    { name: 'LOGS', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-bg/90 backdrop-blur-md border-b border-border shadow-card' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo / Status Indicator */}
          <div className="flex items-center gap-3 text-xl font-bold tracking-tighter">
            <div className="w-2 h-2 rounded-full bg-terminal animate-pulse shadow-glow-terminal" />
            <span className="text-white font-mono">SYS_ADMIN</span>
            <span className="text-subtext font-light text-sm hidden sm:inline-block border-l border-border pl-3">
              GOUTHAMA HEGDE
            </span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-bold tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-subtext hover:text-k8s transition-colors duration-300 uppercase"
              >
                [{link.name}]
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden lg:block btn-aws py-1.5 px-4 text-xs font-mono">
              INIT_CONNECTION
            </a>
            <div className="flex lg:hidden text-2xl text-k8s">
              ☰
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
