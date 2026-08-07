"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TRACK_COLOR = "#2b2b33";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setTheme(stored === "light" ? "light" : "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  if (!theme) return null;

  const isDark = theme === "dark";

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-4 z-50 flex h-10 w-20 items-center rounded-full p-1 shadow-lg"
      style={{ backgroundColor: TRACK_COLOR }}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      role="switch"
      aria-checked={isDark}
    >
      <motion.div
        className="relative h-8 w-8 rounded-full bg-white"
        animate={{ x: isDark ? 40 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {isDark && (
          <div
            className="absolute h-4 w-4 rounded-full"
            style={{ backgroundColor: TRACK_COLOR, top: "3px", right: "2px" }}
          />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
