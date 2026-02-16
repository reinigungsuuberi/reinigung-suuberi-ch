import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Suuberi Nettoyage",
  description: "Mentions légales et coordonnées de contact de Suuberi Nettoyage. Registre du commerce, responsable et informations juridiques.",
  robots: { index: false, follow: true },
};

const ImprintPage = () => {
  return (
    <main className="font-sans mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
        Mentions légales
      </h1>
      <div className="mt-4 text-[var(--foreground)]">
        <p>Suuberi Nettoyage</p>
        <p>Registre du commerce: Suberi inh Boudova</p>
        <p>suuberi-reinigung.ch</p>
        <p>
          E-mail: <a href="mailto:info@suuberi-reinigung.ch" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">info@suuberi-reinigung.ch</a>
        </p>
        <p>
          Téléphone: <a href="tel:+41782346699" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">+41 78 234 66 99</a>
        </p>
        <p>
          Contact alternatif: <a href="tel:+41787098233" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">+41 78 709 82 33</a>
        </p>
      </div>
      <h2 className="mt-8 text-xl font-semibold">Clause de non-responsabilité</h2>
      <p className="mt-2 text-[var(--color-muted)]">
        Tous les renseignements sont fournis sans garantie. Malgré un contrôle minutieux du contenu, nous n'acceptons aucune responsabilité pour le contenu des liens externes.
      </p>
    </main>
  );
};

export default ImprintPage;
