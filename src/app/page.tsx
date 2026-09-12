import type { Metadata } from 'next';
import Link from 'next/link';
import CountUp from '@/components/CountUp';
import CtaButtons from '@/components/CtaButtons';
import EmergencyNotice from '@/components/EmergencyNotice';
import Gallery from '@/components/Gallery';
import HoursTable from '@/components/HoursTable';
import Icon from '@/components/Icon';
import MapCard from '@/components/MapCard';
import OpenNow from '@/components/OpenNow';
import Photo from '@/components/Photo';
import Pill from '@/components/Pill';
import Reveal from '@/components/Reveal';
import ServicesAccordion from '@/components/ServicesAccordion';
import { address, bio, contact, doctor, homeVisits, services, toConfirm } from '@/lib/practice';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const serviceCount = services.reduce((n, g) => n + g.items.length, 0);
const chips = [
  'Hypertension',
  'Diabetes',
  'HIV testing',
  'Immunisations',
  'Pap smears',
  'PDP medicals',
  'Circumcision',
  'Wound care',
  'Family planning',
  'Sick notes',
  'Emergencies',
  'Home visits',
  'Medicines on site',
];

function Stat({ value, suffix = '', label, note }: { value: number; suffix?: string; label: string; note: string }) {
  return (
    <div>
      <dt className="text-5xl font-medium tracking-tight text-navy sm:text-6xl">
        <CountUp to={value} suffix={suffix} />
      </dt>
      <dd className="mt-2 font-semibold text-navy">{label}</dd>
      <dd className="text-sm text-navy-soft">{note}</dd>
    </div>
  );
}

function Label({ children, caption, light = false }: { children: React.ReactNode; caption?: string; light?: boolean }) {
  return (
    <div>
      <span className={`label ${light ? 'text-white' : ''}`}>{children}</span>
      {caption && <span className={`label-caption ${light ? 'text-white/70' : ''}`}>{caption}</span>}
    </div>
  );
}

const card = 'rounded-card p-6 sm:p-10 lg:p-14';
const arrowLink = 'inline-flex items-center gap-2 font-semibold text-navy underline decoration-gold-deep decoration-2 underline-offset-4';

