/**
 * S Dental — Before & After Section
 * Clinical Luxury Design System
 * Visual proof of successful treatments
 */

import { useEffect, useRef, useState } from "react";
import { Star, ArrowRight } from "lucide-react";

const beforeAfterCases = [
  {
    title: "Profesionalno bijeljenje zuba",
    description: "Transformacija iz žutih u sjajno bijele zube za dramatičan rezultat.",
    image: "/manus-storage/before-after-whitening_d6b39e88.jpg",
    result: "Bijeli zubi",
    rating: 5,
  },
  {
    title: "Ortodontska korekcija",
    description: "Ravnanje iskrivljenih zuba za savršen osmijeh i bolji zagrižaj.",
    image: "/manus-storage/before-after-alignment_cb158430.jpg",
    result: "Ravni zubi",
    rating: 5,
  },
  {
    title: "Restauracija zuba",
    description: "Zamjena oštećenog zuba sa керамичком krunicom — prirodan izgled.",
    image: "/manus-storage/before-after-restoration_1db10b70.jpg",
    result: "Obnova osmijeka",
    rating: 5,
  },
  {
    title: "Kompletan makeover osmijeha",
    description: "Kombinovani tretmani za transformaciju cijelog osmijeha.",
    image: "/manus-storage/before-after-smile_c5f20f39.jpg",
    result: "Radijantni osmijeh",
    rating: 5,
  },
];

function BeforeAfterCard({ 
  case: caseItem, 
  index 
}: { 
  case: typeof beforeAfterCases[0]; 
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Image container */}
      <div
        className="relative overflow-hidden bg-gray-200"
        style={{ aspectRatio: "1/1" }}
      >
        <img
          src={caseItem.image}
          alt={caseItem.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onLoad={() => setImageLoaded(true)}
        />

        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, oklch(0.28 0.12 195 / 0.6) 0%, transparent 60%)",
          }}
        />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
          <div className="flex gap-0.5 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={14}
                style={{
                  color: "var(--gold)",
                  fill: "var(--gold)",
                }}
              />
            ))}
          </div>

          <h3
            className="text-xl font-bold mb-1 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {caseItem.title}
          </h3>

          <p
            className="text-sm opacity-90 mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {caseItem.description}
          </p>

          <div
            className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full"
            style={{
              background: "var(--teal-bright)",
              color: "white",
              fontFamily: "'DM Sans', sans-serif",
              width: "fit-content",
            }}
          >
            <span>✓ {caseItem.result}</span>
          </div>
        </div>

        {/* Hover CTA */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <a
            href="#zakazivanje"
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-150 hover:scale-105"
            style={{
              background: "var(--teal-bright)",
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: "0 8px 24px oklch(0.62 0.14 195 / 0.5)",
            }}
          >
            Zakaži <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
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
    <section id="rezultati" className="py-24" style={{ background: "white" }}>
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
          <div className="section-label mb-3">Rezultati tretmana</div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--slate-deep)" }}
          >
            Prije i Poslije
            <br />
            <span style={{ color: "var(--teal-deep)" }}>Transformacija osmijeha</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-light)" }}
          >
            Pogledajte kako naši tretmani mijenjaju osmijehe i povjerenje naših pacijenata.
            Svaka fotografija je dokaz naše stručnosti i posvećenosti vašem lijepom osmijehu.
          </p>
        </div>

        {/* Before/After Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {beforeAfterCases.map((caseItem, index) => (
            <BeforeAfterCard key={caseItem.title} case={caseItem} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center transition-all duration-700"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "300ms",
          }}
        >
          <p
            className="text-base mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-mid)" }}
          >
            Želite li da postignete sličan rezultat? Zakažite besplatnu konsultaciju sa našim timom.
          </p>
          <a
            href="#zakazivanje"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-lg font-semibold text-base transition-all duration-200 hover:scale-105"
            style={{
              background: "var(--teal-deep)",
              color: "white",
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: "0 8px 24px oklch(0.42 0.12 195 / 0.35)",
            }}
          >
            Zakaži besplatnu konsultaciju
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Trust statement */}
        <div
          className="mt-16 p-6 rounded-xl text-center"
          style={{
            background: "var(--teal-pale)",
            border: "1px solid var(--teal-light)",
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 600ms 400ms, transform 600ms 400ms",
          }}
        >
          <p
            className="text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "var(--slate-mid)" }}
          >
            <strong style={{ color: "var(--teal-deep)" }}>Napomena:</strong> Sve fotografije su sa stvarnih pacijenata
            koji su dali saglasnost za objavljivanje. Rezultati mogu varirati u zavisnosti od individualnih faktora.
          </p>
        </div>
      </div>
    </section>
  );
}
