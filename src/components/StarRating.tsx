"use client";

type StarRatingProps = {
  value: number; // 0-5
  size?: number; // px
  ariaLabel?: string;
};

const StarRating = ({ value, size = 18, ariaLabel }: StarRatingProps) => {
  const rounded = Math.round(value);
  return (
    <div className="flex" aria-label={ariaLabel}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={i + 1 <= rounded ? "text-yellow-400" : "text-gray-300"}
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.401 8.168L12 18.896l-7.335 3.868 1.401-8.168L.132 9.21l8.2-1.192z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;


