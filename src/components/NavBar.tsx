import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" }
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-bg/70 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <motion.a
          href="#top"
          whileHover={{ scale: 1.05 }}
          className="font-semibold text-lg gradient-text"
        >
          GOUTHAMA HEGDE
        </motion.a>
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                className="link"
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-2xl">
          ☰
        </button>
      </nav>
    </header>
  );
}