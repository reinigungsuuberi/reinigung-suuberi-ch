"use client";

import ReviewCard from "./ReviewCard";
import StarRating from "./StarRating";
import { useScrollReveal } from "@/hooks/useScrollEffects";

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

import { useLocale } from "@/lib/LocaleProvider";

const ReviewsSection = ({ id = "bewertungen", reviews }: ReviewsSectionProps) => {
  const { t } = useLocale();
  const ref = useScrollReveal();
  
  const average = reviews.length
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;
  const rounded = Math.round(average * 10) / 10;

  return (
    <section id={id} className="relative min-h-screen py-32 sm:py-40 overflow-hidden snap-section flex items-center">
      {/* Liquid glass background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-80 h-80 bg-gradient-to-br from-rose-100/25 to-pink-100/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-br from-pink-100/20 to-red-100/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 animate-in">
          <h2 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tighter mb-8">
            {t.sections.reviews}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <StarRating value={average} size={28} ariaLabel={`${rounded} ${t.sections.reviewsRating}`} />
            <span className="text-2xl text-gray-600 font-semibold">{rounded} {t.sections.reviewsRating}</span>
          </div>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {reviews.map((r, idx) => (
            <div key={`review-${idx}-${r.name}`} className="group">
              <ReviewCard {...r} className="backdrop-blur-xl bg-white/70 border border-white/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;


