"use client";

import { motion } from "framer-motion";
import { CONTRIBUTORS } from "@/data/contributors";

const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function ContributorsSection() {
  return (
    <section
      id="contributors"
      className="relative px-6 py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase mb-4">
            Contributors
          </p>

          <h2
            className="font-display font-bold text-white/90"
            style={{
              fontSize: "clamp(2rem,5vw,4rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Built together<br />
            with the community.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {CONTRIBUTORS.map((contributor, index) => (
            <motion.div
              key={contributor.id}
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
                width: "260px",
                height: "260px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${contributor.image})`,
                }}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(3,3,10,0.94) 0%, rgba(3,3,10,0.45) 55%, rgba(3,3,10,0.15) 100%)",
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
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase mb-2">
                  {contributor.role}
                </p>

                <h3
                  className="font-display font-semibold text-white mb-4"
                  style={{
                    fontSize: "1.25rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {contributor.name}
                </h3>

                {/* Social Icons */}
                <div className="flex items-center gap-3">
                  <a
                    href={contributor.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "white",
                    }}
                  >
                    <GitHubIcon />
                  </a>

                  <a
                    href={contributor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                    style={{
                      background: "rgba(10,102,194,0.18)",
                      border: "1px solid rgba(10,102,194,0.4)",
                      color: "#0A66C2",
                    }}
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}