import { useEffect, useRef, useState } from "react";

export const useAudioPlayer = (src: string, autoplay = false) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;

    if (autoplay) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay bloqueado si el navegador lo decide
          setIsPlaying(false);
        });
    }

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [src, autoplay]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return {
    isPlaying,
    togglePlay,
  };
};
