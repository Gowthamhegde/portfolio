import { useEffect, lazy, Suspense } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import PerformanceOptimizer from "./components/PerformanceOptimizer";

// Mobile detection hook
const isMobile = () => {
  return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Lazy load only the heaviest components
const Projects = lazy(() => import("./components/Projects"));
const InteractiveTerminal = lazy(() => import("./components/InteractiveTerminal"));
const GitHubStats = lazy(() => import("./components/GitHubStats"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));

export default function App() {
  useEffect(() => {
    // Mobile-specific optimizations
    if (isMobile()) {
      // Disable zoom on double tap
      let lastTouchEnd = 0;
      document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      }, false);

      // Add mobile-specific class to body
      document.body.classList.add('mobile-device');
    }

    // Always force scroll to home on page load/reload
    const forceScrollToHome = () => {
      // Clear any hash from URL without triggering navigation
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      
      // Immediately scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // Adjust delay based on device type
      const delay = isMobile() ? 300 : 500;
      
      // Then smooth scroll to home section after components load
      const timer = setTimeout(() => {
        const homeSection = document.getElementById('home');
        if (homeSection) {
          homeSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, delay);
      
      return timer;
    };

    // Force scroll to home on mount
    const timer = forceScrollToHome();

    // Prevent any automatic scrolling from browser
    const preventAutoScroll = (e: Event) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    // Add event listener to prevent unwanted scrolling
    window.addEventListener('beforeunload', preventAutoScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeunload', preventAutoScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950">
      <PerformanceOptimizer />
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
        <Suspense fallback={null}>
          <InteractiveTerminal />
        </Suspense>
        <Suspense fallback={null}>
          <GitHubStats />
        </Suspense>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
        <Suspense fallback={null}>
          <Education />
        </Suspense>
        <Suspense fallback={null}>
          <Certifications />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}