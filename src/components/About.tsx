"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  useScrollReveal();

  return (
    <section id="hakkimizda" className="py-28 lg:py-36 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          {/* Text - 3 cols */}
          <div className="lg:col-span-3 reveal">
            <p className="text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.15em] font-medium mb-4">
              Hakkımızda
            </p>
            <h2 className="font-heading font-semibold text-[var(--color-primary)] text-[2rem] md:text-[2.75rem] leading-[1.15] tracking-[-0.02em] mb-8">
              Hareketin İyileştirici
              <br />
              Gücünü Keşfedin
            </h2>

            <div className="space-y-6 text-[1.125rem] leading-[1.8] text-[var(--color-text-muted)]">
              <p>
                Beyoğlu&apos;nun tarihi dokusunda, Gümüşsuyu&apos;nun sakin
                sokaklarında yer alan Kriya Pilates Studio, bedeninizi ve
                zihninizi bir araya getiren özel bir alan olarak tasarlandı.
                Yılların deneyimini ve tutkusunu her derse taşıyoruz.
              </p>
              <p>
                Her bireyin farklı olduğuna inanıyoruz. Bu yüzden derslerimiz
                tamamen kişiye özel hazırlanır — ister ilk kez pilates
                deneyecek olun, ister yıllardır pratik yapıyor olun. Amacımız,
                sizin en iyi halinize ulaşmanıza rehberlik etmek.
              </p>
              <p>
                Stüdyomuzda sadece egzersiz yapmıyorsunuz; kendinize zaman
                ayırıyor, nefes alıyor ve içsel dengenizi yeniden
                buluyorsunuz. Kriya ailesi olarak sizi aramızda görmekten
                mutluluk duyarız.
              </p>
            </div>
          </div>

          {/* Decorative element - 2 cols */}
          <div className="lg:col-span-2 reveal reveal-delay-1">
            <div className="relative flex items-center justify-center min-h-[360px]">
              {/* Background shapes */}
              <div className="absolute w-64 h-64 rounded-full bg-[var(--color-surface)] top-4 -right-4" />
              <div className="absolute w-48 h-48 rounded-full border-2 border-[var(--color-accent)]/20 -bottom-2 left-4" />

              {/* Main content card */}
              <div className="relative bg-white rounded-2xl shadow-lg p-10 text-center">
                <div className="text-[6rem] font-heading font-bold text-[var(--color-primary)] leading-none">
                  5.0
                </div>
                <div className="flex justify-center gap-1 mt-3 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[var(--color-accent)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[var(--color-text-muted)] text-sm">
                  Google Değerlendirmesi
                </p>
                <div className="mt-6 pt-6 border-t border-neutral-100">
                  <p className="text-[var(--color-primary)] font-heading font-semibold text-lg">
                    Mükemmel Deneyim
                  </p>
                  <p className="text-[var(--color-text-muted)] text-sm mt-1">
                    Beyoğlu, İstanbul
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
