import Link from 'next/link';
import CtaButtons from '@/components/CtaButtons';
import { Card, Page, PageTitle } from '@/components/PageShell';

export default function NotFound() {
  return (
    <Page>
      <Card>
        <PageTitle
          label="Not found"
          title="That page does not exist."
          intro={
            <>
              The link may be wrong or out of date. Go back to the{' '}
              <Link href="/" className="font-semibold text-navy underline decoration-gold-deep decoration-2 underline-offset-4">
                home page
              </Link>
              , or message us and we will help.
            </>
          }
        />
        <CtaButtons className="mt-8" />
      </Card>
    </Page>
  );
}
