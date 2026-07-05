/**
 * S Dental — Why Choose Us Section
 * Clinical Luxury Design System
 */

import { useEffect, useRef, useState } from "react";
import { Zap, Heart, Shield, Star, Clock, CreditCard } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Bezbolni tretmani",
    desc: "Koristimo najmodernije tehnike anestezije za maksimalnu udobnost tokom svakog zahvata.",
  },
  {
    icon: Heart,
    title: "Individualni pristup",
    desc: "Svaki pacijent je jedinstven. Prilagođavamo tretman vašim potrebama i željama.",
  },
  {
    icon: Shield,
    title: "Sterilna oprema",
    desc: "Strogi protokoli sterilizacije i jednokratni materijali garantuju vašu sigurnost.",
  },
  {
    icon: Star,
    title: "Iskusni tim",
    desc: "Naši stomatolozi imaju višegodišnje iskustvo i kontinuirano se usavršavaju.",
  },
  {
    icon: Clock,
    title: "Hitni pregledi",
    desc: "Razumijemo da bol ne čeka. Primamo hitne slučajeve i van redovnog rasporeda.",
  },
  {
    icon: CreditCard,
    title: "Povoljne cijene",
    desc: "Kvalitetna stomatologija ne mora biti skupa. Nudimo rate i fleksibilno plaćanje.",
  },
];

export default function WhyUsSection() {
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
    <section className="py-24 relative overflow-hidden" style={{ background: "white" }}>
      {/* Decorative background */}
      <div
        className="absolute right-0 top-0 w-1/3 h-full opacity-5"
        style={{
          background: "linear-gradient(to left, var(--teal-deep), transparent)",
        }}
      />

      <div className="container relative z-10">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Content */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
            }}
          >
            <div className="section-label mb-3">Zašto mi?</div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: "var(--slate-deep)" }}
            >
              Vaše zdravlje je
              <br />
              <span style={{ color: "var(--teal-deep)" }}>naš prioritet</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-mid)" }}
            >
              U S Dental ordinaciji, svaki posjet je više od pregleda — to je iskustvo
              koje gradi povjerenje. Kombinujemo medicinsku preciznost sa toplinom
              i razumijevanjem.
            </p>

            {/* Big stat */}
            <div
              className="inline-flex items-center gap-4 p-5 rounded-xl"
              style={{
                background: "var(--teal-pale)",
                border: "1px solid var(--teal-light)",
              }}
            >
              <div
                className="text-5xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif", color: "var(--teal-deep)" }}
              >
                98%
              </div>
              <div>
                <div
                  className="font-semibold"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-deep)" }}
                >
                  Zadovoljnih pacijenata
                </div>
                <div
                  className="text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-light)" }}
                >
                  preporučuje nas prijateljima i porodici
                </div>
              </div>
            </div>
          </div>

          {/* Right: Reasons grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="p-5 rounded-xl border transition-all duration-300"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--cream)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 500ms cubic-bezier(0.23,1,0.32,1) ${i * 70}ms, transform 500ms cubic-bezier(0.23,1,0.32,1) ${i * 70}ms`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--teal-bright)";
                  (e.currentTarget as HTMLElement).style.background = "white";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px oklch(0.42 0.12 195 / 0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.background = "var(--cream)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: "var(--teal-pale)" }}
                >
                  <Icon size={18} style={{ color: "var(--teal-deep)" }} />
                </div>
                <h4
                  className="font-semibold mb-1.5 text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-deep)" }}
                >
                  {title}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-light)" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
