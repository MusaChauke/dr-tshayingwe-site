/**
 * Opening status in South African time, including public holidays
 * (weekend hours apply on public holidays).
 */

const FIXED_HOLIDAYS: [number, number][] = [
  [1, 1], // New Year's Day
  [3, 21], // Human Rights Day
  [4, 27], // Freedom Day
  [5, 1], // Workers' Day
  [6, 16], // Youth Day
  [8, 9], // National Women's Day
  [9, 24], // Heritage Day
  [12, 16], // Day of Reconciliation
  [12, 25], // Christmas Day
  [12, 26], // Day of Goodwill
];

/** Good Friday and Family Day (Easter Monday), by year. Extend as years are added. */
const EASTER_HOLIDAYS: Record<number, [number, number][]> = {
  2026: [[4, 3], [4, 6]],
  2027: [[3, 26], [3, 29]],
  2028: [[4, 14], [4, 17]],
  2029: [[3, 30], [4, 2]],
  2030: [[4, 19], [4, 22]],
};

function key(m: number, d: number) {
  return `${m}-${d}`;
}

export function isPublicHoliday(date: Date): boolean {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const set = new Set<string>();
  for (const [hm, hd] of FIXED_HOLIDAYS) {
    set.add(key(hm, hd));
    // Public Holidays Act: a holiday falling on a Sunday is observed on the Monday.
    const dt = new Date(y, hm - 1, hd);
    if (dt.getDay() === 0) {
      const mon = new Date(y, hm - 1, hd + 1);
      set.add(key(mon.getMonth() + 1, mon.getDate()));
    }
  }
  for (const [hm, hd] of EASTER_HOLIDAYS[y] ?? []) set.add(key(hm, hd));
  return set.has(key(m, d));
}

export type Status =
  | { open: true; closes: string }
  | { open: false; opensAt: string; opensDay: 'today' | 'tomorrow' };

/** Returns the current time in Africa/Johannesburg as a Date whose local fields are SAST. */
export function nowInSAST(): Date {
  const now = new Date();
  const parts = new Intl.DateTimeFormat('en-ZA', {
    timeZone: 'Africa/Johannesburg',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(now);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? 0);
  return new Date(get('year'), get('month') - 1, get('day'), get('hour') % 24, get('minute'));
}

function hoursFor(date: Date): { open: number; close: number } {
  const weekend = date.getDay() === 0 || date.getDay() === 6;
  return weekend || isPublicHoliday(date) ? { open: 9, close: 14 } : { open: 9, close: 17 };
}

export function openingStatus(date: Date = nowInSAST()): Status {
  const { open, close } = hoursFor(date);
  const minutes = date.getHours() * 60 + date.getMinutes();
  const fmt = (h: number) => `${String(h).padStart(2, '0')}:00`;
  if (minutes >= open * 60 && minutes < close * 60) return { open: true, closes: fmt(close) };
  if (minutes < open * 60) return { open: false, opensAt: fmt(open), opensDay: 'today' };
  const tomorrow = new Date(date);
  tomorrow.setDate(date.getDate() + 1);
  return { open: false, opensAt: fmt(hoursFor(tomorrow).open), opensDay: 'tomorrow' };
}
