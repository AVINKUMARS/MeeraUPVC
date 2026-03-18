import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';

export function BeforeAfter() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <section id="transformation" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-4">
            The Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Witness the Difference
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            See how our premium UPVC solutions can completely revitalize your living spaces, 
            bringing in light, silence, and modern elegance.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl group cursor-col-resize select-none"
             onMouseMove={handleMouseMove}
             onTouchMove={handleMouseMove}>
          
          {/* After Image */}
          <div className="absolute inset-0">
            <img 
              src="/images/after_window.jpg" 
              alt="After Transformation" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 right-6 px-4 py-2 bg-slate-900/80 text-white rounded-lg backdrop-blur-sm text-sm font-bold uppercase tracking-wider">
              Premium Upgrade
            </div>
          </div>

          {/* Before Image with masking */}
          <div 
            className="absolute inset-0 overflow-hidden transition-all duration-75 ease-out z-10"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="absolute inset-0 w-[calc(100%*100/var(--slider-pos,50))] overflow-hidden">
              {/* Note: This is a bit complex without JS or fixed widths. 
                  Let's use a simpler approach: the before image is w-full of its parent 
                  but we ensure the parent is always the slider width.
              */}
              <div 
                className="absolute inset-0"
                style={{ width: `${100 / (Math.max(0.1, sliderPosition) / 100)}%` }}
              >
                <img 
                  src="/images/before_window.jpg" 
                  alt="Before Transformation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-slate-100/80 text-slate-900 rounded-lg backdrop-blur-sm text-sm font-bold uppercase tracking-wider whitespace-nowrap">
              Legacy Structure
            </div>
          </div>        {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-amber-500">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-amber-500 rounded-full"></div>
                <div className="w-1 h-4 bg-amber-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 italic flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-slate-300"></span>
            Drag the slider to compare
            <span className="w-8 h-px bg-slate-300"></span>
          </p>
        </div>
      </div>
    </section>
  );
}
