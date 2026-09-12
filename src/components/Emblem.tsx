/**
 * The practice emblem: the approved logo file (public/brand/emblem-*.png, transparent background).
 * Master copies live in Downloads\Dr S Tshayingwe Practice\Brand\.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Emblem({
  className = 'h-12 w-12',
  title = 'Dr S Tshayingwe practice emblem',
  decorative = false,
  size = 512,
}: {
  className?: string;
  title?: string;
  decorative?: boolean;
  /** Which exported size to load: 192, 512 or 1024. */
  size?: 192 | 512 | 1024;
}) {
  return (
    <img
      src={`${BASE}/brand/emblem-${size}.png`}
      alt={decorative ? '' : title}
      aria-hidden={decorative ? true : undefined}
      width={size}
      height={size}
      decoding="async"
      className={className}
    />
  );
}
