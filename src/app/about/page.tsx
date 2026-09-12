import CtaButtons from '@/components/CtaButtons';
import EmergencyNotice from '@/components/EmergencyNotice';
import Photo from '@/components/Photo';
import { JsonLd, breadcrumb } from '@/lib/schema';
import { pageMeta } from '@/lib/seo';
import { address, bio, doctor, toConfirm } from '@/lib/practice';

export const metadata = pageMeta(
  '/about/',
  `About ${doctor.fullName}`,
  `${doctor.fullName}, ${doctor.qualifications}, HPCSA ${doctor.hpcsaNumber}. General practitioner in Mbekweni, Paarl since ${doctor.opened}. Meet the doctor and see the practice.`,
);

const gallery = [
  { name: 'waiting-room', alt: 'The waiting room: a navy sofa, coffee table and the practice banner against green walls', w: 1600, h: 1104, caption: 'The waiting room' },
  { name: 'consulting-room', alt: 'The consulting room with an examination bed, desk and drip stand', w: 1350, h: 1050, caption: 'The consulting room' },
  { name: 'equipment', alt: 'Examination and suturing instruments laid out on the desk, including an otoscope set and blood pressure monitor', w: 1400, h: 993, caption: 'Equipment for examinations and minor procedures' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: 'About', path: '/about/' }])} />
      <section className="mx-auto max-w-site px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-5 md:items-start">
          <div className="md:col-span-3">
            <h1 className="text-4xl sm:text-5xl">About {doctor.fullName}</h1>
            <p className="mt-2 text-xl text-navy-soft">{doctor.qualifications}. {doctor.role}.</p>
            <p className="mt-6 text-lg">{bio.short}</p>
            {toConfirm.bioExtra.confirmed && toConfirm.bioExtra.text && <p className="mt-4 text-lg">{toConfirm.bioExtra.text}</p>}

            <h2 className="mt-10 text-2xl">Qualifications and registration</h2>
            <dl className="mt-3 divide-y divide-gold/40 border-y border-gold/40">
              {doctor.qualificationsLong.map((q) => (
                <div key={q.abbr} className="grid gap-1 py-3 sm:grid-cols-3">
                  <dt className="font-bold text-navy">{q.abbr}</dt>
                  <dd className="sm:col-span-2">{q.full}</dd>
                </div>
              ))}
              <div className="grid gap-1 py-3 sm:grid-cols-3">
                <dt className="font-bold text-navy">HPCSA registration</dt>
                <dd className="sm:col-span-2">
                  {doctor.hpcsaNumber}.{' '}
                  <a
                    className="font-bold text-navy underline decoration-gold-deep decoration-2 underline-offset-4"
                    href={doctor.hpcsaLookup}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check the HPCSA register<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 py-3 sm:grid-cols-3">
                <dt className="font-bold text-navy">Practice number</dt>
                <dd className="sm:col-span-2">{doctor.practiceNumber}</dd>
              </div>
            </dl>

            <h2 className="mt-10 text-2xl">How consultations work here</h2>
            <ul role="list" className="mt-3 space-y-3">
              {bio.approach.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
              {toConfirm.languages.confirmed && (
                <li className="flex gap-3">
                  <span className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  <span>{toConfirm.languages.text}</span>
                </li>
              )}
            </ul>
          </div>
          <div className="md:col-span-2">
            <Photo
              name="doctor-portrait"
              alt={`${doctor.fullName} at his desk`}
              width={1100}
              height={1375}
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      <div className="rule-gold mx-auto max-w-site" />

      <section className="mx-auto max-w-site px-4 py-12 sm:px-6 md:py-16">
        <h2 className="text-3xl sm:text-4xl">The practice</h2>
        <p className="mt-3 max-w-2xl text-lg text-navy-soft">
          Opened in {doctor.opened} at {address.street}, {address.suburb}, {address.landmarkInSentence}. A waiting room, a
          consulting room with an examination bed, and the equipment for everyday examinations and minor procedures.
        </p>
        <ul role="list" className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
            <li key={g.name}>
              <figure>
                <Photo name={g.name} alt={g.alt} width={g.w} height={g.h} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="aspect-[3/2] w-full rounded-lg object-cover" />
                <figcaption className="mt-2 text-navy-soft">{g.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <CtaButtons directions className="mt-10" />
        <div className="mt-10">
          <EmergencyNotice compact />
        </div>
      </section>
    </>
  );
}
