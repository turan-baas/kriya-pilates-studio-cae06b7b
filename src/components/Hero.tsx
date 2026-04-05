"use client";

export default function Hero() {
  return (
    <section
      id="ana-sayfa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-primary)]"
    >
      {/* Background geometric composition */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2D2D2D] to-[#3a3a3a]" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Large accent circle - top right */}
        <div
          className="animate-float-slow absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          }}
        />

        {/* Medium circle - bottom left */}
        <div
          className="animate-float absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          }}
        />

        {/* Geometric shapes */}
        <div className="animate-float absolute top-1/4 right-[15%] w-24 h-24 border border-[var(--color-accent)]/20 rotate-45" />
        <div className="animate-float-slow absolute bottom-1/3 left-[10%] w-16 h-16 border border-white/10 rotate-12" />
        <div className="animate-float absolute top-[60%] right-[30%] w-3 h-3 bg-[var(--color-accent)]/30 rounded-full" />
        <div className="animate-float-slow absolute top-[20%] left-[25%] w-2 h-2 bg-white/20 rounded-full" />

        {/* Diagonal accent line */}
        <div className="absolute top-0 right-[40%] w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--color-accent)]/10 to-transparent rotate-[15deg] origin-top" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Decorative line above */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="animate-expand-line h-[1px] bg-[var(--color-accent)]" />
        </div>

        {/* Small label */}
        <p className="animate-fade-in-up text-[var(--color-accent)] text-[0.8rem] uppercase tracking-[0.2em] font-medium mb-6">
          Beyoğlu, İstanbul
        </p>

        {/* Main heading */}
        <h1 className="animate-fade-in-up-delay-1 font-heading font-bold text-white text-[2.75rem] md:text-[4rem] lg:text-[5rem] leading-[1.05] tracking-[-0.03em] mb-8">
          Kriya Pilates
          <br />
          <span className="text-[var(--color-accent)]">Studio</span>
        </h1>

        {/* Tagline */}
        <p className="animate-fade-in-up-delay-2 text-white/70 text-lg md:text-xl font-light max-w-xl mx-auto mb-12 leading-relaxed">
          Bedeninizi ve zihninizi uyum içinde dönüştürün.
          <br className="hidden md:block" />
          Uzman eğitmenlerle kişiye özel pilates deneyimi.
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up-delay-3">
          <a
            href="#hizmetler"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
          >
            Keşfet
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </section>
  );
}
