import type { SVGProps } from 'react';

export type IconName =
  | 'phone'
  | 'whatsapp'
  | 'pin'
  | 'mail'
  | 'clock'
  | 'clipboard'
  | 'badge'
  | 'video'
  | 'people'
  | 'heart'
  | 'testtube'
  | 'syringe'
  | 'child'
  | 'female'
  | 'male'
  | 'arrow';

const paths: Record<IconName, JSX.Element> = {
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.3-3.8A8 8 0 1 1 8.2 19L4 20Z" />
      <path d="M9.5 8.5c0 3 3 6 6 6l1-1.5-2-1-1 1a5 5 0 0 1-2.5-2.5l1-1-1-2-1.5 1Z" fill="currentColor" stroke="none" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5" />
    </>
  ),
  badge: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="10" r="2.5" />
      <path d="M8 17c0-2.2 1.8-4 4-4s4 1.8 4 4" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="m16 10 5-3v10l-5-3" />
    </>
  ),
  people: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M2.5 19c0-3 2.5-5.5 5.5-5.5S13.5 16 13.5 19M13 19c0-2.4 1.6-4.3 3.7-4.3S21 16.6 21 19" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
      <path d="M5.5 12h3l1.5-3 2 6 1.5-3h4" />
    </>
  ),
  testtube: (
    <>
      <path d="M9 3h6M10 3v11a2 2 0 1 0 4 0V3" />
      <path d="M10 10h4" />
    </>
  ),
  syringe: (
    <>
      <path d="m18 3 3 3M19.5 4.5 9 15l-4 4M9 15l-2-2M14 10l2 2M11 13l2 2M5 19l-2 2" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="6.5" r="3" />
      <path d="M7 21v-6a5 5 0 0 1 10 0v6M9 12l-3 3M15 12l3 3" />
    </>
  ),
  female: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M12 14v7M9 18h6" />
    </>
  ),
  male: (
    <>
      <circle cx="10" cy="14" r="5" />
      <path d="M13.5 10.5 20 4M20 4h-5M20 4v5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export default function Icon({
  name,
  className = 'h-6 w-6',
  ...rest
}: { name: IconName; className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
