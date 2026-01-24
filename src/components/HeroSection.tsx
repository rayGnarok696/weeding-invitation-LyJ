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
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 to-red-800/10 z-10" />
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
      <div className="relative z-10 w-full px-4">
        {/* Nombre de los novios en la parte superior */}
        <div className="text-center pt-8 md:pt-12">
          <div className="text-5xl md:text-7xl mb-50 text-amber-50 great-vibes-regular leading-tight">
            Lourdes & Juan
          </div>
        </div>

        {/* Contenido centrado */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg">
          {/* Tarjeta con fondo semitransparente */}
          <div className="bg-black/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20">
            {/* Líneas decorativas */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-0.5 bg-white/60" />
              <div className="mx-4">
                <span className="font-mandarine text-2xl md:text-3xl text-amber-50 italic">
                  Nuestra Boda
                </span>
              </div>
              <div className="w-16 h-0.5 bg-white/60" />
            </div>

            {/* Fecha */}
            <div className="mb-6">
              <h2 className="font-playfair text-3xl md:text-4xl text-amber-50 text-center font-semibold">
                14 de Febrero, 2026
              </h2>
            </div>

            {/* Texto pequeño */}
            <div>
              <p className="font-montserrat text-sm md:text-base text-white/90 text-center uppercase tracking-widest">
                ¡guarda la fecha!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;