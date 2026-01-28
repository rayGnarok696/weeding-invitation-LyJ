import { useEffect, useRef, useState } from "react";

export const useAudioPlayer = (src: string, autoplay = false) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Crear audio una sola vez por src
  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audioRef.current = audio;

    if (autoplay) {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }

    // 🔴 Al cerrar pestaña / navegador
    const handleBeforeUnload = () => {
      audio.pause();
      audio.src = "";
      audio.load();
    };

    // 🔴 Al salir / volver a la pestaña
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Usuario se fue → matar sesión
        audio.pause();
        audio.src = "";
        audio.load();
        setIsPlaying(false);
      } else {
        // Usuario volvió → reproducir otra vez
        audio.src = src;
        audio.loop = true;
        audio.play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      audio.pause();
      audio.src = "";
      audio.load();
      audioRef.current = null;
    };
  }, [src, autoplay]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return { isPlaying, togglePlay };
};
