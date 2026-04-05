"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    name: "Elif Yılmaz",
    initials: "EY",
    duration: "8 aydır üye",
    text: "Kriya Pilates'e başladığımdan beri hayatım değişti. Bel ağrılarım geçti, duruşum düzeldi ve kendimi çok daha enerjik hissediyorum. Eğitmenler son derece ilgili ve profesyonel.",
  },
  {
    name: "Mehmet Karaca",
    initials: "MK",
    duration: "1 yıldır üye",
    text: "Stüdyonun atmosferi muhteşem, Gümüşsuyu'nun o huzurlu havasını içeri taşımışlar. Reformer derslerinde her zaman kişisel ilgi görüyorsunuz. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Ayşe Demir",
    initials: "AD",
    duration: "6 aydır üye",
    text: "Yıllardır farklı stüdyolara gittim ama Kriya'daki özen ve kalite bambaşka. Her ders benim ihtiyaçlarıma göre planlanıyor. Burası sadece bir stüdyo değil, bir aile.",
  },
];

const avatarColors = [
  "bg-[var(--color-accent)]/15 text-[var(--color-accent)]",
  "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
  "bg-amber-100 text-amber-700",
];

function Stars({ count = 5, size = "w-4 h-4" }: { count?: number; size?: string }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <svg
          key={i}
          className={`${size} text-[var(--color-accent)]`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  useScrollReveal();

  return (
    <section id="yorumlar" className="py-28 lg:py-36 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.15em] font-medium mb-4">
            Yorumlar
          </p>
          <div className="flex justify-center items-end gap-4 mb-4">
            <span className="font-heading font-bold text-[var(--color-primary)] text-[6rem] leading-none">
              5
            </span>
            <div className="pb-3">
              <Stars size="w-6 h-6" />
              <p className="text-[var(--color-text-muted)] text-sm mt-1">
                Google Değerlendirmesi
              </p>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl p-8 relative border border-neutral-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-shadow duration-300 ${i === 1 ? "md:-translate-y-4" : ""}`}
            >
              {/* Decorative quote */}
              <svg
                className="absolute top-6 right-6 w-10 h-10 text-[var(--color-accent)] opacity-15"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>

              <div className="mb-5">
                <Stars size="w-4 h-4" />
              </div>

              <p className="text-[var(--color-text)] italic leading-[1.8] mb-8 text-[0.95rem]">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-neutral-100">
                {/* Avatar with initials */}
                <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${avatarColors[i]}`}>
                  {review.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[var(--color-primary)] text-sm">
                    {review.name}
                  </p>
                  <p className="text-[var(--color-text-muted)] text-xs mt-0.5">
                    {review.duration}
                  </p>
                </div>
                {/* Google icon */}
                <svg className="w-5 h-5 text-[var(--color-text-muted)] opacity-40 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
