// components/StorySection.tsx
import React from 'react';
import { Heart, MapPin, Coffee, Music } from 'lucide-react';

const StorySection: React.FC = () => {
  const milestones = [
    {
      year: "2018",
      title: "Nuestro Primer Encuentro",
      description: "Nos conocimos en una cafetería cerca de la universidad. Ana estaba estudiando y Carlos le ofreció ayuda con su libro de arquitectura.",
      icon: <Coffee className="w-6 h-6" />
    },
    {
      year: "2019",
      title: "Primer Viaje Juntos",
      description: "Viajamos a Oaxaca durante las vacaciones de primavera. Fue entonces cuando supimos que éramos el uno para el otro.",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      year: "2021",
      title: "Compromiso",
      description: "Carlos propuso matrimonio durante un pícnic en el parque Chapultepec, justo al atardecer.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      year: "2024",
      title: "Nuestro Gran Día",
      description: "Después de años de amor y crecimiento juntos, finalmente nos casamos rodeados de familia y amigos.",
      icon: <Music className="w-6 h-6" />
    }
  ];

  return (
    <section id="story" className="py-16 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl text-sage-dark mb-4">Nuestra Historia</h2>
          <div className="w-24 h-1 bg-sage mx-auto mb-6"></div>
          <p className="font-montserrat text-xl text-sage-dark max-w-3xl mx-auto">
            Cada momento juntos ha sido una página en nuestra historia de amor. 
            Aquí compartimos algunos de los capítulos más especiales.
          </p>
        </div>

        <div className="relative">
          {/* Línea de tiempo */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sage/30"></div>
          
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Año */}
              <div className="md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
                <div className={`flex items-center ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-sage text-cream rounded-full p-4 shadow-lg">
                    <div className="font-playfair text-2xl">{milestone.year}</div>
                  </div>
                </div>
              </div>

              {/* Punto en la línea */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-sage border-4 border-cream shadow-lg flex items-center justify-center text-cream">
                  {milestone.icon}
                </div>
              </div>

              {/* Contenido */}
              <div className="md:w-1/2 flex justify-start md:justify-end">
                <div className={`bg-white rounded-lg shadow-lg p-6 max-w-md ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                  <h3 className="font-playfair text-2xl text-sage-dark mb-3">{milestone.title}</h3>
                  <p className="font-montserrat text-sage-dark">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Galería de fotos */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1529254479751-fbacb4c7a587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
          ].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md h-64">
              <img 
                src={src} 
                alt={`Foto de la historia ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;