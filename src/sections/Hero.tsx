import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';

const WHATSAPP_NUMBER = '919901065174'; // Official WhatsApp number
const WHATSAPP_MESSAGE = 'Hello! I would like to get a free consultation for UPVC windows/doors.';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 px-4 sm:px-6 lg:px-8 xl:px-12"
      aria-label="Hero Section"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_lifestyle.jpg"
          alt="Elegant lifestyle in a luxury UPVC interior"
          className="w-full h-full object-cover scale-110"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="grain-overlay" />
      </div>

      {/* Architectural Background Lines */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto py-20 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Premium Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-5 py-2 glass rounded-full mb-8 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-white/90 text-xs font-bold tracking-widest uppercase">
                Specialist in Interior Works & UPVC Solutions
              </span>
            </div>

            {/* Headline */}
            <h1 
              className={`text-4xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 transition-all duration-1000 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Interiors <br />
              <span className="text-gold-gradient">Cheaper than Wood</span>
            </h1>

            {/* Subtext */}
            <p 
              className={`max-w-xl text-lg sm:text-xl text-white/70 mb-12 leading-relaxed transition-all duration-1000 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              From premium PVC bathroom doors to designer false ceilings and kitchen cabinets. 
              Elevate your home with high-durability, water-proof, and aesthetic solutions 
              that redefine modern interior luxury.
            </p>

            {/* CTAs */}
            <div 
              className={`flex flex-col sm:flex-row gap-5 mb-16 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group relative h-16 px-10 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-lg rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] border-0 overflow-hidden shadow-[0_20px_40px_-15px_rgba(245,158,11,0.5)]"
              >
                <div className="relative z-10 flex items-center gap-2">
                  Get Exclusive Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsAppClick}
                className="h-16 px-10 glass border-white/10 text-white hover:bg-white/10 font-bold text-lg rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] group"
              >
                <MessageCircle className="mr-2 w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform" />
                WhatsApp Consultation
              </Button>
            </div>

            {/* Premium Proof Board */}
            <div 
              className={`flex flex-wrap items-center gap-10 pt-10 border-t border-white/10 transition-all duration-1000 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 shadow-xl overflow-hidden glass hover:translate-y-[-4px] transition-transform cursor-pointer">
                      <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="Customer" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-slate-900 shadow-xl flex items-center justify-center glass text-xs font-bold text-amber-500">
                    +5k
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-white font-bold">4.9/5</span>
                    <div className="flex text-amber-500">
                      {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-xs">★</span>)}
                    </div>
                  </div>
                  <span className="text-white/50 text-xs font-medium uppercase tracking-tight">Verified Homeowners</span>
                </div>
              </div>

              <div className="h-10 w-px bg-white/10 hidden md:block" />

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <span className="text-white font-black text-xl italic leading-none">15</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold leading-tight uppercase tracking-widest text-[10px]">Years of</span>
                  <span className="text-amber-500 font-bold text-sm">Industrial Legacy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Decorative Visuals */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative h-[700px] w-full flex items-center justify-center">
              
              {/* Primary Detail Card */}
              <div 
                className={`absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[380px] aspect-[3/4] rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] transition-all duration-[1500ms] cubic-bezier(0.16, 1, 0.3, 1) ${
                  isLoaded ? 'opacity-100 translate-y-[-50px] rotate-[-2deg]' : 'opacity-0 translate-y-20 rotate-[10deg]'
                }`}
              >
                <img src="/images/hero_detail_handle.jpg" alt="Detail" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="h-1 w-12 bg-amber-500 mb-4" />
                  <h3 className="text-white font-bold text-2xl">Refined Precision</h3>
                  <p className="text-white/60 text-sm">Every handle is a masterpiece of ergonomics and gold-finish luxury.</p>
                </div>
              </div>

              {/* Secondary Floating Card */}
              <div 
                className={`absolute z-10 top-[10%] right-[-10%] w-[280px] aspect-square rounded-[30px] overflow-hidden glass-card border-white/10 shadow-2xl transition-all duration-[1800ms] delay-200 ${
                  isLoaded ? 'opacity-100 translate-x-0 rotate-[6deg]' : 'opacity-0 translate-x-20 rotate-[12deg]'
                }`}
              >
                <img src="/images/hero_detail_seal.jpg" alt="Detail" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay" />
              </div>

              {/* Quality Badge Overlay */}
              <div 
                className={`absolute z-30 bottom-[15%] left-[-10%] p-6 glass-card rounded-3xl transition-all duration-1000 delay-500 ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <CheckCircle2 className="w-8 h-8 text-slate-950" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-black text-2xl">100%</span>
                      <span className="text-amber-500 font-bold text-[10px] uppercase tracking-widest">Certified</span>
                    </div>
                    <p className="text-white/60 text-xs font-medium">Weather-Proof Warranty</p>
                  </div>
                </div>
              </div>

              {/* Decorative Geometric Rings */}
              <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <div className="w-[140%] aspect-square rounded-full border border-white/5 animate-[pulse_8s_infinite]" />
                <div className="absolute w-[110%] aspect-square rounded-full border border-white/5 animate-[pulse_6s_infinite_reverse]" />
                <div className="absolute w-[80%] aspect-square rounded-full border border-white/10" />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 transition-opacity duration-1000 delay-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={scrollToServices}
          className="group flex flex-col items-center gap-2"
          aria-label="Scroll to services"
        >
          <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-amber-500 transition-colors">Discover More</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1.5 group-hover:border-amber-500/50 transition-colors">
            <div className="w-1 h-3 bg-white/40 rounded-full animate-bounce group-hover:bg-amber-500" />
          </div>
        </button>
      </div>
    </section>
  );
}
