// App.tsx
import { useState } from 'react';
import { Home, Heart, Mail } from 'lucide-react';

const WelcomePage = () => {
  const [isSealHovered, setIsSealHovered] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleSealClick = () => {
    setIsEnvelopeOpen(true);
    setTimeout(() => setShowContent(true), 800);
  };

  const handleGoHome = () => {
    setShowContent(false);
    setTimeout(() => setIsEnvelopeOpen(false), 300);
  };

  // Paleta de colores: beige y rojos
  const colors = {
    background: 'bg-[#f8f4e8]',
    beigeLight: 'bg-[#f9f3e9]',
    beigeMedium: 'bg-[#e8dfd8]',
    beigeDark: 'bg-[#d4c9b8]',
    redLight: 'text-red-300',
    redMedium: 'text-red-500',
    redDark: 'text-red-700',
    redPrimary: 'text-red-600',
    redHover: 'hover:text-red-800',
    sealRed: 'bg-gradient-to-br from-red-500 to-red-700',
    envelopeBeige: 'bg-gradient-to-br from-[#f5ede4] to-[#e8dfd8]'
  };

  return (
    <div className={`min-h-screen ${colors.background} transition-colors duration-500 p-4 md:p-8`}>
      {/* Encabezado */}
      <header className="max-w-6xl mx-auto mb-8 md:mb-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className={`w-6 h-6 ${colors.redMedium}`} />
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-800">
              Love Letters
            </h1>
          </div>
          <button
            onClick={handleGoHome}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${colors.beigeMedium} ${colors.redHover} transition-all hover:scale-105`}
          >
            <Home className="w-5 h-5" />
            <span className="hidden md:inline font-medium">Inicio</span>
          </button>
        </div>
        <p className="text-center mt-4 text-gray-600 italic">
          Descubre mensajes especiales guardados con cariño
        </p>
      </header>

      <main className="max-w-6xl mx-auto">
        {/* Contenedor principal */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Envelope Container */}
          <div className="relative w-full max-w-md">
            {/* Instrucción */}
            <div className="text-center mb-6">
              <p className={`text-lg font-medium ${colors.redDark} animate-pulse`}>
                {isEnvelopeOpen ? '¡Has abierto el sobre!' : 'Haz clic en el sello para abrir'}
              </p>
            </div>

            {/* Sobre */}
            <div className="relative">
              {/* Parte trasera del sobre */}
              <div className={`absolute inset-0 ${colors.envelopeBeige} rounded-2xl shadow-xl transform rotate-2 translate-y-2`}></div>
              
              {/* Parte frontal del sobre */}
              <div 
                className={`relative ${colors.envelopeBeige} rounded-2xl shadow-2xl p-8 transition-all duration-700 ${
                  isEnvelopeOpen ? 'transform -translate-y-16 opacity-0' : ''
                }`}
              >
                {/* Solapa superior */}
                <div className={`absolute top-0 left-0 right-0 h-16 ${colors.beigeDark} rounded-t-2xl clip-triangle`}></div>
                
                {/* Contenido visible del sobre */}
                <div className="pt-10">
                  <div className="flex justify-center mb-6">
                    <Mail className={`w-16 h-16 ${colors.redMedium} opacity-80`} />
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">Mensaje Secreto</h2>
                    <p className="text-gray-600">
                      Un mensaje especial espera ser descubierto dentro de este sobre.
                    </p>
                  </div>
                </div>
                
                {/* Sello */}
                <div className="absolute bottom-6 right-6">
                  <button
                    onClick={handleSealClick}
                    onMouseEnter={() => setIsSealHovered(true)}
                    onMouseLeave={() => setIsSealHovered(false)}
                    className={`relative w-20 h-20 rounded-full ${colors.sealRed} shadow-lg transform transition-all duration-300 ${
                      isSealHovered ? 'scale-110 shadow-2xl' : ''
                    } active:scale-95 group`}
                  >
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Texto del sello */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold text-xs tracking-widest rotate-12">
                        ABRIR
                      </span>
                    </div>
                    
                    {/* Efecto de cera */}
                    <div className="absolute inset-4 rounded-full border-2 border-white/30"></div>
                    
                    {/* Tooltip */}
                    <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg ${
                      colors.beigeMedium
                    } text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity`}>
                      Haz clic para abrir
                    </div>
                  </button>
                </div>
              </div>

              {/* Contenido que aparece al abrir */}
              <div className={`transition-all duration-700 ${
                showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                {showContent && (
                  <div className={`relative ${colors.beigeLight} rounded-2xl shadow-2xl p-8`}>
                    {/* Carta interior */}
                    <div className="absolute inset-2 bg-white/80 rounded-lg"></div>
                    
                    <div className="relative p-6">
                      <div className="flex items-center justify-center mb-6">
                        <Heart className={`w-12 h-12 ${colors.redMedium} animate-pulse`} />
                      </div>
                      
                      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                        ¡Bienvenido a Casa!
                      </h2>
                      
                      <div className="space-y-4 text-gray-700">
                        <p className="text-lg">
                          Has llegado a tu destino. Este es tu espacio especial, diseñado con cariño 
                          y atención a cada detalle.
                        </p>
                        
                        <div className={`border-l-4 ${colors.redMedium} pl-4 my-6`}>
                          <p className="italic">
                            "Los mejores mensajes son aquellos que se comparten con el corazón"
                          </p>
                        </div>
                        
                        <p>
                          Explora, descubre y disfruta de todo lo que tenemos preparado para ti.
                        </p>
                      </div>
                      
                      <div className="flex justify-center mt-8">
                        <button
                          onClick={handleGoHome}
                          className={`px-8 py-3 rounded-full ${colors.sealRed} text-white font-bold tracking-wider transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2`}
                        >
                          <Home className="w-5 h-5" />
                          Volver al Sobre
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className={`${colors.beigeLight} rounded-2xl p-6 lg:p-8 shadow-lg w-full max-w-md`}>
            <h3 className={`text-2xl font-bold mb-6 ${colors.redDark} flex items-center gap-2`}>
              <Mail className="w-6 h-6" />
              Sobre Esta Página
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className={`w-2 h-2 mt-2 rounded-full ${colors.redMedium}`}></div>
                <span className="text-gray-700">
                  Diseñada con <strong>React + TypeScript + Tailwind CSS</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className={`w-2 h-2 mt-2 rounded-full ${colors.redMedium}`}></div>
                <span className="text-gray-700">
                  <strong>Mobile-first</strong> approach para todos los dispositivos
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className={`w-2 h-2 mt-2 rounded-full ${colors.redMedium}`}></div>
                <span className="text-gray-700">
                  Colores <strong>beige y rojos</strong> cuidadosamente seleccionados
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className={`w-2 h-2 mt-2 rounded-full ${colors.redMedium}`}></div>
                <span className="text-gray-700">
                  Animaciones y transiciones <strong>suaves</strong>
                </span>
              </li>
            </ul>
            
            <div className={`mt-8 pt-6 border-t ${colors.beigeMedium}`}>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded ${colors.redMedium}`}></div>
                  <span className="text-sm text-gray-600">Rojo principal</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded ${colors.beigeMedium}`}></div>
                  <span className="text-sm text-gray-600">Beige complementario</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="max-w-6xl mx-auto mt-12 md:mt-16 pt-8 border-t border-gray-300">
        <div className="text-center text-gray-600">
          <p>© {new Date().getFullYear()} Love Letters. Todos los derechos reservados.</p>
          <p className="text-sm mt-2">Una experiencia interactiva con React y Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;