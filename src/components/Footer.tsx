import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <motion.a
          href="#top"
          whileHover={{ scale: 1.05 }}
          className="inline-block font-semibold text-lg gradient-text mb-4"
        >
          GOUTHAMA HEGDE
        </motion.a>
        
        <p className="text-sm text-subtext">
          &copy; {currentYear} Gouthama Hegde. All rights reserved.
        </p>
      </div>
    </footer>
  );
}