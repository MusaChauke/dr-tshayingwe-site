import type { Metadata } from 'next';
import Link from 'next/link';
import CtaButtons from '@/components/CtaButtons';
import EmergencyNotice from '@/components/EmergencyNotice';
import ServiceList from '@/components/ServiceList';
import { JsonLd, breadcrumb } from '@/lib/schema';
import { doctor, services, toConfirm } from '@/lib/practice';

export const metadata: Metadata = {
  title: 'GP services in Mbekweni, Paarl',
  description:
    'Consultations, wellness and PDP medicals, chronic care for hypertension, diabetes and asthma, HIV testing, family planning, minor procedures, child, women’s and men’s health at Dr S Tshayingwe, Mbekweni, Paarl.',
  alternates: { canonical: '/services/' },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: 'Services', path: '/services/' }])} />
      <section className="mx-auto max-w-site px-4 py-12 sm:px-6 md:py-16">
        <h1 className="text-4xl sm:text-5xl">Medical services we offer</h1>
        <p className="mt-4 max-w-2xl text-lg">
          {doctor.shortName} sees adults and children for the everyday and the ongoing: an illness that needs treating
          today, a condition that needs managing for years, a check-up, a screening or a small procedure.
        </p>
        <nav aria-label="Service groups" className="mt-6 flex flex-wrap gap-2">
          {services.map((g) => (
            <a
              key={g.slug}
              href={`#${g.slug}`}
              className="tap inline-flex items-center rounded-full border border-navy/30 px-4 py-2 text-sm font-bold text-navy hover:border-gold hover:bg-cream"
            >
              {g.title}
            </a>
          ))}
        </nav>
        <div className="mt-6">
          <ServiceList detailed />
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-site gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16">
          <div>
            <h2 className="text-3xl">What to bring</h2>
            <ul className="mt-4 space-y-2">
              {[
                'Your ID or a form of identification',
                'Your medical aid card, if you have one',
                'The medicines you are currently taking, or a list of them',
                'Any recent test results, referral letters or hospital notes',
                'Your Road to Health booklet for a child',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl">Fees and medical aid</h2>
            <p className="mt-4">
              {toConfirm.fees.confirmed ? toConfirm.fees.text : 'Please ask about consultation fees when you call or message us.'}
            </p>
            {toConfirm.medicalAid.confirmed && <p className="mt-3">{toConfirm.medicalAid.text}</p>}
            <p className="mt-3">
              Not sure whether what you need is on this list?{' '}
              <Link href="/contact/" className="underline decoration-gold decoration-2 underline-offset-4">
                Ask us
              </Link>{' '}
              before you come in.
            </p>
            <CtaButtons className="mt-6" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-site px-4 py-10 sm:px-6">
        <EmergencyNotice />
      </section>
    </>
  );
}
