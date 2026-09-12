import type { MetadataRoute } from 'next';
import { doctor } from '@/lib/practice';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: doctor.shortName,
    short_name: 'Dr Tshayingwe',
    description: 'General practitioner in Mbekweni, Paarl. Open 7 days a week.',
    start_url: '/',
    display: 'browser',
    background_color: '#FFFFFF',
    theme_color: '#162751',
    icons: [
      { src: '/brand/emblem-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/brand/emblem-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
