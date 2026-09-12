import EmergencyNotice from '@/components/EmergencyNotice';
import HoursTable from '@/components/HoursTable';
import Icon from '@/components/Icon';
import MapCard from '@/components/MapCard';
import Photo from '@/components/Photo';
import Pill from '@/components/Pill';
import Reveal from '@/components/Reveal';
import { Card, Label, Page, PageTitle } from '@/components/PageShell';
import { JsonLd, breadcrumb } from '@/lib/schema';
import { pageMeta } from '@/lib/seo';
import { address, contact, maps } from '@/lib/practice';

export const metadata = pageMeta(
  '/contact/',
  'Contact, directions and hours',
  `Call or WhatsApp 071 670 0634. ${address.street}, ${address.suburb}, ${address.city}, ${address.landmarkInSentence}. Open 7 days a week, 09:00 to 17:00 weekdays.`,
);

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
      <a href={href} className={`tap flex items-center gap-4 rounded-card px-6 py-5 transition-colors ${bg}`}>
        <Icon name={icon} className="h-8 w-8 shrink-0" />
        <span>
          <span className="block text-sm font-semibold">{title}</span>
          <span className="block text-xl font-semibold">{value}</span>
        </span>
      </a>
      <p className="mt-2 px-1 text-sm text-navy-soft">{note}</p>
    </li>
  );
}

export default function ContactPage() {
  return (
    <Page>
      <JsonLd data={breadcrumb([{ name: 'Contact', path: '/contact/' }])} />
      <Card>
        <PageTitle
          label="Contact"
          caption="WhatsApp is the quickest way to reach us"
          title="Contact Dr Tshayingwe in Mbekweni, Paarl"
          intro="Send your name and what you need on WhatsApp, and we will reply during opening times."
        />
        <ul role="list" className="mt-8 grid gap-6 md:grid-cols-3">
          <Method
            icon="whatsapp"
            title="WhatsApp"
            value={contact.phoneDisplay}
            href={contact.whatsapp}
            note="Opens WhatsApp with a message ready to send. Add your name and what you need."
            tone="wa"
          />
          <Method
            icon="phone"
            title="Call"
            value={contact.phoneDisplay}
            href={contact.tel}
            note="During opening times. If there is no answer, we are with a patient: please send a WhatsApp."
            tone="navy"
          />
          <Method icon="mail" title="Email" value={contact.email} href={contact.mailto} note="For documents and non-urgent questions." tone="gold" />
        </ul>
      </Card>

      <Reveal>
        <Card>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <Label caption={address.landmark}>Find us</Label>
              <address className="mt-6 not-italic">
                <p className="text-2xl font-medium tracking-tight text-navy">
                  {address.street}
                  <br />
                  {address.suburb}, {address.city}, {address.postalCode}
                </p>
                <p className="mt-2 text-navy-soft">
                  The entrance is on {address.street.replace(/^\d+\s/, '')} at street level, under the practice sign.
                </p>
              </address>
              <div className="mt-5 flex flex-wrap gap-3">
                <Pill href={maps.googleDirections} icon="pin" tone="navy">
                  Google Maps
                </Pill>
                <Pill href={maps.waze} icon="pin" tone="white" className="ring-1 ring-navy/20">
                  Waze
                </Pill>
                <Pill href={maps.apple} icon="pin" tone="white" className="ring-1 ring-navy/20">
                  Apple Maps
                </Pill>
              </div>

              <h2 className="mt-10 text-2xl">Opening times</h2>
              <div className="mt-4">
                <HoursTable />
              </div>
            </div>
            <div className="space-y-4 md:col-span-6">
              <MapCard />
              <figure className="overflow-hidden rounded-card bg-cream">
                <Photo
                  name="building"
                  alt={`The practice building on ${address.street}: a grey two-storey building with the practice sign above the ground-floor entrance`}
                  width={1600}
                  height={497}
                  className="w-full object-cover"
                />
                <figcaption className="px-5 py-3 text-sm text-navy-soft">What to look for from the street.</figcaption>
              </figure>
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
