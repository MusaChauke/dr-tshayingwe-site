import { contact } from '@/lib/practice';

/** Renders text, turning any occurrence of the practice phone number into a tel: link. */
export default function PhoneText({ text, linkClassName = 'underline decoration-gold underline-offset-4' }: { text: string; linkClassName?: string }) {
  const parts = text.split(contact.phoneDisplay);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <a className={linkClassName} href={contact.tel}>
              {contact.phoneDisplay}
            </a>
          )}
        </span>
      ))}
    </>
  );
}
