"use client";

import StarRating from "./StarRating";
import { useScrollReveal } from "@/hooks/useScrollEffects";
import { useLocale } from "@/lib/LocaleProvider";

type ReviewCardProps = {
  name: string;
  city: string;
  rating: number;
  text: string;
  className?: string;
};

const ReviewCard = ({ name, city, rating, text, className }: ReviewCardProps) => {
  const ref = useScrollReveal();
  const { t } = useLocale();
  
  return (
    <article ref={ref} className={`p-8 h-full ${className || 'pb-8 border-b border-gray-200 hover:-translate-y-1 transition-transform duration-300'}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="font-semibold text-gray-900 text-lg group-hover:text-gray-800 transition-colors">{name} · {city}</div>
        <StarRating value={rating} ariaLabel={`${rating} ${t.sections.reviewsRating}`} />
      </div>
      <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-600 transition-colors">&ldquo;{text}&rdquo;</p>
    </article>
  );
};

export default ReviewCard;


