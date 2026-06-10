import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export default function FloatingNarrativeOrb() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // States to keep track of section scroll metrics
  const [scrollStats, setScrollStats] = useState({
    heroProgress: 0,
    storyProgress: 0,
    journeyProgress: 0,
    entersProgress: 0,
    activeSection: 'hero', // 'hero' | 'story' | 'journey' | 'enters' | 'informational'
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      const heroEl = document.getElementById('scene-hero');
      const storyEl = document.getElementById('scene-scroll-story');
      const journeyEl = document.getElementById('scene-business-journey');
      const entersEl = document.getElementById('scene-gba-enters');
      const stickyEl = document.getElementById('scene-sticky-storytelling');

      const viewportHeight = window.innerHeight;

      // Calculate progress of individual scenes based on client bounding rects
      let heroProgress = 0;
      let storyProgress = 0;
      let journeyProgress = 0;
      let entersProgress = 0;
      let activeSection = 'hero';

      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        heroProgress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
        if (rect.bottom > 0) {
          activeSection = 'hero';
        }
      }

      if (storyEl) {
        const rect = storyEl.getBoundingClientRect();
        const range = rect.height - viewportHeight;
        storyProgress = range > 0 ? Math.min(Math.max(-rect.top / range, 0), 1) : 0;
        if (rect.top <= 0 && rect.bottom > 0) {
          activeSection = 'story';
        }
      }

      if (journeyEl) {
        const rect = journeyEl.getBoundingClientRect();
        const range = rect.height - viewportHeight;
        journeyProgress = range > 0 ? Math.min(Math.max(-rect.top / range, 0), 1) : 0;
        if (rect.top <= 0 && rect.bottom > 0) {
          activeSection = 'journey';
        }
      }

      if (entersEl) {
        const rect = entersEl.getBoundingClientRect();
        const range = rect.height - viewportHeight;
        entersProgress = range > 0 ? Math.min(Math.max(-rect.top / range, 0), 1) : 0;
        if (rect.top <= 0 && rect.bottom > 0) {
          activeSection = 'enters';
        }
      }

      // If we move into the sticky section or below, mark as informational so the orb disappears completely
      if (stickyEl) {
        const rect = stickyEl.getBoundingClientRect();
        if (rect.top < viewportHeight) {
          activeSection = 'informational';
        }
      }

      setScrollStats({
        heroProgress,
        storyProgress,
        journeyProgress,
        entersProgress,
        activeSection,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial run

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Compute exact coordinates, size, opacity, and intensity depending on the active section & progress
  let x = 0; // translation percentages of viewport width
  let y = 0; // translation percentages of viewport height
  let size = 520; // width/height in pixels
  let opacity = 0.45; // custom dim/bright balance
  let filterBrightness = 95; // percentages
  let filterContrast = 100;

  const { activeSection, heroProgress, storyProgress, journeyProgress, entersProgress } = scrollStats;

  // Diagonal journey responsive coordinates
  const isMobile = windowWidth < 640;
  const maxSwingX = isMobile ? 12 : 25; // swing boundaries
  const maxSwingY = isMobile ? 10 : 18;

  if (activeSection === 'hero') {
    // 1. Scene Hero Intro - Orb is centered and dim
    x = 0;
    y = 0;
    size = isMobile ? 320 : 520;
    // Fade out slightly towards the transition to Section 2
    opacity = 0.45 - heroProgress * 0.15;
  } 
  else if (activeSection === 'story') {
    // 2. Word Transition: Imagine -> Create -> Build -> Scale -> Lead -> Dominate
    // Diagonal scroll-driven flow: starts center, sweep lower-left, then upper-right, then back near center
    size = isMobile ? 340 : 540;

    if (storyProgress < 0.35) {
      // Phase 2a: Imagine -> Create (drifts from center to lower-left area)
      const p = storyProgress / 0.35; // local progress [0, 1]
      x = -maxSwingX * p;
      y = maxSwingY * p;
      opacity = 0.35 + p * 0.28; // gets brighter
      filterBrightness = 95 + p * 15;
      size += p * 30;
    } else if (storyProgress < 0.75) {
      // Phase 2b: Build -> Scale -> Lead (sweeps from lower-left dynamically to upper-right area, avoiding central text completely!)
      const p = (storyProgress - 0.35) / 0.4; // local [0, 1]
      x = -maxSwingX + (maxSwingX * 2) * p;
      y = maxSwingY - (maxSwingY * 2) * p;
      opacity = 0.63 + p * 0.12; 
      filterBrightness = 110 + p * 10;
      size += 30 + p * 20;
    } else {
      // Phase 2c: Dominate (moves back near center-right space to prepare for the business core stage)
      const p = (storyProgress - 0.75) / 0.25; // local [0, 1]
      x = maxSwingX - (maxSwingX * 0.8) * p;
      y = -maxSwingY + (maxSwingY * 0.6) * p;
      opacity = 0.75 - p * 0.2;
      filterBrightness = 120 - p * 20;
      size += 50 - p * 40;
    }
  } 
  else if (activeSection === 'journey') {
    // 3. Isolated stage (Silo matrix)
    // Float the orb in a supporting background quadrant to occupy empty negative space softly
    x = -maxSwingX * 0.75;
    y = -maxSwingY * 0.5;
    size = isMobile ? 260 : 420;
    // Dim the orb down significantly so users focus on the chaotic problem lines & red alerts
    opacity = 0.22;
    filterBrightness = 80;
  } 
  else if (activeSection === 'enters') {
    // 4. GBA Enters Unification stage
    // The orb slowly travels from the side back to absolute center, locking behind GBA shield as the engine!
    const backToCenter = Math.min(entersProgress * 1.8, 1);
    
    x = (-maxSwingX * 0.75) * (1 - backToCenter);
    y = (-maxSwingY * 0.5) * (1 - backToCenter);
    
    // Scale starts normal, and gets larger as it locks into the absolute center Engine
    size = (isMobile ? 260 : 420) + backToCenter * (isMobile ? 140 : 200);
    
    // Brighten up to represent energy unification
    opacity = 0.22 + backToCenter * 0.42; 
    filterBrightness = 80 + backToCenter * 45;
    filterContrast = 100 + backToCenter * 15;
  } 
  else {
    // 5. Informational content-heavy sections where the orb is hidden to keep the layout quiet & clean
    opacity = 0;
  }

  // Set up spring-interpolated coordinates to ensure movement is butter-smooth and luxury-grade
  const springConfig = { damping: 35, stiffness: 60 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springSize = useSpring(size, springConfig);
  const springOpacity = useSpring(opacity, springConfig);
  const springBrightness = useSpring(filterBrightness, springConfig);

  const viewX = useTransform(springX, (val) => `${val}vw`);
  const viewY = useTransform(springY, (val) => `${val}vh`);

  useEffect(() => {
    springX.set(x);
    springY.set(y);
    springSize.set(size);
    springOpacity.set(opacity);
    springBrightness.set(filterBrightness);
  }, [x, y, size, opacity, filterBrightness, activeSection]);

  return (
    <div className="fixed inset-0 z-[2] flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <motion.div
        style={{
          x: viewX,
          y: viewY,
          width: springSize,
          height: springSize,
          opacity: springOpacity,
        }}
        className="relative flex items-center justify-center transition-opacity duration-700 pointer-events-none"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain mix-blend-screen select-none pointer-events-none"
          referrerPolicy="no-referrer"
          style={{
            filter: `brightness(${filterBrightness}%) contrast(${filterContrast}%)`,
          }}
        >
          <source src="/revolving_orb.mp4" type="video/mp4" />
          <source src="/assets/revolving_orb.mp4" type="video/mp4" />
        </video>

        {/* Ambient surrounding aura/glow overlay moving with the orb */}
        <div 
          className="absolute inset-[15%] bg-[#7C3AED]/20 mix-blend-color-dodge rounded-full filter blur-[80px] pointer-events-none animate-pulse-soft"
          style={{ animationDuration: '4s' }}
        />
      </motion.div>
    </div>
  );
}
