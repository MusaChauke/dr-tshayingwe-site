import type { Metadata } from 'next';
import { JsonLd, breadcrumb } from '@/lib/schema';
import { address, contact, doctor } from '@/lib/practice';

export const metadata: Metadata = {
  title: 'Privacy notice',
  description: `How ${doctor.shortName}'s website and practice handle personal information under POPIA.`,
  alternates: { canonical: '/privacy/' },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: 'Privacy', path: '/privacy/' }])} />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <h1 className="text-4xl">Privacy notice</h1>
        <p className="mt-2 text-navy-soft">Last updated 11 September 2026</p>

        <h2 className="mt-8 text-2xl">This website</h2>
        <p className="mt-2">
          This website is for information only. It has no forms, no accounts and no booking system, and it does not set
          cookies or use analytics that track you. The hosting provider keeps standard server logs (such as your IP
          address and the pages requested) for security and to keep the site running.
        </p>
        <p className="mt-2">
          The map on the contact page is loaded from Google Maps only when you press &ldquo;Show map&rdquo;. When you do,
          Google&rsquo;s own privacy policy applies to that map. Links to WhatsApp, Google Maps, Waze and Apple Maps open
          those services, which have their own policies.
        </p>

        <h2 className="mt-8 text-2xl">When you contact the practice</h2>
        <p className="mt-2">
          When you phone, WhatsApp or email the practice, we use the details you give us to reply, to arrange your
          appointment and to provide care. Clinical information you share becomes part of your medical record, which is
          kept confidential and stored securely for as long as the Health Professions Council of South Africa requires.
          We do not sell or share your information with anyone outside your care, except where the law requires it or
          you ask us to (for example, a medical aid claim or a referral).
        </p>

        <h2 className="mt-8 text-2xl">Your rights</h2>
        <p className="mt-2">
          Under the Protection of Personal Information Act (POPIA) you may ask what information we hold about you, ask
          for it to be corrected, or object to how it is used. Send requests to the Information Officer, {doctor.fullName},
          at{' '}
          <a className="underline decoration-gold decoration-2 underline-offset-4" href={contact.mailto}>
            {contact.email}
          </a>{' '}
          or at {address.oneLine}. If you are not satisfied with our response, you may complain to the Information
          Regulator (South Africa) at{' '}
          <a className="underline decoration-gold decoration-2 underline-offset-4" href="mailto:POPIAComplaints@inforegulator.org.za">
            POPIAComplaints@inforegulator.org.za
          </a>
          .
        </p>
      </section>
    </>
  );
}
