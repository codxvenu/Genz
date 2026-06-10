import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import ThreeEnergyOrb from './ThreeEnergyOrb';

export default function FloatingNarrativeOrb() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [time, setTime] = useState(0);

  // States to keep track of section scroll metrics
  const [scrollStats, setScrollStats] = useState({
    heroProgress: 0,
    storyProgress: 0,
    journeyProgress: 0,
    entersProgress: 0,
    activeSection: 'hero', // 'hero' | 'story' | 'journey' | 'enters' | 'informational'
  });

  // Small internal ticker loop for subtle floating ambient hover (so it always is alive even when still)
  useEffect(() => {
    let animationFrameId: number;
    const startTime = Date.now();
    const updateTime = () => {
      setTime((Date.now() - startTime) / 1000);
      animationFrameId = requestAnimationFrame(updateTime);
    };
    animationFrameId = requestAnimationFrame(updateTime);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cache metrics to avoid calling getBoundingClientRect during scroll events (forced synchronous layouts)
    let heroMetrics = { top: 0, height: 0 };
    let storyMetrics = { top: 0, height: 0 };
    let journeyMetrics = { top: 0, height: 0 };
    let entersMetrics = { top: 0, height: 0 };
    let stickyMetrics = { top: 0, height: 0 };

    const measureElements = () => {
      const heroEl = document.getElementById('scene-hero');
      const storyEl = document.getElementById('scene-scroll-story');
      const journeyEl = document.getElementById('scene-business-journey');
      const entersEl = document.getElementById('scene-gba-enters');
      const stickyEl = document.getElementById('scene-sticky-storytelling');

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      const getMetrics = (el: HTMLElement | null) => {
        if (!el) return { top: 0, height: 0 };
        const rect = el.getBoundingClientRect();
        return {
          top: rect.top + scrollTop,
          height: rect.height,
        };
      };

      heroMetrics = getMetrics(heroEl as HTMLElement);
      storyMetrics = getMetrics(storyEl as HTMLElement);
      journeyMetrics = getMetrics(journeyEl as HTMLElement);
      entersMetrics = getMetrics(entersEl as HTMLElement);
      stickyMetrics = getMetrics(stickyEl as HTMLElement);
    };

    measureElements();
    // Remeasure on resize and periodically under a slow interval in case images or lazy components shift the layout
    window.addEventListener('resize', measureElements);
    const measureInterval = setInterval(measureElements, 1500);

    let ticked = false;
    const handleScroll = () => {
      if (!ticked) {
        window.requestAnimationFrame(() => {
          const scrollY = window.pageYOffset || document.documentElement.scrollTop;
          const viewportHeight = window.innerHeight;

          let heroProgress = 0;
          let storyProgress = 0;
          let journeyProgress = 0;
          let entersProgress = 0;
          let activeSection = 'hero';

          // 1. Hero
          if (heroMetrics.height > 0) {
            const heroRectTop = heroMetrics.top - scrollY;
            const heroRectBottom = heroMetrics.top + heroMetrics.height - scrollY;
            heroProgress = Math.min(Math.max(-heroRectTop / heroMetrics.height, 0), 1);
            if (heroRectBottom > 0) {
              activeSection = 'hero';
            }
          }

          // 2. Story
          if (storyMetrics.height > 0) {
            const storyRectTop = storyMetrics.top - scrollY;
            const storyRectBottom = storyMetrics.top + storyMetrics.height - scrollY;
            const range = storyMetrics.height - viewportHeight;
            storyProgress = range > 0 ? Math.min(Math.max(-storyRectTop / range, 0), 1) : 0;
            if (storyRectTop <= 0 && storyRectBottom > 0) {
              activeSection = 'story';
            }
          }

          // 3. Journey
          if (journeyMetrics.height > 0) {
            const journeyRectTop = journeyMetrics.top - scrollY;
            const journeyRectBottom = journeyMetrics.top + journeyMetrics.height - scrollY;
            const range = journeyMetrics.height - viewportHeight;
            journeyProgress = range > 0 ? Math.min(Math.max(-journeyRectTop / range, 0), 1) : 0;
            if (journeyRectTop <= 0 && journeyRectBottom > 0) {
              activeSection = 'journey';
            }
          }

          // 4. Enters
          if (entersMetrics.height > 0) {
            const entersRectTop = entersMetrics.top - scrollY;
            const entersRectBottom = entersMetrics.top + entersMetrics.height - scrollY;
            const range = entersMetrics.height - viewportHeight;
            entersProgress = range > 0 ? Math.min(Math.max(-entersRectTop / range, 0), 1) : 0;
            if (entersRectTop <= 0 && entersRectBottom > 0) {
              activeSection = 'enters';
            }
          }

          // 5. Sticky/Informational
          if (stickyMetrics.height > 0) {
            const stickyRectTop = stickyMetrics.top - scrollY;
            if (stickyRectTop < viewportHeight) {
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

          ticked = false;
        });
        ticked = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial run

    return () => {
      clearInterval(measureInterval);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', measureElements);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Base coordinates limits based on responsive views
  const isMobile = windowWidth < 640;
  const maxSwingX = isMobile ? 12 : 25; // swing boundaries
  const maxSwingY = isMobile ? 10 : 18;

  // Define variables that change dynamically according to refined story stages
  let x = 0; // translation percentage of viewport width
  let y = 0; // translation percentage of viewport height
  let size = isMobile ? 240 : 380;
  let opacity = 0.25;
  let filterBrightness = 80;
  let filterContrast = 100;
  let glowColor = '#7C3AED'; // Royal Purple default
  let trailScale = 1.0;
  let trailOpacity = 0.0;

  const { activeSection, heroProgress, storyProgress, journeyProgress, entersProgress } = scrollStats;

  // Real-time organic float calculation (Lissajous-inspired soft drift)
  const hoverX = Math.sin(time * 0.8) * (isMobile ? 0.8 : 1.5);
  const hoverY = Math.cos(time * 0.6) * (isMobile ? 0.6 : 1.2);

  if (activeSection === 'hero') {
    // PHASE 1 — ORIGIN
    // perfectly centered, subtle breathing, low mysterious opacity, not active yet
    x = 0;
    y = 0;
    size = isMobile ? 230 : 350;
    opacity = 0.22 - heroProgress * 0.04; // subtle holding potential
    filterBrightness = 75;
    trailOpacity = 0.0;
  } 
  else if (activeSection === 'story') {
    // PHASE 2 — STORY INTRODUCTION SEQUENCE (Imagine, Create, Build, Scale, Lead, Dominate)
    
    if (storyProgress < 0.33) {
      // PHASE 2A — EXPLORATION ("Imagine" & "Create")
      // Drifts to lower left. Organic, searching movement. Slightly larger, deeper violet glow.
      const p = storyProgress / 0.33;
      
      // Interpolate center -> lower-left
      x = -maxSwingX * 0.95 * p;
      y = maxSwingY * 0.85 * p;
      
      size = (isMobile ? 230 : 350) + p * (isMobile ? 30 : 50);
      opacity = 0.22 + p * 0.28; // builds up
      filterBrightness = 75 + p * 20; // 75 -> 95
      glowColor = '#6D28D9'; // slightly deeper purple
      trailOpacity = p * 0.15; // starting trail hint
      trailScale = 1.05;
    } 
    else if (storyProgress < 0.39) {
      // SUSPENSE / RETENTION PAUSE (Hold just before the colossal sweep)
      // Creates a physical deceleration range between key stages to let text register
      x = -maxSwingX * 0.95;
      y = maxSwingY * 0.85;
      size = isMobile ? 260 : 400;
      opacity = 0.50;
      filterBrightness = 95;
      trailOpacity = 0.15;
      trailScale = 1.1;
    }
    else if (storyProgress < 0.76) {
      // PHASE 2B — DISCOVERY ("Build", "Scale", "Lead")
      // The dramatic sweeping momentum toward upper-left/upper-right. Extremely bright, energetic.
      const p = (storyProgress - 0.39) / 0.37; // local local normalize
      
      // Elegant curved sweep path using sin/cos interpolation to form an arc avoiding the header titles
      const startX = -maxSwingX * 0.95;
      const startY = maxSwingY * 0.85;
      const endX = maxSwingX * 1.05;
      const endY = -maxSwingY * 1.05;
      
      // Linear component with a cinematic bezier arc lift
      x = startX + (endX - startX) * p;
      // Add a slight arc upwards to avoid textual elements and look organic
      const arcLift = Math.sin(p * Math.PI) * (isMobile ? -4 : -8);
      y = startY + (endY - startY) * p + arcLift;
      
      size = (isMobile ? 260 : 400) + p * (isMobile ? 70 : 130); // scale max reaches ~530px
      opacity = 0.50 + p * 0.30; // very luminous/high presence
      filterBrightness = 95 + p * 40; // 95 -> 135
      filterContrast = 100 + p * 20;
      glowColor = '#8B5CF6'; // radiant neon violet
      
      // Intense atmospheric aura trailing representation
      trailOpacity = 0.45 + p * 0.15;
      trailScale = 1.25;
    } 
    else {
      // PHASE 2C — CLARITY ("Dominate")
      // After dramatic sweep, it slows down and docks at center-right. Shifting from ambition to mastery.
      const p = (storyProgress - 0.76) / 0.24;
      
      const startX = maxSwingX * 1.05;
      const startY = -maxSwingY * 1.05;
      const endX = maxSwingX * 0.65; // settled center-right
      const endY = maxSwingY * 0.10; // slightly above vertical center
      
      x = startX + (endX - startX) * p;
      y = startY + (endY - startY) * p;
      
      // Reduce scale and brightness slightly, showing precision, absolute coordination
      size = (isMobile ? 330 : 530) - p * (isMobile ? 50 : 80);
      opacity = 0.80 - p * 0.25; // 0.8 -> 0.55
      filterBrightness = 135 - p * 30; // 135 -> 105
      glowColor = '#7C3AED';
      trailOpacity = 0.60 * (1 - p); // fade out discovery trailing
      trailScale = 1.25 - p * 0.15;
    }
  } 
  else if (activeSection === 'journey') {
    // PHASE 3 — TRANSITION TO ENVIRONMENTAL ATMOSPHERE (GRID SECTION)
    // Drift to upper-left edge and fade slowly, transforming into quiet environmental backlighting.
    const p = Math.min(journeyProgress * 3.0, 1.0); // fast transition within the top of the grid section
    
    const startX = maxSwingX * 0.65;
    const startY = maxSwingY * 0.10;
    const endX = -maxSwingX * 0.90; // upper-left top edge
    const endY = -maxSwingY * 0.80;
    
    x = startX + (endX - startX) * p;
    y = startY + (endY - startY) * p;
    
    // Scale becomes smaller and humble
    size = (isMobile ? 280 : 450) - p * (isMobile ? 60 : 110);
    
    // Gradual decrease to a clean static energy: opacity between 0.12 and 0.22 (perfectly aligned!)
    opacity = 0.55 - p * 0.38; // 0.55 -> 0.17
    filterBrightness = 105 - p * 30; // 105 -> 75
    glowColor = '#4C1D95'; // deep dark violet tone, extremely subtle
    trailOpacity = 0.05;
    trailScale = 1.0;
  } 
  else if (activeSection === 'enters') {
    // PHASE 4 — GBA ENTERS CENTER ENGINE LOCK
    // The orb slowly pulls from the upper-left quadrant to absolute center behind GBA shield graphic
    const backToCenter = Math.min(entersProgress * 1.6, 1);
    
    x = (-maxSwingX * 0.90) * (1 - backToCenter);
    y = (-maxSwingY * 0.80) * (1 - backToCenter);
    
    size = (isMobile ? 220 : 340) + backToCenter * (isMobile ? 160 : 220); // expands dynamically
    opacity = 0.17 + backToCenter * 0.48; // expands to prominent engine status
    filterBrightness = 75 + backToCenter * 55;
    filterContrast = 100 + backToCenter * 20;
    glowColor = '#8B5CF6';
    trailOpacity = backToCenter * 0.40;
    trailScale = 1.15;
  } 
  else {
    // PHASE 5 — INFORMATIONAL / FOOTER QUIETUDE
    opacity = 0;
    trailOpacity = 0;
  }

  // Set up spring-interpolated coordinate sets to guarantee professional cinematic friction/weight
  // Stiffness & Damping values tuned carefully to feel weighted rather than computerized
  const primarySpringConfig = { damping: 45, stiffness: 45 }; // slightly heavier, luxury drift feel
  const trailingSpringConfig = { damping: 55, stiffness: 18 }; // deeper damping, slower response for the trails

  const springX = useSpring(x + hoverX, primarySpringConfig);
  const springY = useSpring(y + hoverY, primarySpringConfig);
  const springSize = useSpring(size, primarySpringConfig);
  const springOpacity = useSpring(opacity, primarySpringConfig);
  const springBrightness = useSpring(filterBrightness, primarySpringConfig);

  // Trailing springs specifically tuned to lag behind the primary movement to paint the kinetic momentum
  const trailSpringX = useSpring(x, trailingSpringConfig);
  const trailSpringY = useSpring(y, trailingSpringConfig);
  const trailSpringOpacity = useSpring(trailOpacity, trailingSpringConfig);

  // Direct transform bindings to view% for Framer Motion accelerated layer
  const viewX = useTransform(springX, (val) => `${val}vw`);
  const viewY = useTransform(springY, (val) => `${val}vh`);

  const trailViewX = useTransform(trailSpringX, (val) => `${val}vw`);
  const trailViewY = useTransform(trailSpringY, (val) => `${val}vh`);

  useEffect(() => {
    springX.set(x + hoverX);
    springY.set(y + hoverY);
    springSize.set(size);
    springOpacity.set(opacity);
    springBrightness.set(filterBrightness);

    trailSpringX.set(x);
    trailSpringY.set(y);
    trailSpringOpacity.set(trailOpacity);
  }, [x, y, size, opacity, filterBrightness, trailOpacity, hoverX, hoverY, activeSection]);

  return (
    <div className="fixed inset-0 z-[2] flex items-center justify-center pointer-events-none select-none overflow-hidden">
      
      {/* 
        SECONDARY KINETIC TRAIL / ATMOSPHERIC DISTORTION
        This element lags behind the primary orb with a different spring configuration (heavier damping, slow response),
        rendering as a blurred atmospheric echo during high-velocity sweep stages.
      */}
      <motion.div
        style={{
          x: trailViewX,
          y: trailViewY,
          width: springSize,
          height: springSize,
          opacity: trailSpringOpacity,
          scale: trailScale,
          filter: 'blur(90px) opacity(0.8)',
          backgroundColor: glowColor,
        }}
        className="absolute rounded-full pointer-events-none select-none z-[1] mix-blend-color-dodge"
      />

      {/* 
        PRIMARY FLOATING APP ORB
        The focal narrative object containing the revolving 3D high-fidelity kinetic source.
      */}
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
        <ThreeEnergyOrb
          activeSection={activeSection}
          heroProgress={heroProgress}
          storyProgress={storyProgress}
          journeyProgress={journeyProgress}
          entersProgress={entersProgress}
          isMobile={isMobile}
        />

        {/* Dynamic primary ambient inner boundary glow */}
        <div 
          className="absolute inset-[15%] mix-blend-color-dodge rounded-full filter blur-[70px] pointer-events-none animate-pulse-soft"
          style={{ 
            animationDuration: '5s',
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 100%)` 
          }}
        />
      </motion.div>
    </div>
  );
}

