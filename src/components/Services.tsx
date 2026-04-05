"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    title: "Reformer Pilates",
    description:
      "Özel reformer aletleri ile kas gücünüzü ve esnekliğinizi artırın. Her seviyeye uygun, kişiye özel programlarla bedeninizin potansiyelini keşfedin.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
        />
      </svg>
    ),
  },
  {
    title: "Mat Pilates",
    description:
      "Geleneksel mat pilates yöntemiyle derin kas gruplarını çalıştırın. Duruş bozukluklarını düzeltin ve bedeninizde fark yaratacak bir denge kazanın.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
  {
    title: "Özel Ders & Rehabilitasyon",
    description:
      "Bire bir özel derslerle tamamen size özel bir program oluşturuyoruz. Sakatlık sonrası rehabilitasyon ve duruş düzeltme konusunda uzman desteği alın.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  useScrollReveal();

  return (
    <section id="hizmetler" className="py-28 lg:py-36 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.15em] font-medium mb-4">
            Hizmetler
          </p>
          <h2 className="font-heading font-semibold text-[var(--color-primary)] text-[2rem] md:text-[2.75rem] leading-[1.15] tracking-[-0.02em]">
            Size Özel Programlar
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${i + 1} group bg-white border border-neutral-200 rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[var(--color-accent)]/40`}
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-heading font-semibold text-[var(--color-primary)] text-lg mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--color-text-muted)] leading-[1.8] text-[0.95rem]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA below cards */}
        <div className="text-center mt-16 reveal">
          <p className="text-[var(--color-text-muted)] mb-6">
            Hangi programın size uygun olduğunu birlikte keşfedelim.
          </p>
          <a
            href="#iletisim"
            className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            Ücretsiz Danışmanlık
          </a>
        </div>
      </div>
    </section>
  );
}
