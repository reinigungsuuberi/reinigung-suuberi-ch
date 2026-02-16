import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Suuberi Reinigung – Anbieterkennzeichnung",
  description: "Impressum und Kontaktdaten von Suuberi Reinigung. Handelsregister, Ansprechpartner und rechtliche Informationen.",
  robots: { index: false, follow: true },
};

const ImpressumPage = () => {
  return (
    <main className="font-sans mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
        Impressum
      </h1>
      <div className="mt-4 text-[var(--foreground)]">
        <p>Suuberi Reinigung</p>
        <p>Handelsregister: Suberi inh Boudova</p>
        <p>suuberi-reinigung.ch</p>
        <p>
          E-Mail: <a href="mailto:info@suuberi-reinigung.ch" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">info@suuberi-reinigung.ch</a>
        </p>
        <p>
          Telefon: <a href="tel:+41782346699" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">+41 78 234 66 99</a>
        </p>
        <p>
          Alternative Kontakt: <a href="tel:+41787098233" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">+41 78 709 82 33</a>
        </p>
      </div>
      <h2 className="mt-8 text-xl font-semibold">Haftungsausschluss</h2>
      <p className="mt-2 text-[var(--color-muted)]">
        Alle Angaben ohne Gewähr. Trotz sorgfältiger inhaltlicher Kontrolle
        übernehmen wir keine Haftung für die Inhalte externer Links.
      </p>
    </main>
  );
};

export default ImpressumPage;
