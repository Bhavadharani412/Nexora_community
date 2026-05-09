"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import GlowButton from "./ui/GlowButton";

const UIIndicators = () => (
  <div className="flex flex-col gap-5 font-mono text-xs text-white/25 select-none">
    {[
      { label: "SYS.STATUS", value: "ONLINE" },
      { label: "BUILD", value: "v2.4.1" },
      { label: "NET", value: "SECURE" },
    ].map((item) => (
      <motion.div
        key={item.label}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 + Math.random() * 0.4 }}
        className="flex items-center gap-3"
      >
        <div className="w-1 h-1 rounded-full bg-blue-500/60 animate-pulse" />
        <span className="tracking-widest">{item.label}</span>
        <span className="text-blue-400/50">{item.value}</span>
      </motion.div>
    ))}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6 }}
      className="mt-4 w-px h-20 bg-gradient-to-b from-blue-500/30 to-transparent mx-auto"
    />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8 }}
      className="border border-white/10 rounded-lg p-3 space-y-1.5"
    >
      {["████████", "██████", "█████████"].map((bar, i) => (
        <div key={i} className="text-white/10 tracking-wider text-[8px]">{bar}</div>
      ))}
    </motion.div>
  </div>
);

const NexoraTypography = () => (
  <div className="relative">
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      className="relative"
    >
      {/* Vertical text */}
      <div
        className="font-display font-extrabold text-white/90 select-none"
        style={{
          fontSize: "clamp(2.5rem, 8vw, 7rem)",
          lineHeight: 0.85,
          letterSpacing: "-0.04em",
          writingMode: "vertical-lr",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
          textShadow: "0 0 60px rgba(42,42,255,0.25)",
        }}
      >
        NEXORA
      </div>
      {/* Glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(42,42,255,0.12) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    </motion.div>
    {/* Tagline */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="font-mono text-[10px] tracking-[0.3em] text-white/30 mt-6 text-center"
    >
      THE NEXT ERA
    </motion.p>
  </div>
);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orbX = useSpring(mouseX, { stiffness: 60, damping: 30 });
  const orbY = useSpring(mouseY, { stiffness: 60, damping: 30 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.04);
      mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.04);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-16">
      {/* Hero container with glass surface */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-7xl rounded-3xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.025)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 0 60px rgba(0,0,168,0.08), 0 40px 120px rgba(0,0,0,0.4)",
          minHeight: "80vh",
        }}
      >
        {/* Animated grid inside hero */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(42,42,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(42,42,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Floating orb — reacts to mouse */}
        <motion.div
          style={{ x: orbX, y: orbY }}
          animate={{
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute pointer-events-none"

        >
          <div
            className="absolute"
            style={{
              top: "20%",
              left: "35%",
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle, rgba(42,42,255,0.18) 0%, transparent 70%)",
              filter: "blur(60px)",
              transform: "translate(-50%, -50%)",
            }}
          />
        </motion.div>

        {/* Three-column hero layout */}
        <div className="relative z-10 h-full flex items-center justify-between gap-8 p-10 md:p-16 lg:p-20" style={{ minHeight: "80vh" }}>
          {/* LEFT — UI indicators */}
          <div className="hidden lg:flex flex-col justify-center flex-shrink-0 w-40">
            <UIIndicators />
          </div>

          {/* CENTER — Main CTA */}
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3"
            >
              <p className="font-mono text-[11px] tracking-[0.35em] text-white/35 uppercase">
                Est. 2024 · Community
              </p>
              <h1
                className="font-display font-extrabold text-white"
                style={{
                  fontSize: "clamp(3rem, 9vw, 7.5rem)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.04em",
                  textShadow: "0 0 40px rgba(42,42,255,0.2)",
                }}
              >
                Build
                <br />
                <span style={{ color: "rgba(255,255,255,0.35)" }}>the</span>
                <br />
                Future.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="font-body text-white/45 max-w-sm leading-relaxed"
              style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)" }}
            >
              Where builders, designers, and visionaries converge to shape what comes next.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <GlowButton href="#contact" size="lg">
                Join Us
              </GlowButton>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex items-center gap-8 pt-4"
            >
              {[
                { num: "2.4K", label: "Members" },
                { num: "48+", label: "Events" },
                { num: "12", label: "Cities" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-bold text-xl text-white/90">{stat.num}</div>
                  <div className="font-mono text-[10px] tracking-widest text-white/30">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Nexora vertical typography */}
          <div className="hidden lg:flex flex-col justify-center items-end flex-shrink-0">
            <NexoraTypography />
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(3,3,10,0.4))",
          }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
        <span className="font-mono text-[9px] tracking-[0.3em] text-white/20">SCROLL</span>
      </motion.div>
    </section>
  );
}
