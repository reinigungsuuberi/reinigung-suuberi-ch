const Footer = () => {
    return (
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
    );
  }

export default Footer;