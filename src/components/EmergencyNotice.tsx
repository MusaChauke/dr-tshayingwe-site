import { contact, emergency } from '@/lib/practice';

/**
 * Emergencies block. The practice sees medical emergencies during opening
 * times; the ambulance numbers are for life-threatening cases and after hours.
 */
export default function EmergencyNotice({ compact = false }: { compact?: boolean }) {
  return (
    <aside aria-label="Emergencies" className={`rounded-lg border-l-4 border-gold bg-cream text-ink ${compact ? 'p-4' : 'p-5 sm:p-6'}`}>
      <p className="font-bold text-navy">Emergencies are seen during opening times.</p>
      <p className="mt-1">
        Come straight to the practice, or call{' '}
        <a className="font-bold text-navy underline decoration-gold-deep underline-offset-4" href={contact.tel}>
          {contact.phoneDisplay}
        </a>{' '}
        on the way so we can prepare. If someone&rsquo;s life is in danger, or the practice is closed, call{' '}
        <a className="font-bold text-navy underline decoration-gold-deep underline-offset-4" href={emergency.ambulance.tel}>
          {emergency.ambulance.number}
        </a>{' '}
        for an ambulance or{' '}
        <a className="font-bold text-navy underline decoration-gold-deep underline-offset-4" href={emergency.cell.tel}>
          {emergency.cell.number}
        </a>{' '}
        from a cell phone.
        {!compact && (
          <>
            {' '}
            {emergency.hospital.label} emergency unit (casualty):{' '}
            <a className="font-bold text-navy underline decoration-gold-deep underline-offset-4" href={emergency.hospital.tel}>
              {emergency.hospital.number}
            </a>
            .
          </>
        )}
      </p>
    </aside>
  );
}
