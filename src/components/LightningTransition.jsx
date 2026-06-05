import { motion } from "framer-motion";

export default function LightningTransition() {
  return (
    <motion.div
      className="
        fixed inset-0
        z-[9999]
        pointer-events-none
      "
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 5 }}
    >
      {/* Flash putih */}

      <motion.div
        className="absolute inset-0 bg-red-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.8, 0] }}
        transition={{
          duration: 0.25,
        }}
      />

      {/* Petir */}

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
      >
        <motion.path
          d="
            M50 0
            L45 20
            L55 35
            L40 50
            L60 65
            L45 80
            L55 100
          "
          stroke="#22d3ee"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 0.25,
          }}
          style={{
            filter:
              "drop-shadow(0 0 15px #22d3ee)"
          }}
        />
      </svg>
    </motion.div>
  );
}