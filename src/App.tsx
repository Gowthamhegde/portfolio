import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import InteractiveTerminal from "./components/InteractiveTerminal";
import AWSArchitecture from "./components/AWSArchitecture";
import DevOpsPipeline from "./components/DevOpsPipeline";
import GitHubStats from "./components/GitHubStats";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <InteractiveTerminal />
        <AWSArchitecture />
        <DevOpsPipeline />
        <Projects />
        <GitHubStats />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}