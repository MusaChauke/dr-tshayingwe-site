/** The practice's gold winged caduceus (approved brand file). Decorative only. */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Caduceus({ className = 'h-10 w-10' }: { className?: string }) {
  return <img src={`${BASE}/brand/caduceus.png`} alt="" aria-hidden="true" width={400} height={412} decoding="async" className={className} />;
}
