/**
 * S Dental — Booking Section (High-Conversion)
 * Clinical Luxury Design System
 * Prominent booking form with urgency triggers
 */

import { useEffect, useRef, useState } from "react";
import { Phone, Calendar, Clock, CheckCircle, Send, MapPin, AlertCircle } from "lucide-react";

const services = [
  "Estetska stomatologija",
  "Ortodoncija",
  "Preventivna njega / Čišćenje",
  "Oralna hirurgija",
  "Protetika",
  "Dječija stomatologija",
  "Hitni pregled",
  "Konsultacije",
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00",
];

export default function BookingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Unesite vaše ime";
    if (!form.phone.trim()) newErrors.phone = "Unesite broj telefona";
    if (!form.service) newErrors.service = "Odaberite uslugu";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
    }
  };

  // Get tomorrow's date as min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <section id="zakazivanje" className="py-24 relative overflow-hidden" style={{ background: "var(--teal-deep)" }}>
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ border: "2px solid white" }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10"
          style={{ border: "2px solid white" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ border: "1px solid white" }}
        />
      </div>

      <div className="container relative z-10">
        <div
          ref={ref}
          className="grid lg:grid-cols-5 gap-12 items-start transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
          }}
        >
          {/* Left: Info (2 cols) */}
          <div className="lg:col-span-2">
            <div className="section-label mb-3" style={{ color: "oklch(0.85 0.08 195)" }}>
              Zakazivanje
            </div>
            <h2
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Zakažite pregled
              <br />
              <span style={{ color: "oklch(0.88 0.08 195)" }}>danas</span>
            </h2>
            <p
              className="text-base mb-8 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(1 0 0 / 0.75)" }}
            >
              Popunite formu ili nas pozovite direktno. Odgovaramo u roku od
              nekoliko sati i potvrđujemo termin.
            </p>

            {/* Urgency trigger */}
            <div
              className="flex items-start gap-3 p-4 rounded-xl mb-6"
              style={{ background: "oklch(1 0 0 / 0.10)", border: "1px solid oklch(1 0 0 / 0.20)" }}
            >
              <AlertCircle size={18} className="text-yellow-300 mt-0.5 flex-shrink-0" />
              <div>
                <div
                  className="text-sm font-semibold text-white mb-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Ograničeni termini ove sedmice
                </div>
                <div
                  className="text-xs"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(1 0 0 / 0.65)" }}
                >
                  Zakažite što prije kako biste osigurali željeni termin.
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  label: "Telefon",
                  value: "064 9079071",
                  href: "tel:0649079071",
                },
                {
                  icon: MapPin,
                  label: "Adresa",
                  value: "E761, Novi Pazar",
                  href: "https://maps.google.com",
                },
                {
                  icon: Clock,
                  label: "Radno vrijeme",
                  value: "Pon–Sub: 09:00–17:00",
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(1 0 0 / 0.12)" }}
                  >
                    <Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <div
                      className="text-xs"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(1 0 0 / 0.55)" }}
                    >
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-white hover:underline"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <div
                        className="text-sm font-medium text-white"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form (3 cols) */}
          <div className="lg:col-span-3">
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "white",
                boxShadow: "0 32px 64px rgba(0,0,0,0.25)",
              }}
            >
              {submitted ? (
                <div className="text-center py-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "var(--teal-pale)" }}
                  >
                    <CheckCircle size={32} style={{ color: "var(--teal-deep)" }} />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", color: "var(--slate-deep)" }}
                  >
                    Zahtjev primljen!
                  </h3>
                  <p
                    className="text-sm mb-6"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-light)" }}
                  >
                    Kontaktiraćemo vas u roku od nekoliko sati na broj{" "}
                    <strong style={{ color: "var(--teal-deep)" }}>{form.phone}</strong>{" "}
                    kako bismo potvrdili termin.
                  </p>
                  <a
                    href="tel:0649079071"
                    className="btn-primary inline-flex"
                  >
                    <Phone size={16} />
                    Pozovite odmah: 064 9079071
                  </a>
                  <button
                    className="block mx-auto mt-3 text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-light)" }}
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", service: "", date: "", time: "", message: "" }); }}
                  >
                    Zakaži novi termin
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3
                    className="text-xl font-bold mb-6"
                    style={{ fontFamily: "'Playfair Display', serif", color: "var(--slate-deep)" }}
                  >
                    Popunite formu
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {/* Name */}
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-mid)" }}
                      >
                        Ime i prezime *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Npr. Amina Kovačević"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-150"
                        style={{
                          border: `1.5px solid ${errors.name ? "#ef4444" : "var(--border)"}`,
                          fontFamily: "'DM Sans', sans-serif",
                          color: "var(--slate-deep)",
                          background: "var(--cream)",
                        }}
                        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--teal-bright)"; (e.target as HTMLInputElement).style.background = "white"; }}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = errors.name ? "#ef4444" : "var(--border)"; (e.target as HTMLInputElement).style.background = "var(--cream)"; }}
                      />
                      {errors.name && (
                        <p className="text-xs mt-1" style={{ color: "#ef4444", fontFamily: "'DM Sans', sans-serif" }}>
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-mid)" }}
                      >
                        Broj telefona *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="Npr. 064 123 4567"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-150"
                        style={{
                          border: `1.5px solid ${errors.phone ? "#ef4444" : "var(--border)"}`,
                          fontFamily: "'DM Sans', sans-serif",
                          color: "var(--slate-deep)",
                          background: "var(--cream)",
                        }}
                        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--teal-bright)"; (e.target as HTMLInputElement).style.background = "white"; }}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = errors.phone ? "#ef4444" : "var(--border)"; (e.target as HTMLInputElement).style.background = "var(--cream)"; }}
                      />
                      {errors.phone && (
                        <p className="text-xs mt-1" style={{ color: "#ef4444", fontFamily: "'DM Sans', sans-serif" }}>
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service */}
                  <div className="mb-4">
                    <label
                      className="block text-xs font-semibold mb-1.5"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-mid)" }}
                    >
                      Vrsta usluge *
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-150 appearance-none"
                      style={{
                        border: `1.5px solid ${errors.service ? "#ef4444" : "var(--border)"}`,
                        fontFamily: "'DM Sans', sans-serif",
                        color: form.service ? "var(--slate-deep)" : "var(--slate-light)",
                        background: "var(--cream)",
                        cursor: "pointer",
                      }}
                      onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = "var(--teal-bright)"; (e.target as HTMLSelectElement).style.background = "white"; }}
                      onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = errors.service ? "#ef4444" : "var(--border)"; (e.target as HTMLSelectElement).style.background = "var(--cream)"; }}
                    >
                      <option value="">Odaberite uslugu...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-xs mt-1" style={{ color: "#ef4444", fontFamily: "'DM Sans', sans-serif" }}>
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {/* Date */}
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-mid)" }}
                      >
                        Željeni datum
                      </label>
                      <input
                        type="date"
                        value={form.date}
                        min={minDate}
                        onChange={(e) => handleChange("date", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-150"
                        style={{
                          border: "1.5px solid var(--border)",
                          fontFamily: "'DM Sans', sans-serif",
                          color: "var(--slate-deep)",
                          background: "var(--cream)",
                        }}
                        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--teal-bright)"; (e.target as HTMLInputElement).style.background = "white"; }}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "var(--border)"; (e.target as HTMLInputElement).style.background = "var(--cream)"; }}
                      />
                    </div>

                    {/* Time */}
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-mid)" }}
                      >
                        Željeno vrijeme
                      </label>
                      <select
                        value={form.time}
                        onChange={(e) => handleChange("time", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-150 appearance-none"
                        style={{
                          border: "1.5px solid var(--border)",
                          fontFamily: "'DM Sans', sans-serif",
                          color: form.time ? "var(--slate-deep)" : "var(--slate-light)",
                          background: "var(--cream)",
                          cursor: "pointer",
                        }}
                        onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = "var(--teal-bright)"; (e.target as HTMLSelectElement).style.background = "white"; }}
                        onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = "var(--border)"; (e.target as HTMLSelectElement).style.background = "var(--cream)"; }}
                      >
                        <option value="">Odaberite vrijeme...</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label
                      className="block text-xs font-semibold mb-1.5"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-mid)" }}
                    >
                      Napomena (opcionalno)
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Opišite vaš problem ili posebne zahtjeve..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-150 resize-none"
                      style={{
                        border: "1.5px solid var(--border)",
                        fontFamily: "'DM Sans', sans-serif",
                        color: "var(--slate-deep)",
                        background: "var(--cream)",
                      }}
                      onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "var(--teal-bright)"; (e.target as HTMLTextAreaElement).style.background = "white"; }}
                      onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "var(--border)"; (e.target as HTMLTextAreaElement).style.background = "var(--cream)"; }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-lg font-semibold text-base text-white transition-all duration-200 hover:scale-[1.01] active:scale-[0.98]"
                    style={{
                      background: "var(--teal-deep)",
                      fontFamily: "'DM Sans', sans-serif",
                      boxShadow: "0 8px 24px oklch(0.42 0.12 195 / 0.35)",
                    }}
                  >
                    <Send size={16} />
                    Pošaljite zahtjev za termin
                  </button>

                  <p
                    className="text-center text-xs mt-3"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-light)" }}
                  >
                    Ili nas pozovite direktno:{" "}
                    <a
                      href="tel:0649079071"
                      className="font-semibold hover:underline"
                      style={{ color: "var(--teal-deep)" }}
                    >
                      064 9079071
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
