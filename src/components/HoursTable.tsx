import OpenNow from './OpenNow';
import { hours } from '@/lib/practice';

export default function HoursTable({ showStatus = true }: { showStatus?: boolean }) {
  return (
    <div>
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">Opening times</caption>
        <tbody>
          {hours.map((h) => (
            <tr key={h.days} className="border-b border-gold/40">
              <th scope="row" className="py-3 pr-4 align-top font-bold text-navy">
                {h.days}
              </th>
              <td className="whitespace-nowrap py-3 align-top tabular-nums">
                {h.open} to {h.close}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showStatus && (
        <p className="mt-3 font-bold text-navy">
          <OpenNow />
        </p>
      )}
    </div>
  );
}
