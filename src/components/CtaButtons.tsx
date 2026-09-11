import Icon from './Icon';
import { contact, maps } from '@/lib/practice';

/** The primary call-to-action pair used across pages. */
export default function CtaButtons({ directions = false, className = '' }: { directions?: boolean; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={contact.whatsapp}
        className="tap inline-flex items-center gap-2 rounded-md bg-wa px-5 py-3 text-lg font-bold text-white hover:bg-wa-deep"
      >
        <Icon name="whatsapp" className="h-6 w-6" />
        WhatsApp us
      </a>
      <a
        href={contact.tel}
        className="tap inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-lg font-bold text-white hover:bg-navy-deep"
      >
        <Icon name="phone" className="h-6 w-6" />
        Call {contact.phoneDisplay}
      </a>
      {directions && (
        <a
          href={maps.googleDirections}
          target="_blank"
          rel="noopener noreferrer"
          className="tap inline-flex items-center gap-2 rounded-md border-2 border-navy px-5 py-3 text-lg font-bold text-navy hover:bg-cream"
        >
          <Icon name="pin" className="h-6 w-6" />
          Directions
        </a>
      )}
    </div>
  );
}
