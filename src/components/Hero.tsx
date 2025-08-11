"use client";

import Image from "next/image";

type HeroProps = {
  onCtaClick: () => void;
};

const Hero = ({ onCtaClick }: HeroProps) => {
  return (
    <section
      className="relative isolate overflow-hidden bg-[var(--color-surface)]"
      aria-label="Hero Bereich"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920&auto=format&fit=crop"
          alt="Reinigungsteam im Einsatz"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-black/40" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-28 sm:py-32 lg:py-40">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Mehr als sauber – <span className="text-[var(--color-accent)]">Suuberi</span>.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            Sauber. Schnell. Nachhaltig. Seit über 20 Jahren.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={onCtaClick}
              className="rounded-md bg-[var(--color-primary)] px-6 py-3 text-white font-medium shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]"
              aria-label="Jetzt Angebot anfordern"
            >
              Jetzt Angebot anfordern
            </button>
            <a
              href="#dienstleistungen"
              className="rounded-md bg-white/10 px-6 py-3 text-white border border-white/30 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]"
              aria-label="Mehr erfahren zu unseren Dienstleistungen"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


