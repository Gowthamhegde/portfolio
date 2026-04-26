import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { profile } from '../data/resume';

const roles = ['Cloud Engineer', 'DevOps Engineer', 'AWS Architect', 'Infrastructure Engineer'];

const stats = [
  { label: 'PROJECTS', value: '5+' },
  { label: 'CERTIFICATIONS', value: '4' },
  { label: 'EXPERIENCE', value: '1 YR' },
  { label: 'SKILLS', value: '20+' },
];

// Lightning bolt SVG
const Lightning = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 48" fill="currentColor">
    <path d="M13 0L0 28h10L8 48l16-28H14L13 0z" />
  </svg>
);

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg">
      {/* Background halftone dots */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #f5c518 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Yellow accent strip top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-yellow" />

      {/* Lightning decorations */}
      <Lightning className="absolute top-32 right-[12%] w-8 h-16 text-yellow/20 rotate-12" />
      <Lightning className="absolute bottom-40 left-[8%] w-6 h-12 text-yellow/15 -rotate-6" />
      <Lightning className="absolute top-1/2 right-[5%] w-5 h-10 text-yellow/10 rotate-45" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Identity */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-yellow bg-yellow/10 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow" />
              </span>
              <span className="font-comic text-yellow text-sm tracking-widest">AVAILABLE FOR HIRE</span>
            </div>

            {/* Name */}
            <h1 className="font-comic leading-[0.95] tracking-wide mb-4">
              <span className="block text-white" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}>GOUTHAMA</span>
              <span className="block text-yellow" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}>HEGDE</span>
            </h1>

            {/* Animated role */}
            <div className="flex items-center gap-3 mb-5 h-9">
              <span className="text-gray-500 font-mono text-sm">~/</span>
              <motion.span
                key={roleIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-yellow font-comic text-2xl tracking-wide"
              >
                {roles[roleIdx]}
              </motion.span>
              <span className="w-0.5 h-6 bg-yellow animate-blink" />
            </div>

            {/* Bio */}
            <p className="text-gray-400 text-base leading-relaxed max-w-lg mb-8 border-l-4 border-yellow pl-4">
              {profile.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="btn-primary">
                VIEW PROJECTS
              </a>
              <a href={profile.socials[0].href} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                GITHUB
              </a>
              <a href={profile.socials[1].href} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                LINKEDIN
              </a>
            </div>

            {/* Location + contact */}
            <div className="flex flex-wrap gap-5 text-xs font-mono text-gray-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {profile.location}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {profile.email}
              </span>
            </div>
          </motion.div>

          {/* RIGHT: Profile + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Profile picture with comic hexagon frame */}
            <div className="relative">
              {/* Outer yellow border */}
              <div className="w-64 h-64 rounded-full border-4 border-yellow shadow-[6px_6px_0px_#f5c518] overflow-hidden bg-card">
                <img
                  src="/profilepic.jpg"
                  alt="Gouthama Hegde"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Status dot */}
              <div className="absolute bottom-3 right-3 w-6 h-6 rounded-full bg-yellow border-4 border-bg" />
              {/* Lightning accent */}
              <Lightning className="absolute -top-4 -right-4 w-8 h-16 text-yellow rotate-12" />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="panel p-4 text-center border-2 border-border hover:border-yellow"
                >
                  <div className="font-comic text-yellow text-3xl leading-none mb-1">{s.value}</div>
                  <div className="font-mono text-[10px] text-gray-500 tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>

            {/* AWS badge */}
            <div className="panel p-4 flex items-center gap-4 w-full max-w-xs border-l-4 border-yellow">
              <div className="w-10 h-10 bg-yellow flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_#000]">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M13.527 11.815h-.001v.001l-3.563 1.297v-2.597l3.564 1.299zm-3.563-5.327l3.563 1.297-3.563 1.297V6.488zm0 9.024l3.563-1.297v2.597l-3.563-1.3zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">AWS Solutions Architect</div>
                <div className="text-gray-500 text-xs font-mono">EC2 · S3 · VPC · RDS · CloudWatch</div>
              </div>
              <div className="ml-auto badge badge-success text-xs">CERT</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom yellow strip */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow" />
    </section>
  );
}
