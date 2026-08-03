import { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCode, 
  FaBriefcase, 
  FaGraduationCap, 
  FaCertificate, 
  FaEnvelope,
  FaTimes,
  FaMinus,
  FaRegSquare,
  FaWindows,
  FaSearch
} from "react-icons/fa";

import Hero from "./Hero";
import Skills from "./Skills";

const Projects = lazy(() => import("./Projects"));
const Experience = lazy(() => import("./Experience"));
const Education = lazy(() => import("./Education"));
const Certifications = lazy(() => import("./Certifications"));
const Contact = lazy(() => import("./Contact"));

const Loader = () => (
  <div className="flex justify-center items-center h-full w-full">
    <div className="w-6 h-6 border-2 border-yellow border-t-transparent rounded-full animate-spin" />
  </div>
);

type AppId = 'skills' | 'projects' | 'experience' | 'education' | 'certifications' | 'contact';

interface AppDef {
  id: AppId;
  title: string;
  icon: JSX.Element;
  component: JSX.Element;
  color: string;
}

const APPS: AppDef[] = [
  { id: 'skills', title: 'Skills', icon: <FaCode />, component: <Skills />, color: 'bg-blue-500' },
  { id: 'projects', title: 'Projects', icon: <FaBriefcase />, component: <Suspense fallback={<Loader />}><Projects /></Suspense>, color: 'bg-yellow' },
  { id: 'experience', title: 'Experience', icon: <FaBriefcase />, component: <Suspense fallback={<Loader />}><Experience /></Suspense>, color: 'bg-green-500' },
  { id: 'education', title: 'Education', icon: <FaGraduationCap />, component: <Suspense fallback={<Loader />}><Education /></Suspense>, color: 'bg-purple-500' },
  { id: 'certifications', title: 'Certifications', icon: <FaCertificate />, component: <Suspense fallback={<Loader />}><Certifications /></Suspense>, color: 'bg-orange-500' },
  { id: 'contact', title: 'Contact', icon: <FaEnvelope />, component: <Suspense fallback={<Loader />}><Contact /></Suspense>, color: 'bg-red-500' },
];

