import { motion } from "framer-motion";

export default function ElectricFlash() {
  return (
    <motion.div
      className="
        fixed
        inset-0
        pointer-events-none
        z-[9998]
      "
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: [0, 0.6, 0]
      }}
      transition={{
        duration: 0.15
      }}
      style={{
        background:
          "radial-gradient(circle, rgba(34,211,238,0.5) 0%, transparent 70%)"
      }}
    />
  );
}