import Link from 'next/link';
import { notFound } from 'next/navigation';
import CtaButtons from '@/components/CtaButtons';
import EmergencyNotice from '@/components/EmergencyNotice';
import HoursTable from '@/components/HoursTable';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import { Card, Label, Page } from '@/components/PageShell';
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
    `${group.items.map((i) => i.name).join(', ')}. ${doctor.shortName}, ${address.street}, ${address.suburb}, ${address.city}. Call or WhatsApp 071 670 0634.`,
    { title: { absolute: group.seoTitle } },
  );
}

export default function ServiceGroupPage({ params }: { params: { slug: string } }) {
  const group = services.find((g) => g.slug === params.slug);
  if (!group) notFound();

  const others = services.filter((g) => g.slug !== group.slug);

  return (
    <Page>
      <JsonLd
        data={breadcrumb([
          { name: 'Services', path: '/services/' },
          { name: group.title, path: `/services/${group.slug}/` },
        ])}
      />
      <Card>
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/services/" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-soft underline decoration-gold-deep underline-offset-4">
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
              All services
            </Link>
            <div className="mt-4 flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-gold" aria-hidden="true">
                <Icon name={group.icon} className="h-6 w-6" />
              </span>
              <Label>{group.title}</Label>
            </div>
          </div>
          <div className="md:col-span-8">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem]">{group.seoTitle}</h1>
            <p className="mt-5 max-w-2xl text-lg text-navy-soft">
              {group.summary} At {doctor.shortName}, {address.street}, {address.suburb}, {address.landmarkInSentence}.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="text-2xl">What we do</h2>
            <ul role="list" className="mt-3 divide-y divide-navy/10 border-y border-navy/10">
              {group.items.map((item) => (
                <li key={item.name} className="py-3">
                  <span className="font-semibold">{item.name}</span>
                  {item.detail && <span className="block text-navy-soft">{item.detail}</span>}
                </li>
              ))}
            </ul>
            <CtaButtons className="mt-8" />
          </div>
          <div className="md:col-span-5">
            <div className="rounded-card bg-cream p-6">
              <h2 className="text-2xl">Opening times</h2>
              <div className="mt-3">
                <HoursTable />
              </div>
            </div>
            <h2 className="mt-8 text-2xl">Other services</h2>
            <ul role="list" className="mt-3 flex flex-wrap gap-2">
              {others.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/services/${g.slug}/`}
                    className="tap inline-flex items-center rounded-full border border-navy/20 px-4 py-2 text-sm font-semibold text-navy hover:border-gold hover:bg-cream"
                  >
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
      <Reveal>
        <Card tone="cream">
          <EmergencyNotice />
        </Card>
      </Reveal>
    </Page>
  );
}
