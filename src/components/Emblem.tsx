/**
 * The practice emblem, redrawn as vector from the physical sign:
 * gold ring, navy medical cross, two gold figures with raised arms,
 * navy cupped hands holding them. Approved artwork should replace this
 * once a vector master exists.
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
      <circle cx="50" cy="50" r="46" fill="#fff" stroke="#C9A227" strokeWidth="6" />
      {/* cross */}
      <rect x="45" y="19" width="10" height="28" rx="1.5" fill="#1B2A4A" />
      <rect x="36" y="28" width="28" height="10" rx="1.5" fill="#1B2A4A" />
      {/* left figure */}
      <circle cx="26" cy="35" r="5" fill="#C9A227" />
      <path
        d="M26 59 V47 M26 47 L18 39 M26 47 L34 40"
        stroke="#C9A227"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* right figure */}
      <circle cx="74" cy="35" r="5" fill="#C9A227" />
      <path
        d="M74 59 V47 M74 47 L82 39 M74 47 L66 40"
        stroke="#C9A227"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* cupped hands */}
      <path
        d="M15 55 C19 77 37 84 50 84 C63 84 81 77 85 55 C79 65 66 71 50 71 C34 71 21 65 15 55 Z"
        fill="#1B2A4A"
      />
      <path
        d="M21 52 c3 -3 7 -2 9 2 M79 52 c-3 -3 -7 -2 -9 2"
        stroke="#1B2A4A"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
