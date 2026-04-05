export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Left - Brand */}
          <div>
            <p className="font-heading text-2xl font-bold mb-3">
              Kriya <span className="text-[var(--color-accent)]">Pilates</span>
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Beyoğlu&apos;nun kalbinde, bedeninizi ve zihninizi
              dönüştüren özel pilates deneyimi.
            </p>
          </div>

          {/* Center - Nav links */}
          <div>
            <p className="text-[0.8rem] uppercase tracking-[0.15em] font-medium text-white/40 mb-5">
              Hızlı Bağlantılar
            </p>
            <nav className="space-y-3">
              {[
                { href: "#ana-sayfa", label: "Ana Sayfa" },
                { href: "#hakkimizda", label: "Hakkımızda" },
                { href: "#hizmetler", label: "Hizmetler" },
                { href: "#yorumlar", label: "Yorumlar" },
                { href: "#iletisim", label: "İletişim" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/60 hover:text-[var(--color-accent)] transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right - Contact */}
          <div>
            <p className="text-[0.8rem] uppercase tracking-[0.15em] font-medium text-white/40 mb-5">
              İletişim Bilgileri
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+905061035372"
                className="block text-white/60 hover:text-[var(--color-accent)] transition-colors"
              >
                +90 506 103 53 72
              </a>
              <p className="text-white/60">
                Gümüşsuyu, Muhtar Kamil Sk.
                <br />
                Onur Apt No:5/1, 34437
                <br />
                Beyoğlu/İstanbul
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; 2026 Kriya Pilates Studio. Tüm hakları saklıdır.</p>
          <p>Beyoğlu, İstanbul</p>
        </div>
      </div>
    </footer>
  );
}
