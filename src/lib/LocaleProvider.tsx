"use client";

import React, { createContext, useContext } from "react";
import type { Locale } from "@/data/i18n";
import { getLocaleData } from "@/data/i18n";

type LocaleContextType = {
  locale: Locale;
  t: ReturnType<typeof getLocaleData>;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({
  children,
  locale = "de",
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  const value: LocaleContextType = {
    locale,
    t: getLocaleData(locale),
  };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
