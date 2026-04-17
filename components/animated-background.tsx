"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background transition-colors duration-500">
      {/* Dynamic blurred orbs matching the logo colors */}
      <motion.div
        animate={{
          x: ["0%", "5%", "-5%", "0%"],
          y: ["0%", "-10%", "5%", "0%"],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vh] rounded-full opacity-40 dark:opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{
          x: ["0%", "-10%", "5%", "0%"],
          y: ["0%", "5%", "-5%", "0%"],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vh] rounded-full opacity-30 dark:opacity-[0.15] blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{
          x: ["0%", "10%", "-10%", "0%"],
          y: ["0%", "-5%", "5%", "0%"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute top-[30%] left-[20%] w-[40vw] h-[40vh] rounded-full opacity-30 dark:opacity-20 blur-[100px]"
        style={{
          background: "radial-gradient(circle, var(--accent-red) 0%, transparent 70%)",
        }}
      />

      {/* Overlay to merge everything perfectly */}
      <div className="absolute inset-0 bg-white/85 dark:bg-[#030712]/95 backdrop-blur-[60px] z-10 transition-colors duration-500" />
      
      {/* The abstract Logo Shape floating in the background, placed ABOVE the blur layer so it's crisp */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[700px] h-[700px] flex items-center justify-center z-[15] pointer-events-none opacity-[0.05] dark:opacity-[0.25]"
      >
        <img src="/logo.png" alt="Logo background" className="w-full h-full object-contain" />
      </motion.div>
      
      {/* Noise layer for extra premium texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] z-20 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      />
    </div>
  );
}
