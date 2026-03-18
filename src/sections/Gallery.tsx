import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: '1',
    title: 'Modern Living Room',
    category: 'UPVC Windows',
    image: '/images/gallery_windows.jpg'
  },
  {
    id: '2',
    title: 'Contemporary Kitchen',
    category: 'Modular Interiors',
    image: '/images/gallery_kitchen.jpg'
  },
  {
    id: '3',
    title: 'Elegant Dining Space',
    category: 'UPVC Doors',
    image: '/images/gallery_sliding_doors.jpg'
  },
  {
    id: '4',
    title: 'Bright Bedroom',
    category: 'UPVC Windows',
    image: '/images/gallery_bedroom.jpg'
  },
  {
    id: '5',
    title: 'Modern Office',
    category: 'Commercial',
    image: '/images/gallery_office.jpg'
  },
  {
    id: '6',
    title: 'Luxury Bathroom',
    category: 'Residential',
    image: '/images/gallery_bathroom.jpg'
  }
];

const categories = ['All', 'UPVC Windows', 'UPVC Doors', 'Modular Interiors', 'Commercial', 'Residential'];

export function Gallery() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section 
      id="gallery" 
      className="py-20 lg:py-28 bg-slate-50"
      aria-label="Our Projects Gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-4">
            Our Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            A Portfolio of Precision
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Browse through our portfolio of completed projects and see how we have 
            helped homeowners create their dream spaces.
          </p>
        </div>

        {/* Category Filter */}
        <div 
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              onClick={() => setSelectedImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(item)}
              aria-label={`View ${item.title}`}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div 
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-slate-600 mb-4">
            Want to see more of our work?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-amber-600 transition-colors"
          >
            Request Portfolio
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-slate-900 border-0 overflow-hidden">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 to-transparent">
                <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-medium rounded-full mb-2">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
