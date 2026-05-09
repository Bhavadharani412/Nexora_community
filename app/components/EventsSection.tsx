"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { EVENTS } from "@/data/events";
import GlowButton from "./ui/GlowButton";

export default function EventsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="events" className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
        >
          <div>
            <p className="font-mono text-[10px] tracking-[0.4em] text-white/30 mb-3 uppercase">Events</p>
            <h2
              className="font-display font-bold text-white/90"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
            >
              What's happening<br />at Nexora.
            </h2>
          </div>
          <p className="font-body text-white/35 max-w-xs text-sm leading-relaxed">
            Curated experiences for people building the future, not just watching it.
          </p>
        </motion.div>

        {/* Scrollable card track */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-6 scrollbar-none"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {EVENTS.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, type: "spring", stiffness: 300, damping: 24 }}
              className="group relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer"
              style={{
                width: "clamp(280px, 30vw, 380px)",
                height: "480px",
                scrollSnapAlign: "start",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              whileHover={{
                y: -10,
                boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(42,42,255,0.15)",
                borderColor: "rgba(42,42,255,0.3)",
              }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${event.image})` }}
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(3,3,10,0.95) 0%, rgba(3,3,10,0.6) 50%, rgba(3,3,10,0.2) 100%)",
                }}
              />

              {/* Hover border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                style={{
                  boxShadow: "inset 0 0 30px rgba(42,42,255,0.15)",
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                {/* Tag */}
                <span
                  className="inline-block self-start mb-4 px-3 py-1 rounded-full font-mono text-[10px] tracking-widest text-white/60"
                  style={{
                    background: "rgba(42,42,255,0.2)",
                    border: "1px solid rgba(42,42,255,0.3)",
                  }}
                >
                  {event.tag}
                </span>

                <h3 className="font-display font-bold text-white text-xl mb-2" style={{ letterSpacing: "-0.02em" }}>
                  {event.title}
                </h3>

                <p className="font-mono text-[11px] tracking-widest text-white/40 mb-3">{event.date}</p>

                <p className="font-body text-white/55 text-sm leading-relaxed mb-5 line-clamp-2">
                  {event.description}
                </p>

                <motion.button
                  whileHover={{ x: 4 }}
                  className="self-start flex items-center gap-2 font-display text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  {event.cta}
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll hint on mobile */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] tracking-[0.3em] text-white/20 text-center mt-6 md:hidden"
        >
          SWIPE TO EXPLORE
        </motion.p>
      </div>
    </section>
  );
}
