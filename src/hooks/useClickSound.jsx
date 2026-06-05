import { useEffect } from "react";

export default function useClickSound() {

  useEffect(() => {

    const playClick = () => {
        console.log("CLICK SOUND ACTIVE");

      const audio = new Audio("/Audio/click.mp3");

      audio.volume = 0.4;

      audio.play().catch(() => {});

    };

    const handleClick = (e) => {

      const target = e.target.closest(
        "button, a"
      );

      if (target) {
        playClick();
      }

    };

    document.addEventListener(
      "click",
      handleClick
    );

    return () => {

      document.removeEventListener(
        "click",
        handleClick
      );

    };

  }, []);

}