import type { Metadata, Viewport } from 'next';
import { Newsreader, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ActionBar from '@/components/ActionBar';
import { JsonLd, siteSchema } from '@/lib/schema';
import { OG_IMAGE, ogBase } from '@/lib/seo';
import { SITE_URL, doctor } from '@/lib/practice';

const display = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-display',
  display: 'swap',
});

const body = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

// Set NEXT_PUBLIC_PREVIEW=1 when deploying to a temporary hostname so the preview is never indexed.
const isPreview = process.env.NEXT_PUBLIC_PREVIEW === '1';

const homeTitle = `${doctor.shortName} | General Practitioner in Mbekweni, Paarl`;
const homeDescription = `${doctor.fullName}, GP at 3 Matakata Street, Mbekweni, Paarl, opposite the library. Open 7 days a week. Call or WhatsApp 071 670 0634.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: homeTitle,
    template: `%s | ${doctor.shortName}, Paarl`,
  },
  description: homeDescription,
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
  openGraph: { ...ogBase, url: '/', title: homeTitle, description: homeDescription },
  twitter: { card: 'summary_large_image', title: homeTitle, description: homeDescription, images: [OG_IMAGE.url] },
  robots: isPreview ? { index: false, follow: false } : { index: true, follow: true },
  alternates: { canonical: '/' },
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
