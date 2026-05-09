import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        nexora: {
          bg: "#03030a",
          surface: "#080814",
          card: "#0d0d1f",
          accent: "#0000a8",
          glow: "#2a2aff",
          soft: "#4444ff",
          border: "rgba(255,255,255,0.06)",
          text: "#e8e8f0",
          muted: "#6b6b8a",
        },
      },
      animation: {
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "float-medium": "floatMedium 6s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "grid-pulse": "gridPulse 4s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-20px) translateX(10px)" },
          "66%": { transform: "translateY(10px) translateX(-8px)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gridPulse: {
          "0%, 100%": { opacity: "0.03" },
          "50%": { opacity: "0.06" },
        },
      },
      backdropBlur: {
        xs: "4px",
      },
    },
  },
  plugins: [],
};
export default config;
