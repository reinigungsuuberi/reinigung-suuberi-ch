import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Suuberi Reinigung – Datenschutzerklärung",
  description: "Datenschutzerklärung von Suuberi Reinigung. Erfahren Sie, wie wir Ihre persönlichen Daten schützen und verarbeiten.",
  robots: { index: false, follow: true },
};

const DatenschutzPage = () => {
  return (
    <main className="font-sans mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
        Datenschutz
      </h1>
      <p className="mt-4 text-[var(--foreground)]">
        Wir nehmen den Schutz Ihrer Daten ernst. Personenbezogene Daten werden
        ausschliesslich zur Bearbeitung Ihrer Anfrage und zur Vertragserfüllung
        verwendet. Eine Weitergabe an Dritte erfolgt nur, wenn dies gesetzlich
        vorgesehen ist oder Sie eingewilligt haben.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Kontakt</h2>
      <p className="mt-2 text-[var(--color-muted)]">
        E-Mail: <a href="mailto:info@suuberi-reinigung.ch" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">info@suuberi-reinigung.ch</a> · Telefon: <a href="tel:+41782346699" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">+41 78 234 66 99</a>
      </p>
      <p className="mt-8 text-sm text-[var(--color-muted)]">
        Letzte Aktualisierung: {new Date().getFullYear()}
      </p>
    </main>
  );
};

export default DatenschutzPage;
