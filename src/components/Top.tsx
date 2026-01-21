import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
];

export default function Top() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white px-6">
      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mb-10">
        Momentos Inolvidables
      </h1>

      {/* Carrusel */}
      <div className="relative w-full max-w-4xl h-[420px] overflow-hidden rounded-2xl shadow-2xl">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className={`
              absolute inset-0 w-full h-full object-cover
              transition-all duration-1000 ease-in-out
              ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"}
            `}
          />
        ))}

        {/* Controles */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                w-3 h-3 rounded-full transition-all
                ${index === current ? "bg-white scale-125" : "bg-white/40"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

