"use client";

import SectionHeading from "./SectionHeading";
import WhyUsGrid from "./WhyUsGrid";

const WhyUsSection = () => {
  return (
    <section id="warum" className="py-16 sm:py-20 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading title="Warum Suuberi?" />
        <WhyUsGrid />
      </div>
    </section>
  );
};

export default WhyUsSection;


