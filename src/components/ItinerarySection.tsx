// components/ItinerarySection.tsx
import React from 'react';
import { Calendar, Church, MapPin, PartyPopper, CameraIcon, DoorOpen, HandCoins, Users2Icon } from 'lucide-react';

const ItinerarySection: React.FC = () => {
  const events = [
    {
      time: "2:00 PM",
      title: "Ceremonia Religiosa",
      subtitle: "Parroquia de Nuestra Señora del Refugio",
      icon: <Church className="w-6 h-6" />,
      color: "bg-red-50",
      borderColor: "border-red-300"
    },
    {
      time: "3:30 PM",
      title: "Sesión de fotos",
      subtitle: "Estudio fotográfico",
      icon: <CameraIcon className="w-6 h-6" />,
      color: "bg-red-100/20",
      borderColor: "border-red-200"
    },
    {
      time: "4:00 PM",
      title: "Llegada a la barda",
      subtitle: "Barda Villa Victoria",
      icon: <DoorOpen className="w-6 h-6" />,
      color: "bg-red-50",
      borderColor: "border-red-300"
    },
    {
      time: "4:30 PM",
      title: "Comida",
      subtitle: "TACOS",
      icon: <HandCoins className="w-6 h-6" />,
      color: "bg-red-100/20",
      borderColor: "border-red-200"
    },
    {
      time: "6:00 PM",
      title: "Vals",
      subtitle: "Pista de Baile",
      icon: <Users2Icon className="w-6 h-6" />,
      color: "bg-red-50",
      borderColor: "border-red-300"
    },
    {
      time: "7:30 PM",
      title: "Baile",
      subtitle: "Pista de Baile",
      icon: <PartyPopper className="w-6 h-6" />,
      color: "bg-red-100/20",
      borderColor: "border-red-200"
    }
  ];

  return (
    <section id="itinerario" className="py-12 md:py-20 px-4 bg-gradient from-beige to-beige/95">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado inspirado en la imagen */}
        <div className="text-center mb-12 md:mb-8">
          <div className="inline-block px-6 md:px-8 py-2 md:py-3 mb-4 md:mb-6 bg-red-100 rounded-full">
            <Calendar className="inline-block w-5 h-5 md:w-6 md:h-6 text-red-700 mr-2" />
            <span className="font-montserrat font-semibold text-red-700 tracking-wider text-sm md:text-base">
              EL GRAN DÍA
            </span>
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-red-800 mb-4 md:mb-6 relative">
            <span className="relative">
              ITINERARIO
              <div className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-0.5 md:h-1 bg-red-600"></div>
            </span>
          </h2>

          <p className="font-montserrat text-base md:text-lg text-red-700/80 max-w-2xl mx-auto mt-6 md:mt-8 px-4">
            Te invitamos a compartir cada momento especial de nuestra celebración.
            Cada detalle ha sido pensado con amor para crear recuerdos inolvidables.
          </p>
        </div>

        {/* Timeline - Versión móvil mejorada */}
        <div className="relative mb-16 md:mb-20">
          {/* Línea del tiempo vertical - Solo desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-red-300 to-red-200"></div>

          {/* Eventos */}
          <div className="space-y-12 md:space-y-8">
            {events.map((event, index) => (
              <div key={index} className="relative">
                {/* Versión móvil - Diseño vertical */}
                <div className="md:hidden">
                  {/* Contenedor móvil */}
                  <div className="relative pl-16">
                    {/* Ícono para móvil */}
                    <div className="absolute left-0 top-0 z-10">
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-beige border-4 ${event.borderColor} shadow-lg flex items-center justify-center`}>
                        <div className="text-red-700">
                          {event.icon}
                        </div>
                      </div>
                    </div>

                    {/* Hora para móvil */}
                    <div className="mb-2">
                      <div className="font-playfair text-2xl text-red-800 font-bold">
                        {event.time}
                      </div>
                    </div>

                    {/* Contenido del evento para móvil */}
                    <div className={`${event.color} border-l-4 ${event.borderColor} pl-4 py-4`}>
                      <h3 className="font-playfair text-xl text-red-800 mb-1">{event.title}</h3>
                      <div className="font-montserrat text-red-700/70 flex items-center mb-2">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">{event.subtitle}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Versión desktop */}
                <div className="hidden md:flex flex-col md:flex-row items-center">
                  {/* Hora - Lado izquierdo */}
                  <div className="md:w-1/2 flex justify-end pr-12 mb-4 md:mb-0">
                    <div className="text-right">
                      <div className="font-playfair text-4xl text-red-800 font-bold tracking-tight">
                        {event.time}
                      </div>
                      {index % 2 === 0 && (
                        <div className="mt-2">
                          <div className={`inline-block ${event.color} ${event.borderColor} border-l-4 pl-4 py-2`}>
                            <div className="font-playfair text-xl text-red-800">{event.title}</div>
                            <div className="font-montserrat text-red-700/70 flex items-center mt-1">
                              <MapPin className="w-4 h-4 mr-2" />
                              {event.subtitle}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Punto central con ícono */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full bg-beige border-4 ${event.borderColor} shadow-xl flex items-center justify-center`}>
                      <div className="text-red-700">
                        {event.icon}
                      </div>
                    </div>
                  </div>

                  {/* Detalles del evento - Lado derecho */}
                  <div className="md:w-1/2 flex justify-start pl-12">
                    {index % 2 !== 0 && (
                      <div className={`${event.color} border-r-4 ${event.borderColor} pr-4 py-4`}>
                        <div className="font-playfair text-2xl text-red-800 mb-1">{event.title}</div>
                        <div className="font-montserrat text-red-700/70 flex items-center mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.subtitle}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Descripción para eventos pares en desktop */}
                {index % 2 === 0 && (
                  <div className="hidden md:block md:w-1/2 md:pl-12 md:ml-auto">
                    {/* Ya se muestra en el lado izquierdo */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;