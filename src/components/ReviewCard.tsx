"use client";

import StarRating from "./StarRating";

type ReviewCardProps = {
  name: string;
  city: string;
  rating: number;
  text: string;
};

const ReviewCard = ({ name, city, rating, text }: ReviewCardProps) => {
  return (
    <article className="rounded-xl bg-white p-6 shadow-sm border border-black/5">
      <div className="flex items-center justify-between">
        <div className="font-medium text-[var(--foreground)]">{name} · {city}</div>
        <StarRating value={rating} ariaLabel={`${rating} von 5 Sternen`} />
      </div>
      <p className="mt-4 text-[var(--foreground)]">“{text}”</p>
    </article>
  );
};

export default ReviewCard;


