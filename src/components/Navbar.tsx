"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import BrandLogo from "./BrandLogo";
import { RiPhoneLine, RiWhatsappLine, RiMailLine } from "react-icons/ri";

type NavItem = { label: string; href: string; targetId: string };

const navItems: NavItem[] = [
  { label: "Über uns", href: "/#ueber-uns", targetId: "ueber-uns" },
  { label: "Dienstleistungen", href: "/#dienstleistungen", targetId: "dienstleistungen" },
  { label: "Warum Suuberi?", href: "/#warum", targetId: "warum" },
  { label: "Bewertungen", href: "/#bewertungen", targetId: "bewertungen" },
  { label: "Ablauf", href: "/#ablauf", targetId: "ablauf" },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleSmartNavigate = useCallback(
    (targetId: string, href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname === "/") {
        e.preventDefault();
        const el = document.getElementById(targetId);
        if (!el) {
          router.push(href);
          return;
        }
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsMenuOpen(false);
        return;
      }
      setIsMenuOpen(false);
    },
    [pathname, router]
  );

  const ctaHref = useMemo(() => "/#kontakt", []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2" aria-label="Zur Startseite">
            <BrandLogo variant="icon" width={32} height={32} />
            <span className="text-lg font-semibold text-[var(--foreground)]">Suuberi</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={handleSmartNavigate(item.targetId, item.href)}
              className="text-sm text-[var(--foreground)]/80 hover:text-[var(--foreground)]"
              aria-label={`${item.label} Abschnitt öffnen`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <a
              href="tel:+41782346699"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-white text-[var(--foreground)] shadow-sm hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              aria-label="Anrufen"
              tabIndex={0}
            >
              <RiPhoneLine className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/41782346699"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-white text-[var(--foreground)] shadow-sm hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              aria-label="WhatsApp Chat starten"
              tabIndex={0}
            >
              <RiWhatsappLine className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="mailto:info@suuberi-reinigung.ch"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-white text-[var(--foreground)] shadow-sm hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              aria-label="E-Mail schreiben"
              tabIndex={0}
            >
              <RiMailLine className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <Link
            href={ctaHref}
            onClick={handleSmartNavigate("kontakt", ctaHref)}
            className="inline-flex items-center rounded-md bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]"
            aria-label="Jetzt Angebot anfordern"
          >
            Angebot anfordern
          </Link>
        </nav>

        <button
          onClick={handleToggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Menü öffnen"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white text-[var(--foreground)] shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
        >
          <span className="sr-only">Menü</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=""
          >
            {isMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={
          isMenuOpen
            ? "md:hidden border-t border-black/5 bg-white"
            : "hidden md:hidden"
        }
      >
        <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={handleSmartNavigate(item.targetId, item.href)}
              className="py-2 text-[var(--foreground)]/90"
              aria-label={`${item.label} Abschnitt öffnen`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            onClick={handleSmartNavigate("kontakt", ctaHref)}
            className="mt-2 inline-flex items-center justify-center rounded-md bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-accent)]"
            aria-label="Jetzt Angebot anfordern"
          >
            Angebot anfordern
          </Link>
          <div className="mt-3 flex items-center gap-2">
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
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


