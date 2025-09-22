"use client";

import Image from "next/image";
import clsx from "clsx";

type BrandLogoVariant = "icon" | "withText" | "withBorder";

type BrandLogoProps = {
  variant?: BrandLogoVariant;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  alt?: string;
};

const variantToSrc: Record<BrandLogoVariant, string> = {
  icon: "/img/suuberi-logo-schwarz.png",
  withText: "/img/suuberi-logo-schwarz.png",
  withBorder: "/img/suuberi-logo-schwarz.png",
};

const defaultSize: Record<BrandLogoVariant, { width: number; height: number }> = {
  icon: { width: 32, height: 32 },
  withText: { width: 140, height: 60 },
  withBorder: { width: 140, height: 140 },
};

const BrandLogo = ({
  variant = "icon",
  width,
  height,
  priority = false,
  className,
  alt = "Suuberi Logo",
}: BrandLogoProps) => {
  const chosenSize = defaultSize[variant];
  const finalWidth = width ?? chosenSize.width;
  const finalHeight = height ?? chosenSize.height;

  return (
    <Image
      src={variantToSrc[variant]}
      alt={alt}
      width={finalWidth}
      height={finalHeight}
      priority={priority}
      sizes="(max-width: 768px) 120px, 160px"
      className={clsx("select-none", className)}
    />
  );
};

export default BrandLogo;


