"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  useScrollReveal();

  return (
    <section id="iletisim" className="py-28 lg:py-36 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.15em] font-medium mb-4">
            İletişim
          </p>
          <h2 className="font-heading font-semibold text-[var(--color-primary)] text-[2rem] md:text-[2.75rem] leading-[1.15] tracking-[-0.02em]">
            Bize Ulaşın
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left - Contact Info & Form */}
          <div className="reveal">
            {/* Contact details */}
            <div className="space-y-6 mb-12">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)] mb-1">
                    Telefon
                  </p>
                  <a
                    href="tel:+905061035372"
                    className="text-[var(--color-primary)] font-medium hover:text-[var(--color-accent)] transition-colors"
                  >
                    +90 506 103 53 72
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)] mb-1">
                    Adres
                  </p>
                  <p className="text-[var(--color-primary)] font-medium">
                    Gümüşsuyu, Muhtar Kamil Sk.
                    <br />
                    Onur Apt No:5/1, 34437
                    <br />
                    Beyoğlu/İstanbul
                  </p>
                </div>
              </div>

              {/* Google Maps Button */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Gümüşsuyu+Muhtar+Kamil+Sk+Onur+Apt+No+5+Beyoğlu+İstanbul"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium text-sm transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Google Maps&apos;te Aç
              </a>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <div>
                <input
                  type="text"
                  placeholder="Adınız Soyadınız"
                  className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 bg-white text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-accent)] transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-posta Adresiniz"
                  className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 bg-white text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-accent)] transition-all"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Mesajınız..."
                  className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 bg-white text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-accent)] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white text-sm uppercase tracking-[0.15em] font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>

          {/* Right - Google Maps Embed */}
          <div className="reveal reveal-delay-1">
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden border border-[var(--color-accent)]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.5!2d28.9865!3d41.0345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zR8O8bcO8xZ9zdXl1LCBNdWh0YXIgS2FtaWwgU2suIE9udXIgQXB0IE5vOjUvMSwgMzQ0MzcgQmV5b8SfbHUvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kriya Pilates Studio - Gümüşsuyu, Beyoğlu/İstanbul"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
