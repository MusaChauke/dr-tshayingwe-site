import Link from 'next/link';
import Icon from './Icon';
import { services, type ServiceGroup } from '@/lib/practice';

type Level = 'h2' | 'h3';

function Group({ group, detailed, headingLevel: Heading }: { group: ServiceGroup; detailed: boolean; headingLevel: Level }) {
  return (
    <li id={group.slug} className="flex gap-4 py-6 scroll-mt-24">
      <span
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-gold ring-2 ring-gold ring-offset-2 ring-offset-white"
        aria-hidden="true"
      >
        <Icon name={group.icon} className="h-7 w-7" />
      </span>
      <div className="min-w-0">
        <Heading className="text-2xl">
          <Link href={`/services/${group.slug}/`} className="hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4">
            {group.title}
          </Link>
        </Heading>
        {detailed && <p className="mt-1 text-navy-soft">{group.summary}</p>}
        <ul role="list" className={`mt-2 ${detailed ? 'space-y-2' : 'space-y-1'}`}>
          {group.items.map((item) => (
            <li key={item.name} className="flex gap-2">
              <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              <span>
                <span className={detailed ? 'font-bold' : ''}>{item.name}</span>
                {detailed && item.detail && <span className="block text-navy-soft">{item.detail}</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function ServiceList({ detailed = false, headingLevel = 'h3' }: { detailed?: boolean; headingLevel?: Level }) {
  return (
    <ul role="list" className="grid gap-x-12 md:grid-cols-2 [&>li]:border-b [&>li]:border-gold/40">
      {services.map((g) => (
        <Group key={g.slug} group={g} detailed={detailed} headingLevel={headingLevel} />
      ))}
    </ul>
  );
}
