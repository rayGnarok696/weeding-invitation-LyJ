// components/FamilySection.tsx
import React from 'react';
import { Users, Gem, Heart, Cross, Crown, Sparkles } from 'lucide-react'; // Importar Cross
import photo1 from "../assets/family/6.jpg";
import photo2 from "../assets/family/7.jpg";
import photo3 from "../assets/family/8.jpg";
import photo4 from "../assets/family/9.jpg";

const FamilySection: React.FC = () => {
    const familyPhotos = [photo1, photo2, photo3, photo4];

    // Datos de los padres - ahora podemos identificar quién es madre y quién es padre
    const parents = {
        bride: [
            {
                name: "Ma. Elena Villaseñor",
                role: "Madre de la novia",
                quote: "Mi niña siempre soñó con este día.",
                isMother: true // Nueva propiedad para identificar
            },
            {
                name: "Alejandro Rivera",
                role: "Padre de la novia",
                quote: "Hija mía, camina hacia este nuevo amor con la frente en alto; mi orgullo y mi bendición te acompañan siempre.",
                isMother: false // Nueva propiedad para identificar
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

    // Datos de los padrinos
    const godparents = [
        {
            name: "Adolfo Rivera y Pilar Gutierrez",
            role: "Padrinos de velación",
            description: "Nuestro ejemplo, nos han guiado en el amor y la fe",
        },
        {
            name: "Chiki",
            role: "Madrina de anillos",
            description: "Hermana de Luli",
            special: "Encargada de los anillos de compromiso"
        },
        {
            name: "Juan",
            role: "Padrino de lazo",
            description: "Hermano de Luli",
            special: "Simbolizará nuestra unión con el lazo"
        },
        {
            name: "Tito",
            role: "Hermano amado",
            description: "Pareja emblemática de nuestra familia",
            special: "Proveerá las monedas de la prosperidad"
        }
    ];

    return (
        <section id="family" className="py-16 px-4 bg-sage-light">
            <div className="max-w-6xl mx-auto">
                {/* Encabezado */}
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center mb-6">
                        <Users className="w-10 h-10 text-sage-dark mr-3" />
                        <h2 className="font-playfair text-4xl text-sage-dark">Nuestras Familias</h2>
                    </div>
                    <div className="w-24 h-1 bg-sage mx-auto mb-6"></div>
                    <p className="font-montserrat text-xl text-sage-dark max-w-3xl mx-auto">
                        Con el amor y bendición de nuestras familias, y el apoyo especial de
                        nuestros padrinos y testigos en este día tan importante.
                    </p>
                </div>

                {/* Sección de Padres - VERSIÓN CORREGIDA */}
                <div className="mb-20">
                    <h3 className="font-playfair text-3xl text-sage-dark text-center mb-12">
                        Con el amor de nuestros padres
                    </h3>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Padres de la novia - CORREGIDO */}
                        <div className="bg-cream rounded-2xl shadow-xl p-8">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage text-cream mb-4">
                                    <Sparkles className="w-8 h-8" />
                                </div>
                                <h4 className="font-playfair text-2xl text-sage-dark mb-2">Familia de Luli</h4>
                                <p className="font-montserrat text-sage-dark">Novia</p>
                            </div>

                            <div className="space-y-8">
                                {parents.bride.map((parent, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="shrink-0 w-16 h-16 rounded-full bg-gradient from-sage/20 to-sage-light flex items-center justify-center">
                                            {/* Icono condicional: Cruz para padre, Corazón para madre */}
                                            {parent.isMother ? (
                                                <Heart className="w-6 h-6 text-sage-dark" />
                                            ) : (
                                                <Cross className="w-6 h-6 text-sage-dark" />
                                            )}
                                        </div>
                                        <div>
                                            <h5 className="font-playfair text-xl text-sage-dark">{parent.name}</h5>
                                            <p className="font-montserrat font-semibold text-sage mb-2">{parent.role}</p>
                                            <p className="font-montserrat text-sage-dark italic">"{parent.quote}"</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Padres del novio - CORREGIDO */}
                        <div className="bg-cream rounded-2xl shadow-xl p-8">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage text-cream mb-4">
                                    <Crown className="w-8 h-8" />
                                </div>
                                <h4 className="font-playfair text-2xl text-sage-dark mb-2">Familia de Juan</h4>
                                <p className="font-montserrat text-sage-dark">Novio</p>
                            </div>

                            <div className="space-y-8">
                                {parents.groom.map((parent, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="shrink-0 w-16 h-16 rounded-full bg-gradient from-sage/20 to-sage-light flex items-center justify-center">
                                            {/* Icono condicional: Cruz para padre, Corazón para madre */}
                                            {parent.isMother ? (
                                                <Cross className="w-6 h-6 text-sage-dark" />
                                            ) : (
                                                <Heart className="w-6 h-6 text-sage-dark" />
                                            )}
                                        </div>
                                        <div>
                                            <h5 className="font-playfair text-xl text-sage-dark">{parent.name}</h5>
                                            <p className="font-montserrat font-semibold text-sage mb-2">{parent.role}</p>
                                            <p className="font-montserrat text-sage-dark italic">"{parent.quote}"</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sección de Padrinos */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sage text-cream mb-6">
                            <Gem className="w-10 h-10" />
                        </div>
                        <h3 className="font-playfair text-3xl text-sage-dark mb-4">Nuestros Padrinos</h3>
                        <p className="font-montserrat text-xl text-sage-dark max-w-3xl mx-auto">
                            Personas especiales que nos acompañan y guían en este camino del amor
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {godparents.map((godparent, index) => (
                            <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="p-6">
                                    <div className="text-center mb-4">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sage-light text-sage-dark mb-3 group-hover:bg-sage group-hover:text-cream transition-colors">
                                            <Heart className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-playfair text-xl text-sage-dark mb-2">{godparent.name}</h4>
                                        <p className="font-montserrat font-semibold text-sage">{godparent.role}</p>
                                    </div>

                                    <div className="text-center">
                                        <p className="font-montserrat text-sage-dark mb-3">{godparent.description}</p>
                                        <div className="inline-block px-3 py-1 bg-sage-light/50 rounded-full">
                                            <p className="font-montserrat text-sm text-sage-dark">{godparent.special}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sección de Testigos */}
                <div className="bg-gradient from-sage/10 to-sage-light/10 rounded-2xl p-8">

                    {/* Mensaje especial */}
                    <div className="mt-12 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage text-cream mb-4">
                            <Heart className="w-8 h-8" />
                        </div>
                        <h4 className="font-playfair text-2xl text-sage-dark mb-4">Agradecimiento Especial</h4>
                        <p className="font-montserrat text-lg text-sage-dark">
                            Agradecemos profundamente a cada una de estas personas especiales por acompañarnos
                            en este día tan significativo. Su amor, apoyo y guía son invaluables para nosotros.
                        </p>
                    </div>
                </div>

                {/* Galería familiar */}
                <div className="mt-16">
                    <h3 className="font-playfair text-3xl text-sage-dark text-center mb-8">Momentos Familiares</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {familyPhotos.map((src, index) => (
                            <div key={index} className="overflow-hidden rounded-lg shadow-md h-48 md:h-64 group relative">
                                <img
                                    src={src}
                                    alt={`Momento familiar ${index + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FamilySection;