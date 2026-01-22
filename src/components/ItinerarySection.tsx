// components/ItinerarySection.tsx
import React from 'react';
import { Calendar, Utensils, GlassWater, Church, MapPin, PartyPopper } from 'lucide-react';

const ItinerarySection: React.FC = () => {
  const events = [
    { 
      time: "2:00 PM", 
      title: "Ceremonia Religiosa", 
      subtitle: "Parroquia de Nuestra Señora del Refugio",
      icon: <Church className="w-6 h-6" />,
      description: "Comienzo de nuestra unión en la hermosa Parroquia",
      color: "bg-sage/20",
      borderColor: "border-sage"
    },
    { 
      time: "3:30 PM", 
      title: "Recepción", 
      subtitle: "Barda Villa victoria",
      icon: <GlassWater className="w-6 h-6" />,
      description: "Brindis y aperitivos acompañados de buena música",
      color: "bg-sage-light/20",
      borderColor: "border-sage-light"
    },
    { 
      time: "5:00 PM", 
      title: "Banquete", 
      subtitle: "Salón Principal",
      icon: <Utensils className="w-6 h-6" />,
      description: "Acompañanos a la comida con todos nuestros seres queridos",
      color: "bg-sage/20",
      borderColor: "border-sage"
    },
    { 
      time: "7:00 PM", 
      title: "Fiesta", 
      subtitle: "Pista de Baile",
      icon: <PartyPopper className="w-6 h-6" />,
      description: "Música, baile y celebración hasta la madrugada",
      color: "bg-sage-light/20",
      borderColor: "border-sage-light"
    }
  ];

  const additionalInfo = [
    {
      title: "Dress Code",
      description: "Libre. Sientete libre de vestirte como quieras.",
      icon: "👔"
    },
    {
      title: "Confirmación",
      description: "Por favor confirma tu asistencia antes del 10 de Febrero.",
      icon: "📋"
    },
    {
      title: "Regalos",
      description: "Tu presencia es nuestro mejor regalo.",
      icon: "🎁"
    },
  ];

  return (
    <section id="itinerario" className="py-12 md:py-20 px-4 bg-gradient from-cream to-cream/95">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado inspirado en la imagen */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-6 md:px-8 py-2 md:py-3 mb-4 md:mb-6 bg-sage/10 rounded-full">
            <Calendar className="inline-block w-5 h-5 md:w-6 md:h-6 text-sage-dark mr-2" />
            <span className="font-montserrat font-semibold text-sage-dark tracking-wider text-sm md:text-base">
              EL GRAN DÍA
            </span>
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-sage-dark mb-4 md:mb-6 relative">
            <span className="relative">
              ITINERARIO
              <div className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-0.5 md:h-1 bg-gold"></div>
            </span>
          </h2>
          
          <p className="font-montserrat text-base md:text-lg text-sage-dark/80 max-w-2xl mx-auto mt-6 md:mt-8 px-4">
            Te invitamos a compartir cada momento especial de nuestra celebración. 
            Cada detalle ha sido pensado con amor para crear recuerdos inolvidables.
          </p>
        </div>

        {/* Timeline - Versión móvil mejorada */}
        <div className="relative mb-16 md:mb-20">
          {/* Línea del tiempo vertical - Solo desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-sage to-sage-light"></div>
          
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
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-cream border-4 ${event.borderColor} shadow-lg flex items-center justify-center`}>
                        <div className="text-sage-dark">
                          {event.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Hora para móvil */}
                    <div className="mb-2">
                      <div className="font-playfair text-2xl text-sage-dark font-bold">
                        {event.time}
                      </div>
                    </div>
                    
                    {/* Contenido del evento para móvil */}
                    <div className={`${event.color} border-l-4 ${event.borderColor} pl-4 py-4`}>
                      <h3 className="font-playfair text-xl text-sage-dark mb-1">{event.title}</h3>
                      <div className="font-montserrat text-sage-dark/70 flex items-center mb-2">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">{event.subtitle}</span>
                      </div>
                      <p className="font-montserrat text-sm text-sage-dark/80 mt-2">{event.description}</p>
                    </div>
                  </div>
                </div>

                {/* Versión desktop */}
                <div className="hidden md:flex flex-col md:flex-row items-center">
                  {/* Hora - Lado izquierdo */}
                  <div className="md:w-1/2 flex justify-end pr-12 mb-4 md:mb-0">
                    <div className="text-right">
                      <div className="font-playfair text-4xl text-sage-dark font-bold tracking-tight">
                        {event.time}
                      </div>
                      {index % 2 === 0 && (
                        <div className="mt-2">
                          <div className={`inline-block ${event.color} ${event.borderColor} border-l-4 pl-4 py-2`}>
                            <div className="font-playfair text-xl text-sage-dark">{event.title}</div>
                            <div className="font-montserrat text-sage-dark/70 flex items-center mt-1">
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
                    <div className={`w-16 h-16 rounded-full bg-cream border-4 ${event.borderColor} shadow-xl flex items-center justify-center`}>
                      <div className="text-sage-dark">
                        {event.icon}
                      </div>
                    </div>
                  </div>

                  {/* Detalles del evento - Lado derecho */}
                  <div className="md:w-1/2 flex justify-start pl-12">
                    {index % 2 !== 0 && (
                      <div className={`${event.color} border-r-4 ${event.borderColor} pr-4 py-4`}>
                        <div className="font-playfair text-2xl text-sage-dark mb-1">{event.title}</div>
                        <div className="font-montserrat text-sage-dark/70 flex items-center mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.subtitle}
                        </div>
                        <p className="font-montserrat text-sage-dark/80">{event.description}</p>
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

        {/* Información adicional en cuadrícula */}
        <div className="bg-gradient-to-br from-sage/5 to-sage-light/5 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-sage/20">
          <h3 className="font-playfair text-2xl md:text-3xl text-sage-dark text-center mb-8 md:mb-12">
            Detalles Importantes
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {additionalInfo.map((item, index) => (
              <div 
                key={index} 
                className="bg-cream/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-sage/10 hover:border-sage/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-2xl md:text-3xl mb-3 md:mb-4">{item.icon}</div>
                <h4 className="font-playfair text-lg md:text-xl text-sage-dark mb-2 md:mb-3">{item.title}</h4>
                <p className="font-montserrat text-xs md:text-sm text-sage-dark/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nota al pie */}
        <div className="text-center mt-6 md:mt-16 pt-6 md:pt-8 border-sage/20">
          <p className="font-montserrat text-sage-dark/70 italic max-w-2xl mx-auto text-sm md:text-base px-4">
            "El amor no tiene horario, pero nuestra celebración sí. 
            Te esperamos para compartir cada momento especial juntos."
          </p>
          <div className="flex items-center justify-center mt-4 md:mt-6 space-x-4">
            <div className="w-8 md:w-12 h-px bg-sage/30"></div>
            <div className="font-playfair text-sage-dark/60 text-sm md:text-base">Con amor</div>
            <div className="w-8 md:w-12 h-px bg-sage/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;