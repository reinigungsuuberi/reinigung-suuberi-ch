import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Suuberi Nettoyage",
  description: "Politique de confidentialité de Suuberi Nettoyage. Découvrez comment nous protégeons et traitons vos données personnelles.",
  robots: { index: false, follow: true },
};

const PrivacyPage = () => {
  return (
    <main className="font-sans mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
        Politique de confidentialité
      </h1>
      <p className="mt-4 text-[var(--foreground)]">
        Nous prenons la protection de vos données au sérieux. Les données personnelles sont utilisées exclusivement pour traiter votre demande et exécuter le contrat. Une transmission à des tiers n&apos;a lieu que si cela est prévu par la loi ou si vous en avez donné votre consentement.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-[var(--color-muted)]">
        E-mail: <a href="mailto:info@suuberi-reinigung.ch" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">info@suuberi-reinigung.ch</a> · Téléphone: <a href="tel:+41782346699" className="underline decoration-dotted underline-offset-2 hover:decoration-solid">+41 78 234 66 99</a>
      </p>
      <p className="mt-8 text-sm text-[var(--color-muted)]">
        Dernière mise à jour: {new Date().getFullYear()}
      </p>
    </main>
  );
};

export default PrivacyPage;
