import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function NavBarHIFI() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PORTFOLIO', href: '#portfolio' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'bg-cardHover/80 shadow-glow-cyan' : ''
        }`}>
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
            <span className="text-white">A</span>
            <span className="text-primary font-light">|</span>
            <span className="text-accent">R</span>
            <span className="text-xs font-normal ml-2 text-subtext hidden sm:block">
              ALEX RIVERA
            </span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-subtext hover:text-white hover:text-glow transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions / Socials */}
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden lg:block btn-hifi-outline py-2 px-6 text-sm">
              GET IN TOUCH
            </a>
            <div className="flex lg:hidden text-2xl text-primary">
              {/* Mobile menu icon placeholder */}
              ☰
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
