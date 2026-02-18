"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { useLocale } from "@/lib/LocaleProvider";

type NavItem = { label: string; href: string; targetId: string };

// Section themes for navbar color matching
type SectionTheme = {
  bg: string;
  text: string;
  hoverText: string;
  hoverBg: string;
  ctaBg: string;
  ctaText: string;
  logoFilter?: string;
};

const themes: Record<string, SectionTheme> = {
  light: {
    bg: "bg-white/95 backdrop-blur-xl shadow-lg border-b border-white/20",
    text: "text-gray-700",
    hoverText: "hover:text-gray-900",
    hoverBg: "hover:bg-white/60",
    ctaBg: "bg-gradient-to-r from-green-800 via-emerald-600 to-teal-700 bg-[length:200%_100%] animate-gradient-x hover:shadow-emerald-500/25",
    ctaText: "text-white",
  },
  dark: {
    bg: "bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-white/10",
    text: "text-gray-300",
    hoverText: "hover:text-white",
    hoverBg: "hover:bg-white/10",
    ctaBg: "bg-white hover:bg-gray-100",
    ctaText: "text-gray-900",
    logoFilter: "brightness-0 invert",
  },
  blue: {
    bg: "bg-blue-700/95 backdrop-blur-xl shadow-lg border-b border-white/10",
    text: "text-blue-100",
    hoverText: "hover:text-white",
    hoverBg: "hover:bg-white/10",
    ctaBg: "bg-white hover:bg-gray-100",
    ctaText: "text-blue-800",
    logoFilter: "brightness-0 invert",
  },
  emerald: {
    bg: "bg-emerald-700/95 backdrop-blur-xl shadow-lg border-b border-white/10",
    text: "text-emerald-100",
    hoverText: "hover:text-white",
    hoverBg: "hover:bg-white/10",
    ctaBg: "bg-white hover:bg-gray-100",
    ctaText: "text-emerald-800",
    logoFilter: "brightness-0 invert",
  },
  purple: {
    bg: "bg-purple-700/95 backdrop-blur-xl shadow-lg border-b border-white/10",
    text: "text-purple-100",
    hoverText: "hover:text-white",
    hoverBg: "hover:bg-white/10",
    ctaBg: "bg-white hover:bg-gray-100",
    ctaText: "text-purple-800",
    logoFilter: "brightness-0 invert",
  },
};

