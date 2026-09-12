import Icon from './Icon';
import { contact, maps } from '@/lib/practice';

/** Fixed bottom bar on phones: the three things a visitor actually wants to do. */
export default function ActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-gold/40 bg-white shadow-[0_-4px_16px_rgba(22,39,81,0.12)] md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a href={contact.tel} className="flex min-h-[3.75rem] flex-col items-center justify-center gap-0.5 bg-navy text-xs font-bold text-white">
        <Icon name="phone" className="h-6 w-6" />
        Call
      </a>
      <a href={contact.whatsapp} className="flex min-h-[3.75rem] flex-col items-center justify-center gap-0.5 bg-wa text-xs font-bold text-white">
        <Icon name="whatsapp" className="h-6 w-6" />
        WhatsApp
      </a>
      <a
        href={maps.googleDirections}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[3.75rem] flex-col items-center justify-center gap-0.5 bg-gold text-xs font-bold text-navy"
      >
        <Icon name="pin" className="h-6 w-6" />
        Directions
      </a>
    </nav>
  );
}
