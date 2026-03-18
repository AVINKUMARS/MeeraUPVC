import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { WhyChooseUs } from '@/sections/WhyChooseUs';
import { Process } from '@/sections/Process';
import { Gallery } from '@/sections/Gallery';
import { BeforeAfter } from '@/sections/BeforeAfter';
import { Testimonials } from '@/sections/Testimonials';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { OfferPopup } from '@/sections/OfferPopup';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <BeforeAfter />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <OfferPopup />
    </div>
  );
}

export default App;
