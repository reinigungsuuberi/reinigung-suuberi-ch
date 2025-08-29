import Link from "next/link";
import { getAllServices } from "../../data/services";

const ServicesIndexPage = () => {
  const services = getAllServices();
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-3xl font-bold text-[var(--foreground)]">Dienstleistungen</h1>
      <p className="mt-3 text-[var(--color-muted)] max-w-3xl">
        Entdecken Sie unser Angebot. Für jede Dienstleistung finden Sie Details, Richtpreise und die Möglichkeit, uns direkt zu kontaktieren.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/dienstleistungen/${s.slug}`}
            className="block rounded-xl border border-black/5 bg-white p-6 shadow-sm hover:shadow transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]"
            aria-label={`${s.title} – Details & Preise anzeigen`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl" role="img" aria-label={s.alt}>{s.icon}</span>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">{s.title}</h2>
            </div>
            <p className="mt-3 text-[var(--color-muted)]">{s.shortDescription}</p>
            <span className="mt-4 inline-flex items-center text-[var(--color-primary)]">Mehr erfahren →</span>
          </Link>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-[var(--foreground)]">Wichtige Dokumente</h2>
        <p className="mt-3 text-[var(--color-muted)] max-w-3xl">
          Laden Sie unsere Garantiebestimmungen und Leistungsbeschreibung herunter, um mehr über unsere Dienstleistungen zu erfahren.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[var(--foreground)]">Garantiebestimmungen</h3>
            <p className="mt-2 text-[var(--color-muted)]">
              Unsere Garantiebestimmungen für alle Reinigungsdienstleistungen. Wichtig für Kunden bei Endreinigungen und Bauendreinigungen.
            </p>
                          <div className="mt-4 flex gap-3">
                <a
                  href="https://docs.google.com/document/d/1ddAKrDcjyP0JOulMfwR1tRQ_Bo80bjVuCySe7XEw0U0/export?format=pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]"
                  aria-label="Garantiebestimmungen als PDF herunterladen"
                >
                  PDF herunterladen
                </a>
            </div>
          </div>
          
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[var(--foreground)]">Leistungsbeschreibung</h3>
            <p className="mt-2 text-[var(--color-muted)]">
              Detaillierte Beschreibung unserer Dienstleistungen, Leistungsumfang und Vorteile für eine bessere Entscheidungsfindung.
            </p>
                          <div className="mt-4 flex gap-3">
                <a
                  href="https://docs.google.com/document/d/1kIjCYaU6K4nbwyA8CSjah-NAu7fR6-I9dOT9OsqYt5g/export?format=pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]"
                  aria-label="Leistungsbeschreibung als PDF herunterladen"
                >
                  PDF herunterladen
                </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesIndexPage;


