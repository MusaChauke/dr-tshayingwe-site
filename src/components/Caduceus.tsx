/** Simplified winged caduceus in gold, used as a small brand mark. Decorative only. */
export default function Caduceus({ className = 'h-10 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 100" className={className} aria-hidden="true" focusable="false">
      {/* wings */}
      <path
        d="M30 20 C22 8 8 6 2 12 C10 12 14 18 16 24 C10 24 6 26 3 30 C10 30 16 30 20 28 C16 31 15 35 16 38 C22 34 27 30 30 24 Z"
        fill="#C09220"
      />
      <path
        d="M30 20 C38 8 52 6 58 12 C50 12 46 18 44 24 C50 24 54 26 57 30 C50 30 44 30 40 28 C44 31 45 35 44 38 C38 34 33 30 30 24 Z"
        fill="#C09220"
      />
      {/* rod */}
      <circle cx="30" cy="12" r="4" fill="#C09220" />
      <rect x="28" y="14" width="4" height="82" rx="2" fill="#C09220" />
      {/* serpents */}
      <path
        d="M14 34 C30 34 30 44 46 44 C30 44 30 54 14 54 C30 54 30 64 46 64 C30 64 30 74 14 74 C30 74 30 84 46 84"
        stroke="#162751"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M46 34 C30 34 30 44 14 44 C30 44 30 54 46 54 C30 54 30 64 14 64 C30 64 30 74 46 74 C30 74 30 84 14 84"
        stroke="#C09220"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
