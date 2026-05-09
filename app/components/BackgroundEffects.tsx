"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Primary deep glow — left */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute"
        style={{
          left: "-10%",
          top: "10%",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle, rgba(0,0,168,0.14) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Secondary glow — right */}
      <motion.div
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.94, 1.06, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute"
        style={{
          right: "-8%",
          top: "30%",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, rgba(42,42,255,0.09) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Bottom accent glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 0.95, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        className="absolute"
        style={{
          bottom: "5%",
          left: "30%",
          width: "40vw",
          height: "30vw",
          background: "radial-gradient(circle, rgba(0,0,168,0.1) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />
    </div>
  );
}
