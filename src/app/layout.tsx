import type { Metadata, Viewport } from 'next';
import { Atkinson_Hyperlegible, Newsreader } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ActionBar from '@/components/ActionBar';
import { JsonLd, siteSchema } from '@/lib/schema';
import { SITE_URL, doctor, tagline } from '@/lib/practice';

const display = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-display',
  display: 'swap',
});

const body = Atkinson_Hyperlegible({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${doctor.shortName} | General Practitioner in Mbekweni, Paarl`,
    template: `%s | ${doctor.shortName}, Paarl`,
  },
  description: `${doctor.fullName}, ${doctor.qualifications}: family doctor at 3 Matakata Street, Mbekweni, Paarl, opposite the library. Open 7 days a week. Consultations, chronic care, child health, minor procedures and virtual consultations. Call or WhatsApp 071 670 0634.`,
  applicationName: doctor.shortName,
  keywords: [
    'GP Paarl',
    'doctor Paarl',
    'general practitioner Paarl',
    'doctor Mbekweni',
    'GP Mbekweni',
    'family doctor Paarl',
    'dokter Paarl',
    'ugqirha Paarl',
    'Dr Tshayingwe',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    siteName: `${doctor.shortName}, General Practitioner`,
    title: `${doctor.shortName} | General Practitioner in Mbekweni, Paarl`,
    description: `${tagline} Family doctor at 3 Matakata Street, Mbekweni, Paarl. Open 7 days a week. Call or WhatsApp 071 670 0634.`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${doctor.shortName}, General Practitioner in Mbekweni, Paarl` }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = {
  themeColor: '#1B2A4A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ActionBar />
        <JsonLd data={siteSchema()} />
      </body>
    </html>
  );
}
