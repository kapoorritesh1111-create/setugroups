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
        <linearGradient id="crmGradA" x1="16" y1="16" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F39A2C" />
          <stop offset="1" stopColor="#EA6B20" />
        </linearGradient>
        <linearGradient id="crmGradB" x1="16" y1="16" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#23438D" />
          <stop offset="1" stopColor="#0A2A66" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="80" height="80" rx="24" fill="rgba(255,255,255,0.92)" />
      <path
        d="M28 30C33.1 24.9 41.4 24.9 46.5 30L53 36.5C58.1 41.6 58.1 49.9 53 55L46 62C40.9 67.1 32.6 67.1 27.5 62L21 55.5"
        stroke="url(#crmGradA)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M68 66C62.9 71.1 54.6 71.1 49.5 66L43 59.5C37.9 54.4 37.9 46.1 43 41L50 34C55.1 28.9 63.4 28.9 68.5 34L75 40.5"
        stroke="url(#crmGradB)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="68" r="4.5" fill="#EA6B20" />
      <circle cx="68" cy="28" r="4.5" fill="#0A2A66" />
    </svg>
  );
}
