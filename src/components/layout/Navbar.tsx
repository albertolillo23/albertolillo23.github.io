"use client";

// src/components/layout/Navbar.tsx
// Sticky navigation bar with dark mode toggle

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Code2 } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/publications", label: "Publications" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Avoid hydration mismatch for theme icon
  useEffect(() => setMounted(true), []);

  // Shadow on scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleTheme = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease",
        background: scrolled
          ? "color-mix(in srgb, var(--bg) 85%, transparent)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 1px 0 var(--border)" : "none",
      }}
    >
      <nav
        className="container-site"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontWeight: 800,
            fontSize: "1.1rem",
            letterSpacing: "-0.03em",
            color: "var(--fg)",
          }}
          aria-label="Alberto Lillo — Home"
        >
          <span
            style={{
              width: 32,
              height: 32,
              borderRadius: "8px",
              background: "linear-gradient(135deg, var(--accent), var(--violet))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Code2 size={16} color="#fff" strokeWidth={2.5} />
          </span>
          Alberto Lillo
        </Link>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "0.25rem",
            listStyle: "none",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    padding: "0.4rem 0.9rem",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "var(--accent)" : "var(--fg-muted)",
                    background: isActive ? "var(--accent-glow)" : "transparent",
                    transition: "all 0.15s ease",
                    display: "block",
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: theme toggle + mobile menu */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            id="theme-toggle"
            style={{
              width: 38,
              height: 38,
              borderRadius: "9px",
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              color: "var(--fg-muted)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {mounted ? (
              theme === "dark" ? <Sun size={16} /> : <Moon size={16} />
            ) : (
              <span style={{ width: 16, height: 16 }} />
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            id="mobile-menu-toggle"
            style={{
              width: 38,
              height: 38,
              borderRadius: "9px",
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              color: "var(--fg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            className="show-mobile"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          style={{
            background: "color-mix(in srgb, var(--bg) 95%, transparent)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid var(--border)",
            padding: "1rem 1.5rem 1.5rem",
          }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                fontSize: "1rem",
                fontWeight: 500,
                color: pathname === href ? "var(--accent)" : "var(--fg)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      {/* Responsive helpers */}
      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
