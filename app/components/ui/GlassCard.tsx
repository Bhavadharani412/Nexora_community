"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glowColor?: string;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glowColor = "rgba(42,42,255,0.15)",
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -6, scale: 1.01 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Hover glow overlay */}
      {hover && (
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none rounded-2xl"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(ellipse at top, ${glowColor} 0%, transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
