"use client";
// Smooth scroll is handled natively via CSS scroll-behavior: smooth in globals.css
// This component is reserved for Lenis or custom scroll implementations
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
