'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import Photo from './Photo';
import { doctor } from '@/lib/practice';

const cards = [
  { name: 'waiting-room', alt: 'The waiting room: a navy sofa, coffee table and the practice banner against green walls', caption: 'The waiting room' },
  { name: 'consulting-room', alt: 'The consulting room with an examination bed and desk', caption: 'The consulting room' },
  { name: 'equipment', alt: 'Examination and suturing instruments laid out on the desk, including an otoscope set and blood pressure monitor', caption: 'Equipment for examinations and minor procedures' },
  { name: 'dispensary', alt: 'Wooden shelves stocked with medicines in the dispensary', caption: 'Medicines dispensed on site' },
  { name: 'entrance', alt: `${doctor.fullName} at the entrance of the practice under the sign`, caption: 'The entrance on Matakata Street' },
];

/** Horizontal snap carousel: a registration card followed by photos of the practice. */
export default function Gallery() {
  const ref = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const count = cards.length + 1;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const first = el.firstElementChild as HTMLElement | null;
      if (!first) return;
      const step = first.offsetWidth + 16;
      setIndex(Math.round(el.scrollLeft / step));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const go = (to: number) => {
    const el = ref.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return;
    const clamped = Math.max(0, Math.min(count - 1, to));
    el.scrollTo({ left: clamped * (first.offsetWidth + 16), behavior: 'smooth' });
  };

  return (
    <div>
      <ul ref={ref} role="list" className="snap-row -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0" data-lenis-prevent>
        <li className="w-[78vw] shrink-0 snap-start sm:w-80">
          <div className="flex h-full flex-col justify-between rounded-card bg-navy-gradient p-6 text-white">
            <div>
              <div className="text-5xl font-medium tracking-tight">
                MP <span className="text-gold">1012347</span>
              </div>
              <p className="mt-2 text-white/80">HPCSA registration number</p>
              <div className="mt-6 text-2xl font-medium tracking-tight">Practice number {doctor.practiceNumber}</div>
            </div>
            <a
              href={doctor.hpcsaLookup}
              target="_blank"
              rel="noopener noreferrer"
              className="pill tap mt-8 inline-flex items-center gap-3 self-start rounded-full bg-white py-2 pl-2 pr-5 text-sm font-semibold text-navy"
            >
              <span className="pill-badge flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy" aria-hidden="true">
                <Icon name="badge" className="h-4 w-4" />
              </span>
              Check the HPCSA register
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </li>
        {cards.map((c) => (
          <li key={c.name} className="w-[78vw] shrink-0 snap-start sm:w-80">
            <figure className="overflow-hidden rounded-card bg-white">
              <Photo name={c.name} alt={c.alt} width={1600} height={1203} sizes="(min-width: 640px) 320px, 78vw" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-4 text-navy-soft">{c.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2" aria-hidden="true">
          {Array.from({ length: count }).map((_, i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-navy' : 'w-1.5 bg-navy/25'}`} />
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => go(index - 1)} aria-label="Previous" className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy hover:bg-white">
            <Icon name="arrow" className="h-5 w-5 rotate-180" />
          </button>
          <button type="button" onClick={() => go(index + 1)} aria-label="Next" className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy hover:bg-white">
            <Icon name="arrow" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
