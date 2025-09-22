import Link from "next/link";
import { getServiceBySlug, getAllServices } from "../../../data/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }));
}

const ServiceDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-2xl font-semibold">Dienstleistung nicht gefunden</h1>
        <p className="mt-2 text-[var(--color-muted)]">Bitte prüfen Sie die URL oder kehren Sie zur Übersicht zurück.</p>
        <Link href="/dienstleistungen" className="mt-6 inline-block text-[var(--color-primary)]">Zur Übersicht</Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex items-center gap-3">
        <span className="text-3xl" role="img" aria-label={service.alt}>{service.icon}</span>
        <h1 className="text-3xl font-bold text-[var(--foreground)]">{service.title}</h1>
      </div>
      <p className="mt-4 text-[var(--color-muted)] max-w-3xl">{service.intro}</p>

      {service.highlights.length > 0 && (
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {service.highlights.map((h) => (
            <li key={h} className="rounded-md border border-black/5 bg-white px-4 py-3">{h}</li>
          ))}
        </ul>
      )}


<section className="mt-12">
        <div className="rounded-xl border border-black/5 bg-white p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold">Interesse an {service.title}?</h2>
            <p className="text-[var(--color-muted)]">Kontaktieren Sie uns – wir erstellen Ihnen gerne eine kostenlose Offerte.</p>
          </div>
          <div className="flex gap-3">
            <Link
              href={`/?service=${encodeURIComponent(service.title)}#kontakt`}
              className="inline-flex items-center rounded-md bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]"
              aria-label={`Kostenlose Offerte für ${service.title} anfragen`}
            >
              Kostenlose Offerte
            </Link>
            <Link
              href="/dienstleistungen"
              className="inline-flex items-center rounded-md border border-black/10 px-4 py-2 text-sm font-medium hover:bg-black/5"
              aria-label="Zur Dienstleistungsübersicht"
            >
              Weitere Dienstleistungen
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Garantie & Qualität</h2>
        <p className="mt-3 text-[var(--color-muted)] max-w-3xl">
          Wir stehen für Qualität und Zuverlässigkeit. Kontaktieren Sie uns für detaillierte Informationen zu unseren Garantiebestimmungen.
        </p>
        <div className="mt-6">
          <div className="rounded-lg border border-black/5 bg-white p-5">
            <h3 className="text-lg font-semibold">Garantiebestimmungen</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Unsere Garantiebestimmungen für alle Reinigungsdienstleistungen. Wichtig für Kunden bei Endreinigungen und Bauendreinigungen.
            </p>
            <div className="mt-4">
              <Link
                href="/#kontakt"
                className="inline-flex items-center rounded-md bg-[var(--color-primary)] px-3 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]"
                aria-label="Kontakt für Garantiebestimmungen"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
};

export default ServiceDetailPage;


