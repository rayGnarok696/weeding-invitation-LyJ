// components/FamilySection.tsx
import React, { useState, useRef } from 'react';
import {
    Users,
    Heart,
    Cross,
    Crown,
    Sparkles,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

import photo1 from "../assets/family/6.jpg";
import photo4 from "../assets/family/9.jpg";

/* ======================================================
Carrusel familiar (mobile-first, táctil)
====================================================== */

interface FamilyCarouselProps {
    photos: string[];
}

const FamilyCarousel: React.FC<FamilyCarouselProps> = ({ photos }) => {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef<number | null>(null);

    const next = () => setCurrent((prev) => (prev + 1) % photos.length);
    const prev = () => setCurrent((prev) => (prev - 1 + photos.length) % photos.length);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;

        const diff = touchStartX.current - e.changedTouches[0].clientX;

        if (diff > 50) next();
        if (diff < -50) prev();

        touchStartX.current = null;
    };

    return (
        <div
            className="relative overflow-hidden rounded-2xl shadow-xl bg-black/5"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Slides */}
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className="min-w-full flex items-center justify-center bg-black"
                    >
                        <img
                            src={photo}
                            alt={`Familia ${index + 1}`}
                            className="w-full h-[320px] md:h-[480px] object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Controles desktop */}
            <button
                onClick={prev}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-sage-dark rounded-full p-2 shadow"
            >
                <ChevronLeft />
            </button>

            <button
                onClick={next}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-sage-dark rounded-full p-2 shadow"
            >
                <ChevronRight />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {photos.map((_, index) => (
                    <span
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${index === current ? 'bg-white' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};
/* ======================================================
   Sección principal
====================================================== */

const FamilySection: React.FC = () => {
    const familyPhotos = [photo1, photo4];

    const parents = {
        bride: [
            {
                name: "Ma. Elena Villaseñor",
                role: "Madre de la novia",
                quote: "Mi niña siempre soñó con este día.",
                isMother: true
            },
            {
                name: "Alejandro Rivera",
                role: "Padre de la novia",
                quote: "Hija mía, camina hacia este nuevo amor con la frente en alto; mi orgullo y mi bendición te acompañan siempre.",
                isMother: false
            }
        ],
        groom: [
            {
                name: "Benita Sánchez",
                role: "Madre del novio",
                quote: "Hijo mío, cuida y ama a la mujer que hoy toma tu mano; en su amor dejo mi corazón en paz.",
                isMother: true
            },
            {
                name: "Genaro Mejía",
                role: "Padre del novio",
                quote: "Bienvenida a la familia, Luli.",
                isMother: false
            }
        ]
    };

    const godparents = [
        {
            name: "Adolfo Rivera y Pilar Gutierrez",
            role: "Padrinos de velación",
            description: "Nuestro ejemplo, nos han guiado en el amor y la fe"
        },
        {
            name: "Marisol y Diego",
            role: "Padrinos de anillos",
            description: "Encargados de los anillos de compromiso"
        },
        {
            name: "Marifer",
            role: "Madrina de Arras",
            description: "Proveerá las monedas de la prosperidad"
        }
    ];

    return (
        <section id="family" className="py-16 px-4 bg-sage-light">
            <div className="max-w-6xl mx-auto">

                {/* Encabezado */}
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center mb-6">
                        <Users className="w-10 h-10 text-sage-dark mr-3" />
                        <h2 className="font-playfair text-4xl text-sage-dark">
                            Nuestras Familias
                        </h2>
                    </div>
                    <p className="font-montserrat text-xl text-sage-dark max-w-3xl mx-auto">
                        Con el amor y bendición de nuestras familias, y el apoyo especial de
                        nuestros padrinos en este día tan importante.
                    </p>
                </div>

                {/* Padres */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    {[parents.bride, parents.groom].map((group, i) => (
                        <div key={i} className="bg-cream rounded-2xl shadow-xl p-8">
                            <div className="text-center mb-8">
                                <div className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-sage text-cream mb-4">
                                    {i === 0 ? <Sparkles /> : <Crown />}
                                </div>
                                <h4 className="font-playfair text-2xl text-sage-dark">
                                    {i === 0 ? "Familia de Luli" : "Familia de Juan"}
                                </h4>
                            </div>

                            <div className="space-y-8">
                                {group.map((parent, index) => (
                                    <div key={index} className="flex space-x-4">
                                        <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center">
                                            {parent.isMother
                                                ? <Heart className="text-sage-dark" />
                                                : <Cross className="text-sage-dark" />
                                            }
                                        </div>
                                        <div>
                                            <h5 className="font-playfair text-xl text-sage-dark">
                                                {parent.name}
                                            </h5>
                                            <p className="font-montserrat font-semibold text-sage">
                                                {parent.role}
                                            </p>
                                            <p className="italic text-sage-dark">
                                                "{parent.quote}"
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Padrinos */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {godparents.map((g, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-lg p-6 text-center">
                            <Heart className="mx-auto mb-3 text-sage-dark" />
                            <h4 className="font-playfair text-xl text-sage-dark">{g.name}</h4>
                            <p className="font-semibold text-sage">{g.role}</p>
                            <p className="text-sage-dark mt-2">{g.description}</p>
                        </div>
                    ))}
                </div>

                {/* Galería */}
                <div className="mt-20">
                    <h3 className="font-playfair text-3xl text-sage-dark text-center mb-8">
                        Momentos Familiares
                    </h3>
                    <div className="max-w-4xl mx-auto">
                        <FamilyCarousel photos={familyPhotos} />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FamilySection;

