/**
 * The practice emblem, redrawn as vector from the brand mockup:
 * gold ring, red medical cross, two navy figures with raised arms,
 * a smaller child figure, gold cupped hands holding them.
 * Replace with the vectorised master once ChatGPT/Illustrator produces it
 * (see Downloads\Dr S Tshayingwe Practice\Brand\Logo & Brand Prompts.md).
 */
export default function Emblem({
  className = 'h-12 w-12',
  title = 'Dr S Tshayingwe practice emblem',
  decorative = false,
}: {
  className?: string;
  title?: string;
  decorative?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : title}
      focusable="false"
    >
      <circle cx="50" cy="50" r="46" fill="#fff" stroke="#C9A227" strokeWidth="7" />
      {/* red cross */}
      <rect x="45" y="15" width="10" height="28" rx="1.5" fill="#D42B2B" />
      <rect x="36" y="24" width="28" height="10" rx="1.5" fill="#D42B2B" />
      {/* left adult */}
      <circle cx="27" cy="36" r="5" fill="#1B2A4A" />
      <path d="M21 44 H33 L29.5 66 H24.5 Z" fill="#1B2A4A" />
      <path d="M27 46 L18 34 M27 46 L36 34" stroke="#1B2A4A" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      {/* right adult */}
      <circle cx="73" cy="36" r="5" fill="#1B2A4A" />
      <path d="M67 44 H79 L75.5 66 H70.5 Z" fill="#1B2A4A" />
      <path d="M73 46 L64 34 M73 46 L82 34" stroke="#1B2A4A" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      {/* child */}
      <circle cx="50" cy="48" r="3.6" fill="#1B2A4A" />
      <path d="M46 53 H54 L52.5 65 H47.5 Z" fill="#1B2A4A" />
      <path d="M50 54 L45 49 M50 54 L55 49" stroke="#1B2A4A" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      {/* gold cupped hands */}
      <path d="M13 52 C17 78 37 87 50 87 C63 87 83 78 87 52 C82 66 66 73 50 73 C34 73 18 66 13 52 Z" fill="#C9A227" />
    </svg>
  );
}
