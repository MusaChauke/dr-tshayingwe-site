'use client';

import { useEffect, useState } from 'react';
import { openingStatus, type Status } from '@/lib/openingStatus';

/**
 * Live "Open now" line. Renders a static fallback on the server so the
 * page is complete without JavaScript, then updates in the browser.
 */
export default function OpenNow({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const tick = () => setStatus(openingStatus());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!status) {
    return <span className={className}>Open 7 days a week</span>;
  }
  if (status.open) {
    return (
      <span className={className}>
        <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500 align-middle" aria-hidden="true" />
        Open now, closes {status.closes}
      </span>
    );
  }
  return (
    <span className={className}>
      <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full bg-gold align-middle" aria-hidden="true" />
      Closed now, opens {status.opensDay} at {status.opensAt}
    </span>
  );
}
