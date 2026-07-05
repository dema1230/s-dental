/**
 * S Dental — Navbar Component
 * Clinical Luxury Design System
 * Sticky nav with scroll-triggered opacity, mobile menu
 */

import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Početna", href: "#hero" },
    { label: "Usluge", href: "#usluge" },
    { label: "O nama", href: "#o-nama" },
    { label: "Recenzije", href: "#recenzije" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.97)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 1px 24px oklch(0.42 0.12 195 / 0.10)" : "none",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
                style={{ background: "var(--teal-deep)" }}
              >
                <img
                  src="/manus-storage/logo-sdental_19452c68.png"
                  alt="S Dental Logo"
                  className="w-7 h-7 object-contain"
                  onError={(e) => {
                    // Fallback if image not loaded
                    (e.target as HTMLImageElement).style.display = "none";
                    (e.target as HTMLImageElement).parentElement!.innerHTML = `<span style="color:white;font-family:'Playfair Display',serif;font-weight:700;font-size:1.25rem;">S</span>`;
                  }}
                />
              </div>
              <div>
                <div
                  className="font-bold text-lg leading-none transition-colors duration-200"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: scrolled ? "var(--teal-deep)" : "white",
                    textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  S Dental
                </div>
                <div
                  className="text-xs leading-none mt-0.5"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: scrolled ? "var(--slate-light)" : "rgba(255,255,255,0.8)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Stomatološka ordinacija
                </div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200 relative group"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: scrolled ? "var(--slate-mid)" : "rgba(255,255,255,0.9)",
                    textShadow: scrolled ? "none" : "0 1px 3px rgba(0,0,0,0.2)",
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-200"
                    style={{ background: "var(--teal-bright)" }}
                  />
                </a>
              ))}
            </nav>

            {/* CTA Phone */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:0649079071"
                className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  background: "var(--teal-deep)",
                  color: "white",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: "0 4px 14px oklch(0.42 0.12 195 / 0.35)",
                }}
              >
                <Phone size={15} />
                064 9079071
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md transition-colors duration-200"
              style={{ color: scrolled ? "var(--teal-deep)" : "white" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "all" : "none",
          background: "rgba(0,0,0,0.5)",
        }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 z-50 md:hidden w-72 transition-transform duration-300"
        style={{
          background: "white",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          boxShadow: "-4px 0 24px rgba(0,0,0,0.15)",
        }}
      >
        <div className="flex items-center justify-between p-5 border-b" style={{ borderColor: "var(--teal-pale)" }}>
          <span
            className="text-xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--teal-deep)" }}
          >
            S Dental
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-md"
            style={{ color: "var(--slate-mid)" }}
          >
            <X size={20} />
          </button>
        </div>
        <nav className="p-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 px-4 rounded-md text-base font-medium transition-colors duration-150"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "var(--slate-mid)",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "var(--teal-pale)";
                (e.target as HTMLElement).style.color = "var(--teal-deep)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "transparent";
                (e.target as HTMLElement).style.color = "var(--slate-mid)";
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="p-5 border-t" style={{ borderColor: "var(--teal-pale)" }}>
          <a
            href="tel:0649079071"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-md font-semibold text-white pulse-cta"
            style={{ background: "var(--teal-deep)", fontFamily: "'DM Sans', sans-serif" }}
          >
            <Phone size={16} />
            064 9079071
          </a>
          <p className="text-center text-xs mt-2" style={{ color: "var(--slate-light)", fontFamily: "'DM Sans', sans-serif" }}>
            Zakažite pregled odmah
          </p>
        </div>
      </div>
    </>
  );
}
