"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggle({ scrolled }: { scrolled: boolean }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div style={{ width: 36, height: 36 }} />;

  const isDark = theme === "dark";

  function toggleTheme(next: string) {
    if (!document.startViewTransition) {
      setTheme(next);
      return;
    }
    document.startViewTransition(() => setTheme(next));
  }

  const toggle = () => toggleTheme(isDark ? "light" : "dark");

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      style={{
        width: 36, height: 36,
        display: "flex", alignItems: "center", justifyContent: "center",
        borderRadius: "10px", border: "none", cursor: "pointer",
        background: scrolled ? "rgba(255,255,255,0.1)" : "#f0f0f0",
        color: scrolled ? "#fff" : "#111",
        fontSize: "16px",
        transition: "background 0.3s",
      }}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
