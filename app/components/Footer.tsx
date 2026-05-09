"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-10 px-6">
      {/* Thin top border */}
      <div
        className="absolute top-0 left-8 right-8 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left — Brand */}
        <div className="flex items-center gap-4">
          <span className="font-display font-bold tracking-[0.15em] text-white/60 text-sm">NEXORA</span>
          <div className="w-px h-4 bg-white/10" />
          <span className="font-mono text-[10px] tracking-widest text-white/20">
            © {new Date().getFullYear()} Nexora. All rights reserved.
          </span>
        </div>

        {/* Center — Links */}
        <div className="flex items-center gap-6">
          {["Privacy", "Terms", "Cookies"].map((link) => (
            <motion.a
              key={link}
              href="#"
              whileHover={{ color: "rgba(255,255,255,0.5)" }}
              className="font-mono text-[10px] tracking-widest text-white/20 transition-colors"
            >
              {link.toUpperCase()}
            </motion.a>
          ))}
        </div>

        {/* Right — Status */}
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
          />
          <span className="font-mono text-[10px] tracking-widest text-white/20">ALL SYSTEMS ONLINE</span>
        </div>
      </div>
    </footer>
  );
}
