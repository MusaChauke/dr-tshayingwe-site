import { Card, Page, PageTitle } from '@/components/PageShell';
import { JsonLd, breadcrumb } from '@/lib/schema';
import { pageMeta } from '@/lib/seo';
import { address, contact, doctor } from '@/lib/practice';

export const metadata = pageMeta(
  '/privacy/',
  'Privacy notice',
  `How ${doctor.shortName}'s website and practice handle personal information under POPIA.`,
  { robots: { index: false, follow: true } },
);

const link = 'font-semibold text-navy underline decoration-gold-deep decoration-2 underline-offset-4';

export default function PrivacyPage() {
  return (
    <Page>
      <JsonLd data={breadcrumb([{ name: 'Privacy', path: '/privacy/' }])} />
      <Card>
        <PageTitle label="Privacy" caption="Last updated 12 September 2026" title="Privacy notice" />
        <div className="mt-8 max-w-3xl md:ml-auto md:w-2/3">
          <h2 className="text-2xl">Who is responsible</h2>
          <p className="mt-2">
            The responsible party under the Protection of Personal Information Act (POPIA) is {doctor.fullName}, general
            practitioner, {address.oneLine}. He is also the practice&rsquo;s Information Officer.
          </p>

          <h2 className="mt-8 text-2xl">This website</h2>
          <p className="mt-2">
            This website is for information only. It has no forms, no accounts and no booking system, and it does not set
            cookies or use analytics that track you. The hosting provider keeps standard server logs (such as your IP
            address and the pages requested) for security and to keep the site running.
          </p>
          <p className="mt-2">
            The map on the contact page is loaded from Google Maps only when you press &ldquo;Show map&rdquo;. When you do,
            Google&rsquo;s own privacy policy applies to that map. Links to WhatsApp, Google Maps, Waze and Apple Maps open
            those services, which have their own policies.
          </p>

          <h2 className="mt-8 text-2xl">When you contact the practice</h2>
          <p className="mt-2">
            When you phone, WhatsApp or email the practice, we use the details you give us to reply, to arrange your
            appointment and to provide care. Clinical information you share becomes part of your medical record, which
            the practice must keep under the National Health Act and the Health Professions Council of South Africa&rsquo;s
            record-keeping guidelines. It is kept confidential and stored securely for as long as those rules require. We
            do not sell or share your information with anyone outside your care, except where the law requires it or you
            ask us to (for example, a referral letter you ask us to send to another practitioner).
          </p>
          <p className="mt-2">
            We use WhatsApp (Meta) and Gmail (Google) to communicate with patients. Messages and documents you send or
            receive through these services are stored by those companies on servers outside South Africa, under their own
            privacy terms. If you would rather not use them, phone us or come to the practice.
          </p>
          <p className="mt-2">
            Giving us your details is voluntary, but without your name, a contact number and the medical information that
            matters to your care we may not be able to treat you or reach you about your results.
          </p>

          <h2 className="mt-8 text-2xl">Your rights</h2>
          <p className="mt-2">
            Under POPIA you may ask what information we hold about you, ask for it to be corrected, or object to how it
            is used. Send requests to the Information Officer, {doctor.fullName}, at{' '}
            <a className={link} href={contact.mailto}>
              {contact.email}
            </a>{' '}
            or at {address.oneLine}. If you are not satisfied with our response, you may complain to the Information
            Regulator (South Africa) at{' '}
            <a className={link} href="mailto:POPIAComplaints@inforegulator.org.za">
              POPIAComplaints@inforegulator.org.za
            </a>
            .
          </p>
        </div>
      </Card>
    </Page>
  );
}
