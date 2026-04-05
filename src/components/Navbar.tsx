"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#ana-sayfa", label: "Ana Sayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 shadow-sm backdrop-blur-[12px]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#ana-sayfa"
            className="font-heading text-2xl font-bold tracking-tight"
          >
            <span className={scrolled ? "text-[var(--color-primary)]" : "text-white"}>
              Kriya
            </span>
            <span className="text-[var(--color-accent)]"> Pilates</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-[0.8rem] uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-[var(--color-primary)] hover:text-[var(--color-accent)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#iletisim"
              className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white text-[0.8rem] uppercase tracking-[0.15em] font-medium px-7 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              İletişim
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center z-50"
            aria-label="Menüyü aç"
          >
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                menuOpen
                  ? "rotate-45 translate-y-[0px] bg-white"
                  : scrolled
                  ? "bg-[var(--color-primary)] -translate-y-1.5"
                  : "bg-white -translate-y-1.5"
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                menuOpen
                  ? "opacity-0"
                  : scrolled
                  ? "bg-[var(--color-primary)]"
                  : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                menuOpen
                  ? "-rotate-45 translate-y-[0px] bg-white"
                  : scrolled
                  ? "bg-[var(--color-primary)] translate-y-1.5"
                  : "bg-white translate-y-1.5"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--color-primary)]/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl font-heading font-semibold tracking-wide py-4 transition-all duration-300 hover:text-[var(--color-accent)]"
            style={{
              transitionDelay: menuOpen ? `${i * 80}ms` : "0ms",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#iletisim"
          onClick={() => setMenuOpen(false)}
          className="mt-8 bg-[var(--color-accent)] text-white text-sm uppercase tracking-[0.15em] font-medium px-10 py-3.5 rounded-full transition-all duration-300 hover:bg-[var(--color-accent-dark)]"
          style={{
            transitionDelay: menuOpen ? `${navLinks.length * 80}ms` : "0ms",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
          }}
        >
          İletişim
        </a>
      </div>
    </>
  );
}
