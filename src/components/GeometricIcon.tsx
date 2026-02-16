type GeometricIconProps = {
  type: "eco" | "speed" | "flexibility" | "broom" | "factory" | "home" | "construction" | "window" | "sparkle" | "garden" | "circle" | "bars" | "shield";
  className?: string;
};

const GeometricIcon = ({ type, className = "h-16 w-16" }: GeometricIconProps) => {
  const baseClasses = `${className} text-gray-900`;

  switch (type) {
    // WhyUs icons - minimal, geometric
    case "eco":
      return (
        <svg viewBox="0 0 64 64" className={baseClasses} fill="currentColor">
          <path d="M32 8C32 8 24 16 24 24C24 29.3 27.6 33.6 32 34.8C36.4 33.6 40 29.3 40 24C40 16 32 8 32 8Z" opacity="0.6" />
          <circle cx="32" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="32" y1="32" x2="32" y2="56" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "speed":
      return (
        <svg viewBox="0 0 64 64" className={baseClasses} fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M16 32C16 23.2 23.2 16 32 16C40.8 16 48 23.2 48 32C48 40.8 40.8 48 32 48C23.2 48 16 40.8 16 32Z" />
          <polyline points="32 24 40 32 32 40" />
        </svg>
      );
    case "flexibility":
      return (
        <svg viewBox="0 0 64 64" className={baseClasses} fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="16" y1="24" x2="48" y2="24" />
          <line x1="16" y1="32" x2="48" y2="32" />
          <line x1="16" y1="40" x2="48" y2="40" />
          <rect x="12" y="20" width="40" height="24" rx="2" />
        </svg>
      );

    // Service icons - minimal geometric
    case "broom":
      return (
        <svg viewBox="0 0 64 64" className={baseClasses} fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="48" y1="12" x2="20" y2="40" />
          <path d="M20 40C16 44 12 52 20 56C28 52 24 44 20 40Z" />
          <circle cx="48" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case "factory":
      return (
        <svg viewBox="0 0 64 64" className={baseClasses} fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="16" y="24" width="32" height="24" />
          <line x1="24" y1="24" x2="24" y2="12" />
          <line x1="32" y1="24" x2="32" y2="8" />
          <line x1="40" y1="24" x2="40" y2="12" />
          <line x1="12" y1="48" x2="52" y2="48" />
          <rect x="12" y="48" width="8" height="8" />
          <rect x="44" y="48" width="8" height="8" />
        </svg>
      );
    case "home":
      return (
        <svg viewBox="0 0 64 64" className={baseClasses} fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 40V28L32 16L52 28V40" />
          <rect x="16" y="32" width="32" height="16" />
          <rect x="24" y="32" width="8" height="12" />
          <line x1="32" y1="48" x2="32" y2="48" />
        </svg>
      );
    case "construction":
      return (
        <svg viewBox="0 0 64 64" className={baseClasses} fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 48H52M20 32L32 12L44 32" />
          <line x1="32" y1="12" x2="32" y2="32" />
          <line x1="20" y1="32" x2="20" y2="48" />
          <line x1="44" y1="32" x2="44" y2="48" />
        </svg>
      );
    case "window":
      return (
        <svg viewBox="0 0 64 64" className={baseClasses} fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="12" y="16" width="40" height="40" />
          <line x1="32" y1="16" x2="32" y2="56" />
          <line x1="12" y1="36" x2="52" y2="36" />
          <rect x="16" y="20" width="12" height="12" />
          <rect x="36" y="20" width="12" height="12" />
          <rect x="16" y="40" width="12" height="12" />
          <rect x="36" y="40" width="12" height="12" />
        </svg>
      );
    case "sparkle":
      return (
        <svg viewBox="0 0 64 64" className={baseClasses} fill="currentColor">
          <polygon points="32,12 36,24 48,24 39,31 43,43 32,36 21,43 25,31 16,24 28,24" />
        </svg>
      );
    case "garden":
      return (
        <svg viewBox="0 0 64 64" className={baseClasses} fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M24 48C24 48 20 40 20 32C20 25.4 24.5 20 28 20C31.5 20 36 25.4 36 32C36 40 32 48 32 48" />
          <path d="M40 48C40 48 36 40 36 32C36 25.4 40.5 20 44 20C47.5 20 52 25.4 52 32C52 40 48 48 48 48" />
          <line x1="16" y1="48" x2="48" y2="48" strokeWidth="3" />
        </svg>
      );

    // Step badges
    case "circle":
      return (
        <svg viewBox="0 0 64 64" className={baseClasses} fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="32" cy="32" r="20" />
        </svg>
      );
    case "bars":
      return (
        <svg viewBox="0 0 64 64" className={baseClasses} fill="currentColor">
          <rect x="18" y="28" width="8" height="20" />
          <rect x="30" y="20" width="8" height="28" />
          <rect x="42" y="24" width="8" height="24" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 64 64" className={baseClasses} fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M32 12C32 12 20 18 20 28C20 40 32 52 32 52C32 52 44 40 44 28C44 18 32 12 32 12Z" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 64 64" className={baseClasses} fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="32" cy="32" r="20" />
        </svg>
      );
  }
};

export default GeometricIcon;
