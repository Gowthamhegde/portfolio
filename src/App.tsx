import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  FiArrowDownRight, FiArrowUpRight, FiCheck, FiDownload, FiGithub,
  FiLinkedin, FiMenu, FiMousePointer, FiServer, FiX,
} from "react-icons/fi";
import { portfolioData as data } from "./data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;
const reveal = (reduced: boolean, delay = 0) => ({
  initial: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 45 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: reduced ? { duration: 0 } : { duration: 0.8, delay, ease },
});

const skillRows = [
  ["01", "Cloud Engineering", ["AWS", "EC2", "S3", "VPC", "IAM", "RDS", "CloudWatch", "Load Balancing", "Auto Scaling"]],
  ["02", "DevOps & Automation", ["Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "CI/CD", "Git"]],
  ["03", "Programming & Systems", ["Python", "Bash", "Linux", "Networking", "REST APIs", "FastAPI"]],
] as const;

const process = [
  ["01", "Analyze", "Understand the infrastructure problem."],
  ["02", "Architect", "Design a reliable and scalable solution."],
  ["03", "Automate", "Implement infrastructure and deployment automation."],
  ["04", "Test", "Validate, troubleshoot, and improve reliability."],
] as const;

const projectColors = ["lime", "blue", "orange", "purple", "pink", "teal", "yellow", "green", "black"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -90]);
  const sections = ["home", "about", "skills", "projects", "experience", "contact"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.4, 0.7] },
    );
    sections.forEach((id) => document.getElementById(id) && observer.observe(document.getElementById(id)!));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="neo-site">
      <motion.div className="progress-line" style={{ scaleX: progress }} />
      <header className="neo-nav">
        <a className="neo-logo" href="#home">GOWTHAM<span>.DEV</span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <FiX /> : <FiMenu />}</button>
        <nav className={menuOpen ? "neo-links open" : "neo-links"}>
          {sections.map((section) => <button className={active === section ? "active" : ""} key={section} onClick={() => go(section)}>{section}</button>)}
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: .96 }} className="lime-button nav-connect" onClick={() => go("contact")}>Let&apos;s connect <FiArrowUpRight /></motion.button>
        </nav>
      </header>

      <main>
        <section id="home" className="neo-hero">
          <motion.div className="hero-sticker" animate={reduced ? undefined : { rotate: [0, 8, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
            <span>Cloud</span><strong>/</strong><span>DevOps</span><small>Reliable systems<br />by design</small>
          </motion.div>
          <motion.div style={{ y: reduced ? 0 : heroY }} className="hero-name">
            <motion.p {...reveal(!!reduced)} className="neo-kicker">Hello, I&apos;m Gowtham Hegde</motion.p>
            <motion.h1 initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .3 }}>
              <span>Gowtham</span><span>Hegde</span>
            </motion.h1>
            <motion.p {...reveal(!!reduced, .35)} className="hero-subtitle">Building cloud infrastructure.<br />Automating everything.<br />Shipping reliable systems.</motion.p>
            <motion.div {...reveal(!!reduced, .48)} className="hero-actions">
              <motion.button whileHover={{ x: 5 }} className="dark-button" onClick={() => go("projects")}>Explore my work <FiArrowUpRight /></motion.button>
              <motion.a whileHover={{ x: 5 }} className="text-button" href={data.personal.resumeUrl} download>Download resume <FiDownload /></motion.a>
            </motion.div>
          </motion.div>
          <motion.div {...reveal(!!reduced, .25)} className="hero-portrait">
            <motion.div className="portrait-frame" initial={reduced ? false : { clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0 0 0 0)" }} transition={{ duration: 1.1, delay: .25, ease }}>
              <img src="/me-removebg-preview.png" alt="Gowtham Hegde" />
            </motion.div>
            <div className="portrait-caption"><span>Based in India</span><span>Open to opportunities <i /></span></div>
          </motion.div>
          <div className="hero-footer"><span>01 — Cloud &amp; DevOps Engineer</span><span className="scroll-cue"><FiMousePointer /> Scroll to explore</span><span>2026 ↘</span></div>
        </section>

        <section id="about" className="black-section about-neo">
          <motion.div {...reveal(!!reduced)} className="black-heading"><p className="neo-kicker lime-text">01 / Introduction</p><h2>I build cloud.<br />I automate infrastructure.<br /><em>I solve real problems.</em></h2></motion.div>
          <motion.div {...reveal(!!reduced, .12)} className="about-neo-copy"><p>I&apos;m a Computer Science engineering graduate interested in Cloud Computing, AWS, DevOps, Infrastructure Automation, and building reliable systems.</p><p>I enjoy experimenting with cloud technologies, automating repetitive workflows, troubleshooting infrastructure, and turning technical ideas into practical solutions.</p><div className="scroll-marker"><span />Keep moving</div></motion.div>
        </section>

        <section id="skills" className="cream-section skills-neo">
          <motion.div {...reveal(!!reduced)} className="section-lead"><p className="neo-kicker">02 / What I work with</p><h2>Technical<br /><span>practice.</span></h2></motion.div>
          <div className="skill-rows">{skillRows.map(([number, title, items], index) => <motion.div {...reveal(!!reduced, index * .1)} whileHover={reduced ? undefined : { backgroundColor: "#D9F229", color: "#11120D", paddingLeft: 26, paddingRight: 26 }} transition={{ duration: .25 }} className="skill-row" key={title}><span className="row-number">{number}</span><h3>{title}</h3><div className="skill-pills">{items.map((item) => <span key={item}>{item}</span>)}</div><FiArrowUpRight /></motion.div>)}</div>
        </section>

        <section className="cream-section compare-section">
          <motion.div {...reveal(!!reduced)} className="section-lead"><p className="neo-kicker">03 / Engineering approach</p><h2>From manual<br /><span>to automated.</span></h2></motion.div>
          <div className="compare-grid"><motion.div {...reveal(!!reduced)} className="compare-panel before"><span className="compare-label">Before / friction</span><h3>Manual<br />operations.</h3>{["Manual deployments", "Repetitive infrastructure setup", "Inconsistent environments", "Time-consuming troubleshooting"].map((item) => <p key={item}><FiX />{item}</p>)}</motion.div><motion.div {...reveal(!!reduced, .12)} className="compare-panel after"><span className="compare-label">After / flow</span><h3>Reliable<br />automation.</h3>{["Automated CI/CD", "Infrastructure as Code", "Reproducible deployments", "Automated recovery workflows"].map((item) => <p key={item}><FiCheck />{item}</p>)}</motion.div></div>
        </section>

        <section id="projects" className="cream-section projects-neo">
          <motion.div {...reveal(!!reduced)} className="project-intro"><p className="neo-kicker">04 / Selected projects</p><h2>Built to be<br /><span>useful.</span></h2><p>Practical experiments in automation, cloud infrastructure, and systems thinking.</p></motion.div>
          <div className="poster-grid">{data.projects.map((project, index) => <motion.article {...reveal(!!reduced, index * .08)} whileHover={reduced ? undefined : { y: -8 }} className={`poster ${projectColors[index] ?? "black"}`} key={project.id}><div className="poster-top"><span>Project / 0{index + 1}</span><FiArrowUpRight /></div><div className="poster-art"><FiServer /><span>{index === 0 ? "RECOVER" : index === 1 ? "INSIGHT" : index === 2 ? "INFRA" : "DEPLOY"}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="poster-tags">{project.technologies.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}</div><div className="poster-links"><a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <FiArrowUpRight /></a></div></motion.article>)}</div>
        </section>

        <section id="experience" className="black-section experience-neo">
          <motion.div {...reveal(!!reduced)} className="black-heading"><p className="neo-kicker lime-text">05 / Experience</p><h2>Learning by<br /><em>operating systems.</em></h2></motion.div>
          <motion.article {...reveal(!!reduced, .12)} className="timeline-entry"><span className="timeline-number">01</span><div><p className="neo-kicker lime-text">Internship / {data.experience.dates}</p><h3>{data.experience.position}</h3><p className="timeline-company">{data.experience.company}</p><p>{data.experience.description}</p><div className="dark-tags">{data.experience.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></motion.article>
        </section>

        <section className="cream-section process-neo">
          <motion.div {...reveal(!!reduced)} className="section-lead"><p className="neo-kicker">06 / How I work</p><h2>A clear path<br /><span>forward.</span></h2></motion.div>
          <div className="process-grid">{process.map(([number, title, description], index) => <motion.div {...reveal(!!reduced, index * .08)} className="process-step" key={number}><span>{number}</span><FiArrowDownRight /><h3>{title}</h3><p>{description}</p></motion.div>)}</div>
        </section>

        <section id="contact" className="contact-neo">
          <div className="contact-marquee">CLOUD / DEVOPS / AUTOMATION / RELIABILITY / </div>
          <motion.div {...reveal(!!reduced)} className="contact-inner"><p className="neo-kicker">07 / Contact</p><h2>Let&apos;s build<br /><span>something</span><br />reliable.</h2><div className="contact-arrow"><FiArrowDownRight /></div><p className="contact-note">Have an interesting cloud or infrastructure challenge? Let&apos;s talk.</p><a className="contact-email" href={`mailto:${data.personal.email}`}>{data.personal.email} <FiArrowUpRight /></a><div className="contact-socials"><a href={data.personal.githubUrl} target="_blank" rel="noreferrer"><FiGithub /> Gowthamhegde</a><a href={data.personal.linkedinUrl} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a><a href={data.personal.resumeUrl} download><FiDownload /> Resume</a></div></motion.div>
          <footer className="neo-footer"><span>Designed &amp; built by Gowtham Hegde</span><span>© {new Date().getFullYear()}</span></footer>
        </section>
      </main>
    </div>
  );
}

export default App;
