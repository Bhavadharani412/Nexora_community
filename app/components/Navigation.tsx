"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, NAV_CTA } from "@/constants/navigation";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
  const id = href.replace("#", "");
  const element = document.getElementById(id);

  if (!element) return;

  setActiveSection(id);
  setMenuOpen(false);

  const navbarOffset = 120;

  const elementPosition =
    element.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: elementPosition - navbarOffset,
    behavior: "smooth",
  });
};

  return (
    <>
      {/* Desktop Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2,
        }}
        className="fixed top-5 left-0 right-0 z-50 hidden md:flex items-center justify-between px-8"
      >
        {/* Logo */}
       <motion.button
  type="button"
  onClick={() => handleNavClick("#home")}
  whileHover={{ scale: 1.05 }}
  className="flex items-center"
>
  <Image
    src="/logo.png"
    alt="Nexora Logo"
    width={140}
    height={40}
    priority
    className="object-contain"
  />
</motion.button>

        {/* Center Navbar */}
        <motion.nav
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-2 rounded-full"
          style={{
            background: scrolled
              ? "rgba(3,3,10,0.7)"
              : "rgba(255,255,255,0.04)",

            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",

            border: "1px solid rgba(255,255,255,0.08)",

            boxShadow: scrolled
              ? "0 0 20px rgba(0,0,168,0.2), 0 0 50px rgba(0,0,168,0.1), 0 4px 24px rgba(0,0,0,0.3)"
              : "0 0 10px rgba(0,0,168,0.15), 0 0 30px rgba(0,0,168,0.08)",

            transition: "all 0.4s ease",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              activeSection === item.href.replace("#", "");

            return (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                whileHover={{
                  color: "rgba(255,255,255,0.9)",
                }}
                className="relative px-4 py-1.5 text-sm font-body font-medium rounded-full transition-colors duration-200"
                style={{
                  color: isActive
                    ? "white"
                    : "rgba(255,255,255,0.55)",
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                    style={{
                      background: "rgba(42,42,255,0.25)",
                      border:
                        "1px solid rgba(42,42,255,0.4)",
                      boxShadow:
                        "0 0 10px rgba(42,42,255,0.3)",
                    }}
                  />
                )}

                <span className="relative z-10">
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </motion.nav>

        {/* CTA */}
        <motion.button
  type="button"
          
          onClick={() => handleNavClick(NAV_CTA.href)}
          whileHover={{
            boxShadow:
              "0 0 20px rgba(42,42,255,0.5), 0 0 40px rgba(42,42,255,0.2)",
          }}
          whileTap={{ scale: 0.96 }}
          className="px-5 py-1.5 rounded-full text-sm font-display font-medium text-white transition-all duration-200"
          style={{
            background:
              "linear-gradient(135deg, #0000a8, #2a2aff)",

            border:
              "1px solid rgba(42,42,255,0.4)",

            boxShadow:
              "0 0 10px rgba(42,42,255,0.2)",
          }}
        >
          {NAV_CTA.label}
        </motion.button>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-4 left-4 right-4 z-50 md:hidden flex items-center justify-between px-4 py-3"
        style={{
          background: "rgba(3,3,10,0.8)",

          backdropFilter: "blur(24px)",

          border: "1px solid rgba(255,255,255,0.08)",

          borderRadius: "16px",

          boxShadow:
            "0 0 20px rgba(0,0,168,0.15)",
        }}
      >
        <span className="font-display font-bold text-white tracking-[0.15em] text-sm">
          NXR
        </span>

        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          className="text-white/70 hover:text-white transition-colors"
        >
          {menuOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </motion.button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden p-6 rounded-2xl"
            style={{
              background: "rgba(8,8,20,0.95)",

              backdropFilter: "blur(32px)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              boxShadow:
                "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(0,0,168,0.1)",
            }}
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.06,
                  }}
                  onClick={() =>
                    handleNavClick(item.href)
                  }
                  className="text-left px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all font-body text-base"
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.3,
                }}
                className="mt-3 pt-3 border-t border-white/10"
              >
                <button
                  onClick={() =>
                    handleNavClick(NAV_CTA.href)
                  }
                  className="w-full py-3 rounded-full text-white font-display font-medium text-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, #0000a8, #2a2aff)",

                    boxShadow:
                      "0 0 20px rgba(42,42,255,0.3)",
                  }}
                >
                  {NAV_CTA.label}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}