export const THEME = {
  colors: {
    bg: "#03030a",
    surface: "#080814",
    card: "#0d0d1f",
    accent: "#0000a8",
    glow: "#2a2aff",
    soft: "#4444ff",
    text: "#e8e8f0",
    muted: "#6b6b8a",
  },
  glass: {
    bg: "rgba(255,255,255,0.03)",
    border: "rgba(255,255,255,0.07)",
    blur: "blur(24px)",
  },
  shadows: {
    navGlow: "0 0 10px rgba(0,0,168,0.15), 0 0 30px rgba(0,0,168,0.08)",
    cardGlow: "0 0 30px rgba(42,42,255,0.1)",
    buttonGlow: "0 0 20px rgba(42,42,255,0.4), 0 0 60px rgba(42,42,255,0.15)",
  },
} as const;
