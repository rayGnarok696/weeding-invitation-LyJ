import React, { useState, useEffect } from "react";
//import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAudioPlayer } from "../hooks/useAudioPlayer";
import AudioControl from "./AudioControl";

import photo1 from "../assets/top/1.jpg";
import photo2 from "../assets/top/5.jpg";
import photo3 from "../assets/top/2.jpg";
import song from "../assets/audio/song.mp3";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay en true porque la interacción ya ocurrió antes
  const { isPlaying, togglePlay } = useAudioPlayer(song, true);

  const slides = [
    { id: 1, image: photo1, alt: "Luli y Juan en la playa" },
    { id: 2, image: photo2, alt: "Luli y Juan en navidad" },
    { id: 3, image: photo3, alt: "Luli y Juan" },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  //const prevSlide = () =>
  //  setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Carrusel */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10 z-10" />
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Botón de audio */}
      <div className="absolute bottom-6 right-6 z-20">
        <AudioControl isPlaying={isPlaying} onToggle={togglePlay} />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center text-cream px-4">
        <h1 className="font-playfair text-5xl md:text-7xl mb-4">
          Lourdes & Juan
        </h1>

        <div className="flex items-center justify-center mb-6">
          <div className="w-24 h-px bg-cream/70" />
          <span className="font-montserrat mx-4 text-xl">Se casan</span>
          <div className="w-24 h-px bg-cream/70" />
        </div>

        <h2 className="font-playfair text-3xl md:text-4xl mb-2">
          14 de Febrero, 2026
        </h2>
        <p className="font-montserrat text-xl md:text-2xl">
          ¡Save the Date!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
