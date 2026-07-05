/**
 * S Dental — Services Section
 * Clinical Luxury Design System
 */

import { useEffect, useRef, useState } from "react";
import {
  Sparkles, Smile, Scan, Shield, Zap, Heart, Baby, ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Estetska stomatologija",
    desc: "Bijeljenje zuba, keramičke fasete, kompozitni ispuni. Savršen osmijeh koji odražava vaš karakter.",
    highlight: true,
    tag: "Najpopularnije",
  },
  {
    icon: Scan,
    title: "Ortodoncija",
    desc: "Fiksni i mobilni aparati za djecu i odrasle. Moderna rješenja za ravne zube i pravilan zagrižaj.",
    highlight: false,
    tag: null,
  },
  {
    icon: Shield,
    title: "Preventivna njega",
    desc: "Profesionalno čišćenje, uklanjanje kamenca, fluoridacija. Zdrava usta su osnova lijepog osmijeha.",
    highlight: false,
    tag: "Preporučeno",
  },
  {
    icon: Zap,
    title: "Oralna hirurgija",
    desc: "Vađenje zuba, impakcija umnjaka, manje hirurške intervencije uz maksimalnu sigurnost i udobnost.",
    highlight: false,
    tag: null,
  },
  {
    icon: Heart,
    title: "Protetika",
    desc: "Fiksne i mobilne proteze, krunice, mostovi. Vraćamo funkcionalnost i estetiku vašeg osmijeha.",
    highlight: false,
    tag: null,
  },
  {
    icon: Baby,
    title: "Dječija stomatologija",
    desc: "Poseban pristup za naše najmlađe pacijente. Bezbolni pregledi i liječenje u opuštenoj atmosferi.",
    highlight: false,
    tag: "Za djecu",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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

  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="group relative p-6 rounded-xl border transition-all duration-300 cursor-pointer"
      style={{
        background: service.highlight ? "var(--teal-deep)" : "white",
        borderColor: service.highlight ? "var(--teal-deep)" : "var(--border)",
        boxShadow: service.highlight
          ? "0 20px 48px oklch(0.42 0.12 195 / 0.35)"
          : "0 2px 12px rgba(0,0,0,0.06)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 500ms cubic-bezier(0.23,1,0.32,1) ${index * 80}ms, transform 500ms cubic-bezier(0.23,1,0.32,1) ${index * 80}ms, box-shadow 200ms ease, border-color 200ms ease`,
      }}
      onMouseEnter={(e) => {
        if (!service.highlight) {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px oklch(0.42 0.12 195 / 0.15)";
          (e.currentTarget as HTMLElement).style.borderColor = "var(--teal-bright)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        }
      }}
      onMouseLeave={(e) => {
        if (!service.highlight) {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }
      }}
    >
      {/* Tag */}
      {service.tag && (
        <div
          className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            background: service.highlight ? "white" : "var(--teal-deep)",
            color: service.highlight ? "var(--teal-deep)" : "white",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {service.tag}
        </div>
      )}

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{
          background: service.highlight ? "oklch(1 0 0 / 0.15)" : "var(--teal-pale)",
        }}
      >
        <Icon
          size={22}
          style={{ color: service.highlight ? "white" : "var(--teal-deep)" }}
        />
      </div>

      {/* Title */}
      <h3
        className="text-lg font-semibold mb-2"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: service.highlight ? "white" : "var(--slate-deep)",
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-4"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: service.highlight ? "oklch(1 0 0 / 0.75)" : "var(--slate-light)",
        }}
      >
        {service.desc}
      </p>

      {/* CTA */}
      <a
        href="#zakazivanje"
        className="inline-flex items-center gap-1 text-sm font-medium transition-all duration-150 hover:gap-2"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: service.highlight ? "white" : "var(--teal-deep)",
        }}
      >
        Zakaži <ArrowRight size={14} />
      </a>
    </div>
  );
}

export default function ServicesSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="usluge" className="py-24" style={{ background: "var(--cream)" }}>
      <div className="container">
        {/* Header */}
        <div
          ref={titleRef}
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div className="section-label mb-3">Naše usluge</div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--slate-deep)" }}
          >
            Kompletan tretman
            <br />
            <span style={{ color: "var(--teal-deep)" }}>vašeg osmijeha</span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-light)" }}
          >
            Od preventive do estetike — nudimo sveobuhvatnu stomatološku njegu
            za cijelu porodicu u jednom modernom prostoru.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-12"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 600ms 400ms, transform 600ms 400ms",
          }}
        >
          <p
            className="text-sm mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-light)" }}
          >
            Niste sigurni koja usluga vam treba? Zakažite besplatne konsultacije.
          </p>
          <a
            href="#zakazivanje"
            className="btn-primary inline-flex"
          >
            <Sparkles size={16} />
            Besplatne konsultacije
          </a>
        </div>
      </div>
    </section>
  );
}
