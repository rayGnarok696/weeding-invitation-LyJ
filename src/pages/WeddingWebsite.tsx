import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react'; // Importación necesaria
import HeroSection from '../components/HeroSection';
import CountdownTimer from '../components/CountdownTimer';
import FamilySection from '../components/FamilySection';
import LocationSection from '../components/LocationSection';
import ItinerarySection from '../components/ItinerarySection';
import RSVPSection from '../components/RSVPSection';
import Navigation from '../components/Navigation';

const WeddingWebsite: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream text-sage-dark">
      <Navigation isScrolled={isScrolled} />
      
      <main>
        <HeroSection />
        <CountdownTimer />
        <FamilySection />
        <LocationSection />
        <ItinerarySection />
        <RSVPSection />
      </main>

      <footer className="bg-sage-dark text-cream py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center mb-4">
            <Heart className="w-6 h-6 fill-cream mr-2" />
            <h3 className="font-playfair text-2xl">Luli & Juan</h3>
            <Heart className="w-6 h-6 fill-cream ml-2" />
          </div>
          <p className="font-montserrat text-sm">Con la bendición de nuestras familias</p>
          <p className="font-montserrat text-xs mt-4">© {new Date().getFullYear()} - Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default WeddingWebsite;