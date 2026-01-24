import React from "react";
import { Play, Pause } from "lucide-react";

interface Props {
  isPlaying: boolean;
  onToggle: () => void;
}

const AudioControl: React.FC<Props> = ({ isPlaying, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      aria-label="Control de música"
      className="
        flex items-center justify-center
        w-14 h-14
        rounded-full
        bg-beige/30 backdrop-blur
        hover:bg-beige/50
        transition-all
        text-red-700
        shadow-lg
      "
    >
      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
    </button>
  );
};

export default AudioControl;