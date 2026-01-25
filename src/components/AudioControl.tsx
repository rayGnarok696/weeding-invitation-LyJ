import React from "react";
import { Play, Pause } from "lucide-react";

interface Props {
  isPlaying: boolean;
  onToggle: () => void;
}

const AudioControl: React.FC<Props> = ({ isPlaying, onToggle }) => {
  return (
    <div className="flex items-center gap-3">
      {/* Barra de estado animada */}
      <div className="flex items-center gap-1">
        <div className={`w-1 h-3 rounded-full bg-red-300 transition-all duration-300 ${isPlaying ? 'animate-pulse' : 'opacity-50'}`}></div>
        <div className={`w-1 h-5 rounded-full bg-red-400 transition-all duration-300 ${isPlaying ? 'animate-pulse delay-75' : 'opacity-50'}`}></div>
        <div className={`w-1 h-4 rounded-full bg-red-500 transition-all duration-300 ${isPlaying ? 'animate-pulse delay-150' : 'opacity-50'}`}></div>
        <div className={`w-1 h-3 rounded-full bg-red-600 transition-all duration-300 ${isPlaying ? 'animate-pulse delay-200' : 'opacity-50'}`}></div>
        <div className={`w-1 h-5 rounded-full bg-red-700 transition-all duration-300 ${isPlaying ? 'animate-pulse delay-300' : 'opacity-50'}`}></div>
      </div>

      {/* Botón minimalista */}
      <button
        onClick={onToggle}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        className="
          relative
          flex items-center justify-center
          w-10 h-10
          text-red-700
          hover:text-red-800
          transition-colors
          group
        "
      >
        {/* Indicador circular sutil */}
        <div className={`absolute inset-0 rounded-full border ${isPlaying ? 'border-red-400' : 'border-red-300'} transition-all duration-300 group-hover:border-red-500`}></div>
        
        {/* Icono */}
        <div className="relative z-10">
          {isPlaying ? (
            <Pause 
              size={20} 
              className="transition-transform group-hover:scale-110"
            />
          ) : (
            <Play 
              size={20} 
              className="transition-transform group-hover:scale-110 ml-0.5"
            />
          )}
        </div>

        {/* Efecto hover sutil */}
        <div className="absolute inset-0 rounded-full bg-red-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      </button>

      {/* Texto estado (opcional) */}
      <div className="hidden sm:block">
        <span className="font-montserrat text-xs text-red-600 font-medium">
          {isPlaying ? "Reproduciendo" : "Pausado"}
        </span>
      </div>
    </div>
  );
};

export default AudioControl;