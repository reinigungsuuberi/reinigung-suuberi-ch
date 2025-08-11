"use client";

import Image from "next/image";
import SectionHeading from "./SectionHeading";

const AboutSection = () => {
  return (
    <section id="ueber-uns" className="py-16 sm:py-20 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading title="Über uns" align="left" />
            <p className="mt-4 text-[var(--foreground)]">
              Mit über 20 Jahren Erfahrung bietet Suuberi professionelle
              Reinigungs- und Hauswartungsdienste in Basel, Biel, Solothurn,
              Bern und Zürich. Unser Team arbeitet schnell, zuverlässig und
              diskret, mit ausschliesslich umweltfreundlichen
              Reinigungsmitteln.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-4" aria-label="Unsere Werte">
              {["Schnelligkeit", "Nachhaltigkeit", "Diskretion", "Flexibilität"].map(
                (value) => (
                  <li
                    key={value}
                    className="flex items-center gap-3 rounded-lg bg-[var(--color-surface)] p-3 shadow-sm"
                  >
                    <span className="text-xl" aria-hidden>
                      {value === "Schnelligkeit" && "⚡"}
                      {value === "Nachhaltigkeit" && "🌱"}
                      {value === "Diskretion" && "🤫"}
                      {value === "Flexibilität" && "🔁"}
                    </span>
                    <span className="text-sm text-[var(--foreground)]">{value}</span>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow">
            <Image
              src="https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=1600&auto=format&fit=crop"
              alt="Sauberer, moderner Büroraum"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


