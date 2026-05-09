"use client";

import { motion } from "framer-motion";
import { TEAM } from "@/data/team";

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function TeamSection() {
  return (
    <section
      id="team"
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
            Core Team
          </p>

          <h2
            className="font-display font-bold text-white/90"
            style={{
              fontSize: "clamp(2rem,5vw,4rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            The minds behind<br />
            Nexora.
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM.map((member, index) => (
            <motion.a
              key={member.id}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[32px]"
              style={{
                height: "560px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${member.image})`,
                }}
              />

              {/* Dark overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(3,3,10,0.96) 0%, rgba(3,3,10,0.3) 55%, rgba(3,3,10,0.1) 100%)",
                }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(42,42,255,0.18), transparent 60%)",
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase mb-3">
                      {member.role}
                    </p>

                    <h3
                      className="font-display font-bold text-white"
                      style={{
                        fontSize: "clamp(1.5rem,3vw,2.2rem)",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {member.name}
                    </h3>
                  </div>

                  {/* LinkedIn */}
                  <div
                    className="p-3 rounded-full"
                    style={{
                      background: "rgba(10,102,194,0.18)",
                      border: "1px solid rgba(10,102,194,0.4)",
                      color: "#0A66C2",
                    }}
                  >
                    <LinkedInIcon />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}