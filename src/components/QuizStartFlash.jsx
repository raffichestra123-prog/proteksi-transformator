import { motion } from "framer-motion";

export default function QuizStartFlash() {
  return (
    <motion.div
      className="
        fixed inset-0
        bg-white
        z-[999999]
        pointer-events-none
      "
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 0.3
      }}
    />
  );
}