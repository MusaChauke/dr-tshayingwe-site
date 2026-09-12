import Pill from './Pill';
import { contact, maps } from '@/lib/practice';

/** The primary call-to-action pair used across pages. */
export default function CtaButtons({
  directions = false,
  className = '',
  whatsappHref = contact.whatsapp,
  onDark = false,
}: {
  directions?: boolean;
  className?: string;
  whatsappHref?: string;
  onDark?: boolean;
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Pill href={whatsappHref} icon="whatsapp" tone="wa">
        WhatsApp us
      </Pill>
      <Pill href={contact.tel} icon="phone" tone={onDark ? 'ghost' : 'navy'}>
        Call {contact.phoneDisplay}
      </Pill>
      {directions && (
        <Pill href={maps.googleDirections} icon="pin" tone={onDark ? 'ghost' : 'white'} className={onDark ? '' : 'ring-1 ring-navy/20'}>
          Directions
        </Pill>
      )}
    </div>
  );
}
