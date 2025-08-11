"use client";

import SectionHeading from "./SectionHeading";
import ReviewCard from "./ReviewCard";
import StarRating from "./StarRating";

export type Review = {
  name: string;
  city: string;
  rating: number;
  text: string;
};

type ReviewsSectionProps = {
  id?: string;
  reviews: Review[];
};

const ReviewsSection = ({ id = "bewertungen", reviews }: ReviewsSectionProps) => {
  const average = reviews.length
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;
  const rounded = Math.round(average * 10) / 10;

  return (
    <section id={id} className="py-16 sm:py-20 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading title="Kundenbewertungen" />
        <div className="mt-3 flex items-center justify-center gap-3">
          <StarRating value={average} size={20} ariaLabel={`${rounded} von 5 Sternen`} />
          <span className="text-sm text-[var(--color-muted)]">{rounded} von 5</span>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;


