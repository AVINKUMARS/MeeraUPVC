import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-choose-us' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white p-1 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <img src="/images/logo.png" alt="Meera UPVC Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className={`text-lg font-bold leading-none transition-colors ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  Meera UPVC
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                  isScrolled ? 'text-amber-600' : 'text-amber-400'
                }`}>
                  & Interiors
                </span>
              </div>
            </a>           {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-semibold transition-colors hover:text-amber-500 ${
                    isScrolled ? 'text-slate-700' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919901065174"
                className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                  isScrolled ? 'text-slate-700 hover:text-amber-600' : 'text-white/90 hover:text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                +91 99010 65174
              </a>
              <Button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-slate-900 border-b-2 border-amber-500 hover:bg-slate-800 text-white font-bold px-5 animate-shimmer"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-xl transition-transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-20 pb-6 px-6">
            {/* Mobile Nav Links */}
            <div className="flex-1 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-3 px-4 text-slate-700 font-bold rounded-lg hover:bg-amber-50 hover:text-amber-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="space-y-3 pt-6 border-t border-slate-200">
              <a
                href="tel:+919901065174"
                className="flex items-center justify-center gap-2 py-3 px-4 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 99010 65174
              </a>
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full bg-slate-900 border-b-2 border-amber-500 hover:bg-slate-800 text-white font-bold py-6 overflow-hidden animate-shimmer"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
