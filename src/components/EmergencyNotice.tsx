import { emergency } from '@/lib/practice';

export default function EmergencyNotice({ compact = false }: { compact?: boolean }) {
  return (
    <aside
      aria-label="Emergency information"
      className={`rounded-lg border-l-4 border-red-700 bg-red-50 text-red-950 ${compact ? 'p-4' : 'p-5 sm:p-6'}`}
    >
      <p className="font-bold">This practice is not an emergency service.</p>
      <p className="mt-1">
        If someone is seriously ill or injured, call{' '}
        <a className="font-bold underline" href={emergency.ambulance.tel}>
          {emergency.ambulance.number}
        </a>{' '}
        for an ambulance, or{' '}
        <a className="font-bold underline" href={emergency.cell.tel}>
          {emergency.cell.number}
        </a>{' '}
        from a cell phone, or go to the nearest emergency centre.{' '}
        {!compact && (
          <>
            {emergency.hospital.label}:{' '}
            <a className="font-bold underline" href={emergency.hospital.tel}>
              {emergency.hospital.number}
            </a>
            .
          </>
        )}
      </p>
    </aside>
  );
}
