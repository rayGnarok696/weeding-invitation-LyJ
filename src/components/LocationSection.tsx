// components/LocationSection.tsx - Versión rediseñada
import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Gift, Heart } from 'lucide-react';

// Definir tipos para las ubicaciones
interface LocationData {
  name: string;
  address: string;
  time: string;
  description: string;
}

interface Locations {
  ceremony: LocationData;
  reception: LocationData;
}

const LocationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ceremony' | 'reception'>('ceremony');

  const locations: Locations = {
    ceremony: {
      name: "Parroquia de Nuestra Señora del Refugio",
      address: "Nueva Guinea, El Refugio, 36590 Irapuato, Gto.",
      time: "14:00 horas",
      description: "Donde nuestras almas se unirán ante Dios y nuestros seres queridos"
    },
    reception: {
      name: "Barda Villa Victoria",
      address: "C. Jalpam 173, Las Misiones, 36567 Irapuato, Gto.",
      time: "15:30 horas",
      description: "Donde celebraremos nuestra unión con alegría, música y buena comida"
    }
  };

  const handleOpenMap = () => {
    const url = activeTab === 'ceremony'
      ? `https://maps.app.goo.gl/f6G1AZtDQbhVnfVN6`
      : `https://maps.app.goo.gl/NxVPdXhWxy2yANo9A`;

    window.open(url, '_blank');
  };

  return (
    <section id="location" className="py-12 px-4 bg-beige/30">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-red-700" />
              </div>
            </div>
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl text-red-800 mb-3">Nuestros Lugares Especiales</h2>
          <p className="font-montserrat text-lg text-red-700 max-w-3xl mx-auto px-4">
            Hemos elegido dos lugares significativos en Irapuato para celebrar cada momento de nuestro amor
          </p>
        </div>

        {/* Tabs de ubicaciones */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-2xl bg-beige p-1 shadow-lg border border-red-100">
            <button
              onClick={() => setActiveTab('ceremony')}
              className={`px-6 py-3 rounded-xl font-montserrat font-medium transition-all duration-300 flex items-center ${activeTab === 'ceremony' ? 'bg-red-100 text-beige shadow-md' : 'text-red-700 hover:bg-red-100'}`}
            >
              <Heart className="w-4 h-4 mr-2" />
              Ceremonia
            </button>
            <button
              onClick={() => setActiveTab('reception')}
              className={`px-6 py-3 rounded-xl font-montserrat font-medium transition-all duration-300 flex items-center ${activeTab === 'reception' ? 'bg-red-100 text-beige shadow-md' : 'text-red-700 hover:bg-red-100'}`}
            >
              <Gift className="w-4 h-4 mr-2" />
              Recepción
            </button>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="mb-8">
          <div className="bg-beige rounded-3xl shadow-xl overflow-hidden border border-red-100">
            <div className="md:flex">
              {/* Lado izquierdo - Mapa visual */}
              <div className="md:w-2/5 relative min-h-[350px]">
                <div className="absolute inset-0 bg-gradient-to-br from-red-100/60 to-red-50/80">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <div className="relative mb-4">
                      <Navigation className="w-16 h-16 text-red-700" />
                    </div>
                    <h3 className="font-playfair text-xl text-red-800 text-center mb-3">
                      {activeTab === 'ceremony'
                        ? "Nuestra Ceremonia Religiosa"
                        : "Nuestra Fiesta de Celebración"}
                    </h3>
                    <button
                      onClick={handleOpenMap}
                      className="px-6 py-3 bg-red-200 text-beige rounded-xl font-montserrat font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Ver en Google Maps
                    </button>
                  </div>
                </div>

                {/* Elementos decorativos */}
                <div className="absolute top-3 left-3 w-12 h-12 rounded-full bg-beige/20 border-2 border-beige/30"></div>
                <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-beige/20 border-2 border-beige/30"></div>
              </div>

              {/* Lado derecho - Información */}
              <div className="md:w-3/5 p-6 md:p-8">
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1.5 bg-red-100 rounded-full mb-3">
                    <span className="font-montserrat font-semibold text-red-700 text-sm">
                      {activeTab === 'ceremony' ? 'Ceremonia Religiosa' : 'Celebración'}
                    </span>
                  </div>
                  <h3 className="font-playfair text-2xl md:text-3xl text-red-800 mb-4">
                    {locations[activeTab].name}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-red-700" />
                      </div>
                      <div>
                        <h4 className="font-montserrat font-semibold text-red-800 mb-1 text-sm">Dirección</h4>
                        <p className="font-montserrat text-base text-red-700">
                          {locations[activeTab].address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-red-700" />
                      </div>
                      <div>
                        <h4 className="font-montserrat font-semibold text-red-800 mb-1 text-sm">Hora</h4>
                        <p className="font-montserrat text-base text-red-700">
                          {locations[activeTab].time}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-red-100/30 rounded-2xl border border-red-200">
                      <p className="font-montserrat text-red-700 text-base italic">
                        "{locations[activeTab].description}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;