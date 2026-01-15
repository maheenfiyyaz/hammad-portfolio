"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroReveal() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setOpen(false), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="intro-reveal"
          className="fixed inset-0 z-[9999] flex overflow-hidden pointer-events-none"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* LEFT CURTAIN */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
            className="relative w-1/2 h-full bg-[#0b0b0b] flex items-center justify-end"
          >
            <div className="mr-2 md:mr-4 text-white/5 text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase truncate">
              Ham
            </div>
          </motion.div>

          {/* RIGHT CURTAIN */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
            className="relative w-1/2 h-full bg-[#0b0b0b] flex items-center justify-start"
          >
            <div className="ml-2 md:ml-4 text-white/5 text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase truncate">
              mad
            </div>
          </motion.div>

          {/* CENTER LINE ANIMATION */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[40%] sm:h-[50%] md:h-[60%] bg-cyan-400 shadow-[0_0_30px_#22d3ee] z-[10000]"
          />

          {/* BACKGROUND BLACK LAYER */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black -z-10"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
