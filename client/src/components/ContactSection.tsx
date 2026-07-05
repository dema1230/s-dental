/**
 * S Dental — Contact Section with Map
 * Clinical Luxury Design System
 */

import { useEffect, useRef, useState } from "react";
import { Phone, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { MapView } from "@/components/Map";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleMapReady = (map: google.maps.Map) => {
    setMapInstance(map);
    setMapReady(true);

    // S Dental location in Novi Pazar
    const location = { lat: 43.1367, lng: 20.5117 };
    map.setCenter(location);
    map.setZoom(16);

    // Custom marker
    const marker = new google.maps.Marker({
      position: location,
      map,
      title: "S Dental — Stomatološka ordinacija",
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 14,
        fillColor: "#0d7377",
        fillOpacity: 1,
        strokeColor: "white",
        strokeWeight: 3,
      },
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="font-family:'DM Sans',sans-serif;padding:8px;min-width:180px;">
          <div style="font-weight:700;color:#0d7377;font-size:14px;margin-bottom:4px;">S Dental</div>
          <div style="font-size:12px;color:#666;">Stomatološka ordinacija</div>
          <div style="font-size:12px;color:#666;margin-top:4px;">E761, Novi Pazar</div>
          <div style="font-size:12px;color:#0d7377;margin-top:4px;font-weight:600;">064 9079071</div>
        </div>
      `,
    });

    marker.addListener("click", () => infoWindow.open(map, marker));
    infoWindow.open(map, marker);
  };

  const workingHours = [
    { day: "Ponedjeljak", hours: "09:00 – 17:00", open: true },
    { day: "Utorak", hours: "09:00 – 17:00", open: true },
    { day: "Srijeda", hours: "09:00 – 17:00", open: true },
    { day: "Četvrtak", hours: "09:00 – 17:00", open: true },
    { day: "Petak", hours: "09:00 – 17:00", open: true },
    { day: "Subota", hours: "09:00 – 14:00", open: true },
    { day: "Nedjelja", hours: "Zatvoreno", open: false },
  ];

  return (
    <section id="kontakt" className="py-24" style={{ background: "white" }}>
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
          <div className="section-label mb-3">Kontakt</div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--slate-deep)" }}
          >
            Pronađite nas
            <br />
            <span style={{ color: "var(--teal-deep)" }}>u Novom Pazaru</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Contact info */}
          <div
            className="space-y-6 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
              transitionDelay: "100ms",
            }}
          >
            {/* Phone */}
            <div
              className="p-5 rounded-xl border"
              style={{ borderColor: "var(--border)", background: "var(--cream)" }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--teal-pale)" }}
                >
                  <Phone size={18} style={{ color: "var(--teal-deep)" }} />
                </div>
                <div>
                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-light)", letterSpacing: "0.08em", textTransform: "uppercase" }}
                  >
                    Telefon
                  </div>
                  <a
                    href="tel:0649079071"
                    className="text-xl font-bold hover:underline block"
                    style={{ fontFamily: "'Playfair Display', serif", color: "var(--teal-deep)" }}
                  >
                    064 9079071
                  </a>
                  <p
                    className="text-xs mt-1"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-light)" }}
                  >
                    Dostupni u radnom vremenu
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div
              className="p-5 rounded-xl border"
              style={{ borderColor: "var(--border)", background: "var(--cream)" }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--teal-pale)" }}
                >
                  <MapPin size={18} style={{ color: "var(--teal-deep)" }} />
                </div>
                <div>
                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-light)", letterSpacing: "0.08em", textTransform: "uppercase" }}
                  >
                    Adresa
                  </div>
                  <div
                    className="font-semibold"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-deep)" }}
                  >
                    E761, Novi Pazar
                  </div>
                  <a
                    href="https://maps.google.com/?q=S+Dental+Novi+Pazar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs mt-1 hover:underline"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--teal-mid)" }}
                  >
                    Otvori u Google Maps <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>

            {/* Working hours */}
            <div
              className="p-5 rounded-xl border"
              style={{ borderColor: "var(--border)", background: "var(--cream)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--teal-pale)" }}
                >
                  <Clock size={18} style={{ color: "var(--teal-deep)" }} />
                </div>
                <div
                  className="text-xs font-semibold"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-light)", letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  Radno vrijeme
                </div>
              </div>
              <div className="space-y-2">
                {workingHours.map(({ day, hours, open }) => (
                  <div key={day} className="flex justify-between items-center">
                    <span
                      className="text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-mid)" }}
                    >
                      {day}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: open ? "var(--teal-deep)" : "#ef4444",
                      }}
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Map (2 cols) */}
          <div
            className="lg:col-span-2 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(24px)",
              transitionDelay: "200ms",
            }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                height: "480px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                border: "1px solid var(--border)",
              }}
            >
              <MapView
                onMapReady={handleMapReady}
              />
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <a
                href="tel:0649079071"
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-150 hover:scale-[1.02]"
                style={{
                  background: "var(--teal-deep)",
                  color: "white",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: "0 4px 14px oklch(0.42 0.12 195 / 0.3)",
                }}
              >
                <Phone size={16} />
                Pozovite nas
              </a>
              <a
                href="#zakazivanje"
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-150 hover:scale-[1.02]"
                style={{
                  background: "var(--cream)",
                  color: "var(--teal-deep)",
                  border: "1.5px solid var(--teal-deep)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <MessageCircle size={16} />
                Zakažite online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
