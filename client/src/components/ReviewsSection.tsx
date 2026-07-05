/**
 * S Dental — Reviews Section
 * Clinical Luxury Design System
 * Google Reviews with 3.7 rating
 */

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Amina K.",
    initials: "AK",
    rating: 5,
    text: "Odlična ordinacija! Doktor je veoma stručan i pažljiv. Pregled je bio bezbojan, a osoblje izuzetno ljubazno. Preporučujem svima!",
    date: "Prije 2 sedmice",
    color: "oklch(0.62 0.14 195)",
  },
  {
    name: "Miroslav P.",
    initials: "MP",
    rating: 5,
    text: "Konačno stomatolog kome mogu vjerovati! Profesionalan pristup, moderna oprema i prihvatljive cijene. Moja cijela porodica dolazi ovdje.",
    date: "Prije mjesec dana",
    color: "oklch(0.52 0.13 195)",
  },
  {
    name: "Fatima H.",
    initials: "FH",
    rating: 4,
    text: "Veoma sam zadovoljna tretmanom. Bijeljenje zuba je dalo odlične rezultate. Jedino bi moglo biti malo više termina dostupno.",
    date: "Prije 3 sedmice",
    color: "oklch(0.72 0.10 195)",
  },
  {
    name: "Dejan M.",
    initials: "DM",
    rating: 5,
    text: "Hitni pregled sam dobio isti dan. Doktor je brzo riješio problem i bol je nestao. Hvala na brzoj reakciji i profesionalnosti!",
    date: "Prije 5 dana",
    color: "oklch(0.42 0.12 195)",
  },
  {
    name: "Selma B.",
    initials: "SB",
    rating: 4,
    text: "Dovela sam dijete na pregled i bila sam oduševljena kako su strpljivi sa djecom. Preporučujem za dječiju stomatologiju.",
    date: "Prije 2 mjeseca",
    color: "oklch(0.58 0.12 195)",
  },
  {
    name: "Nikola T.",
    initials: "NT",
    rating: 5,
    text: "Ugradnja krunice je bila besprijekorna. Estetski rezultat je fantastičan. Konačno se ne stidim smijati!",
    date: "Prije 6 sedmica",
    color: "oklch(0.48 0.13 195)",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          style={{
            color: i <= rating ? "var(--gold)" : "var(--border)",
            fill: i <= rating ? "var(--gold)" : "transparent",
          }}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="p-6 rounded-xl border relative"
      style={{
        background: "white",
        borderColor: "var(--border)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 500ms cubic-bezier(0.23,1,0.32,1) ${index * 80}ms, transform 500ms cubic-bezier(0.23,1,0.32,1) ${index * 80}ms`,
      }}
    >
      {/* Quote icon */}
      <Quote
        size={28}
        className="absolute top-4 right-4 opacity-10"
        style={{ color: "var(--teal-deep)" }}
      />

      {/* Stars */}
      <StarRating rating={review.rating} />

      {/* Text */}
      <p
        className="mt-3 mb-4 text-sm leading-relaxed"
        style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-mid)" }}
      >
        "{review.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold text-white flex-shrink-0"
          style={{ background: review.color, fontFamily: "'DM Sans', sans-serif" }}
        >
          {review.initials}
        </div>
        <div>
          <div
            className="text-sm font-semibold"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-deep)" }}
          >
            {review.name}
          </div>
          <div
            className="text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-light)" }}
          >
            {review.date}
          </div>
        </div>
        {/* Google G */}
        <div className="ml-auto">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
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
    <section id="recenzije" className="py-24" style={{ background: "var(--cream)" }}>
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
          <div className="section-label mb-3">Recenzije pacijenata</div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--slate-deep)" }}
          >
            Šta kažu naši
            <br />
            <span style={{ color: "var(--teal-deep)" }}>pacijenti</span>
          </h2>

          {/* Rating summary */}
          <div
            className="inline-flex items-center gap-4 px-6 py-4 rounded-xl"
            style={{
              background: "white",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              border: "1px solid var(--border)",
            }}
          >
            <div>
              <div
                className="text-5xl font-bold leading-none"
                style={{ fontFamily: "'Playfair Display', serif", color: "var(--teal-deep)" }}
              >
                3.7
              </div>
              <div className="flex gap-0.5 mt-1 justify-center">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} size={16} style={{ color: "var(--gold)", fill: "var(--gold)" }} />
                ))}
                <Star size={16} style={{ color: "var(--gold)", fill: "transparent", stroke: "var(--gold)" }} />
              </div>
            </div>
            <div
              className="w-px h-12 self-center"
              style={{ background: "var(--border)" }}
            />
            <div className="text-left">
              <div
                className="text-sm font-semibold"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-deep)" }}
              >
                63 recenzije
              </div>
              <div className="flex items-center gap-1 mt-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span
                  className="text-xs"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-light)" }}
                >
                  Google recenzije
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 hover:underline"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--teal-deep)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Pogledajte sve recenzije na Google-u
          </a>
        </div>
      </div>
    </section>
  );
}