export default function LaptopOS() {
  const [openApps, setOpenApps] = useState<AppId[]>([]);
  const [activeApp, setActiveApp] = useState<AppId | null>(null);
  const [fullscreenApp, setFullscreenApp] = useState<AppId | null>(null);
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  const openApp = (id: AppId) => {
    if (!openApps.includes(id)) {
      setOpenApps([...openApps, id]);
    }
    setActiveApp(id);
    setStartMenuOpen(false);
  };

  const closeApp = (id: AppId) => {
    setOpenApps(openApps.filter(app => app !== id));
    if (activeApp === id) setActiveApp(null);
    if (fullscreenApp === id) setFullscreenApp(null);
  };

  const toggleFullscreen = (id: AppId) => {
    if (fullscreenApp === id) {
      setFullscreenApp(null);
    } else {
      setFullscreenApp(id);
      setActiveApp(id);
    }
  };

  return (
    <div className="h-screen w-full bg-[#0a0a0a] overflow-hidden relative font-sans text-white">
      {/* Windows 11 Wallpaper */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80" 
        style={{ backgroundImage: 'radial-gradient(circle at 50% 120%, #1a365d 0%, #000000 60%)' }}
      />
      
      {/* Yellow glowing accent (Theme consistent) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Desktop Area for Windows */}
      <div className="relative w-full h-[calc(100vh-48px)] p-4" onClick={() => setStartMenuOpen(false)}>
        {/* Desktop Icons */}
        <div className="absolute top-4 left-4 bottom-16 flex flex-col flex-wrap gap-6 content-start z-0">
          {APPS.map((app) => (
            <button
              key={`desktop-${app.id}`}
              onClick={(e) => { e.stopPropagation(); openApp(app.id); }}
              className="w-20 h-24 flex flex-col items-center justify-start gap-2 p-2 hover:bg-white/10 rounded group border border-transparent hover:border-white/20 transition-colors"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl shadow-lg shadow-black/50 ${app.color} text-white group-hover:scale-105 transition-transform`}>
                {app.icon}
              </div>
              <span className="text-xs text-white drop-shadow-md text-center leading-tight font-medium" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
                {app.title}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {openApps.map((appId, index) => {
            const app = APPS.find(a => a.id === appId);
            if (!app) return null;

            const isFullscreen = fullscreenApp === appId;
            const isActive = activeApp === appId;

            return (
              <motion.div
                key={appId}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  zIndex: isActive ? 50 : 10 + index,
                  ...(isFullscreen ? {
                    top: 0, left: 0, width: '100%', height: '100%', borderRadius: 0
                  } : {
                    top: `${10 + (index * 3)}%`, 
                    left: `${15 + (index * 3)}%`,
                    width: '70%', 
                    height: '75%',
                    borderRadius: '8px'
                  })
                }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className={`absolute flex flex-col overflow-hidden border border-white/10 ${
                  isActive ? 'shadow-2xl shadow-black/50' : 'shadow-xl opacity-90'
                }`}
                style={{
                  backgroundColor: 'rgba(25, 25, 25, 0.85)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                }}
                onClick={(e) => { e.stopPropagation(); setActiveApp(appId); setStartMenuOpen(false); }}
              >
                {/* Windows 11 Title Bar */}
                <div className="h-8 flex items-center justify-between select-none">
                  {/* Left: Icon and Title */}
                  <div className="flex items-center gap-3 px-3 text-xs text-gray-300">
                    <span className="text-yellow">{app.icon}</span>
                    <span className="font-medium">{app.title}</span>
                  </div>
                  
                  {/* Right: Window Controls */}
                  <div className="flex h-full">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setActiveApp(null); }} 
                      className="w-11 h-full flex items-center justify-center hover:bg-white/10 text-gray-400 transition-colors"
                    >
                      <FaMinus className="text-[10px]" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleFullscreen(appId); }} 
                      className="w-11 h-full flex items-center justify-center hover:bg-white/10 text-gray-400 transition-colors"
                    >
                      <FaRegSquare className="text-[10px]" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); closeApp(appId); }} 
                      className="w-11 h-full flex items-center justify-center hover:bg-red-500 hover:text-white text-gray-400 transition-colors"
                    >
                      <FaTimes className="text-[10px]" />
                    </button>
                  </div>
                </div>
                
                {/* Window Content */}
                <div className="flex-1 overflow-y-auto bg-[#111111] border-t border-white/5 custom-scrollbar">
                  {app.component}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Windows 11 Start Menu */}
      <AnimatePresence>
        {startMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute bottom-14 left-1/2 -translate-x-1/2 w-[600px] h-[650px] max-w-[95vw] rounded-lg border border-white/10 shadow-2xl z-40 overflow-hidden flex flex-col"
            style={{
              backgroundColor: 'rgba(25, 25, 25, 0.85)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
            }}
          >
            {/* Search Bar */}
            <div className="p-6 pb-2">
              <div className="bg-white/5 border border-white/10 rounded-full flex items-center px-4 py-2 text-sm text-gray-400">
                <FaSearch className="mr-3" />
                <input 
                  type="text" 
                  placeholder="Type here to search" 
                  className="bg-transparent border-none outline-none text-white w-full"
                  readOnly
                />
              </div>
            </div>

            {/* Pinned Apps */}
            <div className="px-8 py-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-white">Pinned</span>
                <button className="text-xs text-yellow hover:underline bg-white/5 px-2 py-1 rounded">All apps &gt;</button>
              </div>
              <div className="grid grid-cols-6 gap-y-6">
                {APPS.map((app) => (
                  <button 
                    key={app.id} 
                    onClick={() => openApp(app.id)}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl shadow-lg transition-transform group-hover:scale-110 ${app.color} text-white`}>
                      {app.icon}
                    </div>
                    <span className="text-xs text-gray-300">{app.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recommended (About Me / Hero Section) */}
            <div className="flex-1 bg-black/40 mt-4 overflow-y-auto custom-scrollbar p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-white">Recommended Profile</span>
                <span className="text-xs text-gray-400">More &gt;</span>
              </div>
              <div className="transform scale-[0.8] origin-top-left w-[125%] pointer-events-none">
                {/* We render Hero but scaled down to fit nicely in the start menu */}
                <Hero />
              </div>
            </div>

            {/* User Account / Power */}
            <div className="h-16 bg-black/50 border-t border-white/5 flex items-center justify-between px-6 mt-auto">
              <div className="flex items-center gap-3">
                <img src="/profilepic.jpg" alt="User" className="w-8 h-8 rounded-full border border-white/20" />
                <span className="text-sm font-medium">Gouthama Hegde</span>
              </div>
              <button className="text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Windows 11 Taskbar */}
      <div 
        className="absolute bottom-0 left-0 w-full h-12 border-t border-white/10 z-50 flex items-center justify-center px-4 gap-2"
        style={{
          backgroundColor: 'rgba(25, 25, 25, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Start Button */}
        <button 
          onClick={() => setStartMenuOpen(!startMenuOpen)}
          className={`w-10 h-10 rounded flex items-center justify-center text-xl transition-colors ${
            startMenuOpen ? 'bg-white/10 text-yellow' : 'hover:bg-white/10 text-white'
          }`}
        >
          <FaWindows className="text-[#00a4ef]" />
        </button>

        {/* Search Icon */}
        <button className="w-10 h-10 rounded hover:bg-white/10 flex items-center justify-center text-white transition-colors">
          <FaSearch className="text-sm" />
        </button>

        <div className="w-px h-6 bg-white/20 mx-1" />

        {/* Open Apps in Taskbar */}
        {APPS.map((app) => {
          const isOpen = openApps.includes(app.id);
          const isActive = activeApp === app.id;
          
          if (!isOpen) return null; // In Windows, unpinned apps don't show unless open, but we'll just show open ones

          return (
            <button
              key={app.id}
              onClick={() => {
                if (isActive) setActiveApp(null);
                else openApp(app.id);
              }}
              className={`relative w-10 h-10 rounded flex items-center justify-center text-lg transition-colors ${
                isActive 
                  ? 'bg-white/10 text-white' 
                  : 'hover:bg-white/5 text-gray-300'
              }`}
            >
              {app.icon}
              {isOpen && (
                <div className={`absolute bottom-0 w-3 h-1 rounded-t-full transition-all duration-300 ${
                  isActive ? 'bg-yellow' : 'bg-gray-400'
                }`} />
              )}
            </button>
          );
        })}

        {/* System Tray (Right side) */}
        <div className="absolute right-4 h-full flex items-center gap-3 text-xs text-white">
          <div className="flex flex-col items-end hover:bg-white/10 px-2 py-1 rounded cursor-pointer">
            <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>

    </div>
  );
}
