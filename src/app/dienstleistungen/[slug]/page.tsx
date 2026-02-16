import type { Metadata } from "next";
import Link from "next/link";
import { getServiceBySlug, getAllServices } from "../../../data/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service nicht gefunden",
    };
  }

  return {
    title: `${service.title} | Suuberi Reinigung – Professionelle Reinigung`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Suuberi Reinigung`,
      description: service.shortDescription,
    },
  };
}

const ServiceDetailPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900">Dienstleistung nicht gefunden</h1>
        <p className="mt-4 text-gray-600">Bitte prüfen Sie die URL oder kehren Sie zur Übersicht zurück.</p>
        <Link href="/dienstleistungen" className="mt-6 inline-block text-blue-600 font-medium hover:text-blue-700">
          ← Zur Übersicht
        </Link>
      </main>
    );
  }

  // Service hero section
  const heroSection = (
    <section className="bg-white pt-24 pb-20 sm:pt-40 sm:pb-32 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-6 sm:gap-8">
          <span className="text-5xl sm:text-6xl flex-shrink-0" role="img" aria-label={service.alt}>
            {service.icon}
          </span>
          <div className="flex-1 min-w-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight break-words">
              {service.title}
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">Professionelle Reinigung in Biel, Jura & Bern</p>
          </div>
        </div>
      </div>
    </section>
  );

  // Introduction section
  const introSection = (
    <section className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xl text-gray-600 leading-relaxed">{service.intro}</p>
        </div>
      </div>
    </section>
  );

  // What is included section
  const includesSection = service.highlights.length > 0 && (
    <section className="bg-gray-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 tracking-tight">
          Im Service enthalten
        </h2>
        <ul className="space-y-5 max-w-3xl">
          {service.highlights.map((highlight, idx) => (
            <li key={`highlight-${idx}`} className="flex gap-4">
              <span className="text-blue-600 font-semibold flex-shrink-0 mt-1 text-lg">✓</span>
              <span className="text-lg text-gray-700 leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  // 3-step process section
  const processSection = (
    <section className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 tracking-tight">
          So läuft es ab
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              step: "1",
              title: "Kontakt aufnehmen",
              description: "Schildern Sie Ihr Anliegen per Telefon, E-Mail oder Kontaktformular.",
            },
            {
              step: "2",
              title: "Angebot erhalten",
              description: "Wir erstellen Ihnen prompt ein massgeschneidertes, unverbindliches Angebot.",
            },
            {
              step: "3",
              title: "Geniessen",
              description: "Nach Ihre Zusage führen wir die Reinigung professionell und zuverlässig durch.",
            },
          ].map((item) => (
            <div key={item.step} className="flex flex-col">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow">
                  {item.step}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // FAQ section
  const faqSection = (
    <section className="bg-gray-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 tracking-tight">
          Häufig gestellte Fragen
        </h2>
        <div className="space-y-6 max-w-3xl">
          {[
            {
              q: "Welche Regionen decken Sie ab?",
              a: "Wir sind in Biel, Bern und Jura tätig. Wenn Sie sich in der Nähe befinden, kontaktieren Sie uns gerne für Detailinformationen.",
            },
            {
              q: "Wie wird die Preisfindung durchgeführt?",
              a: "Wir erstellen Ihnen eine massgeschneiderte Offerte basierend auf Ihren spezifischen Anforderungen, der Objektgrösse und der Häufigkeit der Leistung.",
            },
            {
              q: "Sind Reinigungsmittel im Preis inbegriffen?",
              a: "Das klären wir schnell telefonisch. Bei vielen Services sind die Reinigungsmittel bereits eingerechnet, auf Wunsch stellen Sie diese aber auch selber zur Verfügung.",
            },
          ].map((faq, idx) => (
            <div key={`faq-${idx}`} className="bg-white rounded-lg border border-gray-100 p-8 shadow hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // CTA section
  const ctaSection = (
    <section className="bg-white py-20 sm:py-32 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-10 sm:p-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Bereit für {service.title}?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Kontaktieren Sie uns heute und erhalten Sie eine kostenlose, unverbindliche Offerte. Unsere Experten freuen sich auf Ihre Anfrage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Offerte anfragen
            </Link>
            <a
              href="tel:+41782346699"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 active:bg-gray-100 shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Jetzt anrufen
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <main>
      {heroSection}
      {introSection}
      {includesSection}
      {processSection}
      {faqSection}
      {ctaSection}
    </main>
  );
};

export default ServiceDetailPage;


