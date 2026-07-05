/**
 * S Dental — Hero Section
 * Clinical Luxury Design System
 * Split-screen hero with floating stat cards and CTA
 */

import { useState, useEffect } from "react";
import { Phone, Calendar, Star, ChevronDown, Shield, Award, Clock } from "lucide-react";

const stats = [
  { value: "500+", label: "Zadovoljnih pacijenata", icon: "😊" },
  { value: "3.7★", label: "Google ocjena", icon: "⭐" },
  { value: "10+", label: "Godina iskustva", icon: "🏆" },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--teal-deep)" }}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/manus-storage/hero-dental_38d3407a.jpg')`,
          opacity: 0.25,
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, oklch(0.28 0.12 195 / 0.95) 0%, oklch(0.38 0.13 195 / 0.85) 50%, oklch(0.32 0.10 195 / 0.90) 100%)",
        }}
      />

      {/* Decorative diagonal lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-1/3 w-px h-full opacity-20"
          style={{ background: "linear-gradient(to bottom, transparent, white, transparent)" }}
        />
        <div
          className="absolute top-0 right-1/4 w-px h-full opacity-10"
          style={{ background: "linear-gradient(to bottom, transparent, white, transparent)" }}
        />
        {/* Decorative circle */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ border: "2px solid white" }}
        />
        <div
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10"
          style={{ border: "2px solid white" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container min-h-screen flex flex-col justify-center pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            {/* Label */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 transition-all duration-700"
              style={{
                background: "oklch(1 0 0 / 0.12)",
                border: "1px solid oklch(1 0 0 / 0.25)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: "0ms",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span
                className="text-xs font-semibold text-white"
                style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.08em" }}
              >
                OTVORENO · Novi Pazar
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="text-white mb-6 leading-tight transition-all duration-700"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 700,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "100ms",
              }}
            >
              Osmijeh koji{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, oklch(0.85 0.10 195), oklch(0.95 0.05 85))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                mijenja sve
              </span>
              <br />
              počinje ovdje.
            </h1>

            {/* Subtitle */}
            <p
              className="mb-8 text-lg leading-relaxed transition-all duration-700"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "oklch(1 0 0 / 0.80)",
                maxWidth: "480px",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "200ms",
              }}
            >
              Stomatološka ordinacija S Dental u Novom Pazaru — gdje profesionalna njega
              susreće toplu brigu. Vaš savršen osmijeh je naša misija.
            </p>

            {/* Trust badges */}
            <div
              className="flex flex-wrap gap-3 mb-8 transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "280ms",
              }}
            >
              {[
                { icon: Shield, text: "Sterilna oprema" },
                { icon: Award, text: "Certificirani tim" },
                { icon: Clock, text: "Hitni pregledi" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm"
                  style={{
                    background: "oklch(1 0 0 / 0.10)",
                    border: "1px solid oklch(1 0 0 / 0.20)",
                    color: "oklch(1 0 0 / 0.85)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  <Icon size={13} />
                  {text}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "360ms",
              }}
            >
              <a
                href="#zakazivanje"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-md font-semibold text-base transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 pulse-cta"
                style={{
                  background: "white",
                  color: "var(--teal-deep)",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.25)",
                }}
              >
                <Calendar size={18} />
                Zakažite pregled
              </a>
              <a
                href="tel:0649079071"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-md font-semibold text-base transition-all duration-200 hover:scale-105"
                style={{
                  background: "transparent",
                  color: "white",
                  border: "2px solid oklch(1 0 0 / 0.5)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <Phone size={18} />
                064 9079071
              </a>
            </div>
          </div>

          {/* Right: Image + floating cards */}
          <div
            className="relative hidden lg:block transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transitionDelay: "200ms",
            }}
          >
            {/* Main image */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 32px 64px rgba(0,0,0,0.4)",
                aspectRatio: "3/4",
                maxHeight: "520px",
              }}
            >
              <img
                src="/manus-storage/smile-hero_cd412e17.jpg"
                alt="Savršen osmijeh"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, oklch(0.28 0.12 195 / 0.4) 0%, transparent 50%)",
                }}
              />
            </div>

            {/* Floating stat cards */}
            <div
              className="absolute -left-12 top-12 p-4 rounded-xl float-anim"
              style={{
                background: "white",
                boxShadow: "0 16px 40px rgba(0,0,0,0.2)",
                minWidth: "160px",
                animationDelay: "0s",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                  style={{ background: "var(--teal-pale)" }}
                >
                  ⭐
                </div>
                <div>
                  <div
                    className="text-2xl font-bold leading-none"
                    style={{ fontFamily: "'Playfair Display', serif", color: "var(--teal-deep)" }}
                  >
                    3.7
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-light)" }}
                  >
                    Google ocjena
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute -right-8 bottom-20 p-4 rounded-xl float-anim"
              style={{
                background: "white",
                boxShadow: "0 16px 40px rgba(0,0,0,0.2)",
                minWidth: "170px",
                animationDelay: "1.5s",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                  style={{ background: "var(--teal-pale)" }}
                >
                  😊
                </div>
                <div>
                  <div
                    className="text-2xl font-bold leading-none"
                    style={{ fontFamily: "'Playfair Display', serif", color: "var(--teal-deep)" }}
                  >
                    500+
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-light)" }}
                  >
                    Zadovoljnih pacijenata
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute -left-6 bottom-8 p-3 rounded-xl"
              style={{
                background: "var(--teal-deep)",
                boxShadow: "0 12px 32px oklch(0.42 0.12 195 / 0.5)",
              }}
            >
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-white" />
                <span
                  className="text-sm font-semibold text-white"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Hitni pregledi
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div
          className="mt-16 pt-8 border-t transition-all duration-700"
          style={{
            borderColor: "oklch(1 0 0 / 0.15)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transitionDelay: "450ms",
          }}
        >
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-3xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(1 0 0 / 0.65)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#usluge"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white opacity-60 hover:opacity-100 transition-opacity duration-200"
      >
        <span className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em" }}>
          SCROLL
        </span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
