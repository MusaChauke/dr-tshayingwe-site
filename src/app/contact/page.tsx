import type { Metadata } from 'next';
import EmergencyNotice from '@/components/EmergencyNotice';
import HoursTable from '@/components/HoursTable';
import Icon from '@/components/Icon';
import MapCard from '@/components/MapCard';
import Photo from '@/components/Photo';
import { JsonLd, breadcrumb } from '@/lib/schema';
import { address, contact, doctor, maps } from '@/lib/practice';

export const metadata: Metadata = {
  title: 'Contact and directions, 3 Matakata Street, Mbekweni',
  description: `Call or WhatsApp ${doctor.shortName} on 071 670 0634. ${address.street}, ${address.suburb}, ${address.city}, ${address.landmark.toLowerCase()}. Open Monday to Friday 09:00 to 17:00 and weekends and public holidays 09:00 to 14:00.`,
  alternates: { canonical: '/contact/' },
};

function Method({
  icon,
  title,
  value,
  href,
  note,
  tone,
}: {
  icon: Parameters<typeof Icon>[0]['name'];
  title: string;
  value: string;
  href: string;
  note: string;
  tone: 'wa' | 'navy' | 'gold';
}) {
  const bg = tone === 'wa' ? 'bg-wa text-white hover:bg-wa-deep' : tone === 'navy' ? 'bg-navy text-white hover:bg-navy-deep' : 'bg-gold text-navy hover:bg-gold-deep hover:text-white';
  return (
    <li>
      <a href={href} className={`tap flex items-center gap-4 rounded-lg px-5 py-4 ${bg}`}>
        <Icon name={icon} className="h-8 w-8 shrink-0" />
        <span>
          <span className="block text-sm font-bold opacity-90">{title}</span>
          <span className="block text-xl font-bold">{value}</span>
        </span>
      </a>
      <p className="mt-1.5 text-sm text-navy-soft">{note}</p>
    </li>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: 'Contact', path: '/contact/' }])} />
      <section className="mx-auto max-w-site px-4 py-12 sm:px-6 md:py-16">
        <h1 className="text-4xl sm:text-5xl">Contact us</h1>
        <p className="mt-4 max-w-2xl text-lg">
          WhatsApp is the quickest way to reach the practice. Send your name and what you need, and we will reply
          during opening times.
        </p>

        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          <Method icon="whatsapp" title="WhatsApp" value={contact.phoneDisplay} href={contact.whatsapp} note="Opens WhatsApp with a message ready to send." tone="wa" />
          <Method icon="phone" title="Call" value={contact.phoneDisplay} href={contact.tel} note="Answered during opening times." tone="navy" />
          <Method icon="mail" title="Email" value={contact.email} href={contact.mailto} note="For documents and non-urgent questions." tone="gold" />
        </ul>
      </section>

      <div className="rule-gold mx-auto max-w-site" />

      <section className="mx-auto max-w-site px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">Find us</h2>
            <address className="mt-4 not-italic">
              <p className="text-xl font-bold text-navy">
                {address.street}
                <br />
                {address.suburb}, {address.city}, {address.postalCode}
              </p>
              <p className="mt-2 text-lg">{address.landmark}. The entrance is on {address.street.replace(/^\d+\s/, '')} at street level, under the practice sign.</p>
            </address>
            <ul className="mt-5 flex flex-wrap gap-3">
              {[
                { label: 'Google Maps', href: maps.googleDirections },
                { label: 'Waze', href: maps.waze },
                { label: 'Apple Maps', href: maps.apple },
              ].map((m) => (
                <li key={m.label}>
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap inline-flex items-center gap-2 rounded-md border-2 border-navy px-4 py-2.5 font-bold text-navy hover:bg-cream"
                  >
                    <Icon name="pin" className="h-5 w-5" />
                    {m.label}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-3xl">Opening times</h2>
            <div className="mt-4">
              <HoursTable />
            </div>
          </div>
          <div className="space-y-6">
            <MapCard />
            <figure>
              <Photo
                name="building"
                alt={`The practice building on ${address.street}: a grey two-storey building with the practice sign above the ground-floor entrance`}
                width={1600}
                height={497}
                className="w-full rounded-lg object-cover"
              />
              <figcaption className="mt-2 text-sm text-navy-soft">What to look for from the street.</figcaption>
            </figure>
          </div>
        </div>
        <div className="mt-12">
          <EmergencyNotice />
        </div>
      </section>
    </>
  );
}
