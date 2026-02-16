"use client";

import { useLocale } from "@/lib/LocaleProvider";

export function SkipLink() {
  const { t } = useLocale();
  
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-[var(--color-primary)] focus:px-3 focus:py-2 focus:text-white"
    >
      {t.skipToContent}
    </a>
  );
}
