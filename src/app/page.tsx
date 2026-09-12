import type { Metadata } from 'next';
import Link from 'next/link';
import CtaButtons from '@/components/CtaButtons';
import EmergencyNotice from '@/components/EmergencyNotice';
import HoursTable from '@/components/HoursTable';
import Icon from '@/components/Icon';
import MapCard from '@/components/MapCard';
import OpenNow from '@/components/OpenNow';
import PhoneText from '@/components/PhoneText';
import Photo from '@/components/Photo';
import ServiceList from '@/components/ServiceList';
import { address, bio, contact, doctor, toConfirm, virtualConsultation } from '@/lib/practice';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

function Fact({ icon, label, value }: { icon: Parameters<typeof Icon>[0]['name']; label: string; value: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold" aria-hidden="true">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <span>
        <span className="block text-sm font-bold text-gold">{label}</span>
        <span className="block leading-snug text-white">{value}</span>
      </span>
    </li>
  );
}

const arrowLink = 'inline-flex items-center gap-2 font-bold text-navy underline decoration-gold-deep decoration-2 underline-offset-4';

export default function HomePage() {
  return (
    <>
      {/* Hero: the sign's two-panel layout, expanded. Cream text panel, photo, gold S-curve between them. */}
      <section className="relative overflow-hidden bg-cream">
        <div className="grid md:grid-cols-2">
          <div className="order-2 px-4 pb-12 pt-8 sm:px-6 md:order-1 md:py-20">
            <div className="md:ml-auto md:max-w-[34rem]">
              <p className="font-serif text-2xl italic text-navy-soft" lang="xh">
                Molweni, namkelekile.
              </p>
              <h1 className="mt-3 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-[3.6rem]">
                Your family doctor in Mbekweni, Paarl.
              </h1>
              <p className="mt-5 max-w-prose text-lg">
                {doctor.fullName}, {doctor.qualifications}, is a GP (general practitioner) at {address.street},{' '}
                {address.landmarkInSentence}. Adults, children and older patients are all welcome, seven days a week,
                including public holidays.
              </p>
              <CtaButtons className="mt-7" />
              <p className="mt-5 font-bold text-navy">
                <OpenNow />
              </p>
            </div>
          </div>

          <div className="relative order-1 h-80 sm:h-[26rem] md:order-2 md:h-auto md:min-h-[38rem]">
            <Photo
              name="doctor-portrait"
              alt={`${doctor.fullName} at his desk in the consulting room, smiling, with a stethoscope around his neck`}
              width={1100}
              height={1375}
              priority
              className="absolute inset-0 h-full w-full object-cover object-[62%_18%]"
            />
            <svg
              className="absolute inset-y-0 left-0 hidden h-full w-28 md:block"
              viewBox="0 0 100 600"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M0 0 H62 C6 150 104 450 38 600 H0 Z" fill="#F5F2EC" />
              <path
                d="M62 0 C6 150 104 450 38 600"
                fill="none"
                stroke="#C9A227"
                strokeWidth="7"
                vectorEffect="non-scaling-stroke"
                className="curve-draw"
              />
            </svg>
            <svg
              className="absolute inset-x-0 bottom-0 h-14 w-full md:hidden"
              viewBox="0 0 600 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M0 100 V40 C150 100 450 -10 600 50 V100 Z" fill="#F5F2EC" />
              <path d="M0 40 C150 100 450 -10 600 50" fill="none" stroke="#C9A227" strokeWidth="6" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </div>
      </section>

      {/* Legitimacy strip: the sign's charcoal panel */}
      <section aria-label="Practice details" className="bg-charcoal">
        <ul role="list" className="mx-auto grid max-w-site gap-5 px-4 py-7 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          <Fact icon="clipboard" label="Practice number" value={doctor.practiceNumber} />
          <Fact icon="badge" label="HPCSA (MP) No." value={doctor.hpcsaNumber.replace('MP ', '')} />
          <Fact icon="pin" label="Address" value={`${address.street}, ${address.suburb}, ${address.landmarkInSentence}`} />
          <Fact icon="clock" label="Opening times" value="7 days a week, including public holidays" />
        </ul>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-site px-4 py-14 sm:px-6 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">Medical services we offer</h2>
          <p className="mt-3 text-lg text-navy-soft">
            Most of what a family needs from a doctor, under one roof. If you are not sure whether we can help, ask us on
            WhatsApp.
          </p>
        </div>
        <div className="mt-6">
          <ServiceList />
        </div>
        <Link href="/services/" className={`mt-8 ${arrowLink}`}>
          Read about each service
          <Icon name="arrow" className="h-5 w-5" />
        </Link>
      </section>

      <div className="rule-gold mx-auto max-w-site" />

      {/* Doctor */}
      <section className="mx-auto grid max-w-site items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
        <Photo
          name="entrance"
          alt={`${doctor.fullName} standing at the entrance of the practice at ${address.street}, ${address.suburb}, under the practice sign`}
          width={1600}
          height={1156}
          className="w-full rounded-lg object-cover"
        />
        <div>
          <h2 className="text-3xl sm:text-4xl">Meet Dr Tshayingwe</h2>
          <p className="mt-4 text-lg">{bio.short}</p>
          <ul role="list" className="mt-5 space-y-3">
            {bio.approach.slice(0, 3).map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          {toConfirm.languages.confirmed && <p className="mt-4 font-bold text-navy">{toConfirm.languages.text}</p>}
          <Link href="/about/" className={`mt-6 ${arrowLink}`}>
            More about the doctor and the practice
            <Icon name="arrow" className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Virtual consultations */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-site px-4 py-14 sm:px-6 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-3xl text-white sm:text-4xl">Can&apos;t get to the practice?</h2>
              <p className="mt-4 text-lg text-white/90">{virtualConsultation.summary}</p>
              <Link
                href="/virtual-consultations/"
                className="mt-6 inline-flex items-center gap-2 font-bold text-gold underline decoration-gold decoration-2 underline-offset-4"
              >
                How a virtual consultation works
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
            </div>
            <ol role="list" className="space-y-4">
              {virtualConsultation.steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold font-serif text-xl text-gold">
                    <span className="sr-only">Step </span>
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-bold">{step.title}</div>
                    <div className="text-white/85">
                      <PhoneText text={step.body} />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="mx-auto max-w-site px-4 py-14 sm:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl">Visit us</h2>
            <p className="mt-4 text-lg">
              <span className="font-bold">
                {address.street}, {address.suburb}, {address.city}, {address.postalCode}
              </span>
              <br />
              {address.landmark}. Look for the sign above the door.
            </p>
            <div className="mt-6">
              <HoursTable />
            </div>
            <CtaButtons directions className="mt-8" />
            {toConfirm.medicalAid.confirmed && <p className="mt-6">{toConfirm.medicalAid.text}</p>}
            {toConfirm.fees.confirmed && <p className="mt-2">{toConfirm.fees.text}</p>}
            <p className="mt-6 text-navy-soft">
              Email:{' '}
              <a className="font-bold text-navy underline decoration-gold-deep decoration-2 underline-offset-4" href={contact.mailto}>
                {contact.email}
              </a>
            </p>
          </div>
          <div>
            <MapCard />
          </div>
        </div>
        <div className="mt-12">
          <EmergencyNotice />
        </div>
      </section>
    </>
  );
}
