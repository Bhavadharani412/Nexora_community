"use client";

import { motion } from "framer-motion";

export default function CollaborationSection() {
  return (
    <section id="cta" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(42,42,255,0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Full Width Dual Images */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-6 lg:px-8">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ y: -6 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
          style={{
            height: "clamp(320px, 48vw, 720px)",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=90)",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(3,3,10,0.35), rgba(3,3,10,0.05))",
            }}
          />
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
          whileHover={{ y: -6 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
          style={{
            height: "clamp(320px, 48vw, 720px)",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=90)",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(3,3,10,0.35), rgba(3,3,10,0.05))",
            }}
          />
        </motion.div>
      </div>
    </section>

  );
}
