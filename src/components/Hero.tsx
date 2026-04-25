import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { profile } from '../data/resume';

const roles = ['Cloud Engineer', 'DevOps Engineer', 'AWS Architect', 'Infrastructure Engineer'];

const terminalLines = [
  { prompt: '$', cmd: 'kubectl get nodes', delay: 0 },
  { prompt: '>', out: 'NAME              STATUS   ROLES    AGE   VERSION', delay: 600 },
  { prompt: '>', out: 'prod-node-01      Ready    master   42d   v1.28.0', delay: 900 },
  { prompt: '>', out: 'prod-node-02      Ready    worker   42d   v1.28.0', delay: 1200 },
  { prompt: '$', cmd: 'terraform plan -out=infra.tfplan', delay: 1800 },
  { prompt: '>', out: 'Plan: 12 to add, 3 to change, 0 to destroy.', delay: 2400, color: 'text-terminal' },
  { prompt: '$', cmd: 'aws ec2 describe-instances --region us-east-1', delay: 3000 },
  { prompt: '>', out: 'InstanceId: i-0a1b2c3d4e5f  State: running', delay: 3600, color: 'text-aws' },
];

const metrics = [
  { label: 'UPTIME', value: '99.9%', color: 'text-terminal', border: 'border-terminal/30' },
  { label: 'PODS', value: '24', color: 'text-k8s', border: 'border-k8s/30' },
  { label: 'LATENCY', value: '18ms', color: 'text-aws', border: 'border-aws/30' },
  { label: 'REGIONS', value: '3', color: 'text-purple-400', border: 'border-purple-400/30' },
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => setVisibleLines(v => Math.max(v, i + 1)), line.delay + 500)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-aws/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-k8s/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-terminal/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Identity */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-terminal/30 bg-terminal/5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal" />
              </span>
              <span className="font-mono text-terminal text-xs font-semibold tracking-widest">AVAILABLE FOR HIRE</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-4">
              <span className="text-white">GOUTHAMA</span>
              <br />
              <span className="text-aws-gradient">HEGDE</span>
            </h1>

            {/* Animated role */}
            <div className="flex items-center gap-3 mb-6 h-8">
              <span className="text-subtext font-mono text-sm">~/roles/</span>
              <motion.span
                key={roleIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-k8s-gradient font-mono font-bold text-lg"
              >
                {roles[roleIdx]}
              </motion.span>
              <span className="w-0.5 h-5 bg-k8s animate-blink" />
            </div>

            {/* Bio */}
            <p className="text-slate-400 text-base leading-relaxed max-w-lg mb-8 border-l-2 border-k8s/40 pl-4">
              {profile.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#projects" className="btn-primary">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                VIEW PROJECTS
              </a>
              <a href={profile.socials[0].href} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GITHUB
              </a>
              <a href={profile.socials[1].href} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LINKEDIN
              </a>
            </div>

            {/* Profile picture */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-aws/50 overflow-hidden shadow-[0_0_20px_rgba(255,153,0,0.2)]">
                  <img src="/profilepic.jpg" alt="Gouthama Hegde" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-terminal border-2 border-bg" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Gouthama Hegde</div>
                <div className="text-subtext font-mono text-xs">Cloud & DevOps Engineer</div>
              </div>
            </div>

            {/* Location + contact */}
            <div className="flex flex-wrap gap-4 text-xs font-mono text-subtext">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-aws" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {profile.location}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-k8s" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {profile.email}
              </span>
            </div>
          </motion.div>

          {/* RIGHT: Terminal + Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4"
          >
            {/* Terminal */}
            <div className="terminal shadow-[0_0_60px_rgba(0,208,132,0.06)]">
              <div className="terminal-bar">
                <div className="dot bg-red-500/80" />
                <div className="dot bg-yellow-500/80" />
                <div className="dot bg-terminal/80" />
                <span className="ml-3 text-subtext text-xs font-mono">gouthama@aws-prod:~</span>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-terminal animate-pulse" />
                  <span className="text-terminal text-[10px] font-mono">CONNECTED</span>
                </div>
              </div>
              <div className="p-5 space-y-1.5 min-h-[260px] text-sm font-mono">
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <div key={i} className="flex gap-2">
                    <span className={line.prompt === '$' ? 'text-terminal' : 'text-subtext'}>{line.prompt}</span>
                    <span className={line.cmd ? 'text-white' : (line.color || 'text-slate-400')}>
                      {line.cmd || line.out}
                    </span>
                  </div>
                ))}
                {visibleLines < terminalLines.length && (
                  <div className="flex gap-2">
                    <span className="text-terminal">$</span>
                    <span className="w-2 h-4 bg-terminal animate-blink inline-block" />
                  </div>
                )}
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-4 gap-3">
              {metrics.map((m) => (
                <div key={m.label} className={`panel panel-aws p-4 text-center border ${m.border}`}>
                  <div className={`text-2xl font-black font-mono ${m.color} mb-1`}>{m.value}</div>
                  <div className="text-[10px] font-mono text-subtext tracking-widest">{m.label}</div>
                </div>
              ))}
            </div>

            {/* AWS Architecture badge */}
            <div className="panel p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-aws/10 border border-aws/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-aws" fill="currentColor" viewBox="0 0 24 24"><path d="M13.527 11.815h-.001v.001l-3.563 1.297v-2.597l3.564 1.299zm-3.563-5.327l3.563 1.297-3.563 1.297V6.488zm0 9.024l3.563-1.297v2.597l-3.563-1.3zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>
              </div>
              <div>
                <div className="text-white text-sm font-semibold">AWS Solutions Architect</div>
                <div className="text-subtext text-xs font-mono">EC2 · S3 · VPC · RDS · CloudWatch</div>
              </div>
              <div className="ml-auto badge badge-success">CERTIFIED</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
