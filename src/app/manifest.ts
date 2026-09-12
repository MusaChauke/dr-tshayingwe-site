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
    theme_color: '#1B2A4A',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
