"use client";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

const SectionHeading = ({ title, subtitle, align = "center" }: SectionHeadingProps) => {
  const alignment = align === "center" ? "text-center" : "text-left";
  return (
    <div className={alignment}>
      <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">{title}</h2>
      {subtitle ? (
        <p className="mt-3 text-[var(--color-muted)]">{subtitle}</p>
      ) : null}
    </div>
  );
};

export default SectionHeading;


