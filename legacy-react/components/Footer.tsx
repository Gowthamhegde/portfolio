import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative border-t-4 border-yellow py-10 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-yellow flex items-center justify-center font-comic text-black text-sm shadow-[2px_2px_0px_#000]">
              GH
            </div>
            <div>
              <div className="font-comic text-white text-lg tracking-widest leading-none">GOUTHAMA HEGDE</div>
              <div className="text-yellow font-mono text-[10px] tracking-widest">CLOUD · DEVOPS · ENGINEER</div>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-gray-500">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow animate-pulse" />
            <span>All systems operational</span>
            <span className="mx-2 text-border">|</span>
            <span>© {new Date().getFullYear()} Gouthama Hegde</span>
          </div>

          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 text-xs font-comic tracking-widest text-gray-500 hover:text-yellow transition-colors"
          >
            BACK TO TOP
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
