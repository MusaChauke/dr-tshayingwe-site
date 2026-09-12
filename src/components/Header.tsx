'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Emblem from './Emblem';
import Pill from './Pill';
import { contact, doctor, nav } from '@/lib/practice';

/**
 * On the home page the header floats over the hero photo (white text);
 * everywhere else it is a light bar that stays at the top.
 */
export default function Header() {
  const pathname = usePathname();
  const overlay = pathname === '/';

  const shell = overlay
    ? 'relative z-30 bg-navy text-white md:absolute md:inset-x-0 md:top-0 md:bg-transparent'
    : 'sticky top-0 z-30 border-b border-navy/10 bg-cream/85 text-navy backdrop-blur';
  const link = overlay ? 'text-white/90 hover:text-white' : 'text-navy hover:text-navy-deep';

  return (
    <header className={shell}>
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${doctor.shortName}, home`}>
          <span className={`flex h-11 w-11 items-center justify-center rounded-full ${overlay ? 'bg-white/90' : 'bg-white'}`}>
            <Emblem className="h-9 w-9" decorative />
          </span>
          <span className="leading-tight">
            <span className={`block font-serif text-2xl ${overlay ? 'text-white' : 'text-navy'}`}>{doctor.shortName}</span>
            <span className={`hidden text-xs sm:block ${overlay ? 'text-white/80' : 'text-navy-soft'}`}>General Practitioner, Mbekweni, Paarl</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              className={`py-2 font-semibold transition-colors ${link} ${pathname === item.href ? 'underline decoration-gold decoration-2 underline-offset-8' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Pill href={contact.whatsapp} icon="whatsapp" tone={overlay ? 'ghost' : 'wa'}>
            WhatsApp us
          </Pill>
        </nav>
      </div>

      <nav aria-label="Main" className="md:hidden">
        <ul className={`mx-auto flex max-w-site justify-between gap-2 overflow-x-auto px-3 pb-2 text-sm font-semibold ${overlay ? 'text-white' : 'text-navy'}`}>
          {nav.map((item) => (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={`tap flex items-center px-1 py-2 ${pathname === item.href ? 'underline decoration-gold decoration-2 underline-offset-4' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
