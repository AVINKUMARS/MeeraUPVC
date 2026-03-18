import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Square, 
  DoorOpen, 
  LayoutGrid, 
  PenTool 
} from 'lucide-react';

const services = [
  {
    id: 'pvc-doors',
    title: 'Premium PVC Doors',
    description: 'Specialist in all types of PVC and Sintex doors. Water-proof solutions for bathrooms and interiors at wholesale prices.',
    image: '/images/service_pvc_door.jpg',
    icon: DoorOpen,
    features: ['Sintex Doors', 'Bathroom Doors', 'Wholesale Price']
  },
  {
    id: 'kitchen-cabinets',
    title: 'Kitchen Cabinets',
    description: 'Bespoke kitchen cabinet solutions that are more durable and cheaper than wood. Custom modular designs for modern homes.',
    image: '/images/service_kitchen.jpg',
    icon: LayoutGrid,
    features: ['Cheaper than Wood', 'Modular Design', 'High Durability']
  },
  {
    id: 'wardrobe-lofts',
    title: 'Wardrobes & Lofts',
    description: 'Smart space optimization with custom wardrobes and loft partitions. Specialist in premium interior wood-alternative solutions.',
    image: '/images/gallery_office.jpg',
    icon: Square,
    features: ['Space Optimization', 'Custom Finishes', 'Interior specialist']
  },
  {
    id: 'false-ceiling',
    title: 'False Ceiling & Paneling',
    description: 'Professional false ceiling, wall paneling, and washbasin covering. Transforming interiors with precision and style.',
    image: '/images/service_ceiling.jpg',
    icon: PenTool,
    features: ['Designer Ceiling', 'Wall Paneling', 'Washbasin Covering']
  }
];

export function Services() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      id="services" 
      className="py-20 lg:py-28 bg-slate-50"
      aria-label="Our Services"
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
            Specialist in Interior Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-display">
            High-Quality PVC & Interior Solutions
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Meera UPVC provides durable, water-proof, and aesthetic interior works 
            in Bangalore. From Sintex bathroom doors to designer modular kitchens.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className={`group bg-white border-0 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-slate-600 leading-relaxed mb-6 h-14 overflow-hidden">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full border border-slate-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-slate-600 mb-4">
            Not sure what you need? Get a free consultation with our experts.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-amber-600 transition-colors"
          >
            Book Free Consultation
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
