import { useState, useEffect } from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

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
      const offset = 80; // height of fixed navbar
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
          ? 'bg-white/85 backdrop-blur-md border-b border-purple-100/50 py-3.5 shadow-soft' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand / Identity */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-violet-600 text-white shadow-md group-hover:bg-violet-700 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-white group-hover:rotate-12 transition-all duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-xl tracking-tight text-zinc-900 font-extrabold leading-none">GBA</span>
              <span className="font-mono text-[9px] tracking-wider text-violet-600 uppercase mt-0.5 font-bold">Gen-Z Business Agency</span>
            </div>
          </div>
 
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <button 
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="text-[10px] font-mono text-zinc-600 hover:text-violet-600 transition-colors tracking-widest cursor-pointer font-extrabold"
              >
                {link.label}
              </button>
            ))}
          </div>
 
          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenBooking}
              className="group flex items-center space-x-1.5 px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-mono rounded-full tracking-widest font-bold uppercase transition-all shadow-md shadow-violet-200 cursor-pointer"
            >
              <span>Book Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-violet-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
 
          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 px-4 py-1.5 text-xs font-mono text-zinc-700 hover:text-violet-600 border border-violet-100 bg-violet-50/50 hover:bg-violet-100/50 rounded-full transition-all cursor-pointer font-bold"
            >
              {mobileMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
 
        </div>
      </div>
 
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-violet-100 py-6 px-4 space-y-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <button 
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="text-left py-1 text-xs font-mono text-zinc-600 hover:text-violet-600 transition-colors tracking-widest uppercase font-extrabold"
              >
                {link.label}
              </button>
            ))}
            
            <div className="pt-4 border-t border-purple-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center space-x-1.5 py-3.5 bg-violet-600 text-white text-xs font-mono rounded-full font-bold tracking-widest uppercase transition-all cursor-pointer"
              >
                <span>BOOK STRATEGY CALL</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-purple-100" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