export default function HomePage() {
  return (
    <>
      {/* Hero: full-bleed photo; the rest of the page slides over it */}
      <section className="relative z-0 flex min-h-[85svh] flex-col overflow-hidden bg-navy md:sticky md:top-0 md:h-[100svh] md:min-h-[600px]">
        <Photo
          name="entrance"
          alt={`${doctor.fullName} standing at the entrance of the practice at ${address.street}, ${address.suburb}, under the practice sign`}
          width={1600}
          height={1203}
          priority
          sizes="100vw"
          className="hero-photo absolute inset-0 h-full w-full object-cover object-[50%_35%]"
        />
        <div className="absolute inset-0 bg-hero-veil" aria-hidden="true" />
        <div className="hero-text relative z-10 mx-auto flex w-full max-w-site flex-1 flex-col items-center justify-center px-4 pb-20 pt-12 text-center text-white sm:px-6 md:justify-center md:pb-16 md:pt-32">
          <p lang="xh" className="font-serif text-2xl italic text-white/90 sm:text-3xl">
            Molweni, namkelekile.
          </p>
          <h1 className="mt-4 max-w-4xl text-[2.4rem] font-medium leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Your family doctor in Mbekweni, Paarl.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/90 sm:text-xl">
            {doctor.fullName}, {doctor.qualifications}. Open seven days a week, including public holidays. Consultations in
            isiXhosa and English.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Pill href={contact.whatsapp} icon="whatsapp" tone="white">
              WhatsApp us
            </Pill>
            <Pill href={contact.tel} icon="phone" tone="ghost">
              Call {contact.phoneDisplay}
            </Pill>
          </div>
          <p className="mt-6 text-sm font-semibold text-white/90">
            <OpenNow />
          </p>
        </div>
      </section>

      {/* Everything below stacks over the hero */}
      <div className="relative z-10 -mt-6 rounded-t-card-lg bg-cream">
        <div className="mx-auto max-w-site space-y-3 px-2 pb-3 pt-3 sm:space-y-4 sm:px-4 sm:pt-4">
          {/* About */}
          <Reveal as="section" className={`${card} bg-white`}>
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <Label caption={`${address.suburb}, ${address.city}. Open since ${doctor.opened}.`}>About the practice</Label>
              </div>
              <div className="md:col-span-8">
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem]">
                  A general practice that gives you time, plain answers and the same doctor at every visit.
                </h2>
                <p className="mt-5 max-w-2xl text-lg text-navy-soft">{bio.short}</p>
                {toConfirm.languages.confirmed && <p className="mt-3 font-semibold text-navy">{toConfirm.languages.text}</p>}
                <Link href="/about/" className={`mt-6 ${arrowLink}`}>
                  More about Dr Tshayingwe
                  <Icon name="arrow" className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <dl className="mt-12 grid gap-8 border-t border-navy/10 pt-10 sm:grid-cols-3">
              <Stat value={7} label="days a week" note="Including public holidays" />
              <Stat value={serviceCount} label="services under one roof" note="From immunisations to minor procedures" />
              <Stat value={1} label="doctor you will always see" note="Dr Tshayingwe himself, at every visit" />
            </dl>
          </Reveal>

          {/* Services */}
          <Reveal as="section" className={`${card} bg-navy-gradient text-white`}>
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <Label light caption="Seven areas of care">
                  Our services
                </Label>
                <Pill href="/services/" tone="white" className="mt-6">
                  View all services
                </Pill>
              </div>
              <div className="md:col-span-8">
                <h2 className="text-3xl text-white sm:text-4xl lg:text-[2.75rem]">The right care for whatever you are facing.</h2>
                <ul role="list" className="mt-6 flex flex-wrap gap-2">
                  {chips.map((c) => (
                    <li key={c} className="rounded-full bg-white/12 px-4 py-1.5 text-sm text-white ring-1 ring-white/20">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <ServicesAccordion />
            </div>
          </Reveal>

          {/* Inside the practice */}
          <Reveal as="section" className={`${card} bg-white`}>
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <Label caption="Registered, equipped and open">Inside the practice</Label>
              </div>
              <div className="md:col-span-8">
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem]">
                  An HPCSA-registered GP with a waiting room, a consulting room and the equipment for everyday care.
                </h2>
              </div>
            </div>
            <div className="mt-10">
              <Gallery />
            </div>
          </Reveal>

          {/* Photo call-to-action */}
          <Reveal as="section" className="relative flex min-h-[26rem] items-center justify-center overflow-hidden rounded-card text-center text-white">
            <Photo
              name="waiting-room"
              alt=""
              width={1600}
              height={1203}
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/65" aria-hidden="true" />
            <div className="relative z-10 max-w-2xl px-6 py-16">
              <h2 className="text-3xl text-white sm:text-5xl">Come in today, or have the doctor come to you.</h2>
              <p className="mt-4 text-lg text-white/90">{homeVisits.summary}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Pill href={contact.whatsapp} icon="whatsapp" tone="white">
                  WhatsApp us
                </Pill>
                <Pill href={homeVisits.whatsapp} icon="pin" tone="ghost">
                  Arrange a home visit
                </Pill>
              </div>
            </div>
          </Reveal>

          {/* Visit */}
          <Reveal as="section" className={`${card} bg-white`}>
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-6">
                <Label caption={address.landmark}>Visit us</Label>
                <p className="mt-6 text-2xl font-medium tracking-tight text-navy">
                  {address.street}, {address.suburb}, {address.city}, {address.postalCode}
                </p>
                <p className="mt-2 text-navy-soft">Look for the sign above the door.</p>
                <div className="mt-6">
                  <HoursTable />
                </div>
                <CtaButtons directions className="mt-8" />
                {toConfirm.medicalAid.confirmed && <p className="mt-6">{toConfirm.medicalAid.text}</p>}
                {toConfirm.fees.confirmed && <p className="mt-2">{toConfirm.fees.text}</p>}
                <p className="mt-6 text-navy-soft">
                  Email:{' '}
                  <a className="font-semibold text-navy underline decoration-gold-deep decoration-2 underline-offset-4" href={contact.mailto}>
                    {contact.email}
                  </a>
                </p>
              </div>
              <div className="md:col-span-6">
                <MapCard />
              </div>
            </div>
            <div className="mt-10">
              <EmergencyNotice />
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
