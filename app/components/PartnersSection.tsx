"use client";

import { motion } from "framer-motion";
import { PARTNERS } from "@/data/partners";

export default function PartnersSection() {
  return (
    <section id = "partners" className="relative px-6 py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase mb-4">
            Community Partners
          </p>

          <h2
            className="font-display font-bold text-white/90"
            style={{
              fontSize: "clamp(2rem,5vw,4rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Backed by<br />
            the best.
          </h2>
        </motion.div>

        {/* Partners Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {PARTNERS.map((partner, index) => (
            <motion.a
              key={partner.id}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl"
              style={{
                width: "220px",
                height: "220px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${partner.image})`,
                }}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(3,3,10,0.92) 0%, rgba(3,3,10,0.35) 60%, rgba(3,3,10,0.1) 100%)",
                }}
              />

              {/* Hover Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(42,42,255,0.15), transparent 60%)",
                }}
              />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display font-semibold text-white text-lg text-center">
                  {partner.name}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}