/**
 * S Dental — Booking Section (Simplified)
 * Clinical Luxury Design System
 * Contact info with working hours
 */

import { useEffect, useRef, useState } from "react";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function BookingSection() {
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
    <section id="zakazivanje" className="py-24" style={{ background: "var(--cream)" }}>
      <div className="container">
        {/* Header */}
        <div
          ref={ref}
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div className="section-label mb-3">Zakazivanje</div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--slate-deep)" }}
          >
            Zakažite pregled
            <br />
            <span style={{ color: "var(--teal-deep)" }}>direktno kod nas</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-light)" }}
          >
            Kontaktirajte nas telefonom ili posjetite ordinaciju. Naš tim je spreman da vas dočeka.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Phone Card */}
          <div
            className="p-8 rounded-2xl text-center transition-all duration-500 hover:scale-105"
            style={{
              background: "white",
              border: "1px solid var(--border)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "100ms",
            }}
          >
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4"
              style={{ background: "var(--teal-pale)" }}
            >
              <Phone size={24} style={{ color: "var(--teal-deep)" }} />
            </div>
            <h3
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "'Playfair Display', serif", color: "var(--slate-deep)" }}
            >
              Pozovite nas
            </h3>
            <a
              href="tel:0649079071"
              className="text-2xl font-bold hover:underline block mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--teal-deep)" }}
            >
              064 9079071
            </a>
            <p
              className="text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-light)" }}
            >
              Dostupni tokom radnog vremena
            </p>
          </div>

          {/* Address Card */}
          <div
            className="p-8 rounded-2xl text-center transition-all duration-500 hover:scale-105"
            style={{
              background: "white",
              border: "1px solid var(--border)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "150ms",
            }}
          >
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4"
              style={{ background: "var(--teal-pale)" }}
            >
              <MapPin size={24} style={{ color: "var(--teal-deep)" }} />
            </div>
            <h3
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "'Playfair Display', serif", color: "var(--slate-deep)" }}
            >
              Posjetite nas
            </h3>
            <p
              className="text-lg font-semibold mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--teal-deep)" }}
            >
              E761, Novi Pazar
            </p>
            <a
              href="https://maps.google.com/?q=S+Dental+Novi+Pazar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm hover:underline"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--teal-mid)" }}
            >
              Otvori u Google Maps <ArrowRight size={14} />
            </a>
          </div>

          {/* Hours Card */}
          <div
            className="p-8 rounded-2xl text-center transition-all duration-500 hover:scale-105"
            style={{
              background: "white",
              border: "1px solid var(--border)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "200ms",
            }}
          >
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4"
              style={{ background: "var(--teal-pale)" }}
            >
              <Clock size={24} style={{ color: "var(--teal-deep)" }} />
            </div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "var(--slate-deep)" }}
            >
              Radno vrijeme
            </h3>
            <div
              className="space-y-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <div>
                <p style={{ color: "var(--slate-mid)", fontSize: "0.875rem" }}>Ponedjeljak – Subota</p>
                <p style={{ color: "var(--teal-deep)", fontWeight: "600", fontSize: "1rem" }}>
                  08:00 – 20:00
                </p>
              </div>
              <div>
                <p style={{ color: "var(--slate-mid)", fontSize: "0.875rem" }}>Nedjelja</p>
                <p style={{ color: "var(--teal-deep)", fontWeight: "600", fontSize: "1rem" }}>
                  10:00 – 15:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "300ms",
          }}
        >
          <p
            className="text-base mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-mid)" }}
          >
            Trebate hitnu pomoć? Pozovite nas čak i van redovnog rasporeda!
          </p>
          <a
            href="tel:0649079071"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200 hover:scale-105"
            style={{
              background: "var(--teal-deep)",
              color: "white",
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: "0 8px 24px oklch(0.42 0.12 195 / 0.35)",
            }}
          >
            <Phone size={16} />
            Pozovi sada
          </a>
        </div>
      </div>
    </section>
  );
}
