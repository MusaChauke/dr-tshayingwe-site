import CtaButtons from '@/components/CtaButtons';
import EmergencyNotice from '@/components/EmergencyNotice';
import Icon from '@/components/Icon';
import PhoneText from '@/components/PhoneText';
import { JsonLd, breadcrumb } from '@/lib/schema';
import { pageMeta } from '@/lib/seo';
import { contact, doctor, emergency, hours, virtualConsultation } from '@/lib/practice';

export const metadata = pageMeta(
  '/virtual-consultations/',
  'Video and phone consultations',
  `Consult ${doctor.shortName} by video call or telephone when you cannot get to the practice in Mbekweni, Paarl. What it suits, what it does not, and how to arrange one.`,
);

const Bullet = ({ tone = 'gold' }: { tone?: 'gold' | 'navy' }) => (
  <span className={`mt-[0.6em] h-2 w-2 shrink-0 rounded-full ${tone === 'gold' ? 'bg-gold' : 'bg-navy'}`} aria-hidden="true" />
);

export default function VirtualPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: 'Virtual consultations', path: '/virtual-consultations/' }])} />
      <section className="mx-auto max-w-site px-4 py-12 sm:px-6 md:py-16">
        <div className="flex items-start gap-4">
          <span className="mt-1 hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-gold ring-2 ring-gold ring-offset-2 sm:flex" aria-hidden="true">
            <Icon name="video" className="h-7 w-7" />
          </span>
          <div>
            <h1 className="text-4xl sm:text-5xl">Virtual consultations</h1>
            <p className="mt-4 max-w-2xl text-lg">{virtualConsultation.summary}</p>
            <p className="mt-2 max-w-2xl text-navy-soft">
              Available during normal opening times: {hours.map((h) => `${h.days} ${h.open} to ${h.close}`).join('; ')}.
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-3xl rounded-lg border-l-4 border-red-700 bg-red-50 p-4 font-bold text-red-950">
          In an emergency (chest pain, difficulty breathing, a serious injury or a very sick child) do not book a call: phone{' '}
          <a className="underline" href={emergency.ambulance.tel}>
            {emergency.ambulance.number}
          </a>
          , or{' '}
          <a className="underline" href={emergency.cell.tel}>
            {emergency.cell.number}
          </a>{' '}
          from a cell phone, straight away.
        </p>

        <h2 className="mt-12 text-3xl">How it works</h2>
        <ol role="list" className="mt-4 grid gap-6 md:grid-cols-3">
          {virtualConsultation.steps.map((step, i) => (
            <li key={step.title} className="flex gap-4 border-t-2 border-gold pt-4">
              <span className="font-serif text-4xl leading-none text-gold-deep">
                <span className="sr-only">Step </span>
                {i + 1}
              </span>
              <div>
                <h3 className="text-xl">{step.title}</h3>
                <p className="mt-1">
                  <PhoneText text={step.body} linkClassName="font-bold text-navy underline decoration-gold-deep underline-offset-4" />
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-cream p-6">
            <h2 className="text-2xl">Good for</h2>
            <ul role="list" className="mt-3 space-y-2">
              {virtualConsultation.goodFor.map((item) => (
                <li key={item} className="flex gap-3">
                  <Bullet />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-navy/20 p-6">
            <h2 className="text-2xl">Better to come in for</h2>
            <ul role="list" className="mt-3 space-y-2">
              {virtualConsultation.notFor.map((item) => (
                <li key={item} className="flex gap-3">
                  <Bullet tone="navy" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-navy-soft">
              If the doctor decides during the call that you need to be examined, he will tell you and arrange a visit.
            </p>
          </div>
        </div>

        <h2 className="mt-12 text-2xl">Before the call</h2>
        <ul role="list" className="mt-3 max-w-2xl space-y-2">
          {[
            'Have your ID or ID number ready: the doctor confirms your identity and your location at the start of every virtual consultation.',
            'Find a quiet, private place with good signal or Wi-Fi.',
            'Have your medicines, any readings (blood pressure, blood sugar) and recent results with you.',
            'Keep your phone charged and answer when the doctor calls at the agreed time.',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <Bullet />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <CtaButtons className="mt-10" whatsappHref={contact.whatsappVirtual} />
        <div className="mt-10">
          <EmergencyNotice />
        </div>
      </section>
    </>
  );
}
