import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export default function RouteFlash() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const thunderRef = useRef(null);
  useEffect(() => {

  if (thunderRef.current) {
    thunderRef.current.volume = 0.2;
  }

}, []);

 useEffect(() => {

  setShow(true);

  if (thunderRef.current) {

    thunderRef.current.currentTime = 0;

    thunderRef.current.play()
    
      .catch(() => {});
      

  }

  const timer = setTimeout(() => {

    setShow(false);

  }, 700);

  return () => clearTimeout(timer);

}, [location.pathname]);


 return (
  <>
    <audio
      ref={thunderRef}
      src="/Audio/thunder.mp3"
      preload="auto"
    />

    {show && (
      <>
        {/* White Flash */}
        <motion.div
          className="fixed inset-0 z-[9998] bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.6, 0] }}
          transition={{ duration: 0.35 }}
        />

        {/* Lightning */}
        <motion.div
          className="
            fixed
            top-0
            left-1/2
            -translate-x-1/2
            z-[9999]
            pointer-events-none
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.5 }}
        >
          {/* SVG petir */}
        </motion.div>
      </>
    )}
  </>
);
}