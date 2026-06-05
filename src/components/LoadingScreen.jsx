import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="
        fixed inset-0
        bg-[#020F2B]
        flex flex-col
        items-center
        justify-center
        z-[9999]
      "
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >

      <div className="text-cyan-400 text-7xl mb-6">
        ⚡
      </div>

      <h1 className="
        text-5xl
        font-black
        text-cyan-400
      ">
        PROTEKSI TRAFO
      </h1>

      <p className="
        text-gray-300
        mt-4
      ">
        Initializing Protection System...
      </p>

      <div className="
        w-[350px]
        h-3
        bg-white/10
        rounded-full
        mt-10
        overflow-hidden
      ">

        <motion.div
          className="h-full bg-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2.5
          }}
        />

      </div>

    </motion.div>
  );
}