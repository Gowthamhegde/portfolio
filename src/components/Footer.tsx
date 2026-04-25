import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded border border-terminal/40 bg-terminal/10 flex items-center justify-center">
              <span className="text-terminal font-mono text-[10px] font-bold">GH</span>
            </div>
            <div>
              <div className="text-white font-bold text-sm">GOUTHAMA HEGDE</div>
              <div className="text-subtext font-mono text-[10px] tracking-widest">CLOUD · DEVOPS · ENGINEER</div>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-subtext">
            <span className="w-1.5 h-1.5 rounded-full bg-terminal animate-pulse" />
            <span>All systems operational</span>
            <span className="mx-2 text-white/10">|</span>
            <span>© {new Date().getFullYear()} Gouthama Hegde</span>
          </div>

          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 text-xs font-mono text-subtext hover:text-white transition-colors"
          >
            BACK TO TOP
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
