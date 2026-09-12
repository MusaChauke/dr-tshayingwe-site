import Link from 'next/link';
import CtaButtons from '@/components/CtaButtons';
import EmergencyNotice from '@/components/EmergencyNotice';
import Reveal from '@/components/Reveal';
import ServiceList from '@/components/ServiceList';
import { Card, Label, Page, PageTitle } from '@/components/PageShell';
import { JsonLd, breadcrumb } from '@/lib/schema';
import { pageMeta } from '@/lib/seo';
import { doctor, services, toConfirm } from '@/lib/practice';

export const metadata = pageMeta(
  '/services/',
  'GP services in Mbekweni, Paarl',
  "GP services in Mbekweni, Paarl: consultations, PDP medicals, chronic care, HIV testing, family planning, minor procedures, child, women's and men's health.",
);

const whatToBring = [
  'Your ID book or smart ID card (or passport)',
  ...(toConfirm.medicalAid.confirmed ? ['Your medical aid card, if you have one'] : []),
  'The medicines you are taking, or a list of them',
  'Your clinic card, if you get treatment or chronic medicine from a clinic or hospital',
  'Any recent test results, referral letters or hospital notes',
  "Your child's Road to Health booklet (clinic card), if you are bringing a child",
];

export default function ServicesPage() {
  return (
    <Page>
      <JsonLd data={breadcrumb([{ name: 'Services', path: '/services/' }])} />
      <Card>
        <PageTitle
          label="Our services"
          caption="Seven areas of care"
          title="GP services in Mbekweni, Paarl"
          intro={`${doctor.shortName} sees adults and children for an illness that needs treating today, a condition that needs managing for years, a check-up, a screening or a small procedure.`}
        />
        <nav aria-label="Service groups" className="mt-8 flex flex-wrap gap-2">
          {services.map((g) => (
            <a
              key={g.slug}
              href={`#${g.slug}`}
              className="tap inline-flex items-center rounded-full border border-navy/20 px-4 py-2 text-sm font-semibold text-navy hover:border-gold hover:bg-cream"
            >
              {g.title}
            </a>
          ))}
        </nav>
        <div className="mt-6">
          <ServiceList detailed headingLevel="h2" />
        </div>
      </Card>

      <Reveal>
        <Card tone="cream">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <Label>What to bring</Label>
              <ul role="list" className="mt-4 space-y-2">
                {whatToBring.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Label>{toConfirm.medicalAid.confirmed ? 'Fees and medical aid' : 'Fees'}</Label>
              <p className="mt-4">
                {toConfirm.fees.confirmed ? toConfirm.fees.text : 'Please ask about consultation fees when you call or message us.'}
              </p>
              {toConfirm.medicalAid.confirmed && <p className="mt-3">{toConfirm.medicalAid.text}</p>}
              <p className="mt-3">
                Not sure whether what you need is on this list?{' '}
                <Link href="/contact/" className="font-semibold text-navy underline decoration-gold-deep decoration-2 underline-offset-4">
                  Ask us
                </Link>{' '}
                before you come in.
              </p>
              <CtaButtons className="mt-6" />
            </div>
          </div>
          <div className="mt-10">
            <EmergencyNotice />
          </div>
        </Card>
      </Reveal>
    </Page>
  );
}
