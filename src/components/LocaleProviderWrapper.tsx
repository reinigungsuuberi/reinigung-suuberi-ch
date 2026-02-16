"use client";

import { usePathname } from "next/navigation";
import { LocaleProvider } from "@/lib/LocaleProvider";
import { ReactNode } from "react";

type LocaleProviderWrapperProps = {
  children: ReactNode;
};

export function LocaleProviderWrapper({ children }: LocaleProviderWrapperProps) {
  const pathname = usePathname();
  const locale = pathname.startsWith("/fr") ? "fr" : "de";

  return (
    <LocaleProvider locale={locale}>
      {children}
    </LocaleProvider>
  );
}
