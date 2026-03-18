import { useState, useEffect } from 'react';
import { X, Gift, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function OfferPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setShouldRender(true);
      // Small delay to trigger entry animation
      setTimeout(() => setIsVisible(true), 100);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    // Remove from DOM after exit animation
    setTimeout(() => setShouldRender(false), 500);
  };

  const handleClaimOffer = () => {
    const message = encodeURIComponent("Hello Meera UPVC! I stayed on your site and saw the 50% Launch Offer. I'd like to claim it!");
    window.open(`https://wa.me/919901065174?text=${message}`, '_blank');
    closePopup();
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 bg-slate-900/40 backdrop-blur-sm ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div 
        className={`relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 transform ${
          isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
        }`}
      >
        {/* Close Button */}
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-amber-500 hover:text-white transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Visual Side */}
          <div className="md:w-1/3 bg-amber-500 p-8 flex flex-col items-center justify-center text-slate-900 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            </div>
            
            {/* Branding in Popup */}
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-white rounded-2xl p-2 shadow-xl mx-auto mb-3">
                <img src="/images/logo.png" alt="Meera UPVC" className="w-full h-full object-contain" />
              </div>
              <div className="text-sm font-black uppercase tracking-widest leading-none">
                Meera <span className="text-white">UPVC</span>
              </div>
            </div>

            <Gift className="w-12 h-12 mb-4 animate-bounce text-slate-900/80" />
            <div className="text-4xl font-black leading-none">50%</div>
            <div className="text-sm font-bold uppercase tracking-wider">Discount</div>
          </div>
          {/* Content Side */}
          <div className="md:w-2/3 p-8 lg:p-10">
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
              Limited Time Launch Offer
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Unlock Your <span className="text-amber-500">Dream Home</span> Savings!
            </h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Get up to <span className="font-bold text-slate-900">50% OFF</span> on your first UPVC and Interior project execution. 
              Our specialists are ready to transform your space.
            </p>
            <div className="space-y-3">
              <Button 
                onClick={handleClaimOffer}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-6 rounded-xl shadow-lg shadow-green-500/20 group transition-all hover:scale-[1.02] border-0"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Claim on WhatsApp
                <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
              </Button>
              <button 
                onClick={closePopup}
                className="w-full py-3 text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors"
              >
                Maybe later, just browsing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
