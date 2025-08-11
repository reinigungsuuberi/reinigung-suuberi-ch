"use client";

import SectionHeading from "./SectionHeading";
import StepsGrid from "./StepsGrid";

const StepsSection = () => {
  return (
    <section id="ablauf" className="py-16 sm:py-20 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading title="In 3 Schritten zum Angebot" />
        <StepsGrid />
      </div>
    </section>
  );
};

export default StepsSection;


