'use client';

import { useEffect, useRef, useState } from 'react';
import { address, maps } from '@/lib/practice';

/**
 * Map that only loads Google's embed after the visitor asks for it,
 * so the page sets no third-party cookies by default (POPIA-friendly).
 */
export default function MapCard() {
  const [loaded, setLoaded] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (loaded) frameRef.current?.focus();
  }, [loaded]);

  return (
    <div className="overflow-hidden rounded-lg border border-gold/40 bg-cream">
      {loaded ? (
        <iframe
          ref={frameRef}
          tabIndex={-1}
          title={`Map showing ${address.street}, ${address.suburb}, ${address.city}`}
          src={maps.embed}
          className="block h-72 w-full md:h-96"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="flex h-72 flex-col items-center justify-center gap-4 p-6 text-center md:h-96">
          <p className="max-w-sm text-navy-soft">
            Press &ldquo;Show map&rdquo; to load the map from Google Maps, or open directions in your maps app.
          </p>
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="tap rounded-md bg-navy px-5 py-3 font-bold text-white hover:bg-navy-deep"
          >
            Show map
          </button>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <a className="font-bold text-navy underline decoration-gold-deep decoration-2 underline-offset-4" href={maps.googleDirections}>
              Google Maps
            </a>
            <a className="font-bold text-navy underline decoration-gold-deep decoration-2 underline-offset-4" href={maps.waze}>
              Waze
            </a>
            <a className="font-bold text-navy underline decoration-gold-deep decoration-2 underline-offset-4" href={maps.apple}>
              Apple Maps
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
