import Link from 'next/link';
import { notFound } from 'next/navigation';
import CtaButtons from '@/components/CtaButtons';
import EmergencyNotice from '@/components/EmergencyNotice';
import HoursTable from '@/components/HoursTable';
import Icon from '@/components/Icon';
import { JsonLd, breadcrumb } from '@/lib/schema';
import { pageMeta } from '@/lib/seo';
import { address, doctor, services } from '@/lib/practice';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const group = services.find((g) => g.slug === params.slug);
  if (!group) return {};
  return pageMeta(
    `/services/${group.slug}/`,
    group.seoTitle,
    `${group.summary} ${group.items.map((i) => i.name).join(', ')}. ${doctor.shortName}, ${address.street}, ${address.suburb}, ${address.city}. Call or WhatsApp 071 670 0634.`,
  );
}

export default function ServiceGroupPage({ params }: { params: { slug: string } }) {
  const group = services.find((g) => g.slug === params.slug);
  if (!group) notFound();

  const others = services.filter((g) => g.slug !== group.slug);

  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: 'Services', path: '/services/' },
          { name: group.title, path: `/services/${group.slug}/` },
        ])}
      />
      <section className="mx-auto max-w-site px-4 py-12 sm:px-6 md:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-navy-soft">
          <Link href="/services/" className="underline decoration-gold-deep underline-offset-4">
            All services
          </Link>
        </nav>
        <div className="mt-4 flex items-start gap-4">
          <span className="mt-1 hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-gold ring-2 ring-gold ring-offset-2 sm:flex" aria-hidden="true">
            <Icon name={group.icon} className="h-7 w-7" />
          </span>
          <div>
            <h1 className="text-4xl sm:text-5xl">{group.seoTitle}</h1>
            <p className="mt-4 max-w-2xl text-lg">
              {group.summary} At {doctor.shortName}, {address.street}, {address.suburb}, {address.landmarkInSentence}.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <h2 className="text-2xl">What we do</h2>
            <ul role="list" className="mt-3 divide-y divide-gold/40 border-y border-gold/40">
              {group.items.map((item) => (
                <li key={item.name} className="py-3">
                  <span className="font-bold">{item.name}</span>
                  {item.detail && <span className="block text-navy-soft">{item.detail}</span>}
                </li>
              ))}
            </ul>
            <CtaButtons className="mt-8" />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl">Opening times</h2>
            <div className="mt-3">
              <HoursTable />
            </div>
            <h2 className="mt-8 text-2xl">Other services</h2>
            <ul role="list" className="mt-3 flex flex-wrap gap-2">
              {others.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/services/${g.slug}/`}
                    className="tap inline-flex items-center rounded-full border border-navy/30 px-4 py-2 text-sm font-bold text-navy hover:border-gold hover:bg-cream"
                  >
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <EmergencyNotice />
        </div>
      </section>
    </>
  );
}
