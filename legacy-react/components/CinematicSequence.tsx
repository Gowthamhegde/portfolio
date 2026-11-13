import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';

interface CinematicSequenceProps {
  children: React.ReactNode;
}

export default function CinematicSequence({ children }: CinematicSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoDuration, setVideoDuration] = useState(0);

  // We track scroll across the placeholder space
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress to make transitions buttery smooth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  // 1. Entrance Image (me.png) fades out from 0% to 15% of scroll
  const imageOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const imageScale = useTransform(smoothProgress, [0, 0.15], [1, 1.2]);
  const imageY = useTransform(smoothProgress, [0, 0.15], [0, -50]);

  // 2. Video fades in from 10% to 20%
  const videoOpacity = useTransform(smoothProgress, [0.1, 0.2], [0, 1]);

  // 3. Video plays from 20% to 80%
  // MP4 allows us to use smoothProgress directly for buttery smooth scrubbing
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (videoRef.current && videoDuration > 0) {
      const playProgress = Math.max(0, Math.min(1, (latest - 0.2) / 0.6));
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = playProgress * videoDuration;
        }
      });
    }
  });

  // 4. Zoom into laptop screen from 80% to 95%
  const videoScale = useTransform(smoothProgress, [0.8, 0.95], [1, 15]);

  // 5. Sequence container fades out completely at the end to reveal content naturally
  const sequenceOpacity = useTransform(smoothProgress, [0.95, 1], [1, 0]);
  const sequencePointerEvents = useTransform(smoothProgress, v => v >= 1 ? 'none' : 'auto');

  return (
    <>
      {/* 
        This is the scrollable track for the sequence. 
        It pushes the actual children down by 400vh.
      */}
      <div ref={containerRef} className="absolute top-0 left-0 w-full h-[400vh] pointer-events-none" />

      {/* 
        This is the fixed overlay that plays the sequence. 
        It stays on screen until the user scrolls past 400vh.
      */}
      <motion.div
        className="fixed top-0 left-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black z-50"
        style={{
          opacity: sequenceOpacity,
          pointerEvents: sequencePointerEvents as any
        }}
      >
        {/* Layer 1: me.png 3D floating image */}
        <motion.div
          className="absolute inset-0 flex items-center justify-start px-8 md:px-24 z-10"
          style={{
            opacity: imageOpacity,
            scale: imageScale,
            y: imageY
          }}
        >
          {/* Left Side: Titles */}
          <div className="text-left max-w-xl z-20 relative">
            <h2 className="text-yellow font-mono text-sm md:text-xl lg:text-2xl mb-2 md:mb-4 tracking-widest uppercase">
              Welcome to the portfolio of
            </h2>
            <h1 className="font-comic text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white tracking-widest mb-4 md:mb-6 leading-[0.9]">
              GOUTHAMA <br /><span className="text-yellow">HEGDE</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-lg lg:text-2xl mb-8 md:mb-12 border-l-4 border-yellow pl-3 md:pl-5 max-w-md">
              DevOps Engineer, Cloud Architect & Software Developer.
            </p>
            <div className="font-mono text-yellow tracking-widest animate-pulse inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 border-2 border-yellow bg-yellow/10 text-xs md:text-base">
              <span className="w-2 h-2 rounded-full bg-yellow"></span>
              SCROLL TO EXPLORE
            </div>
          </div>

          {/* Right Bottom: Image */}
          <motion.img
            src="/me-removebg-preview.png"
            alt="Gouthama Hegde"
            className="absolute bottom-0 right-[-10%] md:right-10 lg:right-24 max-w-[280px] md:max-w-2xl lg:max-w-[800px] object-contain drop-shadow-[0_0_80px_rgba(245,197,24,0.4)] z-10 origin-bottom opacity-30 md:opacity-100"
            animate={{
              scale: [1, 1.02, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Layer 2: laptop.mp4 Video */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          style={{
            opacity: videoOpacity,
            scale: videoScale,
            willChange: "transform, opacity"
          }}
        >
          <video
            ref={videoRef}
            src="/Timeline 1.mp4"
            className="w-full h-full object-cover md:object-contain"
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={handleLoadedMetadata}
          />
        </motion.div>
      </motion.div>

      {/* 
        The actual portfolio content is pushed down so it's revealed 
        when the user scrolls past the 400vh mark.
      */}
      <div className="pt-[400vh]">
        {children}
      </div>
    </>
  );
}
