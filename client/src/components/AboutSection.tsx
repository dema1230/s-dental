/**
 * S Dental — About Section
 * Clinical Luxury Design System
 */

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const features = [
  "Moderna digitalna rentgen dijagnostika",
  "Sterilizacija opreme po EU standardima",
  "Bezbolni tretmani uz lokalnu anesteziju",
  "Fleksibilno radno vrijeme za vaše potrebe",
  "Hitni stomatološki pregledi",
  "Prihvatljive cijene i rate plaćanja",
];

const achievements = [
  { icon: Award, value: "10+", label: "Godina iskustva" },
  { icon: Users, value: "500+", label: "Pacijenata godišnje" },
  { icon: Clock, value: "6 dana", label: "Radno vrijeme" },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="o-nama" className="py-24 overflow-hidden" style={{ background: "white" }}>
      <div className="container">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Image */}
          <div
            className="relative transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-32px)",
            }}
          >
            {/* Main image */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 24px 56px rgba(0,0,0,0.12)",
                aspectRatio: "4/3",
              }}
            >
              <img
                src="/manus-storage/dental-team_b5b3433f.jpg"
                alt="Naš tim"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, oklch(0.28 0.12 195 / 0.2) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating achievement cards */}
            <div
              className="absolute -right-8 -bottom-8 p-5 rounded-xl"
              style={{
                background: "var(--teal-deep)",
                boxShadow: "0 16px 40px oklch(0.42 0.12 195 / 0.4)",
              }}
            >
              <div className="grid grid-cols-3 gap-4">
                {achievements.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="text-center">
                    <Icon size={18} className="text-white opacity-70 mx-auto mb-1" />
                    <div
                      className="text-xl font-bold text-white leading-none"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {value}
                    </div>
                    <div
                      className="text-xs mt-1 text-white opacity-70"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative teal square */}
            <div
              className="absolute -left-6 -top-6 w-24 h-24 rounded-xl -z-10"
              style={{ background: "var(--teal-pale)" }}
            />
          </div>

          {/* Right: Content */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(32px)",
              transitionDelay: "150ms",
            }}
          >
            <div className="section-label mb-3">O nama</div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: "var(--slate-deep)" }}
            >
              Vaše povjerenje je
              <br />
              <span style={{ color: "var(--teal-deep)" }}>naša odgovornost</span>
            </h2>

            <p
              className="text-base leading-relaxed mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-mid)" }}
            >
              Stomatološka ordinacija S Dental nalazi se u Novom Pazaru i pruža
              stomatološke usluge visokog kvaliteta uz topao i profesionalan pristup
              svakom pacijentu.
            </p>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-mid)" }}
            >
              Naš tim stomatologа posvećen je vašem zdravlju i estetici. Koristimo
              najsavremeniju opremu i materijale kako bismo vam pružili tretmane koji
              traju i osmijeh koji sijeva.
            </p>

            {/* Feature list */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(16px)",
                    transition: `opacity 400ms ${300 + i * 60}ms, transform 400ms ${300 + i * 60}ms`,
                  }}
                >
                  <CheckCircle
                    size={16}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "var(--teal-bright)" }}
                  />
                  <span
                    className="text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-mid)" }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#zakazivanje" className="btn-primary inline-flex">
              Zakažite pregled
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
