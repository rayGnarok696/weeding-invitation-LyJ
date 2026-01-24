import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import selloCera from '../assets/sobre/selloCera.png';
import sobre from '../assets/sobre/sobre.png';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Evitar scroll en la página de inicio
  useEffect(() => {
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    
    // Pequeño delay para mostrar el efecto de atenuación
    setTimeout(() => {
      setHasLoaded(true);
    }, 100);
    
    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
    };
  }, []);

  const handleSealClick = () => {
    setIsOpened(true);
    setTimeout(() => {
      handleOpenInvitation();
    }, 1600);
  };

  const handleOpenInvitation = () => {
    navigate('/wedding');
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative"
      style={{
        backgroundImage: 'radial-gradient(circle, #f5f5dc 0%, #e6d8c3 50%, #d8c4a6 100%)', // Fondo beige degradado
      }}
    >
      {/* Fondo floral */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M50 30 Q60 20 70 30 Q80 40 70 50 Q60 60 50 50 Q40 60 30 50 Q20 40 30 30 Q40 20 50 30 Z" fill="%23b22222"%3E%3C/path%3E%3Ccircle cx="50" cy="50" r="10" fill="%23800000"%3E%3C/circle%3E%3Ccircle cx="35" cy="35" r="3" fill="%238B0000"%3E%3C/circle%3E%3Ccircle cx="65" cy="35" r="3" fill="%238B0000"%3E%3C/circle%3E%3Ccircle cx="35" cy="65" r="3" fill="%238B0000"%3E%3C/circle%3E%3Ccircle cx="65" cy="65" r="3" fill="%238B0000"%3E%3C/circle%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
          backgroundPosition: 'center',
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key="envelope"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: hasLoaded ? 1 : 0,
            scale: hasLoaded ? 1 : 0.95
          }}
          exit={{ scale: 1.1, opacity: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            opacity: { duration: 1.2 } // Transición más suave para la opacidad
          }}
          className="relative origin-center scale-100 sm:scale-[1.2] md:scale-[1.5] lg:scale-[2] xl:scale-[3] z-10"
        >
          {/* Sobre - Sin movimiento, solo opacidad */}
          <div className="relative w-95 h-56 mx-auto">
            <motion.img
              src={sobre}
              alt="Sobre"
              className="w-full h-full object-cover shadow-xl"
              animate={isOpened ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                filter: 'drop-shadow(2px 4px 6px rgba(139, 0, 0, 0.3))',
              }}
            />
          </div>
          
          {/* Sello de cera - Modificado con colores rojos */}
          {!isOpened && (
            <motion.button
              onClick={handleSealClick}
              className="absolute top-[6.5rem] left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full cursor-pointer z-30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                {/* Sello con tonos rojos */}
                <img
                  src={selloCera}
                  alt="Sello de cera"
                  className="w-24 h-24 object-contain"
                  style={{
                    filter: 'hue-rotate(-20deg) saturate(1.5) brightness(0.9)',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="text-white tracking-wider"
                    style={{
                      fontFamily: "Great Vibes, cursive",
                      fontWeight: 400,
                      fontSize: '1.5rem',
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    L&J
                  </div>
                </div>
              </div>
              
              {/* Efecto de brillo sutil en el sello */}
              <div className="absolute inset-0 rounded-full opacity-30"
                   style={{
                     background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, rgba(178,34,34,0.3) 70%)',
                     mixBlendMode: 'overlay',
                   }}
              />
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Texto decorativo */}
      <div className="absolute bottom-10 left-0 right-0 text-center z-10">
        <p className="text-amber-900 italic opacity-70"
           style={{
             fontFamily: "'Dancing Script', cursive",
             fontSize: '1.2rem',
           }}>
          Haz clic en el sello para abrir la invitación
        </p>
      </div>

      {/* Decoración de esquinas */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M0,0 L100,0 L100,20 Q80,30 60,20 Q40,10 20,20 Q0,30 0,50 Z" 
                fill="#8B0000"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 transform rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M0,0 L100,0 L100,20 Q80,30 60,20 Q40,10 20,20 Q0,30 0,50 Z" 
                fill="#8B0000"/>
        </svg>
      </div>
    </div>
  );
};

export default WelcomePage;