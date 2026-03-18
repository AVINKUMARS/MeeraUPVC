import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    location: 'Bangalore, Karnataka',
    rating: 5,
    text: 'Exceptional service from start to finish! The UPVC windows installed in our home have made a huge difference in noise reduction and temperature control. The team was professional and completed the installation on time. Highly recommend!'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    text: 'We got our entire kitchen redesigned with modular cabinets and UPVC sliding doors. The quality of work exceeded our expectations. The design team understood our requirements perfectly and delivered within budget.'
  },
  {
    id: '3',
    name: 'Arun Patel',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    text: 'Got UPVC doors installed for our office building. The products are top-notch and the installation was seamless. The 10-year warranty gives us peace of mind. Great value for money!'
  }
];

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      id="testimonials" 
      className="py-20 lg:py-28 bg-white"
      aria-label="Customer Testimonials"
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Voices of Satisfaction
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Do not just take our word for it. Here is what our satisfied customers 
            have to say about their experience with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`bg-slate-50 border-0 shadow-sm hover:shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-slate-900" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-amber-400 text-amber-400" 
                    />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-slate-700 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                
                {/* Customer Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-amber-500/20">
                    {testimonial.name.charAt(0)}
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div 
          className={`mt-16 flex flex-wrap justify-center items-center gap-8 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-2 text-slate-500">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-medium">4.9/5 Average Rating</span>
          </div>
          <div className="w-px h-6 bg-slate-300 hidden sm:block" />
          <div className="text-slate-500 text-sm font-medium">
            500+ Satisfied Customers
          </div>
          <div className="w-px h-6 bg-slate-300 hidden sm:block" />
          <div className="text-slate-500 text-sm font-medium">
            98% Would Recommend
          </div>
        </div>
      </div>
    </section>
  );
}
