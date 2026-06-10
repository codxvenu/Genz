import { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform, useMotionTemplate } from 'motion/react';

export default function GlobalCinematicOrb() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  
  // High-performance springs for cinematic luxury feel
  const springConfig = { stiffness: 28, damping: 14, mass: 1.3 };
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const targetWidth = useMotionValue(0);
  const targetHeight = useMotionValue(0);
  const targetOpacity = useMotionValue(0.4); // Start with safe initial opacity
  const targetScale = useMotionValue(0.9);
  const targetGlowIntensity = useMotionValue(0.2);

  const x = useSpring(targetX, springConfig);
  const y = useSpring(targetY, springConfig);
  const width = useSpring(targetWidth, springConfig);
  const height = useSpring(targetHeight, springConfig);
  const opacity = useSpring(targetOpacity, { stiffness: 45, damping: 18 });
  const scale = useSpring(targetScale, springConfig);
  const glowIntensity = useSpring(targetGlowIntensity, springConfig);

  // Background spotlight state: only active when on storytelling targets (like Scene 5)
  const [activeTheme, setActiveTheme] = useState<'none' | 'normal' | 'large' | 'highlight'>('normal');
  const [glowColor, setGlowColor] = useState('rgba(124, 58, 237, 0.32)'); // core purple purple-500
  const [showBackdropMask, setShowBackdropMask] = useState(false);

  // Tracking refs for dual coordinate blending
  const activeAnchor = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastMousePos = useRef<{ x: number; y: number } | null>(null);
  const isMouseMoving = useRef<boolean>(false);
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);

  // Programmatic video playing to bypass modern browser autoplay blocks
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      
      const playVideo = async () => {
        try {
          await video.play();
          setVideoLoaded(true);
        } catch (err) {
          console.warn("Autoplay block or missing codec, playing on user interaction. Error:", err);
          
          // Fallback trigger: play on any mouse movement, touch, or click
          const forcePlay = () => {
            video.play()
              .then(() => {
                setVideoLoaded(true);
                cleanupListeners();
              })
              .catch(() => {});
          };
          
          const cleanupListeners = () => {
            window.removeEventListener('click', forcePlay);
            window.removeEventListener('scroll', forcePlay);
            window.removeEventListener('touchstart', forcePlay);
          };
          
          window.addEventListener('click', forcePlay, { passive: true });
          window.addEventListener('scroll', forcePlay, { passive: true });
          window.addEventListener('touchstart', forcePlay, { passive: true });
        }
      };
      
      playVideo();
    }
  }, [videoRef]);

  // Command to update coordinates based on current active control mode
  const updateOrbPosition = () => {
    if (isMouseMoving.current && lastMousePos.current) {
      targetX.set(lastMousePos.current.x);
      targetY.set(lastMousePos.current.y);
    } else {
      targetX.set(activeAnchor.current.x);
      targetY.set(activeAnchor.current.y);
    }
  };

  useEffect(() => {
    let lastTime = 0;
    
    const handleScrollAndResize = () => {
      const now = Date.now();
      if (now - lastTime < 16) {
        // approx 60fps limit
      }
      lastTime = now;

      // Find target components
      const targets = document.querySelectorAll('.orb-target');
      let bestTarget: HTMLElement | null = null;
      let minDistanceToCenter = Infinity;
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const viewportCenterY = viewportHeight / 2;

      targets.forEach(el => {
        const rect = el.getBoundingClientRect();
        
        // Is any part of target inside viewport?
        const isVisible = rect.bottom > 0 && rect.top < viewportHeight;
        if (isVisible) {
          const targetCenterY = rect.top + rect.height / 2;
          const distance = Math.abs(targetCenterY - viewportCenterY);
          
          if (distance < minDistanceToCenter) {
            minDistanceToCenter = distance;
            bestTarget = el as HTMLElement;
          }
        }
      });

      // Detect explicit fade-out zones (informational sections, calculator, testimonials, CTA)
      const fadeOutSectionIds = ['scene-impact', 'scene-genz-edge', 'scene-core-message', 'calculator-section-divider', 'scene-final-cta'];
      let isInsideFadeOutZone = false;
      
      fadeOutSectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section occupies the center of the viewport
          const isOccupyingCenter = rect.top < viewportCenterY && rect.bottom > viewportCenterY;
          if (isOccupyingCenter) {
            isInsideFadeOutZone = true;
          }
        }
      });

      if (isInsideFadeOutZone) {
        // Fade out completely inside informational, testimonial, or CTA sections to let the interface breathe
        targetOpacity.set(0);
        setShowBackdropMask(false);
        setActiveTheme('none');
      } else if (bestTarget) {
        const rect = bestTarget.getBoundingClientRect();
        const centerPX = rect.left + rect.width / 2;
        const centerPY = rect.top + rect.height / 2;
        
        // Read configuration attributes from target
        const scaleVal = parseFloat(bestTarget.getAttribute('data-orb-scale') || '1.0');
        const customOpacity = parseFloat(bestTarget.getAttribute('data-orb-opacity') || '0.65');
        const customGlow = bestTarget.getAttribute('data-orb-glow') || 'rgba(124, 58, 237, 0.32)';
        const theme = bestTarget.getAttribute('data-orb-theme') || 'normal';
        const maskActive = bestTarget.getAttribute('data-orb-mask') === 'true';

        // Update anchor position
        activeAnchor.current = { x: centerPX, y: centerPY };

        // Set dimensions & scale targets
        targetWidth.set(rect.width);
        targetHeight.set(rect.height);
        targetOpacity.set(customOpacity);
        targetScale.set(scaleVal);
        targetGlowIntensity.set(0.35);

        setGlowColor(customGlow);
        setActiveTheme(theme as any);
        setShowBackdropMask(maskActive);
      } else {
        // Safe default viewport centering
        activeAnchor.current = { x: viewportWidth / 2, y: viewportHeight / 2 };

        targetWidth.set(450);
        targetHeight.set(450);
        targetOpacity.set(0.35); // Keep visible during scroll gaps so it has high cinematic permanence
        targetScale.set(0.9);
        targetGlowIntensity.set(0.18);
        setGlowColor('rgba(124, 58, 237, 0.25)');
        setShowBackdropMask(false);
        setActiveTheme('normal');
      }

      // Refresh positions
      updateOrbPosition();
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      isMouseMoving.current = true;
      
      updateOrbPosition();

      // Clear previous timeout and start a fresh idle timer
      if (idleTimeout.current) {
        clearTimeout(idleTimeout.current);
      }
      
      idleTimeout.current = setTimeout(() => {
        isMouseMoving.current = false;
        updateOrbPosition();
      }, 1800); // 1.8 seconds of mouse stillness signals organic drift back to base content anchors
    };

    window.addEventListener('scroll', handleScrollAndResize, { passive: true });
    window.addEventListener('resize', handleScrollAndResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Run periodically to catch loaded assets
    const interval = setInterval(handleScrollAndResize, 250);
    
    // Trigger initial placement
    handleScrollAndResize();

    return () => {
      window.removeEventListener('scroll', handleScrollAndResize);
      window.removeEventListener('resize', handleScrollAndResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (idleTimeout.current) {
        clearTimeout(idleTimeout.current);
      }
      clearInterval(interval);
    };
  }, [targetX, targetY, targetWidth, targetHeight, targetOpacity, targetScale, targetGlowIntensity]);

  // Translate coordinates to center translation
  const tx = useTransform(x, (val) => `${val}px`);
  const ty = useTransform(y, (val) => `${val}px`);
  
  // Calculate radial background spotlight position for custom spotlight overlay mask
  const bgSpotlightX = useTransform(x, (val) => `${val}px`);
  const bgSpotlightY = useTransform(y, (val) => `${val}px`);
  const spotRadius = useTransform(scale, (s) => `${240 * s}px`);

  // Mask style: is used to create a beautiful overlay behind headlines but lighting up the spotlight area
  const clipPathStyle = useMotionTemplate`radial-gradient(circle ${spotRadius} at ${bgSpotlightX} ${bgSpotlightY}, transparent 0%, rgba(0, 0, 0, 0.9) 110px, rgba(0, 0, 0, 0.95) 100%)`;

  return (
    <>
      {/* 1. CINEMATIC BLACKOUT BACKDROP SPOTLIGHT SCREEN 
          Only renders when a target explicitly requests high-contrast focus, darkening other visuals.
      */}
      <motion.div
        className="fixed inset-0 pointer-events-none select-none z-10 duration-[1200ms] transition-all ease-out"
        style={{
          opacity: showBackdropMask ? 1 : 0,
          background: 'rgba(0, 0, 0, 0.95)',
          WebkitMaskImage: clipPathStyle,
          maskImage: clipPathStyle,
        }}
      />

      {/* 2. THE FLOATING CINEMATIC ORB CONTAINER */}
      <motion.div
        ref={containerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: useTransform(x, (val) => val - 250), // offset half width (diameter/2)
          y: useTransform(y, (val) => val - 250), // offset half height
          width: 500,
          height: 500,
          opacity: opacity,
          scale: scale,
          zIndex: 12, // Above typical background designs, but behind interactive z-20 elements
        }}
        className="pointer-events-none select-none flex items-center justify-center mix-blend-screen"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Large soft atmospheric radiant blur backdrop */}
          <motion.div 
            style={{
              background: glowColor,
              filter: 'blur(95px)',
            }}
            className="absolute inset-[10%] rounded-full opacity-60 animate-pulse transition-all duration-[1500ms]"
          />

          {/* Core CSS animated high-tech holographic sphere as visual reinforcement */}
          <div className="absolute w-[220px] h-[220px] rounded-full flex items-center justify-center pointer-events-none select-none">
            {/* Plasma glowing nebula core */}
            <div 
              className="absolute inset-4 rounded-full opacity-40 blur-[24px] mix-blend-screen animate-pulse"
              style={{
                background: 'radial-gradient(circle, #c084fc 20%, #7c3aed 50%, transparent 100%)',
                animationDuration: '3.5s'
              }}
            />
            {/* Inner dynamic stellar ring mapping outer borders */}
            <div className="absolute inset-8 rounded-full border border-purple-500/15 animate-ping opacity-35" style={{ animationDuration: '6s' }} />
            <div className="absolute inset-14 rounded-full border border-purple-400/20 animate-pulse opacity-50" style={{ animationDuration: '4s' }} />
          </div>

          {/* Core high-end video element */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => {
              setVideoLoaded(true);
              setVideoError(false);
            }}
            onError={() => {
              console.error("Failed to decode video file revolving_orb.mp4");
              setVideoError(true);
            }}
            className="w-[85%] h-[85%] object-contain select-none pointer-events-none filter brightness-[1.12] contrast-105 mix-blend-screen z-10"
            referrerPolicy="no-referrer"
          >
            <source src="/revolving_orb.mp4" type="video/mp4" />
            <source src="/assets/revolving_orb.mp4" type="video/mp4" />
          </video>

          {/* Double concentric design rings to add premium detailing, matching active storytelling stage */}
          {activeTheme === 'large' && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.15, opacity: 0.22 }}
              className="absolute inset-10 border border-[#7C3AED]/40 rounded-full border-dashed animate-spin"
              style={{ animationDuration: '40s' }}
            />
          )}

          {activeTheme === 'large' && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1.35, opacity: 0.12 }}
              className="absolute inset-4 border border-zinc-500/20 rounded-full"
            />
          )}
        </div>
      </motion.div>
    </>
  );
}
