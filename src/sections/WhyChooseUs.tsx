import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Award, 
  Users, 
  Wallet, 
  Clock, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const features = [
  {
    id: 'quality',
    title: 'High-Quality Materials',
    description: 'We use premium-grade UPVC profiles and hardware from trusted manufacturers, ensuring long-lasting durability and performance.',
    icon: Award
  },
  {
    id: 'experience',
    title: 'Experienced Professionals',
    description: 'Our team consists of skilled designers and installers with over 10 years of experience in UPVC and interior solutions.',
    icon: Users
  },
  {
    id: 'pricing',
    title: 'Affordable Pricing',
    description: 'Competitive prices without compromising on quality. Get the best value for your investment with transparent pricing.',
    icon: Wallet
  },
  {
    id: 'delivery',
    title: 'On-Time Delivery',
    description: 'We respect your time. Our streamlined processes ensure your project is completed within the promised timeframe.',
    icon: Clock
  },
  {
    id: 'warranty',
    title: 'Warranty Support',
    description: 'All our products come with comprehensive warranty coverage. We stand behind our work with dedicated after-sales support.',
    icon: ShieldCheck
  }
];

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '10+', label: 'Years Experience' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '5+', label: 'Years Warranty' }
];

export function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      id="why-choose-us" 
      className="py-20 lg:py-28 bg-white"
      aria-label="Why Choose Us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            The Distinction of Quality
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We combine quality craftsmanship with exceptional service to deliver 
            results that exceed your expectations every time.
          </p>
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-slate-50 rounded-2xl"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={`group p-6 lg:p-8 bg-slate-50 rounded-2xl hover:bg-amber-50 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-500 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-slate-900 group-hover:text-slate-950 transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
          
          {/* CTA Card */}
          <div
            className={`p-6 lg:p-8 bg-slate-900 rounded-2xl text-white flex flex-col justify-center items-center text-center border border-amber-500/20 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <CheckCircle2 className="w-12 h-12 mb-4 text-amber-500" />
            <h3 className="text-xl font-bold mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-slate-300 mb-5">
              Contact us today for a free consultation and quote.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-slate-950 font-bold rounded-xl hover:bg-amber-400 transition-colors animate-shimmer"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
