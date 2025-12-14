import { useEffect } from 'react';

export const PerformanceOptimizer = () => {
  useEffect(() => {
    // Force scroll to top and prevent any unwanted scrolling
    const forceTopScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Execute immediately
    forceTopScroll();

    // Preload critical images
    const criticalImages = ['/profilepic.jpg'];
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Optimize scroll performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    };

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Handle resize logic here if needed
      }, 150);
    };

    // Prevent unwanted scrolling during initial load
    const preventInitialScroll = () => {
      forceTopScroll();
    };

    // Add multiple event listeners to ensure we stay at top
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('readystatechange', preventInitialScroll);

    // Force scroll to top after a short delay to override any browser behavior
    const scrollTimer = setTimeout(forceTopScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('readystatechange', preventInitialScroll);
      clearTimeout(resizeTimeout);
      clearTimeout(scrollTimer);
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;