"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show the nice animation and give time for heavy elements to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 1.6 }}
      onAnimationComplete={() => setLoading(false)}
    >
      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-16 h-16"
        >
          {/* Logo element spinning subtly or scaling */}
          <img src="/logo.png" alt="Atulit Technology Logo" className="w-full h-full object-contain drop-shadow-2xl" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="h-1 w-32 bg-border rounded-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-blue)]"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
