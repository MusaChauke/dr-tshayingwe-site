'use client';

import Link from 'next/link';
import { useState } from 'react';
import Icon from './Icon';
import { services } from '@/lib/practice';

/** The seven service groups as an accordion, first one open, as on the reference design. */
export default function ServicesAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <ul role="list" className="divide-y divide-white/15 border-y border-white/15">
      {services.map((g, i) => {
        const isOpen = open === i;
        const panelId = `acc-${g.slug}`;
        return (
          <li key={g.slug}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="tap flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold" aria-hidden="true">
                  <Icon name={g.icon} className="h-5 w-5" />
                </span>
                <span className="text-xl font-medium text-white sm:text-2xl">{g.title}</span>
              </span>
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-transform duration-500 ease-soft"
                style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div id={panelId} className="acc-body" data-open={isOpen} aria-hidden={!isOpen}>
              <div>
                <div className="grid gap-5 pb-6 pl-14 md:grid-cols-5">
                  <p className="text-white/85 md:col-span-2">{g.summary}</p>
                  <div className="md:col-span-3">
                    <ul role="list" className="flex flex-wrap gap-2">
                      {g.items.map((item) => (
                        <li key={item.name} className="rounded-full bg-white/10 px-3.5 py-1.5 text-sm text-white">
                          {item.name}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${g.slug}/`}
                      tabIndex={isOpen ? 0 : -1}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
                    >
                      More about {g.title.toLowerCase()}
                      <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
