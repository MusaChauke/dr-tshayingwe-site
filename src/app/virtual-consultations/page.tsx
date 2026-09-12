import CtaButtons from '@/components/CtaButtons';
import EmergencyNotice from '@/components/EmergencyNotice';
import PhoneText from '@/components/PhoneText';
import Reveal from '@/components/Reveal';
import { Card, Label, Page, PageTitle } from '@/components/PageShell';
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
    <Page>
      <JsonLd data={breadcrumb([{ name: 'Virtual consultations', path: '/virtual-consultations/' }])} />
      <Card>
        <PageTitle
          label="Virtual consultations"
          caption={`During opening times: ${hours.map((h) => `${h.days} ${h.open} to ${h.close}`).join('; ')}`}
          title="See the doctor by video or phone."
          intro={virtualConsultation.summary}
        />

        <p className="mt-8 max-w-3xl rounded-card border-l-4 border-gold bg-cream p-5 font-semibold text-navy">
          In an emergency (chest pain, difficulty breathing, a serious injury or a very sick child) do not book a call. Come
          straight to the practice during opening times. If the practice is closed or someone&rsquo;s life is in danger, phone{' '}
          <a className="underline decoration-gold-deep underline-offset-4" href={emergency.ambulance.tel}>
            {emergency.ambulance.number}
          </a>{' '}
          for an ambulance or{' '}
          <a className="underline decoration-gold-deep underline-offset-4" href={emergency.cell.tel}>
            {emergency.cell.number}
          </a>{' '}
          from a cell phone.
        </p>

        <h2 className="mt-12 text-3xl">How it works</h2>
        <ol role="list" className="mt-4 grid gap-6 md:grid-cols-3">
          {virtualConsultation.steps.map((step, i) => (
            <li key={step.title} className="rounded-card bg-cream p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-serif text-2xl text-gold">
                <span className="sr-only">Step </span>
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl">{step.title}</h3>
              <p className="mt-1">
                <PhoneText text={step.body} linkClassName="font-semibold text-navy underline decoration-gold-deep underline-offset-4" />
              </p>
            </li>
          ))}
        </ol>
      </Card>

      <Reveal>
        <Card>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-card bg-cream p-6">
              <Label>Good for</Label>
              <ul role="list" className="mt-3 space-y-2">
                {virtualConsultation.goodFor.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Bullet />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-card border border-navy/15 p-6">
              <Label>Better to come in for</Label>
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
        </Card>
      </Reveal>
    </Page>
  );
}
