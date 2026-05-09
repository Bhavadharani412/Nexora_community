"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      {/* Glow orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "40vw",
          background: "radial-gradient(ellipse, rgba(0,0,168,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-mono text-[10px] tracking-[0.4em] text-white/30 mb-4 uppercase">Get in Touch</p>
          <h2
            className="font-display font-bold text-white/90"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", letterSpacing: "-0.05em", lineHeight: 0.95 }}
          >
            Let's start<br />a conversation.
          </h2>
        </motion.div>

        {/* Floating contact pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-0 rounded-full overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.09)",
            boxShadow: "0 0 30px rgba(0,0,168,0.12), 0 8px 40px rgba(0,0,0,0.3)",
          }}
        >
          {/* Email side */}
          <motion.a
            href="mailto:hello@nexora.community"
            whileHover={{
              background: "rgba(42,42,255,0.1)",
            }}
            className="flex items-center gap-3 px-8 py-5 transition-all duration-200"
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-white/40" stroke="currentColor" strokeWidth="1.5">
              <path d="M2.5 5.5l7.5 5 7.5-5M2.5 5.5h15v10h-15V5.5z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-body text-white/60 hover:text-white/90 transition-colors text-sm tracking-wide">
              hello@nexora.community
            </span>
          </motion.a>

          {/* Divider */}
          <div className="w-px h-8 bg-white/10 flex-shrink-0" />

          {/* CTA side */}
          <motion.a
            href="mailto:hello@nexora.community"
            whileHover={{
              boxShadow: "0 0 20px rgba(42,42,255,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-5 font-display font-medium text-sm text-white transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, rgba(0,0,168,0.6), rgba(42,42,255,0.6))",
            }}
          >
            Send Message →
          </motion.a>
        </motion.div>

        {/* Alternative contact methods */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          {["Twitter", "LinkedIn", "Discord"].map((platform) => (
            <motion.a
              key={platform}
              href="#"
              whileHover={{ color: "rgba(255,255,255,0.8)" }}
              className="font-mono text-[11px] tracking-widest text-white/25 hover:text-white/70 transition-colors"
            >
              {platform.toUpperCase()}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
