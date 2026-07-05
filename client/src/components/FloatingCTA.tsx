/**
 * S Dental — Floating CTA Button
 * Persistent call-to-action visible on scroll
 */

import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) setVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      style={{ animation: "fadeInUp 0.3s cubic-bezier(0.23,1,0.32,1)" }}
    >
      {/* Dismiss button */}
      <button
        onClick={() => setDismissed(true)}
        className="w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-150"
        style={{ background: "oklch(0.4 0.01 240 / 0.6)", color: "white" }}
        aria-label="Zatvori"
      >
        <X size={12} />
      </button>

      {/* Phone CTA */}
      <a
        href="tel:0649079071"
        className="flex items-center gap-3 px-5 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:scale-105 pulse-cta"
        style={{
          background: "var(--teal-deep)",
          fontFamily: "'DM Sans', sans-serif",
          boxShadow: "0 8px 28px oklch(0.42 0.12 195 / 0.5)",
        }}
      >
        <Phone size={16} />
        <span>064 9079071</span>
      </a>
    </div>
  );
}
