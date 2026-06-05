import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const location = useLocation();

  const [musicEnabled, setMusicEnabled] = useState(
    localStorage.getItem("musicEnabled") !== "false"
  );

  // Set volume saat pertama kali load
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  // Listen perubahan tombol ON/OFF
  useEffect(() => {
    const handleMusicChange = () => {
      setMusicEnabled(
        localStorage.getItem("musicEnabled") !== "false"
      );
    };

    window.addEventListener(
      "musicChanged",
      handleMusicChange
    );

    return () => {
      window.removeEventListener(
        "musicChanged",
        handleMusicChange
      );
    };
  }, []);

  // Kontrol play / pause musik
  useEffect(() => {
    if (!audioRef.current) return;

    // Matikan musik di halaman video
    if (location.pathname === "/video") {
      audioRef.current.pause();
      return;
    }

    // ON
    if (musicEnabled) {
      audioRef.current.play().catch(() => {});
    }

    // OFF
    else {
      audioRef.current.pause();
    }
  }, [location, musicEnabled]);

  return (
    <audio
      ref={audioRef}
      src="/Audio/modern-futuristic.mp3"
      loop
    />
  );
}