const Navbar = () => {
  const { locale, t } = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<SectionTheme>(themes.light);

  const baseUrl = locale === "fr" ? "/fr" : "";

  const navItems: NavItem[] = [
    { label: t.nav.services, href: `${baseUrl}/#dienstleistungen`, targetId: "dienstleistungen" },
    { label: t.nav.why, href: `${baseUrl}/#warum`, targetId: "warum" },
    { label: t.nav.process, href: `${baseUrl}/#ablauf`, targetId: "ablauf" },
    { label: t.sections.reviews, href: `${baseUrl}/#bewertungen`, targetId: "bewertungen" },
  ];

  // Function to detect and set theme based on current section
  const detectTheme = useCallback(() => {
    const sections = [
      { id: "ablauf", getTheme: () => {
        const el = document.getElementById("ablauf");
        if (el) {
          const themeName = el.getAttribute("data-theme");
          if (themeName === "blue") return themes.blue;
          if (themeName === "emerald") return themes.emerald;
          if (themeName === "purple") return themes.purple;
        }
        return themes.blue;
      }},
      { id: "warum", theme: themes.dark },
      { id: "dienstleistungen", theme: themes.light },
      { id: "bewertungen", theme: themes.light },
      { id: "kontakt", theme: themes.light },
    ];

    const navHeight = 80;
    let foundSection = false;

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= navHeight + 50 && rect.bottom > navHeight) {
          if (section.getTheme) {
            setCurrentTheme(section.getTheme());
          } else if (section.theme) {
            setCurrentTheme(section.theme);
          }
          foundSection = true;
          break;
        }
      }
    }

    if (!foundSection) {
      setCurrentTheme(themes.light);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      detectTheme();
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [detectTheme]);

  // Watch for theme changes on StepsSection (ablauf)
  useEffect(() => {
    const ablaufEl = document.getElementById("ablauf");
    if (!ablaufEl) return;

    const observer = new MutationObserver(() => {
      detectTheme();
    });

    observer.observe(ablaufEl, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, [detectTheme]);

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

  const handleSmartNavigate = useCallback((targetId: string, href: string) => (e: React.MouseEvent) => {
    const isRootPath = locale === "fr" ? pathname === "/fr" : pathname === "/";
    if (isRootPath) {
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
    [pathname, router, locale]
  );

  const [langSwitchAnim, setLangSwitchAnim] = useState(false);

  // Route translations between languages
  const routeTranslations: Record<string, string> = {
    "/fr/services": "/dienstleistungen",
    "/dienstleistungen": "/fr/services",
    "/fr/datenschutz": "/datenschutz",
    "/datenschutz": "/fr/datenschutz",
    "/fr/impressum": "/impressum",
    "/impressum": "/fr/impressum",
  };

  // Language switch handler
  const handleLanguageSwitch = useCallback(() => {
    setLangSwitchAnim(true);
    setTimeout(() => setLangSwitchAnim(false), 600);
    
    const newLocale = locale === "fr" ? "de" : "fr";
    const currentPath = pathname;
    let newPath: string;

    // Check for route translations first
    if (routeTranslations[currentPath]) {
      newPath = routeTranslations[currentPath];
    } else if (currentPath.startsWith("/fr/services/")) {
      // Handle service detail pages
      const slug = currentPath.replace("/fr/services/", "");
      newPath = `/dienstleistungen/${slug}`;
    } else if (currentPath.startsWith("/dienstleistungen/")) {
      // Handle German service detail pages
      const slug = currentPath.replace("/dienstleistungen/", "");
      newPath = `/fr/services/${slug}`;
    } else if (newLocale === "fr") {
      if (currentPath === "/") {
        newPath = "/fr";
      } else if (!currentPath.startsWith("/fr")) {
        newPath = `/fr${currentPath}`;
      } else {
        newPath = currentPath;
      }
    } else {
      if (currentPath === "/fr") {
        newPath = "/";
      } else if (currentPath.startsWith("/fr/")) {
        newPath = currentPath.replace("/fr", "");
      } else {
        newPath = currentPath;
      }
    }
    
    router.push(newPath);
    setIsMenuOpen(false);
  }, [locale, pathname, router, routeTranslations]);

  return (
    <>
      {/* Language Toggle - Fixed Top Right */}
      <div className="fixed top-6 right-6 z-[60]">
        <button
          onClick={handleLanguageSwitch}
          className="group relative flex items-center gap-3 px-4 py-2 bg-transparent hover:bg-white/5 transition-all duration-500"
          aria-label={locale === "fr" ? "Wechseln zu Deutsch" : "Passer au français"}
        >
          {/* DE */}
          <span 
            className={`relative italic text-sm font-medium transition-all duration-500 ease-out ${
              locale !== "fr" 
                ? "text-gray-900 scale-110" 
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {/* Glow effect when active */}
            <span 
              className={`absolute -inset-2 bg-gradient-to-r from-cyan-400/40 via-purple-500/40 to-pink-400/40 blur-xl transition-all duration-500 ease-out -z-10 ${
                locale !== "fr" 
                  ? langSwitchAnim 
                    ? "opacity-100 scale-150" 
                    : "opacity-60 scale-100"
                  : "opacity-0 scale-75"
              }`}
            />
            DE
          </span>
          
          {/* Separator */}
          <span className="text-gray-300 text-sm italic">/</span>
          
          {/* FR */}
          <span 
            className={`relative italic text-sm font-medium transition-all duration-500 ease-out ${
              locale === "fr" 
                ? "text-gray-900 scale-110" 
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {/* Glow effect when active */}
            <span 
              className={`absolute -inset-2 bg-gradient-to-r from-cyan-400/40 via-purple-500/40 to-pink-400/40 blur-xl transition-all duration-500 ease-out -z-10 ${
                locale === "fr" 
                  ? langSwitchAnim 
                    ? "opacity-100 scale-150" 
                    : "opacity-60 scale-100"
                  : "opacity-0 scale-75"
              }`}
            />
            FR
          </span>
        </button>
      </div>

      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${currentTheme.bg}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-all duration-300 group" aria-label="Zur Startseite">
          <Image
            src="/img/new.png"
            alt="Suuberi Logo"
            width={450}
            height={450}
            className={`h-40 w-auto group-hover:scale-105 transition-all duration-300 ${currentTheme.logoFilter || ""}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={handleSmartNavigate(item.targetId, item.href)}
              className={`text-sm font-medium transition-all duration-300 relative group px-4 py-2 rounded-xl backdrop-blur-sm hover:shadow-sm ${currentTheme.text} ${currentTheme.hoverText} ${currentTheme.hoverBg}`}
              aria-label={`${item.label} Abschnitt öffnen`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href={`${baseUrl}/#kontakt`}
            onClick={handleSmartNavigate("kontakt", `${baseUrl}/#kontakt`)}
            className={`px-8 py-3 font-semibold text-sm rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 backdrop-blur-sm ${currentTheme.ctaBg} ${currentTheme.ctaText}`}
            aria-label={t.nav.cta}
          >
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleToggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Menü öffnen"
          className={`lg:hidden inline-flex h-12 w-12 items-center justify-center rounded-2xl backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 border border-white/20 ${
            currentTheme.logoFilter 
              ? "bg-white/20 text-white hover:bg-white/30 focus:ring-white" 
              : "bg-white/60 text-gray-900 hover:bg-white/80 focus:ring-gray-900"
          }`}
        >
          {isMenuOpen ? (
            <RiCloseLine className="h-6 w-6" />
          ) : (
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
              className="h-6 w-6"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-20 bottom-0 lg:hidden bg-gradient-to-b from-white/95 via-white/90 to-white/95 backdrop-blur-2xl transition-all duration-500 transform border-t border-white/20 ${
          isMenuOpen 
            ? "translate-y-0 opacity-100 pointer-events-auto" 
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8" aria-label="Mobile Navigation">
          <div className="space-y-6">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleSmartNavigate(item.targetId, item.href)}
                className="block text-xl font-semibold text-gray-900 hover:text-gray-700 transition-all duration-300 py-4 px-6 rounded-2xl hover:bg-white/60 backdrop-blur-sm hover:shadow-lg transform hover:translate-x-2"
                style={{ animationDelay: `${index * 100}ms` }}
                aria-label={`${item.label} Abschnitt öffnen`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-8 border-t border-white/30">
            <Link
              href={`${baseUrl}/#kontakt`}
              onClick={handleSmartNavigate("kontakt", `${baseUrl}/#kontakt`)}
              className="block w-full px-8 py-4 bg-gradient-to-r from-green-800 via-emerald-600 to-teal-700 bg-[length:200%_100%] animate-gradient-x text-white font-semibold text-center rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 hover:-translate-y-1 backdrop-blur-sm"
              aria-label={t.nav.cta}
            >
              {t.nav.cta}
            </Link>
          </div>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Navbar;


