"use client";

import Image from "next/image";
import { useMemo, useRef } from "react";

type Service = {
  title: string;
  description: string;
  icon: string;
  alt: string;
};

const services: Service[] = [
  {
    title: "Unterhaltsreinigung",
    description:
      "Regelmässige Reinigung für Büros, Praxen und Liegenschaften – zuverlässig und planbar.",
    icon: "🧹",
    alt: "Icon Unterhaltsreinigung",
  },
  {
    title: "Industriereinigung",
    description:
      "Professionelle Reinigung für Produktionsstätten, Lager und Werkhallen.",
    icon: "🏭",
    alt: "Icon Industriereinigung",
  },
  {
    title: "Endreinigung (Umzug)",
    description:
      "Gründliche Wohnungs- und Hausendreinigung inkl. Abnahmegarantie auf Wunsch.",
    icon: "📦",
    alt: "Icon Endreinigung",
  },
  {
    title: "Bauendreinigung",
    description:
      "Baustaub adé: Reinigung nach Bau- und Renovationsarbeiten für den perfekten Erstbezug.",
    icon: "🚧",
    alt: "Icon Bauendreinigung",
  },
  {
    title: "Fenster-, Fassaden- & Storenreinigung",
    description:
      "Streifenfreie Fenster, gepflegte Fassaden und saubere Storen – innen und aussen.",
    icon: "🪟",
    alt: "Icon Fenster- und Fassadenreinigung",
  },
  {
    title: "Spezialreinigungen",
    description:
      "Von Teppichen über Polster bis hin zu Tiefgaragen – wir kümmern uns um Spezialfälle.",
    icon: "✨",
    alt: "Icon Spezialreinigung",
  },
  {
    title: "Gartenpflege & Multiservices",
    description:
      "Rasen, Hecken, Wege, Winterdienst und kleine Reparaturen – alles aus einer Hand.",
    icon: "🌿",
    alt: "Icon Gartenpflege",
  },
];

type Review = {
  name: string;
  city: string;
  rating: number; // 1-5
  text: string;
};

const reviews: Review[] = [
  {
    name: "Anna M.",
    city: "Basel",
    rating: 5,
    text: "Sehr zuverlässig und gründlich – unsere Büros waren selten so sauber.",
  },
  {
    name: "Lukas M.",
    city: "Bern",
    rating: 5,
    text: "Schnelle Terminvergabe und top Ergebnis bei der Endreinigung.",
  },
  {
    name: "Sara M.",
    city: "Zürich",
    rating: 4,
    text: "Freundliches Team, nachhaltige Produkte und faire Preise.",
  },
];

