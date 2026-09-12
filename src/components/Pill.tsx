import Link from 'next/link';
import Icon, { type IconName } from './Icon';

type Tone = 'white' | 'navy' | 'gold' | 'ghost' | 'wa';

const tones: Record<Tone, { pill: string; badge: string }> = {
  white: { pill: 'bg-white text-navy hover:bg-cream', badge: 'bg-gold text-navy' },
  navy: { pill: 'bg-navy text-white hover:bg-navy-deep', badge: 'bg-gold text-navy' },
  gold: { pill: 'bg-gold text-navy hover:bg-gold-deep hover:text-white', badge: 'bg-navy text-gold' },
  ghost: { pill: 'bg-white/15 text-white ring-1 ring-white/40 backdrop-blur hover:bg-white/25', badge: 'bg-white text-navy' },
  wa: { pill: 'bg-wa text-white hover:bg-wa-deep', badge: 'bg-white text-wa' },
};

/** Pill button with a round icon badge, as on the reference design. */
export default function Pill({
  href,
  icon = 'arrow',
  tone = 'white',
  children,
  className = '',
  external = false,
}: {
  href: string;
  icon?: IconName;
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const t = tones[tone];
  const classes = `pill tap inline-flex items-center gap-3 rounded-full py-2 pl-2 pr-6 text-base font-semibold transition-colors duration-300 ${t.pill} ${className}`;
  const inner = (
    <>
      <span className={`pill-badge flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${t.badge}`} aria-hidden="true">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span>{children}</span>
    </>
  );
  const isInternal = href.startsWith('/') && !external;
  return isInternal ? (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  ) : (
    <a href={href} className={classes}>
      {inner}
    </a>
  );
}
