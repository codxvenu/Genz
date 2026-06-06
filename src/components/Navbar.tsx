import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';

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

  return (
    <nav
      id="main-navigation-bar"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/5 py-4 shadow-xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand / Identity */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-white/5 border border-white/10 text-white shadow-inner group-hover:border-white/20 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-white group-hover:rotate-12 transition-all duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-wide text-white leading-none">Gen-Z</span>
              <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase mt-0.5 font-bold">Agency</span>
            </div>
          </div>
 
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services-section')}
              className="text-xs font-mono text-zinc-400 hover:text-white transition-colors tracking-widest cursor-pointer"
            >
              SERVICES
            </button>
            <button 
              onClick={() => scrollToSection('matrix-section')}
              className="text-xs font-mono text-zinc-400 hover:text-white transition-colors tracking-widest cursor-pointer"
            >
              WHY US
            </button>
            <button 
              onClick={() => scrollToSection('diagram-section')}
              className="text-xs font-mono text-zinc-400 hover:text-white transition-colors tracking-widest cursor-pointer"
            >
              FLOW
            </button>
            <button 
              onClick={() => scrollToSection('timeline-section')}
              className="text-xs font-mono text-zinc-400 hover:text-white transition-colors tracking-widest cursor-pointer"
            >
              PROCESS
            </button>
            <button 
              onClick={() => scrollToSection('testimonials-section')}
              className="text-xs font-mono text-zinc-400 hover:text-white transition-colors tracking-widest cursor-pointer"
            >
              TESTIMONIALS
            </button>
          </div>
 
          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenBooking}
              className="group flex items-center space-x-1.5 px-5 py-2.5 glass hover:bg-white text-zinc-300 hover:text-black border border-white/10 hover:border-white text-xs font-mono rounded-full tracking-widest font-bold uppercase transition-all cursor-pointer"
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover:text-black transition-colors" />
            </button>
          </div>
 
          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 px-4 text-xs font-mono text-zinc-400 hover:text-white border border-white/10 bg-white/3 hover:bg-white/5 rounded-full transition-all cursor-pointer"
            >
              {mobileMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
 
        </div>
      </div>
 
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10 py-6 px-4 space-y-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('services-section')}
              className="text-left py-1 text-sm font-mono text-zinc-400 hover:text-white transition-colors tracking-widest uppercase"
            >
              SERVICES
            </button>
            <button 
              onClick={() => scrollToSection('matrix-section')}
              className="text-left py-1 text-sm font-mono text-zinc-400 hover:text-white transition-colors tracking-widest uppercase"
            >
              WHY US
            </button>
            <button 
              onClick={() => scrollToSection('diagram-section')}
              className="text-left py-1 text-sm font-mono text-zinc-400 hover:text-white transition-colors tracking-widest uppercase"
            >
              FLOW
            </button>
            <button 
              onClick={() => scrollToSection('timeline-section')}
              className="text-left py-1 text-sm font-mono text-zinc-400 hover:text-white transition-colors tracking-widest uppercase"
            >
              PROCESS
            </button>
            <button 
              onClick={() => scrollToSection('testimonials-section')}
              className="text-left py-1 text-sm font-mono text-zinc-400 hover:text-white transition-colors tracking-widest uppercase"
            >
              TESTIMONIALS
            </button>
            
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center space-x-1.5 py-3.5 bg-white text-black text-xs font-mono rounded-full font-bold tracking-widest uppercase transition-all cursor-pointer"
              >
                <span>BOOK CONSULTATION</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
