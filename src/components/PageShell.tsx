import type { ReactNode } from 'react';

/** Standard inner-page frame: stacked rounded cards on the cream page background. */
export function Page({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-site space-y-3 px-2 pb-3 pt-3 sm:space-y-4 sm:px-4 sm:pt-4">{children}</div>;
}

export function Card({ children, tone = 'white', className = '' }: { children: ReactNode; tone?: 'white' | 'navy' | 'cream'; className?: string }) {
  const bg = tone === 'navy' ? 'bg-navy-gradient text-white' : tone === 'cream' ? 'bg-gold-pale' : 'bg-white';
  return <section className={`rounded-card p-6 sm:p-10 lg:p-14 ${bg} ${className}`}>{children}</section>;
}

export function Label({ children, caption, light = false }: { children: ReactNode; caption?: string; light?: boolean }) {
  return (
    <div>
      <span className={`label ${light ? 'text-white' : ''}`}>{children}</span>
      {caption && <span className={`label-caption ${light ? 'text-white/70' : ''}`}>{caption}</span>}
    </div>
  );
}

export function PageTitle({ label, caption, title, intro }: { label: string; caption?: string; title: string; intro?: ReactNode }) {
  return (
    <div className="grid gap-6 md:grid-cols-12">
      <div className="md:col-span-4">
        <Label caption={caption}>{label}</Label>
      </div>
      <div className="md:col-span-8">
        <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem]">{title}</h1>
        {intro && <div className="mt-5 max-w-2xl text-lg text-navy-soft">{intro}</div>}
      </div>
    </div>
  );
}
