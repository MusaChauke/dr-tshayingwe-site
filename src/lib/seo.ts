import type { Metadata } from 'next';
import { doctor } from './practice';

export const OG_IMAGE = { url: '/og-image.png', width: 1200, height: 630, alt: `${doctor.shortName}, General Practitioner in Mbekweni, Paarl` };

export const ogBase = {
  type: 'website' as const,
  locale: 'en_ZA',
  siteName: doctor.shortName,
  images: [OG_IMAGE],
};

/** Per-page metadata: title, description, canonical and matching Open Graph / Twitter tags. */
export function pageMeta(path: string, title: string, description: string, extra: Metadata = {}): Metadata {
  const full = `${title} | ${doctor.shortName}, Paarl`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...ogBase, url: path, title: full, description },
    twitter: { card: 'summary_large_image', title: full, description, images: [OG_IMAGE.url] },
    ...extra,
  };
}
