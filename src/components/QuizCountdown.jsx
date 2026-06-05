import { motion, AnimatePresence } from "framer-motion";

export default function QuizCountdown({ count }) {
  return (
    <div
      className="
        fixed inset-0
        z-[99999]
        bg-[#020F2B]/95
        backdrop-blur-md
        flex flex-col
        items-center
        justify-center
      "
    >
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
        }}
        className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <p className="text-cyan-400 text-xl mb-10 tracking-widest">
        INITIALIZING PROTECTION SYSTEM
      </p>

      <AnimatePresence mode="wait">

        <motion.div
          key={count}
          initial={{
            scale: 4,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0.5,
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            text-[180px]
            font-black
            text-cyan-400
            drop-shadow-[0_0_40px_#22d3ee]
          "
        >
          {count}
        </motion.div>

      </AnimatePresence>

      <div className="mt-8 text-cyan-300">
        Relay System Ready
      </div>
    </div>
  );
}