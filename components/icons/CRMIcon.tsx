interface CRMIconProps {
  className?: string;
}

export function CRMIcon({ className }: CRMIconProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="crmGradA" x1="14" y1="12" x2="82" y2="84" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1D7FF2" />
          <stop offset="1" stopColor="#1FC8B3" />
        </linearGradient>
        <linearGradient id="crmGradB" x1="18" y1="18" x2="76" y2="78" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F39A2C" />
          <stop offset="1" stopColor="#EA6B20" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="80" height="80" rx="24" fill="rgba(255,255,255,0.04)" />
      <path
        d="M30 30C35.4 24.6 44.2 24.6 49.6 30L56 36.4C61.4 41.8 61.4 50.6 56 56L48 64C42.6 69.4 33.8 69.4 28.4 64L22 57.6"
        stroke="url(#crmGradA)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M66 66C60.6 71.4 51.8 71.4 46.4 66L40 59.6C34.6 54.2 34.6 45.4 40 40L48 32C53.4 26.6 62.2 26.6 67.6 32L74 38.4"
        stroke="url(#crmGradB)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="27" cy="70" r="4.5" fill="#35D6C5" />
      <circle cx="69" cy="26" r="4.5" fill="#1D7FF2" />
    </svg>
  );
}
