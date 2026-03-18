import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Palette, Factory, Wrench } from 'lucide-react';

const steps = [
  {
    id: 'site-visit',
    step: 1,
    title: 'Free Site Visit',
    description: 'Our experts visit your location to understand your requirements, take measurements, and assess the site conditions.',
    icon: MapPin
  },
  {
    id: 'consultation',
    step: 2,
    title: 'Design Consultation',
    description: 'We present design options, material choices, and provide a detailed quotation based on your preferences and budget.',
    icon: Palette
  },
  {
    id: 'manufacturing',
    step: 3,
    title: 'Manufacturing',
    description: 'Your products are manufactured using high-quality materials and advanced machinery in our state-of-the-art facility.',
    icon: Factory
  },
  {
    id: 'installation',
    step: 4,
    title: 'Installation & Finish',
    description: 'Our skilled technicians install the products with precision and care, ensuring a perfect finish and complete satisfaction.',
    icon: Wrench
  }
];

export function Process() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      id="process" 
      className="py-20 lg:py-28 bg-slate-900"
      aria-label="Our Process"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 text-sm font-semibold rounded-full mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            A Seamless Path to Excellence
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            From visionary design to precision installation, we manage every detail 
            to ensure your journey is as smooth as our finishes.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-700 via-amber-500/50 to-slate-700" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className={`relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  {/* Step Card */}
                  <div className="relative bg-slate-800 rounded-2xl p-6 lg:p-8 border border-slate-700 hover:border-amber-500/50 transition-colors duration-300">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-6 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-slate-950 font-bold text-sm">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-5 mt-2">
                      <Icon className="w-8 h-8 text-amber-500" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow - Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-4 z-10">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-slate-950">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-16 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-slate-400 mb-6">
            Start your journey towards a better home today.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-slate-950 font-bold rounded-xl hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 animate-shimmer"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