const Home = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleScrollToForm = () => {
    const formElement = formRef.current;
    if (!formElement) return;
    formElement.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const locations = useMemo(
    () => ["Basel", "Biel", "Solothurn", "Bern", "Zürich"],
    []
  );

  const averageRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  }, []);

  const roundedAverage = useMemo(() => {
    return Math.round(averageRating * 10) / 10;
  }, [averageRating]);

  return (
    <main className="font-sans">
      {/* Hero */}
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
                onClick={handleScrollToForm}
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

      {/* Über uns */}
      <section id="ueber-uns" className="py-16 sm:py-20 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
                Über uns
              </h2>
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

      {/* Dienstleistungen */}
      <section
        id="dienstleistungen"
        className="py-16 sm:py-20 bg-[var(--color-surface)]"
      >
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[var(--color-primary)]">
            Dienstleistungen
          </h2>
          <p className="mt-3 text-center text-[var(--color-muted)]">
            Alles aus einer Hand – zuverlässig, nachhaltig und fair.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.title}
                className="rounded-xl border border-black/5 bg-white p-6 shadow-sm hover:shadow transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-label={s.alt}>
                    {s.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 text-[var(--color-muted)]">{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Warum Suuberi */}
      <section id="warum" className="py-16 sm:py-20 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[var(--color-primary)]">
            Warum Suuberi?
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "20+ Jahre Erfahrung", icon: "🏆" },
              { label: "Umweltfreundliche Produkte", icon: "🌿" },
              { label: "Schnelle Einsatzbereitschaft", icon: "⏱️" },
              { label: "Flexible Verträge", icon: "📄" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-white p-6 shadow-sm border border-black/5 text-center"
              >
                <div className="text-3xl" aria-hidden>
                  {item.icon}
                </div>
                <p className="mt-3 font-medium text-[var(--foreground)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kundenbewertungen */}
      <section id="bewertungen" className="py-16 sm:py-20 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[var(--color-primary)]">
            Kundenbewertungen
          </h2>
          <div className="mt-3 flex items-center justify-center gap-3">
            <div className="flex" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  className={i + 1 <= Math.round(averageRating) ? "text-yellow-400" : "text-gray-300"}
                  fill="currentColor"
                >
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.401 8.168L12 18.896l-7.335 3.868 1.401-8.168L.132 9.21l8.2-1.192z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-[var(--color-muted)]" aria-label={`${roundedAverage} von 5 Sternen`}>
              {roundedAverage} von 5
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <article
                key={r.name}
                className="rounded-xl bg-white p-6 shadow-sm border border-black/5"
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium text-[var(--foreground)]">
                    {r.name} · {r.city}
                  </div>
                  <div className="flex" aria-label={`${r.rating} von 5 Sternen`}>
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        className={i + 1 <= r.rating ? "text-yellow-400" : "text-gray-300"}
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.401 8.168L12 18.896l-7.335 3.868 1.401-8.168L.132 9.21l8.2-1.192z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-[var(--foreground)]">“{r.text}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section id="ablauf" className="py-16 sm:py-20 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[var(--color-primary)]">
            In 3 Schritten zum Angebot
          </h2>
          <ol className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: 1, title: "Kontakt aufnehmen", icon: "✉️" },
              { step: 2, title: "Angebot erhalten", icon: "📬" },
              { step: 3, title: "Reinigung geniessen", icon: "🏡" },
            ].map((s) => (
              <li
                key={s.step}
                className="rounded-xl bg-white p-6 shadow-sm border border-black/5"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>
                    {s.icon}
                  </span>
                  <p className="font-medium text-[var(--foreground)]">
                    {s.step}. {s.title}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Kontaktformular */}
      <section id="kontakt" className="py-16 sm:py-20 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
                Kontaktformular
              </h2>
              <p className="mt-3 text-[var(--foreground)]">
                Wir sind in {locations.join(", ")} für Sie im Einsatz.
              </p>
              <p className="mt-2 text-[var(--color-muted)]">
                Füllen Sie das Formular aus – wir melden uns zeitnah mit einem
                unverbindlichen Angebot.
              </p>
            </div>
            <form
              ref={formRef}
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const name = String(data.get("name") || "");
                const email = String(data.get("email") || "");
                const phone = String(data.get("phone") || "");
                const message = String(data.get("message") || "");
                const service = String(data.get("service") || "");
                const detailed = data.get("detailed") ? "Ja" : "Nein";

                const subject = `Angebotsanfrage – Suuberi Reinigung`;
                const bodyLines = [
                  "Hallo Suuberi,",
                  "",
                  `Name: ${name}`,
                  `E-Mail: ${email}`,
                  `Telefon: ${phone}`,
                  service ? `Dienstleistung: ${service}` : "Dienstleistung: ",
                  `Detailliertes Angebot: ${detailed}`,
                  "",
                  "Nachricht:",
                  message,
                  "",
                  "Vielen Dank und freundliche Grüsse",
                  name || "",
                ];
                const mailto = `mailto:info@suuberi-reinigung.ch?subject=${encodeURIComponent(
                  subject
                )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
                window.location.href = mailto;
              }}
              className="rounded-xl bg-white p-6 shadow-sm border border-black/5"
              aria-label="Kontaktformular"
            >
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ihr Name"
                    className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                    aria-required="true"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                      E-Mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@beispiel.ch"
                      className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium">
                      Telefonnummer
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+41 79 000 00 00"
                      className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium">
                    Dienstleistung
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Bitte wählen
                    </option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
                    aria-required="true"
                  />
                </div>
                <label className="inline-flex items-center gap-2">
                  <input
                    id="detailed"
                    name="detailed"
                    type="checkbox"
                    className="h-4 w-4 rounded border-black/20 text-[var(--color-primary)] focus:ring-[var(--color-secondary)]"
                    aria-label="Detailliertes Angebot gewünscht"
                  />
                  <span className="text-sm">Detailliertes Angebot gewünscht</span>
                </label>
                <button
                  type="submit"
                  className="mt-2 inline-flex justify-center items-center gap-2 rounded-md bg-[var(--color-primary)] px-5 py-3 text-white font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]"
                  aria-label="Standard-E-Mail mit Anfrage öffnen"
                >
                  E-Mail mit Anfrage öffnen
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-semibold text-[var(--foreground)]">Suuberi Reinigung</p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Reinigung Basel, Hauswartung Bern, Endreinigung Zürich, Bauendreinigung,
                Fenster- & Fassadenreinigung, Spezialreinigung, Gartenpflege.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[var(--foreground)]">Kontakt</p>
              <ul className="mt-2 text-sm text-[var(--color-muted)]">
                <li>
                  E-Mail: {" "}
                  <a
                    href="mailto:info@suuberi-reinigung.ch"
                    className="underline decoration-dotted underline-offset-2 hover:decoration-solid"
                    aria-label="E-Mail an info@suuberi-reinigung.ch senden"
                  >
                    info@suuberi-reinigung.ch
                  </a>
                </li>
                <li>
                  Telefon: {" "}
                  <a
                    href="tel:+41782346699"
                    className="underline decoration-dotted underline-offset-2 hover:decoration-solid"
                    aria-label="Telefonnummer +41 78 234 66 99 anrufen"
                  >
                    +41 78 234 66 99
                  </a>
                </li>
                <li>Regionen: Basel · Biel · Solothurn · Bern · Zürich</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[var(--foreground)]">Rechtliches</p>
              <ul className="mt-2 text-sm text-[var(--color-muted)]">
                <li>
                  <a className="hover:underline" href="/datenschutz">
                    Datenschutz
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="/impressum">
                    Impressum
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-xs text-[var(--color-muted)]">
            © 2025 Suuberi Reinigung. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;


