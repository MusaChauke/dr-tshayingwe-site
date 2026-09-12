import Link from 'next/link';
import Caduceus from './Caduceus';
import Icon from './Icon';
import { address, contact, doctor, hours, slogan } from '@/lib/practice';

function Row({ icon, label, children }: { icon: Parameters<typeof Icon>[0]['name']; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 border-b border-white/10 py-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/70 text-gold" aria-hidden="true">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <p>
        <span className="block text-sm font-semibold text-gold">{label}</span>
        <span className="text-white">{children}</span>
      </p>
    </div>
  );
}

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';
const link = 'underline decoration-gold/70 underline-offset-4 hover:decoration-gold';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-cream px-2 pt-2 sm:px-4">
      <div className="mx-auto max-w-site rounded-t-card-lg bg-charcoal text-white">
        <div className="grid gap-8 px-6 py-12 sm:px-10 md:grid-cols-3 lg:px-14">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={`${BASE}/brand/emblem-reversed.png`} alt="" aria-hidden="true" width={512} height={522} decoding="async" className="h-12 w-12" />
              <span className="font-serif text-2xl">{doctor.shortName}</span>
            </div>
            <Row icon="phone" label="Cellphone">
              <a className={link} href={contact.tel}>{contact.phoneDisplay}</a>
            </Row>
            <Row icon="whatsapp" label="WhatsApp">
              <a className={link} href={contact.whatsapp}>{contact.phoneDisplay}</a>
            </Row>
            <Row icon="mail" label="Email">
              <a className={`break-all ${link}`} href={contact.mailto}>{contact.email}</a>
            </Row>
          </div>
          <div className="md:pt-16">
            <Row icon="pin" label="Address">
              {address.street}, {address.suburb}, {address.city}, {address.postalCode}
              <br />
              <span className="text-white/80">{address.landmark}</span>
            </Row>
            <Row icon="clock" label="Opening times">
              {hours.map((h) => (
                <span key={h.days} className="block">
                  {h.days}: {h.open} to {h.close}
                </span>
              ))}
            </Row>
          </div>
          <div className="md:pt-16">
            <Row icon="clipboard" label="Practice number">{doctor.practiceNumber}</Row>
            <Row icon="badge" label="HPCSA number">
              {doctor.hpcsaNumber}
              <span className="block text-sm text-white/80">
                <a className={link} href={doctor.hpcsaLookup} target="_blank" rel="noopener noreferrer">
                  Check the HPCSA register<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </span>
            </Row>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="flex flex-col items-start gap-4 px-6 py-6 text-sm text-white/80 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-14">
            <div className="flex items-center gap-3">
              <Caduceus className="h-9 w-9" />
              <span className="font-serif text-xl text-gold">{slogan}</span>
            </div>
            <div>
              Doctor / <span lang="xh">Kwagqirha</span> / <span lang="af">Dokter</span>
            </div>
            <div className="flex gap-4">
              <Link className={link} href="/privacy/">Privacy</Link>
              <span>&copy; {new Date().getFullYear()} {doctor.shortName}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
