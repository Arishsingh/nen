"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

function useCardInset() {
  const [inset, setInset] = useState(16);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setInset(w >= 1024 ? 80 : w >= 768 ? 64 : w >= 640 ? 32 : 16);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return inset;
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const inset = useCardInset();

  useEffect(() => { setMounted(true); }, []);

  if (!mounted || pathname !== "/") return null;

  const links = [
    { label: "Find Work", href: "/work", active: true },
    { label: "Hire Talent", href: "/start", active: false },
    { label: "Solutions", href: "/research", active: false },
    { label: "Company", href: "/careers", active: false },
  ];

  return (
    <>
      <nav style={{
        position: "absolute",
        top: inset,
        left: inset,
        right: inset,
        zIndex: 100,
        background: menuOpen ? "rgba(0,0,0,0.85)" : "transparent",
        backdropFilter: menuOpen ? "blur(12px)" : "none",
        borderRadius: menuOpen ? "16px" : "0",
      }}>
        {/* Main bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          maxWidth: "104rem", width: "100%", margin: "0 auto",
          padding: "16px 24px",
        }}>
          {/* Logo */}
          <span style={{
            fontFamily: "var(--font-syne)",
            fontSize: "22px", fontWeight: 700,
            color: "#fff", letterSpacing: "-0.02em",
          }}>
            Worket
          </span>

          {/* Center links — hidden on mobile */}
          <div style={{
            position: "absolute", left: "50%", transform: "translateX(-50%)",
            display: "flex", alignItems: "center", gap: "40px",
          }} className="hidden md:flex">
            {links.map((item) => (
              <a key={item.label} href={item.href} style={{
                fontSize: "13px", fontWeight: 500,
                color: item.active ? "#ffffff" : "rgba(255,255,255,0.75)",
                textDecoration: "none",
              }}>
                {item.label}
              </a>
            ))}
          </div>

          {/* Right — Log In + Sign Up Free + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={() => router.push("/start")}
              className="hidden md:block"
              style={{
                padding: "8px 18px", fontSize: "13px", fontWeight: 500,
                color: "rgba(255,255,255,0.85)", background: "transparent",
                border: "none", cursor: "pointer",
              }}
            >
              Log In
            </button>
            <button
              onClick={() => router.push("/start")}
              style={{
                padding: "8px 18px", fontSize: "13px", fontWeight: 500,
                color: "#111", background: "#fff",
                border: "none", borderRadius: "10px", cursor: "pointer",
              }}
            >
              Sign Up Free
            </button>
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden"
              style={{
                background: "transparent", border: "none", cursor: "pointer",
                flexDirection: "column", gap: "5px", padding: "4px",
              }}
              aria-label="Menu"
            >
              <span style={{ display: "block", width: "22px", height: "2px", background: menuOpen ? "transparent" : "#fff", transition: "all 0.2s" }} />
              <span style={{ display: "block", width: "22px", height: "2px", background: "#fff", transform: menuOpen ? "rotate(45deg) translateY(0px)" : "none", transition: "all 0.2s" }} />
              <span style={{ display: "block", width: "22px", height: "2px", background: "#fff", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none", transition: "all 0.2s" }} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden" style={{
            padding: "16px 20px 24px",
            display: "flex", flexDirection: "column", gap: "20px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}>
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "13px", fontWeight: 500,
                  color: item.active ? "#ffffff" : "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
