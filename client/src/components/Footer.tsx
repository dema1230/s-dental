/**
 * S Dental — Footer
 * Clinical Luxury Design System
 */

import { Phone, MapPin, Clock, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--slate-deep)" }}>
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "var(--teal-deep)" }}
              >
                <span
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  S
                </span>
              </div>
              <div>
                <div
                  className="font-bold text-lg text-white leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  S Dental
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(1 0 0 / 0.45)", letterSpacing: "0.05em" }}
                >
                  Stomatološka ordinacija
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(1 0 0 / 0.55)" }}
            >
              Profesionalna stomatološka njega u Novom Pazaru.
              Vaš osmijeh je naša misija.
            </p>
            <a
              href="tel:0649079071"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-150 hover:scale-105"
              style={{
                background: "var(--teal-deep)",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 4px 14px oklch(0.42 0.12 195 / 0.4)",
              }}
            >
              <Phone size={14} />
              064 9079071
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-sm font-semibold text-white mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              Brzi linkovi
            </h4>
            <nav className="space-y-2.5">
              {[
                { label: "Početna", href: "#hero" },
                { label: "Naše usluge", href: "#usluge" },
                { label: "O nama", href: "#o-nama" },
                { label: "Recenzije", href: "#recenzije" },
                { label: "Zakazivanje", href: "#zakazivanje" },
                { label: "Kontakt", href: "#kontakt" },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="block text-sm transition-colors duration-150 hover:text-white"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(1 0 0 / 0.55)" }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4
              className="text-sm font-semibold text-white mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              Informacije
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: "var(--teal-bright)" }} />
                <span
                  className="text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(1 0 0 / 0.55)" }}
                >
                  E761, Novi Pazar, Srbija
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 flex-shrink-0" style={{ color: "var(--teal-bright)" }} />
                <a
                  href="tel:0649079071"
                  className="text-sm hover:text-white transition-colors duration-150"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(1 0 0 / 0.55)" }}
                >
                  064 9079071
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={15} className="mt-0.5 flex-shrink-0" style={{ color: "var(--teal-bright)" }} />
                <div>
                  <div
                    className="text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(1 0 0 / 0.55)" }}
                  >
                    Pon–Sub: 08:00 – 20:00
                  </div>
                  <div
                    className="text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(1 0 0 / 0.55)" }}
                  >
                    Nedjelja: 10:00 – 15:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-5"
        style={{ borderColor: "oklch(1 0 0 / 0.08)" }}
      >
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(1 0 0 / 0.35)" }}
          >
            © {currentYear} S Dental — Stomatološka ordinacija Novi Pazar. Sva prava zadržana.
          </p>
          <p
            className="text-xs flex items-center gap-1"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(1 0 0 / 0.35)" }}
          >
            Napravljeno sa <Heart size={11} style={{ color: "var(--teal-bright)" }} /> za vaš osmijeh
          </p>
        </div>
      </div>
    </footer>
  );
}
