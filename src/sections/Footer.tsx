import { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  Twitter,
  ArrowUp,
  MessageCircleMore
} from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Our Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  { label: 'UPVC Windows', href: '#services' },
  { label: 'UPVC Doors', href: '#services' },
  { label: 'Modular Interiors', href: '#services' },
  { label: 'Custom Design', href: '#services' },
  { label: 'Installation', href: '#services' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-slate-900 text-white" aria-label="Footer">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-white rounded-xl p-1.5 shadow-lg shadow-amber-500/10 group-hover:scale-110 transition-transform duration-300">
                  <img src="/images/logo.png" alt="Meera UPVC Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-white leading-none">
                    Meera <span className="text-amber-500">UPVC</span>
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500/80 mt-1">
                    & Interiors
                  </span>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-sm text-lg">
                Specialist in premium interior works and UPVC solutions. 
                Transforming Bangalore homes with durable, wood-alternative 
                craftsmanship since [Year].
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6"> {/* Added mt-6 for spacing */}
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-slate-950 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-amber-500 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-slate-400 hover:text-amber-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-amber-500 transition-colors" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919901065174"
                  className="flex items-start gap-3 text-slate-400 hover:text-amber-500 transition-colors"
                >
                  <PhoneCall className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+91 99010 65174</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@upvcinteriors.com"
                  className="flex items-start gap-3 text-slate-400 hover:text-amber-500 transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>info@upvcinteriors.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  #72, 4th Main, 2nd Cross, Gangamma Temple,<br />
                  G.M. Palya, Bangalore-560 075
                </span>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-slate-800 rounded-xl">
              <h5 className="font-semibold text-white mb-2">Business Hours</h5>
              <p className="text-slate-400 text-sm">
                Mon - Sat: 9:00 AM - 7:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              {currentYear} Meera UPVC & Design. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-slate-500 hover:text-amber-500 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-500 hover:text-amber-500 text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons Group */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919901065174"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-500/40 flex items-center justify-center transition-all duration-500 hover:scale-110 group relative ${
            showScrollTop ? 'translate-y-0' : 'translate-y-[60px]'
          }`}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircleMore className="w-6 h-6 group-hover:scale-110 transition-transform animate-pulse" />
          <span className="absolute right-14 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap border border-slate-100 pointer-events-none">
            WhatsApp Us
          </span>
        </a>

        {/* Call Button */}
        <a
          href="tel:+919901065174"
          className={`w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/40 flex items-center justify-center transition-all duration-500 hover:scale-110 group relative ${
            showScrollTop ? 'translate-y-0' : 'translate-y-[60px]'
          }`}
          aria-label="Call Us"
        >
          <PhoneCall className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="absolute right-14 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap border border-slate-100 pointer-events-none">
            Call Now
          </span>
        </a>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`w-12 h-12 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-full shadow-lg shadow-amber-500/30 flex items-center justify-center transition-all duration-500 p-2 relative group ${
            showScrollTop 
              ? 'translate-y-0 opacity-100 pointer-events-auto scale-100' 
              : 'translate-y-10 opacity-0 pointer-events-none scale-0'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
          <span className="absolute right-14 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap border border-slate-100 pointer-events-none">
            Back to Top
          </span>
        </button>
      </div>
    </footer>
  );
}