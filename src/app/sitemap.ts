import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/practice';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-09-11');
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/services/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/contact/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/about/`, lastModified, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${SITE_URL}/virtual-consultations/`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
  ];
}
