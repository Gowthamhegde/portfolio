import { useEffect, lazy, Suspense } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));

const Loader = () => (
  <div className="flex justify-center items-center py-24">
    <div className="w-6 h-6 border-2 border-k8s border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-white relative">
      <NavBar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Suspense fallback={<Loader />}><Projects /></Suspense>
        <Suspense fallback={<Loader />}><Experience /></Suspense>
        <Suspense fallback={<Loader />}><Education /></Suspense>
        <Suspense fallback={<Loader />}><Certifications /></Suspense>
        <Suspense fallback={<Loader />}><Contact /></Suspense>
      </main>
      <Footer />
    </div>
  );
}
