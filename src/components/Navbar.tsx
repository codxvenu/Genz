import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: 'STORY', target: 'scene-scroll-story' },
    { label: 'JOURNEY', target: 'scene-business-journey' },
    { label: 'GBA WAY', target: 'scene-gba-enters' },
    { label: 'SERVICES', target: 'scene-sticky-storytelling' },
    { label: 'CLARITY', target: 'scene-transformation' },
    { label: 'METRICS', target: 'scene-impact' }
  ];

  return (
    <nav
      id="main-navigation-bar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/75 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand / Identity */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-purple-500/30 text-white bg-black hover:bg-neutral-900 transition-all duration-300">
              <span className="font-serif text-sm font-normal text-white group-hover:rotate-12 transition-all">G</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-wider text-white font-normal leading-none">GBA</span>
              <span className="font-mono text-[7px] tracking-[0.25em] text-[#A1A1AA] uppercase mt-0.5 font-bold">GEN-Z BUSINESS AGENCY</span>
            </div>
          </div>
 
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <button 
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="text-[9px] font-mono text-zinc-400 hover:text-white transition-colors tracking-[0.2em] cursor-pointer font-bold"
              >
                {link.label}
              </button>
            ))}
          </div>
 
          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenBooking}
              className="group flex items-center space-x-1.5 px-5 py-2 w-auto bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-[9px] font-mono rounded-full tracking-widest font-bold uppercase transition-all shadow-md shadow-purple-900/40 cursor-pointer"
            >
              <span>Book Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
 
          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-4 py-1.5 text-[9px] font-mono text-zinc-300 hover:text-white border border-white/10 bg-white/5 rounded-full transition-all cursor-pointer font-bold tracking-widest"
            >
              {mobileMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
 
        </div>
      </div>
 
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/5 py-8 px-6 space-y-6 animate-fade-in">
          <div className="flex flex-col space-y-5">
            {navLinks.map(link => (
              <button 
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="text-left py-1 text-[10px] font-mono text-zinc-400 hover:text-white transition-colors tracking-widest uppercase font-bold"
              >
                {link.label}
              </button>
            ))}
            
            <div className="pt-6 border-t border-white/5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center space-x-1.5 py-3.5 bg-[#7C3AED] text-white text-[10px] font-mono rounded-full font-bold tracking-widest uppercase transition-all cursor-pointer"
              >
                <span>BOOK STRATEGY CALL</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
