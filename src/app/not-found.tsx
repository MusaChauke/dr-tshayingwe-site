import Link from 'next/link';
import CtaButtons from '@/components/CtaButtons';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-site px-4 py-16 sm:px-6">
      <h1 className="text-4xl">Page not found</h1>
      <p className="mt-4 max-w-prose text-lg">
        That page does not exist, or the link is wrong. Go back to the{' '}
        <Link href="/" className="font-bold text-navy underline decoration-gold-deep decoration-2 underline-offset-4">
          home page
        </Link>
        , or message us and we will help.
      </p>
      <CtaButtons className="mt-8" />
    </section>
  );
}
