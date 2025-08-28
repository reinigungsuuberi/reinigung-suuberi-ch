import BrandLogo from "./BrandLogo";
import { RiPhoneLine, RiWhatsappLine, RiMailLine } from "react-icons/ri";

const Footer = () => {
    return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <BrandLogo variant="withText" width={140} height={60} />
            </div>
            <p className="mt-2 font-semibold text-[var(--foreground)]">Suuberi Reinigung</p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Reinigung Basel, Hauswartung Bern, Endreinigung Zürich, Bauendreinigung,
              Fenster- & Fassadenreinigung, Spezialreinigung, Gartenpflege.
            </p>
          </div>
          <div>
            <p className="font-semibold text-[var(--foreground)]">Kontakt</p>
            <div className="mt-3 flex items-center gap-2" aria-label="Schnellkontakt">
              <a
                href="tel:+41782346699"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white text-[var(--foreground)] shadow-sm hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                aria-label="Anrufen"
                tabIndex={0}
              >
                <RiPhoneLine className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/41782346699"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white text-[var(--foreground)] shadow-sm hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                aria-label="WhatsApp Chat starten"
                tabIndex={0}
              >
                <RiWhatsappLine className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:info@suuberi-reinigung.ch"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white text-[var(--foreground)] shadow-sm hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                aria-label="E-Mail schreiben"
                tabIndex={0}
              >
                <RiMailLine className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
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