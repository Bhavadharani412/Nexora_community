"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function GlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: GlowButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 400, damping: 30 });
  const springY = useSpring(y, { stiffness: 400, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.12);
    y.set((e.clientY - cy) * 0.12);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sizeClasses = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };

  const variantStyles = {
    primary: {
      background: "linear-gradient(135deg, #0000a8 0%, #2a2aff 100%)",
      border: "1px solid rgba(42,42,255,0.5)",
      boxShadow: "0 0 20px rgba(42,42,255,0.3), 0 0 60px rgba(42,42,255,0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
    },
    ghost: {
      background: "rgba(42,42,255,0.08)",
      border: "1px solid rgba(42,42,255,0.2)",
      boxShadow: "none",
    },
    outline: {
      background: "transparent",
      border: "1px solid rgba(255,255,255,0.15)",
      boxShadow: "none",
    },
  };

  const content = (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY, ...variantStyles[variant] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{
        boxShadow: variant === "primary"
          ? "0 0 30px rgba(42,42,255,0.5), 0 0 80px rgba(42,42,255,0.2), inset 0 1px 0 rgba(255,255,255,0.15)"
          : "0 0 20px rgba(42,42,255,0.2)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`relative rounded-full font-display font-medium tracking-wide text-white cursor-pointer overflow-hidden ${sizeClasses[size]} ${className}`}
    >
      {/* Shimmer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ x: "100%", opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
