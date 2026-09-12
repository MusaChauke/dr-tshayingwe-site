import Link from 'next/link';
import Emblem from './Emblem';
import Icon from './Icon';
import { contact, doctor, nav } from '@/lib/practice';

export default function Header() {
  return (
    <header className="border-b border-gold/40 bg-white">
      <div className="h-1 bg-gold" aria-hidden="true" />
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${doctor.shortName}, home`}>
          <Emblem className="h-12 w-12 shrink-0" decorative />
          <span className="leading-tight">
            <span className="block font-serif text-xl font-semibold text-navy sm:text-2xl">{doctor.shortName}</span>
            <span className="block text-xs text-navy-soft sm:text-sm">General Practitioner, Mbekweni, Paarl</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 font-bold text-navy underline-offset-4 hover:underline hover:decoration-gold hover:decoration-2"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={contact.whatsapp}
            className="tap inline-flex items-center gap-2 rounded-md bg-wa px-4 py-2.5 font-bold text-white hover:bg-wa-deep"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            WhatsApp us
          </a>
        </nav>
      </div>

      <nav aria-label="Main" className="border-t border-gold/30 md:hidden">
        <ul className="mx-auto flex max-w-site justify-between gap-2 overflow-x-auto px-3 text-sm font-bold text-navy">
          {nav.map((item) => (
            <li key={item.href} className="shrink-0">
              <Link href={item.href} className="tap flex items-center px-1 py-2">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
